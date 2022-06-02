# VSCODE

> Visual Studio Code (简称 VS Code / VSC) 是一款免费开源的现代化轻量级代码编辑器，支持几乎所有主流的开发语言的语法高亮、智能代码补全、自定义快捷键、括号匹配和颜色区分、代码片段、代码对比 Diff、GIT命令 等特性，支持插件扩展，并针对网页开发和云端应用开发做了优化。

## 插件

推荐安装插件

```json
{
  "recommendations": [
    "antfu.browse-lite",
    "antfu.icons-carbon",
    "antfu.theme-vitesse",
    "antfu.where-am-i",
    "eamodio.gitlens",
    "Equinusocio.vsc-material-theme",
    "equinusocio.vsc-material-theme-icons",
    "file-icons.file-icons",
    "formulahendry.auto-close-tag",
    "formulahendry.auto-complete-tag",
    "formulahendry.auto-rename-tag",
    "jdinhlife.gruvbox",
    "sainnhe.gruvbox-material",
    "streetsidesoftware.code-spell-checker",
    "johnsoncodehk.volar",
    "dbaeumer.vscode-eslint",
    "stylelint.vscode-stylelint",
    "esbenp.prettier-vscode",
    "mrmlnc.vscode-less",
    "lokalise.i18n-ally",
    "mikestead.dotenv",
    "heybourn.headwind"
  ]
}
```

## 主题

## 快捷键

> 本页收集和整理了 VS Code 编辑器常用的快捷键，包含 VS Code Windows 版快捷键和 VS Code macOS 版快捷键（以及各自平台对应的可打印版）。

*   VS Code Windows 版快捷键
*   VS Code macOS 版快捷键
*   VS Code 可打印版快捷键

> 强烈建议收藏本页（可按 Ctrl + D），以便随时查阅 VS Code 快捷键。

### VS Code (Windows 版) 快捷键 VS Code Shortcut for Windows

> 提示：下表收集并整理了 143 个 VS Code (Windows 版) 快捷键。

全局快捷键
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + Shift + P，F1 | 显示命令面板 |
| Ctrl + P | 快速打开，转到文件... |
| Ctrl + Shift + N | 新建窗口/实例 |
| Ctrl + Shift + W | 关闭窗口/实例 |
| Ctrl + , | 编辑器设置 |
| Ctrl + K，Ctrl + S | 键盘快捷键 |

