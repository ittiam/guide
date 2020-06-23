# 文件模版

---

HTML 模版指的是团队使用的初始化 HTML 文件，里面会根据不同平台而采用不一样的设置，一般主要不同的设置就是 meta 标签的设置，以下是 PC 和移动端的 HTML 模版。

## HTML5 标准模版

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <title>HTML5标准模版</title>
  </head>
  <body></body>
</html>
```

## 团队约定

### 移动端

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="keywords" content="your keywords" />
    <meta name="description" content="your description" />
    <meta name="apple-touch-fullscreen" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
    />
    <meta name="screen-orientation" content="portrait" />
    <meta name="x5-orientation" content="portrait" />
    <meta name="format-detection" content="telephone=no" />
    <meta name="msapplication-tap-highlight" content="no" />
    <link rel="shortcut icon" href="favicon.ico" />

    <title>移动端HTML模版</title>

    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="" />
    <!-- E DNS预解析 -->

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
    <link rel="stylesheet" href="css/index.css" />
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" />
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->
  </head>
  <body></body>
</html>
```

### PC 端

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="UTF-8" />
    <meta name="keywords" content="your keywords" />
    <meta name="description" content="your description" />
    <meta name="author" content="author,email address" />
    <meta name="robots" content="index,follow" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge,chrome=1" />
    <meta name="renderer" content="webkit" />
    <link rel="shortcut icon" href="favicon.ico" />

    <title>PC端HTML模版</title>

    <!-- S DNS预解析 -->
    <link rel="dns-prefetch" href="" />
    <!-- E DNS预解析 -->

    <!-- S 线上样式页面片，开发请直接取消注释引用 -->
    <!-- #include virtual="" -->
    <!-- E 线上样式页面片 -->

    <!-- S 本地调试，根据开发模式选择调试方式，请开发删除 -->
    <link rel="stylesheet" href="css/index.css" />
    <!-- /本地调试方式 -->

    <link rel="stylesheet" href="http://srcPath/index.css" />
    <!-- /开发机调试方式 -->
    <!-- E 本地调试 -->
  </head>
  <body></body>
</html>
```
