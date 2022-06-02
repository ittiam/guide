# Vue

> Vue.js 是一个渐进式 JavaScript 框架，一款用于构建 Web 界面，易学易用，性能出色且功能丰富的框架。官网为 https://vuejs.org/

（Recommend）推荐一个其它的很棒的收藏列表，:point_right: https://github.com/vuejs/awesome-vue

## 技术参考文档

*Official and unofficial technical reference documents.*

- [Vue Developer Roadmap](https://github.com/vuejs/roadmap) - Vue 开发者路线图参考

## 构建工具

*Application building tools, including JSX code compilation, code file merging and packaging, syntax rule checking, etc.*

- 调试（Debug）
  - [Vue Devtools](https://github.com/vuejs/vue-devtools)

- 构建（Build）
  - [Vue Cli](https://github.com/vuejs/vue-cli) - 🛠️ webpack-based tooling for Vue.js Development
  - [Vite](https://github.com/vitejs/vite) - Next generation frontend tooling. It's fast!
    - [vitest](https://github.com/vitest-dev/vitest) - A Vite-native test framework. It's fast!
    - [vite-plugin-vue2](https://github.com/underfin/vite-plugin-vue2) - Vue2 plugin for Vite
    - [vue-vben-admin](https://github.com/anncwb/vue-vben-admin) - 基于 Vue3.0、Vite、 Ant-Design-Vue、TypeScript 的后台解决方案
    - [vite-vue2-windicss-starter](https://github.com/lstoeferle/vite-vue2-windicss-starter) - Vue 2 starter template using composition-api and windiCSS
  - [Babel](https://babeljs.io/) - TypeScript/ES Next 编译工具。
    - [@vue/cli-plugin-babel](https://cli.vuejs.org/core-plugins/babel.html) - babel plugin for vue-cli
    - [@vue/cli-plugin-typescript](https://cli.vuejs.org/core-plugins/typescript.html) - typescript plugin for vue-cli
  - [Rollup](https://rollupjs.org/) - JavaScript 模块打包器
  - [Esbuild](https://esbuild.github.io/) - 极速 JavaScript 打包器

- 代码质量分析（Lint）
  - [ESLint](https://eslint.org/) - 语法规则检查工具。
    - [eslint-plugin-vue](https://eslint.vuejs.org/) - ESLint 的 Vue.js 语法规则插件。
  - [StyleLint](https://stylelint.io/) - CSS 代码检查器
  - [Prettier](https://prettier.io/) - 代码格式化工具。

- 测试（Test）
  - [Jest](https://jestjs.io/) - 单元测试工具，**FaceBook 发布**。
  - [Vitest](https://github.com/vitest-dev/vitest) - 单元测试工具
  - [Playwright](https://playwright.dev/) - 端到端 UI 测试工具, **微软 发布**

- 文档（Document）
  - [VuePress](https://vuepress.vuejs.org/) - Webpack
  - [VitePress](https://vitepress.vuejs.org/) - Vite

## JSX

- [Babel Preset JSX](https://github.com/vuejs/jsx-vue2) - JSX for Vue 2
- [babel-plugin-jsx](https://github.com/vuejs/babel-plugin-jsx) - JSX for Vue 3

## 组合式函数 (Composables)

- [@vue/composition-api](https://github.com/vuejs/composition-api) - 用于提供 组合式 API 的 Vue 2 插件
- [Composables](https://vuejs.org/guide/reusability/composables.html) - 组合式函数
- [vueuee](https://github.com/vueuse/vueuse) - Collection of essential Vue Composition Utilities for Vue 2 and 3

## 状态管理

*Vue application global state management and optimization.*

- [vuex](https://vuex.vuejs.org/zh/) - 专为 Vue.js 应用程序开发的状态管理模式 vue2
- [pinia](https://pinia.vuejs.org/) - The Vue Store vue3

## 路由管理

*Route management for SPA applications built with React.js.*

- [vue-router](https://github.com/vuejs/vue-router) - The official router for Vue 2
- [router](https://github.com/vuejs/router) - The official router for Vue.js

## UI 设计系统

_UI Design System, provides a base system for building a design system._

## UI 组件

*Feature-rich component library built on Vue.js.*

### 组件库

*UI component library, providing a set of components with consistent design style.*

- [element](https://github.com/ElemeFE/element) - vue2
- [element-plus](https://github.com/element-plus/element-plus) - vue3
- [ant-design-vue](https://github.com/vueComponent/ant-design-vue/) - vue2&vue3
- [arco-design-vue](https://github.com/arco-design/arco-design-vue) - vue3
- [quasar](https://github.com/quasarframework/quasar) - vue2&vue3
- [naive-ui](https://github.com/TuSimple/naive-ui) - vue3
- [varlet](https://github.com/varletjs/varlet) - vue3&material design
- [varlet-vue2](https://github.com/varletjs/varlet-vue2) - vue2&material design
- [vant](https://youzan.github.io/vant/#/zh-CN) - vue2&vue3

### 独立组件

*Independent UI components, only providing component modules that implement an interactive function.*

- 表单（Form）
  - [vue-dynamic-forms](https://github.com/asigloo/vue-dynamic-forms) - 快速创建表单
  - [formkit](https://github.com/formkit/formkit) - Vue Forms ⚡️ Supercharged
  - [vueform](https://vueform.com/)
  - [ue-ele-form](https://github.com/dream2023/vue-ele-form) - 基于element-ui的数据驱动表单组件
  - [el-form-renderer](https://github.com/FEMessage/el-form-renderer) - A data-driven dynamic and complex form solution
  - [vue-dynamic-form-component](https://github.com/chenquincy/vue-dynamic-form-component) - Vue动态多级表单组件，支持嵌套对象/Hashmap/数组
  - [vue-form-builder](https://github.com/openfext/vue-form-builder) - Build powerful vue form with JSON schema and composition api.
  - [avue-form-design](https://github.com/sscfaith/avue-form-design)
  - [formast](https://github.com/tencent-cdc/formast) - 复杂业务场景下的企业级动态表单框架
  - [variant-form](https://github.com/vform666/variant-form) - A powerful form designer for Vue

- 表格（Table）
  - [vxe-table](https://github.com/x-extends/vxe-table) - vue 表格解决方案
  - [vue-tables](https://github.com/matfish2/vue-tables-2)
  - [handsontable](https://github.com/handsontable/handsontable/tree/master/wrappers/vue) - JavaScript data grid with a spreadsheet look & feel
  - [ag-grid](https://github.com/ag-grid/ag-grid) - The best JavaScript Data Table for building Enterprise Applications

- 图表（Chart）
  - [apexcharts](https://github.com/apexcharts/vue-apexcharts) - Vue.js component for ApexCharts
  - [vue-echarts](https://github.com/ecomfe/vue-echarts) - 基于echarts封装实现的一个组件库
  - [vue-chartjs](https://github.com/apertureless/vue-chartjs) - 对于 Chart.js 的封装

- 时间日期选择器（DatePicker & TimePicker）
  - [vue-datepicker](https://github.com/livelybone/vue-datepicker)
  - [vue-datepicker-ui](https://github.com/edisdev/vue-datepicker-ui)
  - [vue2-datepicker](https://github.com/mengxiong10/vue2-datepicker)
  - [vue-datepicker](https://github.com/mengxiong10/vue-datepicker-next)
  - [litepie-datepicker](https://github.com/kenhyuwa/litepie-datepicker)

- 文件上传（File Upload）
  - [vue-upload-component](https://github.com/lian-yue/vue-upload-component)
  - [vue-filepond](https://github.com/pqina/vue-filepond)

- 轮播（Carousel）
  - [vue-awesome-swiper](https://github.com/surmon-china/vue-awesome-swiper)

- 图片（Image）
  - [vue-pswipe](https://github.com/GuoQichen/vue-pswipe)

- 颜色选择器（Color Picker）
  - [vue-accessible-color-picker](https://github.com/kleinfreund/vue-accessible-color-picker)
  - [one-colorpicker](https://github.com/one-view/one-colorpicker)

- 拖拽（Draggable）
  - [Vue.Draggable](https://github.com/SortableJS/Vue.Draggable)
  - [vue-grid-layout](https://github.com/jbaysolutions/vue-grid-layout)
  - [vue-draggable-resizable-gorkys](https://github.com/gorkys/vue-draggable-resizable-gorkys)

- 大量数据渲染（Large amount of data rendering）
  - [vue-virtual-scroll-list](https://github.com/tangbc/vue-virtual-scroll-list)
  - [vue-virtual-scroller](https://github.com/Akryum/vue-virtual-scroller)

- 动画（Animation）
  - [vue-starport](https://github.com/antfu/vue-starport) - 🛰 Shared component across routes with animations
  - [vue2-flip-countdown](https://github.com/philipjkim/vue2-flip-countdown)
  - [vue3-flip-countdow](https://github.com/coskuncay/vue3-flip-countdown)
  - [vue-stripe-menu](https://github.com/oleksiikhr/vue-stripe-menu) - Creating a navigation menu with animations like on Stripe
  - [v-animate-css](https://github.com/jofftiquez/v-animate-css)

- 二维码（QR Code）
  - [vue-qrcode](https://github.com/fengyuanchen/vue-qrcode)
  - [vue-qr](https://github.com/Binaryify/vue-qr)

- 用户引导（User guided tours）
  - [Driver.js](https://github.com/kamranahmedse/driver.js)
  - [intro.js](https://github.com/usablica/intro.js)

- 消息通知（Notification）
  - [vue-toastification](https://github.com/Maronato/vue-toastification) - 轻巧、简单和漂亮的吐司提示
  - [vue-toasted](https://github.com/shakee93/vue-toasted) - 响应性强，兼容性好

- 编辑器（Editor）
  - [tinymce](https://github.com/tinymce/tinymce) - The world's #1 JavaScript library for rich text editing
  - [Ckeditor5](https://github.com/ckeditor/ckeditor5)
  - [tiptap](https://github.com/Leecason/element-tiptap)
  - [WangEditor](https://github.com/wangeditor-team/wangEditor)
  - [Vditor](https://github.com/Vanessa219/vditor) - 浏览器端的 Markdown 编辑器
  - [markdoc](https://github.com/markdoc/markdoc) - Stripe 开发的一个 Markdown 编辑器
  - [bytemd](https://github.com/bytedance/bytemd) - 字节开发基于 Svelte
  - [mdx-editor](https://github.com/maqi1520/mdx-editor) - 微信排版编辑器

- 其它（Others）

## 优化方案

*React web application optimization solution.*

- 懒加载、代码分割（Lazy Load && Code Split）

- 服务器端渲染（SSR，server side rendering）
  - [Nuxt.js](https://nuxtjs.org/) - Vue.js 服务器端渲染框架。

- 国际化（i18n）
  - [vue-i18n](https://github.com/kazupon/vue-i18n) - 🌐 Internationalization plugin for Vue.js
  - [kiwi](https://github.com/alibaba/kiwi) - 国际化翻译全流程解决方案
  - [di18n](https://github.com/didi/di18n) - 一种自动转换、基于配置的前端国际化方案

- 加载占位符（Loading Placeholder）
  - [vue-content-loader](https://github.com/egoist/vue-content-loader) - About
SVG component to create placeholder loading, like Facebook cards loading.

- 其它（Others）

## 深入探索

*Explore the principles behind the technology, the underlying architecture, etc.*

## 更多

*More other unclassified resources.*
