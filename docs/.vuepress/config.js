import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { generatedBlogSidebar } from './sidebar.generated.js'

export default defineUserConfig({
  bundler: viteBundler(),
  theme: defaultTheme({
    logo: '/images/webkul-logo.png',
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'Documentation', link: '/blogs/' },
      {
        text: 'Visit Store',
        link: 'https://store.webkul.com/magento2-extensions.html',
      },
      {
        text: 'Support',
        link: 'https://webkul.uvdesk.com/',
      },
      { text: 'GitHub', link: 'https://github.com/gitgitmunassir/magento-docs' },
    ],
    sidebar: {
      '/blogs/': generatedBlogSidebar,
      '/': generatedBlogSidebar,
    },
    sidebarDepth: 0,
    lastUpdated: true,
    contributors: false,
  }),

  lang: 'en-US',
  title: 'Webkul Magento 2 Documentation',
  description:
    'Official user guides for Webkul Magento 2 extensions — marketplaces, channel connectors, and enterprise commerce solutions.',

  head: [
    ['link', { rel: 'icon', href: 'https://cdnwebkul.webkul.com/wp-content/uploads/2024/09/webkul-logo.webp' }],
    ['meta', { name: 'theme-color', content: '#E53238' }],
  ],

  base: '/magento-docs/',
})
