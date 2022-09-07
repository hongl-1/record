import { mdPlugin } from './plugin'

export default {
  title: 'Hello VitePress',
  description: 'Just playing around.',
  markdown: {
    config: (md) => mdPlugin(md)
  },
  themeConfig: {
    siteTitle: "hongl's record",
    logo: '/icon.png',
    nav: [
      { text: 'Start', link: '/'},
      // { text: 'AboutMe', link: 'https://github.com/hongl' },
    ],
    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/hongl/learn-eslint' }
    // ],
    // editLink: {
    //   pattern: 'https://github.com/hongl/learn-eslint/tree/master/packages/learn-eslint-doc/docs/:path',
    //   text: 'Edit this page on GitHub'
    // },
    // lastUpdatedText:'最后更新',
    // algolia: {
    //   appId: 'B3ZJMMNZBF',
    //   apiKey: '577e17bf553f9716a78b840040c54804',
    //   indexName: 'learn-eslint'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present hongl'
    },
    sidebar: [
      {
        text: '记录',
        collapsible: true,
        items:[
          {
            text: '正则表达式手册',
            link: '/guide/regexp'
          },
          {
            text: 'markdown-it',
            link: '/guide/markdown-it-plugin'
          },
          {
            text: 'npm',
            link: '/guide/npm'
          }
        ]
      }
    ]
  }
}
