module.exports = {
  title: '前端代码规范',
  description: '🛠前端代码规范',
  markdown: {
    lineNumbers: true,
  },
  theme: 'antdocs',
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '新人指引',
        link: '/docs/common/kickoff',
      },
      {
        text: '文档',
        link: '/docs/',
      },
      {
        text: '技术集',
        link: '/awesome/',
      },
    ],
    sidebar: {
      '/docs': [
        '/docs/',
        '/docs/common/kickoff',
        '/docs/common/flow',
        '/docs/common/markdown',
        '/docs/common/question',
        {
          title: 'HTML 规范',
          children: [
            '/docs/html/code',
            '/docs/html/note',
            '/docs/html/template',
            '/docs/html/webapp',
            '/docs/html/escape-code'
          ],
        },
        {
          title: 'CSS 规范',
          children: [
            '/docs/css/code',
            '/docs/css/less',
            '/docs/css/note',
            '/docs/css/query',
            '/docs/css/reset',
            '/docs/css/webkit',
            '/docs/css/compat',
          ],
        },
        {
          title: 'JavaScript 规范',
          children: [
            '/docs/javascript/code',
            '/docs/javascript/compat',
            '/docs/javascript/performance',
            '/docs/javascript/resource',
            '/docs/javascript/es6',
            '/docs/javascript/experience',
          ],
        },
        {
          title: 'TypeScript 规范',
          children: [
            '/docs/typescript/base'
          ]
        },
        {
          title: 'VUE 规范',
          children: ['/docs/vue/code', '/docs/vue/router', '/docs/vue/project'],
        },
        {
          title: '图片规范',
          children: ['/docs/image/format', '/docs/image/import', '/docs/image/quality', '/docs/image/size'],
        },
        {
          title: '命名规范',
          children: [
            '/docs/name/classname',
            '/docs/name/code',
            '/docs/name/dir',
            '/docs/name/htmlcss',
            '/docs/name/image',
          ],
        }
      ],
      '/awesome': [
        '/awesome/',
        '/awesome/audio-video',
        '/awesome/gis',
        '/awesome/vue',
        '/awesome/react',
        '/awesome/uniapp',
        '/awesome/front-end',
        '/awesome/nodejs',
        '/awesome/cheat-sheet',
        '/awesome/data-visualization',
        '/awesome/lowcode',
        '/awesome/security',
        '/awesome/specifications',
        '/awesome/chrome',
        '/awesome/vscode',
        '/awesome/software',
        '/awesome/ppt',
        '/awesome/reading'
      ]
    },
    lastUpdated: 'Last Updated',
  },
  plugins: [
    '@vuepress/back-to-top',
    '@goy/svg-icons',
    ['@vuepress/medium-zoom', true],
    '@vuepress/active-header-links',
  ],
}
