# 新人指引

---

## 开发流程

1. 评审阶段：产品召集前后端进行需求评审，前后端各自捋清楚自己的业务量以及联调之间工作量，从而进行开发时间评估。
2. 开发准备阶段：前后端一起商量需求中需要联调的部分，进行接口的口头协议交流。
3. 接口定义阶段：前后端中的一方根据之前的口头协议拟定出一份详细的接口，并书写 API 文档，完成后由另一方确认。有疑问的地方重新商量直至双方都没有问题。
4. 开发阶段：双方根据协商出来的接口为基础进行开发，如在开发过程中发现需要新增或删除一些字段，重复步骤 3。
5. 联调阶段：双方独自的工作完成，开始前后端联调，如在联调过程发现有疑问，重复步骤 3，直至联调完成。
6. 提测阶段：将完成的需求提给测试人员，让其对该需求进行测试，如发现问题，及时通知开发并让其修改，直至需求没有 bug。
7. 产品体验阶段：将完成的需求交给产品，让其体验，直至产品这边没有问题
8. 评审单发布阶段：前后端中的一人进行评审单的拟定，发送给对应的领导，表明需求发布的程序，包括影响到的页面及业务，发布的流程，发布的回滚方案等。
9. 发布阶段：前后端双方在保证步骤 1-8 都没有问题了，进行各自的代码发布，完成后由测试人员在线上进行相应的测试，如果有 bug，重复步骤 6 和 9，直至需求成功上线。

## GIT 规范

## 项目创建

```bash
npm install -g @vue/cli-service-global
```

```bash
vue create hello-world
```

## 开发规范

参考[前端规范](https://guide.czh.vercel.app/)

### babel

```bash
npm install babel-preset-mixup --save-dev
```

```json
{
  "presets": ["mixup"]
}
```

### eslint

项目配置 .eslintrc

```bash
npm install eslint babel-eslint  eslint-config-mixup --save-dev
```

[配置参考](https://github.com/ittiam/mixup/blob/master/packages/eslint-config-mixup/README.md)

```javascript
// .eslintrc.js
module.exports = {
  extends: ['mixup'],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  rules: {
    // 自定义你的规则
  },
};
```

### stylelint

配置 .stylelintrc

```bash
npm install --save-dev stylelint stylelint-config-mixup
```

```json
{
  "extends": [
    // other configs ...
    "stylelint-config-mixup"
  ]
}
```

### prettier

```
npm install prettier-eslint prettier-stylelint --save-dev
```

配置 .prettierrc

```json
{
  "printWidth": 100,
  "semi": true,
  "singleQuote": true
}
```

## 代码编辑器

### vscode

1. 安装插件 [Settings Sync](https://marketplace.visualstudio.com/items?itemName=Shan.code-settings-sync)
2. 同步配置 https://gist.github.com/ittiam/0fc51ecd8295fe682836e58b02da5bcb

配置 jsconfig.json

```json
{
  "exclude": ["node_modules"],
  "include": ["./src/**/*", "mock"],
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@components/*": ["./components/*"],
      "@assets/*": ["./assets/*"],
      "@common/*": ["./common/*"]
    }
  }
}
```

配置参考:

```json
{
  // ===
  // Editor
  // ===
  "editor.fontFamily": "'Microsoft YaHei Mono', 'Fira Code'",
  "editor.fontLigatures": true,
  "editor.fontSize": 15,
  "editor.minimap.enabled": true,
  "editor.multiCursorModifier": "alt",
  "editor.renderControlCharacters": true,
  "editor.renderWhitespace": "all",
  "editor.renderIndentGuides": false,
  "editor.snippetSuggestions": "top",
  "editor.rulers": [80, 100],

  // ===
  // Workbench
  // ===
  "workbench.colorTheme": "One Dark Pro",
  "workbench.iconTheme": "material-icon-theme",

  // ===
  // Spacing
  // ===
  "editor.insertSpaces": true,
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "editor.trimAutoWhitespace": true,
  "files.insertFinalNewline": true,
  "files.trimFinalNewlines": true,

  // ===
  // Files
  // ===
  "files.exclude": {
    "**/*.log": true,
    "**/*.log*": true,
    "**/dist": true,
    "**/coverage": true
  },
  "files.eol": "\n",
  "files.trimTrailingWhitespace": true,
  "filesize.showGzip": false,
  "files.associations": {
    ".markdownlintrc": "jsonc"
  },

  // ===
  // Event Triggers
  // ===
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.fixAll.stylelint": true,
    "source.fixAll.markdownlint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "vue", "vue-html", "html"],
  "vetur.format.enable": false,

  // ===
  // HTML
  // ===
  "html.format.enable": false,
  "vetur.validation.template": false,
  "emmet.triggerExpansionOnTab": true,
  "emmet.includeLanguages": {
    "vue-html": "html"
  },
  "vetur.completion.tagCasing": "initial",

  // ===
  // JS(ON)
  // ===
  "jest.autoEnable": false,
  "jest.enableCodeLens": false,
  "javascript.format.enable": false,
  "json.format.enable": false,
  "vetur.validation.script": false,

  // ===
  // CSS
  // ===
  "stylelint.enable": true,
  "css.validate": false,
  "scss.validate": false,
  "vetur.validation.style": false,

  // ===
  // MARKDOWN
  // ===
  "[markdown]": {
    "editor.wordWrap": "wordWrapColumn",
    "editor.wordWrapColumn": 100
  },

  // ===
  // GIT
  // ===
  "git.autofetch": true,
  "git.enableSmartCommit": true,
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": false,
    "suppressCommitNotFoundWarning": false,
    "suppressFileNotUnderSourceControlWarning": false,
    "suppressGitVersionWarning": false,
    "suppressLineUncommittedWarning": false,
    "suppressNoRepositoryWarning": false,
    "suppressResultsExplorerNotice": false,
    "suppressShowKeyBindingsNotice": true
  },
  "gitlens.views.fileHistory.enabled": true,
  "gitlens.views.lineHistory.enabled": true,

  // ===
  // Terminal
  // ===
  "terminal.integrated.fontSize": 15,

  // ===
  // Plugins
  // ===
  "htmltagwrap.tag": "div",
  "px-to-rem.px-per-rem": 100,
  "advancedNewFile.convenienceOptions": ["current", "last", "root"],
  "advancedNewFile.exclude": {
    "dev": true,
    "dist": true,
    "node_modules": true,
    "node_modules_electron": true
  },
  "advancedNewFile.showInformationMessages": true,

  // ===
  // Sync
  // ===
  "sync.autoDownload": false,
  "sync.autoUpload": false,
  "sync.forceDownload": false,
  "sync.gist": "0fc51ecd8295fe682836e58b02da5bcb",
  "sync.quietSync": false,
  "sync.removeExtensions": true,
  "sync.syncExtensions": true,
  "editor.quickSuggestions": {
    "strings": true
  },

  // ===
  // Prettier
  // ===
  "prettier.singleQuote": true,
  "prettier.printWidth": 100
}
```
