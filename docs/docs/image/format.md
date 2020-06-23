# 图片格式

---

## 图片格式

常见的图片格式有 GIF、PNG8、PNG24、JPEG、WEBP，根据图片格式的特性和场景需要选取适合的图片格式。

### GIF

> GIF 图象是基于颜色列表的（存储的数据是该点的颜色对应于颜色列表的索引值），最多只支持 8 位（256 色）。GIF 文件内部分成许多存储块，用来存储多幅图象或者是决定图象表现行为的控制块，用以实现动画和交互式应用。GIF 文件还通过 LZW 压缩算法压缩图象数据来减少图象尺寸

#### 特性

- 优秀的压缩算法使其在一定程度上保证图像质量的同时将体积变得很小。
- 可插入多帧，从而实现动画效果。
- 可设置透明色以产生对象浮现于背景之上的效果。
- 由于采用了 8 位压缩，最多只能处理 256 种颜色，故不宜应用于真彩色图片。

更多关于 GIF：

[维基百科 - GIF](https://zh.wikipedia.org/wiki/GIF)

[GIF 文档](http://dev.gameres.com/Program/Visual/Other/GIFDoc.htm)

### PNG

> PNG 是 20 世纪 90 年代中期开始开发的图像文件存储格式，其目的是企图替代 GIF 和 TIFF 文件格式，同时增加一些 GIF 文件格式所不具备的特性。流式网络图形格式(Portable Network Graphic Format，PNG)名称来源于非官方的“PNG's Not GIF”，是一种位图文件(bitmap file)存储格式，读成“ping”。PNG 用来存储灰度图像时，灰度图像的深度可多到 16 位，存储彩色图像时，彩色图像的深度可多到 48 位，并且还可存储多到 16 位的 α 通道数据。PNG 使用从 LZ77 派生的无损数据压缩算法。

#### 特性

- 支持 256 色调色板技术，文件体积小。
- 无损压缩
- 最高支持 48 位真彩色图像以及 16 位灰度图像。
- 支持 Alpha 通道的透明/半透明特性。
- 支持图像亮度的 Gamma 校准信息。
- 支持存储附加文本信息，以保留图像名称、作者、版权、创作时间、注释等信息。
- 渐近显示和流式读写，适合在网络传输中快速显示预览效果后再展示全貌。
- 使用 CRC 防止文件出错。
- 最新的 PNG 标准允许在一个文件内存储多幅图像。

更多关于 PNG：

[PNG 官方站 - PNG General Information](http://www.libpng.org/pub/png/)

[PNG 格式](http://dev.gameres.com/Program/Visual/Other/PNGFormat.htm)

[维基百科 - PNG](https://zh.wikipedia.org/wiki/PNG)

### JPEG

> JPEG 是一种针对照片视频而广泛使用的一种有损压缩标准方法。这个名称代表 Joint Photographic Experts Group（联合图像专家小组）。此团队创立于公元 1986 年，1992 年发布了 JPEG 的标准而在 1994 年获得了 ISO 10918-1 的认定

#### 特性

- 适用于储存 24 位元全采影像
- 采取的压缩方式通常为有损压缩
- 不支持透明或动画
- 压缩比越高影像耗损越大，失真越严重
- 压缩比在 10 左右肉眼无法  辨出压缩图与原图的差别

更多关于 JPEG：

[维基百科 - JPEG](https://zh.wikipedia.org/wiki/JPEG)

### WEBP

> WebP，是一种同时提供了有损压缩与无损压缩的图片文件格式，派生自视频编码格式 VP8，是由 Google 在购买 On2 Technologies 后发展出来。WebP 最初在 2010 年发布，2011 年 11 月 8 日，Google 开始让 WebP 支持无损压缩和透明色的功能，而在 2012 年 8 月 16 日的参考实做 libwebp 0.2.0 中正式支持

#### 特性

- 同时提供有损压缩和无损压缩两种图片文件格式
- 文件体积小，无损压缩后，比 PNG 文件少了 45％ 的文件大小；有损压缩后，比 JPEG 文件少了 25% - 34% 文件大小
- 浏览器兼容差，目前只支持客户端 Chrome 和 Opera 浏览器以及安卓原生浏览器(Andriod 4.0+)，[WebP 兼容性](https://developers.google.com/speed/webp/faq#which_web_browsers_natively_support_webp)

更多关于 WebP：

[维基百科 - WEBP](https://zh.wikipedia.org/wiki/WebP)

[WEBP 探寻之路](http://isux.tencent.com/introduction-of-webp.html)

## 团队约定

### 内容图

内容图多以商品图等照片类图片形式存在，颜色较为丰富，文件体积较大

- 优先考虑 JPEG 格式，条件允许的话优先考虑 WebP 格式
- 尽量不使用 PNG 格式，PNG8 色位太低，PNG24 压缩率低，文件体积大

### 背景图

背景图多为图标等颜色比较简单、文件体积不大、起修饰作用的图片

- PNG 与 GIF 格式，优先考虑使用 PNG 格式,PNG 格式允许更多的颜色并提供更好的压缩率
- 图像颜色比较简单的，如纯色块线条图标，优先考虑使用 PNG8 格式，避免不使用 JPEG 格式
- 图像颜色丰富而且图片文件不太大的（40KB 以下）或有半透明效果的优先考虑 PNG24 格式
- 图像颜色丰富而且文件比较大的（40KB - 200KB）优先考虑 JPEG 格式
- 条件允许的，优先考虑 WebP 代替 PNG 和 JPEG 格式
