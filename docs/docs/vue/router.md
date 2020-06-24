# Vue Router 规范

---

## 页面跳转数据传递使用路由参数

页面跳转，例如 A 页面跳转到 B 页面，需要将 A 页面的数据传递到 B 页面，推荐使用 路由参数进行传参，而不是将需要传递的数据保存 vuex，然后在 B 页面取出 vuex 的数据，因为如果在 B 页面刷新会导致 vuex 数据丢失，导致 B 页面无法正常显示数据。

```javascript
let id = " 123";
this.$router.push({ name: "userCenter", query: { id: id } });
```

## 使用路由懒加载（延迟加载）机制

```javascript
{
  path: '/upload-attachment',
  name: 'UploadAttachment',
  meta: {
    title: '上传附件'
  },
  component: () => import('@/view/components/UploadAttachment/index.vue')
}
```

## router 中的 path 命名规范

path 除了采用 kebab-case 命名规范以外，必须以 / 开头，即使是 children 里的 path 也要以 / 开头。如下示例

目的：

经常有这样的场景：某个页面有问题，要立刻找到这个 vue 文件，如果不用以/开头，path 为 parent 和 children 组成的，可能经常需要在 router 文件里搜索多次才能找到，而如果以 / 开头，则能立刻搜索到对应的组件

```javascript
{
  path: '/file',
  name: 'File',
  component: Main,
  meta: {
    title: '文件服务',
    icon: 'ios-cloud-upload'
  },
  children: [
    {
      path: '/file/file-list',
      name: 'FileList',
      component: () => import('@/views/file/FileList.vue')
    },
    {
      path: '/file/file-add',
      name: 'FileAdd',
      component: () => import('@/views/file/FileAdd.vue')
    },
    {
      path: '/file/file-update',
      name: 'FileUpdate',
      component: () => import('@/views/file/FileUpdate.vue')
    }
  ]
}
```
