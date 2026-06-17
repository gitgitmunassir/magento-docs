import fs from 'node:fs'
import path from 'node:path'
import { createMarkdown } from '@vuepress/markdown'
import { resolveHeadersFromTokens } from '@mdit-vue/shared'

const root = process.cwd()
const blogsDir = path.join(root, 'docs', 'blogs')
const outFile = path.join(root, 'docs', '.vuepress', 'sidebar.generated.js')
const blogsReadmeFile = path.join(blogsDir, 'README.md')
const homeReadmeFile = path.join(root, 'docs', 'README.md')

const BLOG_LIST_START = '<!-- AUTO-GENERATED-BLOG-LIST-START -->'
const BLOG_LIST_END = '<!-- AUTO-GENERATED-BLOG-LIST-END -->'

const MAX_ORPHAN_ITEMS = 18
const MAX_SIDEBAR_TITLE = 46

const md = createMarkdown({
  headers: { level: [2, 3] },
})

if (!fs.existsSync(blogsDir)) {
  console.error('Missing docs/blogs directory')
  process.exit(1)
}

function collectMarkdownFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  const files = []
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      files.push(...collectMarkdownFiles(fullPath))
      continue
    }
    if (!entry.name.endsWith('.md')) continue
    if (entry.name.toLowerCase() === 'readme.md') continue
    files.push(fullPath)
  }
  return files
}

const files = collectMarkdownFiles(blogsDir)
  .map((fullPath) => path.relative(blogsDir, fullPath).replace(/\\/g, '/'))
  .sort((a, b) => a.localeCompare(b))

function readFileContent(file) {
  return fs.readFileSync(path.join(blogsDir, file), 'utf8')
}

