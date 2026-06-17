import fs from 'node:fs'
import path from 'node:path'
import { spawn } from 'node:child_process'

const root = process.cwd()
const blogsDir = path.join(root, 'docs', 'blogs')

function runGenerateSidebar() {
  return new Promise((resolve) => {
    const cmd = spawn('node', ['scripts/generate-sidebar.mjs'], {
      cwd: root,
      stdio: 'inherit',
    })
    cmd.on('close', () => resolve())
  })
}

await runGenerateSidebar()

const vuepressDev = spawn('npx', ['vuepress', 'dev', 'docs'], {
  cwd: root,
  stdio: 'inherit',
})

let regenTimer = null
fs.watch(blogsDir, { recursive: true }, (eventType, filename) => {
  if (!filename || !filename.endsWith('.md')) return
  if (path.basename(filename).toLowerCase() === 'readme.md') return

  clearTimeout(regenTimer)
  regenTimer = setTimeout(async () => {
    console.log(`\n[sidebar-watch] ${eventType}: ${filename}`)
    await runGenerateSidebar()
  }, 600)
})

vuepressDev.on('close', (code) => {
  process.exit(code ?? 0)
})
