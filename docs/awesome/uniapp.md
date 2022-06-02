# UNI-APP

> uni-app 是一个使用 Vue.js 开发所有前端应用的框架，开发者编写一套代码，可发布到 iOS、Android、H5，以及各种小程序（微信/支付宝/百度/头条/ QQ /钉钉）等多个平台，方便开发者快速交付，不需要转换开发思维，不需要更改开发习惯。

## 开发环境

- [HBuilderX](https://hx.dcloud.net.cn/)
- [uni-cli](https://uniapp.dcloud.io/worktile/CLI.html#uni-cli)

### 工程目录

```
┌─components            uni-app组件目录
│  └─comp-a.vue        可复用的a组件
├─hybrid                存放本地网页的目录（自建）
├─platforms             存放各平台专用页面的目录（自建）
├─pages                 业务页面文件存放的目录
│  ├─index
│  │  └─index.vue      index页面
│  └─list
│     └─list.vue        list页面
├─static                存放应用引用静态资源（如图片、视频等）的目录，注意：静态资源只能存放于此
├─wxcomponents          存放小程序组件的目录（自建）
├─common                公共资源（自建）
├─api                   请求封装（自建）
├─store                 状态管理（自建）
├─main.js               Vue初始化入口文件
├─App.vue               应用配置，用来配置App全局样式以及监听 应用生命周期
├─manifest.json         配置应用名称、appid、logo、版本等打包信息
└─pages.json            配置页面路由、导航条、选项卡等页面类信息

```

## UI 组件库

- [uView2.0](https://github.com/umicro/uView2.0)
- [uView](https://github.com/umicro/uView)
- [piui](https://github.com/sadais-org/piui)