function toTitleFromFile(file) {
  const raw = readFileContent(file)

  const frontmatterTitle = raw.match(/^---[\s\S]*?\ntitle:\s*(.+)\n[\s\S]*?---/m)
  if (frontmatterTitle?.[1]) {
    return frontmatterTitle[1].trim().replace(/^['"]|['"]$/g, '')
  }

  const h1 = raw.match(/^#\s+(.+)$/m)
  if (h1?.[1]) return sanitizeHeadingText(h1[1].trim())

  return file
    .replace(/\.md$/i, '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function toSidebarTitle(file) {
  const raw = readFileContent(file)
  const frontmatterSidebarTitle = raw.match(
    /^---[\s\S]*?\nsidebarTitle:\s*(.+)\n[\s\S]*?---/m,
  )
  if (frontmatterSidebarTitle?.[1]) {
    return frontmatterSidebarTitle[1].trim().replace(/^['"]|['"]$/g, '')
  }

  return truncateHeading(toTitleFromFile(file), MAX_SIDEBAR_TITLE)
}

function toDescriptionFromFile(file) {
  const raw = readFileContent(file)

  const frontmatterDescription = raw.match(
    /^---[\s\S]*?\ndescription:\s*(.+)\n[\s\S]*?---/m,
  )
  if (frontmatterDescription?.[1]) {
    return frontmatterDescription[1].trim().replace(/^['"]|['"]$/g, '')
  }

  const body = raw.replace(/^---[\s\S]*?---\s*/m, '')
  const lines = body.split('\n')

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (/^#+\s/.test(trimmed)) continue
    if (/^updated\b/i.test(trimmed)) continue
    if (/^\[.+\]\(.+\)$/.test(trimmed)) continue
    if (/^<.+>/.test(trimmed)) continue
    if (/^```/.test(trimmed)) continue
    if (/^[!\[]/.test(trimmed)) continue

    return sanitizeHeadingText(trimmed).slice(0, 160)
  }

  return `Step-by-step user guide for ${toTitleFromFile(file)}.`
}

function sanitizeHeadingText(raw) {
  return raw
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/\*+/g, '')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/^#+\s*/, '')
    .replace(/^\d+\.?\s*/, '')
    .replace(/\s*[-–—]\s*$/, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function truncateHeading(text, max = 58) {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).trim()}…`
}

function isValidHeading(text) {
  if (!text || text.length < 3) return false
  if (text.length > 90) return false
  if (/^step\s*\d+:?$/i.test(text)) return false
  if (/^!\[/.test(text)) return false
  if (/\.(png|jpg|jpeg|gif|webp|svg)$/i.test(text)) return false
  if (/^#/.test(text)) return false
  if (/^[\d\s.*_\-–—]+$/.test(text)) return false
  if (/ebay-connector-blog|amazon-connector-blog/i.test(text)) return false
  if (/^additional details$/i.test(text)) return false
  return true
}

function parseHeadings(raw) {
  const body = raw.replace(/^---[\s\S]*?---\s*/m, '')
  const tokens = md.parse(body, {})
  const headers = resolveHeadersFromTokens(tokens, {
    level: [2, 3],
    shouldAllowHtml: false,
    shouldAllowNested: true,
    shouldEscapeText: false,
  })

  const headings = []
  const seen = new Set()

  const walk = (items) => {
    for (const item of items) {
      const text = truncateHeading(sanitizeHeadingText(item.title))
      if (!isValidHeading(text)) {
        if (item.children?.length) walk(item.children)
        continue
      }

      const key = `${item.level}|${item.slug}`
      if (!seen.has(key)) {
        seen.add(key)
        headings.push({
          level: item.level,
          text,
          slug: item.slug,
        })
      }

      if (item.children?.length) walk(item.children)
    }
  }

  walk(headers)
  return headings
}

function buildSidebarChildren(headings, file, pageTitle) {
  const children = [{ text: 'Overview', link: `/blogs/${file}` }]
  const h2Headings = headings.filter((heading) => heading.level === 2)
  const h3Headings = headings.filter((heading) => heading.level === 3)

  const pageItems =
    h2Headings.length >= 2
      ? h2Headings
      : h3Headings.length > 0
        ? h3Headings
        : h2Headings

  const visibleItems = pageItems
    .filter((heading) => heading.text.toLowerCase() !== pageTitle.toLowerCase())
    .slice(0, h2Headings.length >= 2 ? 24 : MAX_ORPHAN_ITEMS)

  if (visibleItems.length === 0) return children

  if (visibleItems.length <= 12) {
    children.push(
      ...visibleItems.map((heading) => ({
        text: heading.text,
        link: `/blogs/${file}#${heading.slug}`,
      })),
    )
    return children
  }

  children.push({
    text: 'Sections',
    collapsible: true,
    expanded: false,
    children: visibleItems.map((heading) => ({
      text: heading.text,
      link: `/blogs/${file}#${heading.slug}`,
    })),
  })

  return children
}

const sidebarChildren = files.map((file) => {
  const pageTitle = toTitleFromFile(file)
  const headings = parseHeadings(readFileContent(file))
  const stepChildren = buildSidebarChildren(headings, file, pageTitle)

  return {
    text: toSidebarTitle(file),
    collapsible: true,
    expanded: false,
    children: stepChildren,
  }
})

const sidebarContent = `export const generatedBlogSidebar = ${JSON.stringify(
  sidebarChildren,
  null,
  2,
)}\n`

const blogsList = files
  .map((file) => `- [${toTitleFromFile(file)}](/blogs/${file.replace(/\.md$/i, '.html')})`)
  .join('\n')

const homeBlogCards = files
  .map((file) => {
    const title = toTitleFromFile(file)
    const description = toDescriptionFromFile(file)
    const href = `/blogs/${file.replace(/\.md$/i, '.html')}`
    return `<a href="${href}" class="wk-blog-card">
  <h3>${title}</h3>
  <p>${description}</p>
  <span class="wk-blog-cta">Read guide →</span>
</a>`
  })
  .join('\n')

const blogsReadme = `# Blogs

All blog pages in this folder are automatically listed below.

## Available Blogs

${blogsList}
`

fs.writeFileSync(outFile, sidebarContent, 'utf8')
fs.writeFileSync(blogsReadmeFile, blogsReadme, 'utf8')

// if (fs.existsSync(homeReadmeFile)) {
//   const homeReadme = fs.readFileSync(homeReadmeFile, 'utf8')
//   const startIdx = homeReadme.indexOf(BLOG_LIST_START)
//   const endIdx = homeReadme.indexOf(BLOG_LIST_END)

//   if (startIdx !== -1 && endIdx !== -1 && endIdx > startIdx) {
//     const before = homeReadme.slice(0, startIdx + BLOG_LIST_START.length)
//     const after = homeReadme.slice(endIdx)
//     const updatedHomeReadme = `${before}\n${homeBlogCards}\n${after}`
//     fs.writeFileSync(homeReadmeFile, updatedHomeReadme, 'utf8')
//   }
// }

const totalItems = sidebarChildren.reduce(
  (sum, blog) => sum + blog.children.length,
  0,
)
console.log(
  `Generated sidebar with ${files.length} guides and ${totalItems} navigation items`,
)
