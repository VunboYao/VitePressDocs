import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VunboYao",
  // meta 描述说明
  description: "个人技能笔记, 由 VitePress 驱动",
  head: [['link', { rel: 'icon', href: '/public/favicon.ico' }]],
  base: '/',
  /* 默认主题 */
  themeConfig: {
    logo: '/logo.png',
    // siteTitle: false
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', link: '/front/index.md' },
      // {
      //   text: 'Dropdown Menu',
      //   items: [
      //     {
      //       text: '我是标题',
      //       items: [
      //         { text: 'Section A Item A', link: '...' },
      //         { text: 'Section B Item B', link: '...' }
      //       ]
      //     },
      //     { text: 'Item B', link: '/item-2' },
      //     { text: 'Item C', link: '/item-3' }
      //   ]
      // },
      {
        text: '外链',
        link: 'https://www.thegithubshop.com/',
        target: '_self',
      }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '阅读清单',
        collapsed: false,
        items: [
          { text: '高级程序设计3', link: '/books/JavaScript/JavaScript3' },
          { text: '正则表达式', link: '/front/regexp.md' }
        ]
      },
      {
        text: '前端',
        collapsed: false,
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '后端',
        items: [
          { text: 'java', link: '/end/java' },
          { text: 'Item B', link: '/item-b' },
        ]
      },
      {
        text: '其他',
        items: [
          { text: 'Git 操作', link: '/others/Git' },
          { text: 'Item D', link: '/item-d' },
        ]
      }
    ],

    outline: [2, 4],

    // 可以定义此选项以在导航栏中展示带有图标的社交帐户链接。
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © <a href="https://github.com/VunboYao">VunboYao</a>'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    }
  },
  lastUpdated: true
})
