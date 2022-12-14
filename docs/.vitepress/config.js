import { mdPlugin } from './plugin'
import { sidebar } from './catalog/sidebar'

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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hongl-1/record' }
    ],
    editLink: {
      pattern: 'https://github.com/hongl-1/record/tree/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // lastUpdatedText:'最后更新',
    // algolia: {
    //   appId: 'B3ZJMMNZBF',
    //   apiKey: '577e17bf553f9716a78b840040c54804',
    //   indexName: 'ezc'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present hongl'
    },
    sidebar: sidebar
  }
}
