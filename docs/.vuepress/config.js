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
    ],
    sidebar: {
      '/docs': [
        '/docs/',
        '/docs/common/kickoff',
        {
          title: 'HTML 规范',
          children: ['/docs/html/code', '/docs/html/note', '/docs/html/template', '/docs/html/webapp'],
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
        },
      ],
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
