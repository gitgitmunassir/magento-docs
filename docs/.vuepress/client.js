import { defineClientConfig } from 'vuepress/client'
import { nextTick, onMounted, watch } from 'vue'
import { onContentUpdated, useRoute, useRouter, useSiteData } from 'vuepress/client'

function stripBase(path, base) {
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base
  if (!normalizedBase || normalizedBase === '/') return path

  if (path.startsWith(normalizedBase)) {
    return path.slice(normalizedBase.length) || '/'
  }

  return path
}

function normalizeDocPath(pathname, base) {
  let path = decodeURI(pathname).replace(/\/$/, '')
  path = stripBase(path, base.replace(/\/$/, ''))

  if (path.endsWith('.md')) {
    path = `${path.slice(0, -3)}.html`
  }

  if (!path.startsWith('/')) {
    path = `/${path}`
  }

  return path
}

function updateSidebarActiveState(route, base) {
  const sidebar = document.querySelector('.vp-sidebar')
  if (!sidebar) return

  const links = sidebar.querySelectorAll('a.vp-sidebar-item')
  links.forEach((link) => link.classList.remove('wk-sidebar-active'))

  const currentPath = normalizeDocPath(route.path, base)
  const currentHash = decodeURIComponent(route.hash || '')

  links.forEach((link) => {
    const href = link.getAttribute('href')
    if (!href || href.startsWith('http')) return

    const url = new URL(href, window.location.origin)
    const linkPath = normalizeDocPath(url.pathname, base)
    const linkHash = decodeURIComponent(url.hash || '')

    if (linkPath !== currentPath) return

    const isOverview = !linkHash && !currentHash
    const isSection = Boolean(linkHash && linkHash === currentHash)

    if (isOverview || isSection) {
      link.classList.add('wk-sidebar-active')
    }
  })
}

export default defineClientConfig({
  setup() {
    const route = useRoute()
    const router = useRouter()
    const siteData = useSiteData()
    const base = siteData.value.base

    const apply = () => nextTick(() => updateSidebarActiveState(route, base))

    onMounted(() => {
      watch(() => `${route.path}${route.hash}`, apply, { immediate: true })
      router.afterEach(() => apply())
    })

    onContentUpdated(() => apply())
  },
})