基本编辑
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + X | 剪切一行(未选取时) |
| Ctrl + C | 复制一行(未选取时) |
| Alt + ↑ | 向上移动行 |
| Alt + ↓ | 向下移动行 |
| Shift + Alt + ↑ | 在上面复制当前行 |
| Shift + Alt + ↓ | 在下面复制当前行 |
| Ctrl + Shift + K | 删除一行 |
| Ctrl + Enter | 在下面插入行 |
| Ctrl + Shift + Enter | 在上方插入行 |
| Ctrl + Shift + \\ | 跳转到匹配的括号 |
| Ctrl + ] | 增加缩进 |
| Ctrl + [ | 减少缩进 |
| Home | 转到行首 |
| End | 转到行尾 |
| Ctrl + Home | 转到文件开头 |
| Ctrl + End | 转到文件末尾 |
| Ctrl + ↑ | 向上滚动行 |
| Ctrl + ↓ | 向下滚动行 |
| Alt + PgUp | 向上滚动页面 |
| Alt + PgDn | 向下滚动页面 |
| Ctrl + Shift + [ | 折叠区域 |
| Ctrl + Shift + ] | 展开区域 |
| Ctrl + K，Ctrl + [ | 折叠所有子区域 |
| Ctrl + K，Ctrl + ] | 展开所有子区域 |
| Ctrl + K，Ctrl + 0 | 折叠所有区域 |
| Ctrl + K，Ctrl + J | 展开所有区域 |
| Ctrl + K，Ctrl + C | 添加行注释 |
| Ctrl + K，Ctrl + U | 删除行注释 |
| Ctrl + / | 切换行注释 |
| Shift + Alt + A | 切换块注释 |
| Alt + Z | 切换自动换行 |
| Ctrl + Z | 撤销上一步的操作 |
| Ctrl + Z ，Ctrl + Shift | 恢复上一步的操作 |

导航
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + T | 显示所有符号 |
| Ctrl + G | 显示所有符号 |
| Ctrl + P | 转到文件... |
| Ctrl + Shift + O | 转到符号... |
| Ctrl + Shift + M | 显示问题面板 |
| F8 | 转到下一个错误或警告 |
| Shift + F8 | 转到上一个错误或警告 |
| Ctrl + Shift + Tab | 浏览编辑器组的历史记录 |
| Alt + ← | 后退 |
| Alt + → | 前进 |
| Ctrl + M | 切换标签可移动焦点 |

查找 & 替换
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + F | 查找 |
| Ctrl + H | 替换 |
| F3 | 查找下一个 |
| Shift + F3 | 查找上一个 |
| Alt + Enter | 选择所有的匹配 |
| Ctrl + D | 将选择添加到下一个查找匹配项 |
| Ctrl + K，Ctrl + D | 将上一个选择移到下一个查找匹配项 |
| Alt + C | 切换是否区分大小写 |
| Alt + R | 切换是否正则表达式 |
| Alt + W | 切换是否全字匹配 |

多光标 & 选择
| 快捷键 | 说明 |
| --- | --- |
| Alt + (鼠标点击) | 插入光标 |
| Ctrl + Alt + ↑ | 在上方插入光标 |
| Ctrl + Alt + ↓ | 在下方插入光标 |
| Ctrl + U | 撤消上一个光标操作 |
| Shift + Alt + I | 在所选的每一行的末尾插入光标 |
| Ctrl + L | 选择当前行 |
| Ctrl + Shift + L | 选择所有当前选择 |
| Ctrl + F2 | 选择所有出现的当前单词 |
| Shift + Alt + → | 扩展选择 |
| Shift + Alt + ← | 收缩选择 |
| Shift + Alt \+ (拖曳鼠标) | 列（框）选择 |
| Ctrl + Shift + Alt + (箭头键) | 列（框）选择 |
| Ctrl + Shift + Alt + PgUp | 向前列（框）选择页面 |
| Ctrl + Shift + Alt + PgDn | 向后列（框）选择页面 |

代码编辑
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + Space | 显示成员列表 |
| Ctrl + Shift + Space | 显示参数提示 |
| Shift + Alt + F | 格式化代码 |
| Ctrl + K，Ctrl + F | 格式化选择 |
| F12 | 转到定义 |
| Alt + F12 | 查看定义 |
| Ctrl + K，F12 | 在侧面打开定义 |
| Ctrl + . | 快速修复 |
| Shift + F12 | 显示参考 |
| F2 | 重命名符号 |
| Ctrl + K，Ctrl + X | 删除每一行行尾空格 |
| Ctrl + K，M | 切换代码语言 |

编辑器管理
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + F4，Ctrl + W | 关闭编辑器 |
| Ctrl + K，F | 关闭文件夹 |
| Ctrl + \\ | 分割编辑器 |
| Ctrl + 1 | 让第一编辑器组获取焦点 |
| Ctrl + 2 | 让第二编辑器组获取焦点 |
| Ctrl + 3 | 让第三编辑器组获取焦点 |
| Ctrl + K，Ctrl + ← | 让上一个编辑器组获取焦点 |
| Ctrl + K，Ctrl + → | 让下一个编辑器组获取焦点 |
| Ctrl + K，← | 向左移动当前编辑器组 |
| Ctrl + K，→ | 向右移动当前编辑器组 |
| Ctrl + Shift + PgUp | 向左移动编辑器 |
| Ctrl + Shift + PgDn | 向右移动编辑器 |

文件管理
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + N | 新建文件 |
| Ctrl + O | 打开文件... |
| Ctrl + S | 保存文件 |
| Ctrl + Shift + S | 文件另存为... |
| Ctrl + K，S | 保存全部 |
| Ctrl + F4 | 关闭文件 |
| Ctrl + K，Ctrl + W | 关闭所有文件 |
| Ctrl + Shift + T | 重新打开关闭的编辑器 |
| Ctrl + K，Enter | 保持预览模式编辑器处于打开状态 |
| Ctrl + Tab | 打开下一个文件 |
| Ctrl + Shift + Tab | 打开上一个文件 |
| Ctrl + K，P | 复制活动文件的路径 |
| Ctrl + K，R | 在资源管理器中显示活动文件 |
| Ctrl + K，O | 在新窗口/实例中打开当前活动文件 |

显示
| 快捷键 | 说明 |
| --- | --- |
| F11 | 切换全屏 |
| Shift + Alt + 0 | 切换编辑器布局（水平/垂直） |
| Ctrl + = | 放大编辑器 |
| Ctrl + - | 缩小编辑器 |
| Ctrl + B | 显示/隐藏侧边栏 |
| Ctrl + Shift + E | 显示资源管理器/切换焦点 |
| Ctrl + Shift + F | 显示查找 |
| Ctrl + Shift + G | 显示源代码控制 |
| Ctrl + Shift + D | 显示调试 |
| Ctrl + Shift + X | 显示扩展 |
| Ctrl + Shift + H | 在文件中替 |
| Ctrl + Shift + J | 切换搜索详细信息 |
| Ctrl + Shift + U | 显示输出面板 |
| Ctrl + Shift + V | 打开Markdown预览 |
| Ctrl + K，V | 在侧面打开Markdown预览 |
| Ctrl + K，Z | 禅宗模式（按 2 次 Esc 退出） |

Debug 调试
| 快捷键 | 说明 |
| --- | --- |
| F9 | 插入断点 |
| F5 | 开始/继续 |
| Shift + F5 | 停止 |
| F11 | 步进 |
| Shift + F11 | 步出 |
| F10 | 步过 |
| Ctrl + K，Ctrl + I | 显示悬停 |

终端（Terminal）
| 快捷键 | 说明 |
| --- | --- |
| Ctrl + \` | 显示集成终端 |
| Ctrl + Shift + \` | 创建新终端 |
| Ctrl + C | 复制选择 |
| Ctrl + V | 粘贴到活动终端 |
| Ctrl + ↑ | 向上滚动 |
| Ctrl + ↓ | 向下滚动 |
| Shift + PgUp | 向上滚动页面 |
| Shift + PgDn | 向下滚动页面 |
| Ctrl + Home | 滚动到顶部 |
| Ctrl + End | 滚动到底部 |

> 上面列出了 VS Code（Windows 版）常用快捷键，如需自定义快捷键，可以按 `Ctrl + K`, `Ctrl + S` 组合快捷键呼出 VS Code 快捷键设置窗口，在该窗口可重新指定操作快捷键。

###  VS Code (macOS 版) 快捷键 VS Code Shortcut for macOS

> 提示：一共有 133 个 VS Code (macOS 版) 快捷键。

> 符号说明：⌘ 表示 `Command` 键；⇧ 表示 `Shift` 键；⌥ 表示 `Option` 键；^ 表示 `Control` 键。

全局快捷键
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + ⇧ + P，F1
Command + Shift + P, F1 | 显示命令面板 |
| ⌘ + P
Command + P | 快速打开，转到文件... |
| ⌘ + ⇧ + N
Command + Shift + N | 新建窗口/实例 |
| ⌘ + W
Command + W | 关闭窗口/实例 |
| ⌘ + ,
Command + , | 编辑器设置 |
| ⌘ + K，⌘ + S
Command + K, Command + S | 键盘快捷键 |

基本编辑
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + X
Command + X | 剪切一行(未选取时) |
| ⌘ + C
Command + C | 复制一行(未选取时) |
| ⌥ + ↑
Option + ↑ | 把当前行往上移动 |
| ⌥ + ↓
Option + ↓ | 把当前行往下移动 |
| ⇧ + ⌥ + ↑
Shift + Option + ↑ | 在上面复制行 |
| ⇧ + ⌥ + ↓
Shift + Option + ↓ | 在下面复制行 |
| ⌘ + ⇧ + K
Command + Shift + K | 删除一行 |
| ⌘ + Enter
Command + Enter | 在下面插入行 |
| ⌘ + ⇧ + Enter
Command + Shift + Enter | 在上方插入行 |
| ⌘ + ⇧ + \\
Command + Shift + \\ | 跳转到匹配的括号 |
| ⌘ + ]
Command + ] | 增加缩进 |
| ⌘ + [
Command + [ | 减少缩进 |
| Home | 转到行首 |
| End | 转到行尾 |
| ⌘ + ↑
Command + ↑ | 转到文件开头 |
| ⌘ + ↓
Command + ↓ | 转到文件末尾 |
| ^ + Fn + ↑
Control + Fn + ↑ | 向上滚动行 |
| ^ + Fn + ↓
Control + Fn + ↓ | 向下滚动行 |
| ⌘ + Fn + ↑
Command + Fn + ↑ | 向上滚动页面 |
| ⌘ + Fn + ↓
Command + Fn + ↓ | 向下滚动页面 |
| ⌘ + ⌥ + [
Command + Option + [ | 折叠区域 |
| ⌘ + ⌥ + ]
Command + Option + ] | 展开区域 |
| ⌘ + K，⌘ + [
Command + K, Command + [ | 折叠所有子区域 |
| ⌘ + K，⌘ + ]
Command + K, Command + ] | 展开所有子区域 |
| ⌘ + K，⌘ + 0
Command + K, Command + 0 | 折叠所有区域 |
| ⌘ + K，⌘ + J
Command + K, Command + J | 展开所有区域 |
| ⌘ + K，⌘ + C
Command + K, Command + C | 添加行注释 |
| ⌘ + K，⌘ + U
Command + K, Command + U | 删除行注释 |
| ⌘ + /
Command + / | 切换行注释 |
| ⇧ + ⌥ + A
Shift + Option + A | 切换块注释 |
| ⌥ + Z
Option + Z | 切换编辑器的自动换行 |

导航
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + T
Command + T | 显示所有符号 |
| ⌃ + G
Control + G | 转到行... |
| ⌘ + P
Command + P | 转到文件... |
| ⌘ + ⇧ + O
Command + Shift + O | 转到符号... |
| ⌘ + ⇧ + M
Command + Shift + M | 显示问题面板 |
| F8 | 转到下一个错误或警告 |
| ⇧ + F8
Shift + F8 | 转到上一个错误或警告 |
| ⌃ + ⇧ + Tab
Control + Shift + Tab | 显示编辑器历史记录 |
| ⌃ + -
Control + - | 后退 |
| ^ + ⇧ + -
Control + Shift + - | 前进 |
| ^ + ⇧ + M
Control + Shift + M | 切换标签可移动焦点 |

查找 & 替换
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + F
Command + F | 查找 |
| ⌘ + ⌥ + F
Command + Option + F | 替换 |
| ⌘ + G
Command + G | 查找下一个 |
| ⌘ + ⇧ + G
Command + Shift + G | 查找上一个 |
| ⌥ + Enter
Option + Enter | 选择所有的匹配项 |
| ⌘ + D
Command + D | 将选择添加到下一个查找匹配项 |
| ⌘ + K，⌘ + D
Command + K, Command + D | 将上一个选择移到下一个查找匹配项 |

多光标 & 选择
| 快捷键 | 说明 |
| --- | --- |
| ⌥ + (点击鼠标)
Option + 点击鼠标 | 在所点击位置插入光标 |
| ⌘ + ⌥ + ↑
Command + Option + ↑ | 在上方插入光标 |
| ⌘ + ⌥ + ↓
Command + Option + ↓ | 在下方插入光标 |
| ⌘ + U
Command + U | 撤消上一个光标操作 |
| ⇧ + ⌥ + I
Shift + Option + I | 在所选的每一行的末尾插入光标 |
| ⌘ + L
Command + L | 选择当前行 |
| ⌘ + F2
Command + F2 | 选择所有出现的当前单词 |
| ⌘ + ⌃ + ⇧ + →
Command + Control + Shift + → | 扩展选择 |
| ⌘ + ⌃ + ⇧ + ←
Command + Control + Shift + ← | 收缩选择 |
| ⇧ + ⌥ + (拖拽鼠标)
Shift + Option + 拖拽鼠标 | 列（框）选择 |
| ⌘ + ⇧ + ⌥ + ↑
Command + Shift + Option + ↑ | 向上列（框）选择 |
| ⌘ + ⇧ + ⌥ + ↓
Command + Shift + Option + ↓ | 向下列（框）选择 |
| ⌘ + ⇧ + ⌥ + ←
Command + Shift + Option + ← | 向左列（框）选择 |
| ⌘ + ⇧ + ⌥ + →
Command + Shift + Option + → | 向右列（框）选择 |
| ⌘ + ⇧ + ⌥ + Fn + ↑
Command + Shift + Option + Fn + ↑ | 向前列（框）选择页面 |
| ⌘ + ⇧ + ⌥ + Fn + ↓
Command + Shift + Option + Fn + ↓ | 向后列（框）选择页面 |

代码编辑
| 快捷键 | 说明 |
| --- | --- |
| ⌃ + Space
Control + Space | 触发建议 |
| ⌘ + ⇧ + Space
Command + Shift + Space | 触发参数提示 |
| ⇧ + ⌥ + F
Shift + Option + F | 格式化文件 |
| ⌘ + K，⌘ + F
Command + K, Command + F | 格式化选择 |
| F12 | 转到定义 |
| ⌥ + F12
Option + F12 | 查看定义 |
| ⌘ + K，F12
Command + K, F12 | 在侧面打开定义 |
| ⌘ + .
Command + . | 快速修复 |
| ⇧ + F12
Shift + F12 | 显示参考 |
| F2 | 重命名符号 |
| ⌘ + K，⌘ + X
Command + K, Command + X | 修剪尾随空格 |
| ⌘ + K，M
Command + K, M | 变更文件语言 |

编辑器管理
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + W
Command + W | 关闭编辑器 |
| ⌘ + K，F
Command + K, F | 关闭文件夹 |
| ⌘ + \\
Command + \\ | 分割编辑器 |
| ⌘ + 1
Command + 1 | 让第一编辑器组获取焦点 |
| ⌘ + 2
Command + 2 | 让第二编辑器组获取焦点 |
| ⌘ + 3
Command + 3 | 让第三编辑器组获取焦点 |
| ⌘ + K，←
Command + K, ← | 获取焦点于上一个编辑器组 |
| ⌘ + K，→
Command + K, → | 获取焦点于下一个编辑器组 |

文件管理
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + N
Command + N | 新建文件 |
| ⌘ + O
Command + O | 打开文件... |
| ⌘ + S
Command + S | 保存文件 |
| ⌘ + ⇧ + S
Command + Shift + S | 文件另存为... |
| ⌘ + ⌥ + S
Command + Option + S | 保存全部 |
| ⌘ + W
Command + W | 关闭当前文件 |
| ⌘ + K，⌘ + W
Command + K, Command + W | 关闭所有文件 |
| ⌘ + ⇧ + T
Command + Shift + T | 重新打开关闭的文件 |
| ⌘ + K，Enter
Command + K, Enter | 保持预览模式编辑器处于打开状态 |
| ⌃ + Tab
Control + Tab | 打开下一个文件 |
| ⌃ + ⇧ + Tab
Control + Shift + Tab | 打开上一个文件 |
| ⌘ + K，P
Command + K, P | 复制活动文件的路径 |
| ⌘ + K，R
Command + K, R | 在资源管理器中显示活动文件 |
| ⌘ + K，O
Command + K, O | 在新窗口/实例中显示活动文件 |

显示
| 快捷键 | 说明 |
| --- | --- |
| ⌘ + ^ + F
Command + Control + F | 切换全屏 |
| ⌘ + ⌥ + 0
Command + Option + 0 | 切换编辑器布局（水平/垂直） |
| ⌘ + =
Command + = | 放大编辑器 |
| ⌘ + -
Command + - | 缩小编辑器 |
| ⌘ + B
Command + B | 显示/隐藏侧边栏 |
| ⌘ + ⇧ + E
Command + Shift + E | 显示资源管理器/切换焦点 |
| ⌘ + ⇧ + F
Command + Shift + F | 显示查找 |
| ⌃ + ⇧ + G
Control + Shift + G | 显示源代码控制 |
| ⌘ + ⇧ + D
Command + Shift + D | 显示调试 |
| ⌘ + ⇧ + X
Command + Shift + X | 显示扩展 |
| ⌘ + ⇧ + H
Command + Shift + H | 在文件中替换 |
| ⌘ + ⇧ + J
Command + Shift + J | 切换搜索详细信息 |
| ⌘ + ⇧ + U
Command + Shift + U | 显示输出面板 |
| ⌘ + ⇧ + V
Command + Shift + V | 打开Markdown预览 |
| ⌘ + K，V
Command + K, V | 在侧面打开 Markdown 预览 |
| ⌘ + K，Z
Command + K, Z | 禅宗模式（按 2 次 Esc 退出） |

Debug 调试
| 快捷键 | 说明 |
| --- | --- |
| F9 | 断点 |
| F5 | 开始/继续 |
| F11 | 步进 |
| ⇧ + F11
Shift + F11 | 步出 |
| F10 | 步过 |
| ⇧ + F5
Shift + F5 | 停止 |
| ⌘K，⌘I
Command + K, Command + I | 显示悬停 |

终端（Terminal）
| 快捷键 | 说明 |
| --- | --- |
| ⌃ + \`
Control + \` | 显示集成终端 |
| ⌃ + ⇧ + \`
Control + Shift + \` | 创建新终端 |
| ⌘ + C
Command + C | 复制选择 |
| ⌘ + ↑
Command + ↑ | 向上滚动 |
| ⌘ + ↓
Command + ↓ | 向下滚动 |

> 上面列出了 VS Code（macOS 版）常用快捷键，如需自定义快捷键，可以按 `⌘ + K`, `⌘ + S` 组合快捷键呼出 VS Code 快捷键设置窗口，在这里可重新指定操作快捷键。
