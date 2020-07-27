# 项目目录规范

---

## 目录说明

目录名按照上面的命名规范，其中 Vue 组件用大写驼峰除了 _index.vue_，其余除 Vue 组件的所有目录均使用 kebab-case 命名。

```
src                               源码目录
|-- api                              所有api接口
|-- assets                           静态资源，images, icons, styles等
|-- components                       公用组件
|-- config                           配置信息
|-- constants                        常量信息，项目所有Enum, 全局常量等
|-- core                             项目引导, 全局配置初始化，依赖包引入等
|   |-- directives                       自定义指令
|   |-- filters                          过滤器，全局工具
|   |-- plugins                          插件，全局使用
|-- mock                             模拟接口，临时存放
|-- router                           路由，统一管理
|-- store                            vuex, 统一管理
|-- themes                           自定义样式主题
|-- utils                            工具库
|-- views                            视图目录
|   |-- role                             role模块名
|   |-- |-- RoleList.vue                    role 列表页面
|   |-- |-- RoleAdd.vue                     role 新建页面
|   |-- |-- RoleUpdate.vue                  role 更新页面
|   |-- |-- index.less                      role 模块样式
|   |-- |-- components                      role 模块通用组件文件夹
|   |-- employee                         employee模块
|-- App.vue                           Vue 模板入口
|-- main.js                           Vue 入口 JS
|-- permission.js                     路由守卫(路由权限控制)
```

### api 目录

1. 文件、变量命名要与后端保持一致。
2. 此目录对应后端 API 接口，按照后端一个 controller 一个 api js 文件。若项目较大时，可以按照业务划分子目录，并与后端保持一致。
3. api 中的方法名字要与后端 api url 尽量保持语义高度一致性。
4. 对于 api 中的每个方法要添加注释，注释与后端 swagger 文档保持一致。

正例：

后端 url： EmployeeController.java

```
/employee/add
/employee/delete/{id}
/employee/update
```

```javascript
// 添加员工
addEmployee: (data) => {
  return request('/employee/add', data)
},
// 更新员工信息
updateEmployee: (data) => {
  return request('/employee/update', data)
},
  // 删除员工
deleteEmployee: (employeeId) => {
  return request('/employee/delete/' + employeeId)
},
```

### assets 目录

assets 为静态资源，里面存放 images, styles, icons 等静态资源，静态资源命名格式为 kebab-case

```
|assets
|-- icons
|-- images
|   |-- background-color.png
|   |-- upload-header.png
|-- styles
```

### components 目录

此目录应按照组件进行目录划分，目录命名为 KebabCase，组件命名规则也为 KebabCase

```
|components
|-- ErrorLog
|   |-- ErrorLog.vue
|   |-- index.less
|-- MarkdownEditor
|   |-- MarkdownEditor.vue
|   |-- index.js
|-- KebabCase
```

### constants 目录

此目录存放项目所有常量，如果常量在 vue 中使用，请使用 [vue-enum 插件](https://www.npmjs.com/package/vue-enum)

目录结构

```
|constants
|-- index.js
|-- role.js
|-- employee.js
```

例子： employee.js

```javascript
export const EMPLOYEE_STATUS = {
  NORMAL: {
    value: 1,
    desc: '正常',
  },
  DISABLED: {
    value: 1,
    desc: '禁用',
  },
  DELETED: {
    value: 2,
    desc: '已删除',
  },
};

export const EMPLOYEE_ACCOUNT_TYPE = {
  QQ: {
    value: 1,
    desc: 'QQ登录',
  },
  WECHAT: {
    value: 2,
    desc: '微信登录',
  },
  DINGDING: {
    value: 3,
    desc: '钉钉登录',
  },
  USERNAME: {
    value: 4,
    desc: '用户名密码登录',
  },
};

export default {
  EMPLOYEE_STATUS,
  EMPLOYEE_ACCOUNT_TYPE,
};
```

## router 与 store 目录

这两个目录一定要将业务进行拆分，不能放到一个 js 文件里。

router 尽量按照 views 中的结构保持一致

store 按照业务进行拆分不同的 js 文件

## views 目录

命名要与后端、router、api 等保持一致
components 中组件要使用 PascalCase 规则

```
|-- views                            视图目录
|   |-- role                             role模块名
|   |   |-- RoleList.vue                    role列表页面
|   |   |-- RoleAdd.vue                     role新建页面
|   |   |-- RoleUpdate.vue                  role更新页面
|   |   |-- index.less                      role模块样式
|   |   |-- components                      role模块通用组件文件夹
|   |   |   |-- RoleHeader.vue                       role头部组件
|   |   |   |-- RoleModal.vue                        role弹出框组件
|   |-- employee                         employee模块
|   |-- behavior-log                     行为日志log模块
|   |-- code-generator                   代码生成器模块
```
