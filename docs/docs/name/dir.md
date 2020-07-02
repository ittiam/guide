# 命名规范

---

由历史原因及个人习惯引起的 DOM 结构、命名不统一，导致不同成员在维护同一页面时，效率低下，迭代、维护成本极高。

## 目录命名

- 项目文件夹：project-name
- 样式文件夹：css
- 脚本文件夹：js
- 样式类图片文件夹：img

## 附： 常用的模块名

| ClassName              | 含义                                     |
| ---------------------- | ---------------------------------------- |
| about                  | 关于                                     |
| account                | 账户                                     |
| arrow                  | 箭头图标                                 |
| article                | 文章                                     |
| aside                  | 边栏                                     |
| audio                  | 音频                                     |
| avatar                 | 头像                                     |
| bg,background          | 背景                                     |
| bar                    | 栏（工具类）                             |
| branding               | 品牌化                                   |
| crumb,breadcrumbs      | 面包屑                                   |
| btn,button             | 按钮                                     |
| caption                | 标题，说明                               |
| category               | 分类                                     |
| chart                  | 图表                                     |
| clearfix               | 清除浮动                                 |
| close                  | 关闭                                     |
| col,column             | 列                                       |
| comment                | 评论                                     |
| community              | 社区                                     |
| container              | 容器                                     |
| content                | 内容                                     |
| copyright              | 版权                                     |
| current                | 当前态，选中态                           |
| default                | 默认                                     |
| description            | 描述                                     |
| details                | 细节                                     |
| disabled               | 不可用                                   |
| entry                  | 文章，博文                               |
| error                  | 错误                                     |
| even                   | 偶数，常用于多行列表或表格中             |
| fail                   | 失败（提示）                             |
| feature                | 专题                                     |
| fewer                  | 收起                                     |
| field                  | 用于表单的输入区域                       |
| figure                 | 图                                       |
| filter                 | 筛选                                     |
| first                  | 第一个，常用于列表中                     |
| footer                 | 页脚                                     |
| forum                  | 论坛                                     |
| gallery                | 画廊                                     |
| group                  | 模块，清除浮动                           |
| header                 | 页头                                     |
| help                   | 帮助                                     |
| hide                   | 隐藏                                     |
| hightlight             | 高亮                                     |
| home                   | 主页                                     |
| icon                   | 图标                                     |
| info,information       | 信息                                     |
| last                   | 最后一个，常用于列表中                   |
| links                  | 链接                                     |
| login                  | 登录                                     |
| logout                 | 退出                                     |
| logo                   | 标志                                     |
| main                   | 主体                                     |
| menu                   | 菜单                                     |
| meta                   | 作者、更新时间等信息栏，一般位于标题之下 |
| module                 | 模块                                     |
| more                   | 更多（展开）                             |
| msg,message            | 消息                                     |
| nav,navigation         | 导航                                     |
| next                   | 下一页                                   |
| nub                    | 小块                                     |
| odd                    | 奇数，常用于多行列表或表格中             |
| off                    | 鼠标离开                                 |
| on                     | 鼠标移过                                 |
| output                 | 输出                                     |
| pagination             | 分页                                     |
| pop,popup              | 弹窗                                     |
| preview                | 预览                                     |
| previous               | 上一页                                   |
| primary                | 主要                                     |
| progress               | 进度条                                   |
| promotion              | 促销                                     |
| rcommd,recommendations | 推荐                                     |
| reg,register           | 注册                                     |
| save                   | 保存                                     |
| search                 | 搜索                                     |
| secondary              | 次要                                     |
| section                | 区块                                     |
| selected               | 已选                                     |
| share                  | 分享                                     |
| show                   | 显示                                     |
| sidebar                | 边栏，侧栏                               |
| slide                  | 幻灯片，图片切换                         |
| sort                   | 排序                                     |
| sub                    | 次级的，子级的                           |
| submit                 | 提交                                     |
| subscribe              | 订阅                                     |
| subtitle               | 副标题                                   |
| success                | 成功（提示）                             |
| summary                | 摘要                                     |
| tab                    | 标签页                                   |
| table                  | 表格                                     |
| txt,text               | 文本                                     |
| thumbnail              | 缩略图                                   |
| time                   | 时间                                     |
| tips                   | 提示                                     |
| title                  | 标题                                     |
| video                  | 视频                                     |
| wrap                   | 容器，包，一般用于最外层                 |
| wrapper                | 容器，包，一般用于最外层                 |

## 附： 函数方法常用的动词:

| 函数名   | 含义 | 函数名      | 含义   |
| -------- | ---- | ----------- | ------ |
| get      | 获取 | set         | 设置   |
| add      | 增加 | remove      | 获取   |
| create   | 创建 | destory     | 移除   |
| start    | 启动 | stop        | 停止   |
| open     | 打开 | close       | 关闭   |
| read     | 读取 | write       | 写入   |
| load     | 载入 | save        | 保存   |
| create   | 创建 | destroy     | 销毁   |
| begin    | 开始 | end         | 结束   |
| backup   | 备份 | restore     | 恢复   |
| import   | 导入 | export      | 导出   |
| split    | 分割 | merge       | 合并   |
| inject   | 注入 | extract     | 载入   |
| attach   | 附着 | detach      | 脱离   |
| bind     | 绑定 | separate    | 分离   |
| view     | 查看 | browse      | 浏览   |
| edit     | 编辑 | modify      | 修改   |
| select   | 选取 | mark        | 标记   |
| copy     | 复制 | paste       | 粘贴   |
| undo     | 撤销 | redo        | 重做   |
| insert   | 插入 | delete      | 移除   |
| add      | 加入 | append      | 添加   |
| clean    | 清理 | clear       | 清除   |
| index    | 索引 | sort        | 排序   |
| find     | 查找 | search      | 搜索   |
| increase | 增加 | decrease    | 减少   |
| play     | 播放 | pause       | 暂停   |
| launch   | 启动 | run         | 运行   |
| compile  | 编译 | execute     | 执行   |
| debug    | 调试 | trace       | 跟踪   |
| observe  | 观察 | listen      | 监听   |
| build    | 构建 | publish     | 发布   |
| input    | 输入 | output      | 输出   |
| encode   | 编码 | decode      | 解码   |
| encrypt  | 加密 | decrypt     | 解密   |
| compress | 压缩 | decompress  | 解压缩 |
| pack     | 打包 | unpack      | 解包   |
| parse    | 解析 | emit        | 生成   |
| connect  | 连接 | disconnect  | 断开   |
| send     | 发送 | receive     | 接收   |
| download | 下载 | upload      | 上传   |
| refresh  | 刷新 | synchronize | 同步   |
| update   | 更新 | revert      | 复原   |
| lock     | 锁定 | unlock      | 解锁   |
| check    | out  | check       | in     |
| submit   | 提交 | commit      | 交付   |
| push     | 推   | pull        | 拉     |
| expand   | 展开 | collapse    | 折叠   |
| begin    | 起始 | end         | 结束   |
| start    | 开始 | finish      | 完成   |
| enter    | 进入 | exit        | 退出   |
| abort    | 放弃 | quit        | 离开   |
| obsolete | 废弃 | depreciate  | 废旧   |
| collect  | 收集 | aggregate   | 聚集   |
