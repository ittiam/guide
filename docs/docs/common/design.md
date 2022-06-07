# 技术设计文档

> 做系统设计，一定是为了解决问题的，可能是为了实现一个功能，可能是为了提升性能，可能是为了重构代码，但是如果目的不明确，或者方向错了，那么后面再好再优秀的设计也会南辕北辙，越做越错。 - @宝玉xp

*下面的设计方案根据 @宝玉xp [前端系统设计时遵守的一些原则](https://weibo.com/1727858283/LuJnKc0bw?layerid=4773242922860650)* 整理而成，使用的图片也是来自文章中

## 1. 概述

### 1.1 需求背景&价值

​*为什么要做这个需求，价值在哪里，背景是什么*

在需求中，一般会分两类需求：功能性需求（Functional Requirements）和非功能性需求（Non-Functional Requirements）。

#### 1.1.1 功能需求（Functional Requirements）

功能性需求就是偏产品的，必要性的需求，比如说要做一个用户登录的功能，用户输入正确用户名密码可以登录，错误的用户名密码要提示错误信息。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbvmb8oyj20y018045k.jpg)

#### 1.1.2 非功能性需求（Non-Functional Requirements）

非功能性需求就是偏技术的，并非是必须的，像安全性、可用性、可靠性等要求，比如说用户登录要防止Sql注入，要能承载1W用户同时登录。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbw7k09tj20y0180jyo.jpg)

### 1.2 前置概念

​*下文出现的一些词汇的概念解释*

### 1.3 技术选型

在很多时候，我们都需要对技术进行选型，尤其是前端，框架太多，选React还是Vue？选Redux还是React Context？选JavaScript还是TypeScript？

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbwem8a9j20y018011w.jpg)

### 1.4 设计范围（Scopes）

设计加上范围和边界非常重要，这样你在设计时就知道边界在哪，而不是无限的扩大你的范围。同样在做设计审查时，和其他人讨论时，如果大家都明白范围和边界，那么讨论起来也更容易达成共识。

## 2. 相关文档

*列举对理解此次需求和设计方案相关的文档，包括但不局限于以下内容，可进行补充。*

- 需求文档：https://xxxx.com @产品
- 交互文档：https://xxxx.com @交互
- 视觉的稿：https://xxxx.com @UED
- 后端方案：https://xxxx.com @后端
- 接口文档: https://xxxx.com @后端
- 冒烟用例：https://xxxx.com @测试

## 3. 项目排期

### 3.1 任务拆解

*项目拆解后的详细工时*

### 3.2 项目里程碑

*包括但不局限于以下内容，可进行补充。*

| 事项     | 日期                |
| -------- | ------------------- |
| 需求评审 | 202x 年 xx 月 xx 日 |
| 技术评审 | 202x 年 xx 月 xx 日 |
| 版本提测 | 202x 年 xx 月 xx 日 |
| 交互走查 | 202x 年 xx 月 xx 日 |
| 版本发布 | 202x 年 xx 月 xx 日 |

## 4. 概要设计（High-level design）

做系统设计，顺序很重要，先整体再全局，如果一开始就在纠结各种细节，那么会越想越复杂，最终陷入其中难以自拔！

概要设计其实不复杂，画几张框线图就可以描述清楚模块和模块之间的关系。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbwkiu5wj20y0180wm7.jpg)

### 4.2 架构图

*按需设计*

## 5. 详细设计

*各个模块的实现细节*

### 交互设计

#### 5.1.1 参考规范

*讲述开发遵循的技术规范，包括但不局限于以下内容，可进行补充。*

| 序号 | 规范名称           | 规范地址 |
| ---- | ------------------ | -------- |
| 1    | 前端开发规范 | xxx      |
| 2    | 接口规范     | xxx      |

#### 5.1.2 数据模型（Data models）

比如你要在前端后端之间传输数据，各个数据实体的结构是怎么样的？数据实体的关系是怎么样的？这个一定要描述清楚，这样前后端可以更好协作，另外好的数据结构能带来更好的性能。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbx31jy7j20y018043z.jpg)
![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbxaa81yj20y0180tet.jpg)

#### 5.1.3 组件结构

作为前端项目，尤其是React这种，所有的UI都是由各种组件搭建起来的，但是当UI复杂的时候，怎么样组织、重用你的组件很考验设计，所以在系统设计文档中，要体现出你组件结构，以及组件和数据之间的关系。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbxketgsj20y01804b3.jpg)
![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbxrj4bzj20y0180am9.jpg)

#### 5.1.4 状态管理

在现代前端框架中，UI和状态是分离的，状态管理必不可少，各种UI事件下要触发什么样的action，每个action导致什么样的数据变化，这些数据流需要描述清楚，最好能结合组件一起将整个状态的变化描述清楚。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbxketgsj20y01804b3.jpg)
![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbxrj4bzj20y0180am9.jpg)

#### 5.1.5 数据存储结构

即使是前端项目，也涉及存储，比如有的数据适合存Cookie，有的适合存Local Storage，还有其他的像服务端Session、本地Session Storage、本地数据库等等，各有各的优缺点，需要根据使用场景灵活选择，并且要设计好存储的结构，考虑好数据更新和缓存失效的问题。

![](https://raw.githubusercontent.com/ittiam/guide/master/docs/assets/design/66fd066bgy1h2lbxfepzej20y01807bl.jpg)

### 5.2 模块设计

#### 5.2.1 模块一功能说明

​ *该模块的具体功能*

#### 5.2.2 模块一流程说明

​ *对功能流转进行说明，主要需包含正常流程和异常流程*

#### 5.2.3 模块一模块详细设计

​ *从技术的角度讲述功能的实现思路。流程、时序方面必须用图示*

#### 5.2.4 模块一外部依赖

​ *对接口、其它业务组件的依赖*

## 6. 技术分析 Checklist

| 序号 | 技术分析自检项                                           | 技术分析自检项 |
| ---- | -------------------------------------------------------- | -------------- |
| 1    | 本次改造对原有功能需求的影响范围，包括以前交互，视觉设计 |                |
| 2    | 是否可提取出公用组件                                     |                |
| 3    | 数据结构变更是否考虑老数据兼容                           |                |
| 4    | 是否影响移动端                                           |                |
| 5    | 操作是否做了防重处理                                     |                |
| 6    | 兼容性（浏览器、分辨率、主题）                           |                |
| 7    | 团队 Code Review Checklist                               |                |
| 8    | ....                                                     |                |

## 7. 测试数据

​  *涉及到的测试数据。譬如提前准备的商品、账号信息。*

## 8. 测试重点

​  *测试需要重点关注的部分, 对现有业务和组件的影响点*
