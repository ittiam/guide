# LESS 规范

---

作为一种 CSS 扩展, Less 不仅向后兼容 CSS, 它还使用现有的 CSS 语法新增了额外的特性. 这使得学习 Less 更轻松, 一旦有任何问题，可以随时退回使用标准的 CSS.

## Variables （变量）

顾明思义：

```css
@nice-blue: #5B83AD;
@light-blue: @nice-blue + #111;

#header {
  color: @light-blue;
}
```

输出：

```css
#header {
  color: #6c94be;
}
```

注意，由于变量只能定义一次，实际上他们就是“常量”.

## Mixins （混合）

混合就是一种将一系列属性从一个规则集引入(“混合”)到另一个规则集的方式。假设我们有以下样式:

```css
.bordered {
  border-top: dotted 1px black;
  border-bottom: solid 2px black;
}
```

我们希望在另一个规则集内部使用上面这些属性。那么，我们就只需要访问我们想要的属性所在类的名称即可，就像下面这样：

```css
#menu a {
  color: #111;
  .bordered;
}

.post a {
  color: red;
  .bordered;
}
```

类 _.bordered_ 的属性现在就会同事呈现在 _#menu a_ 和 _.post a_ 中了（注意，同样可以将 _#ids_ 作为 mixins）。

当你想要匹配表达式，而不是简单的值或者参数数量时，guard 是很有用的。如果你熟悉函数式编程，那么你肯定遇到过这类问题。

为了尽可能的保持 CSS 声明的本质，Less 选择实现了 guarded mixins，而不是 if/else 语句，也就是说并不是一脉相承的实现@media 查询的规范。

让我们从一个例子开始：

```css
.mixin (@a) when (lightness(@a) >= 50%) {
  background-color: black;
}

.mixin (@a) when (lightness(@a) < 50%) {
  background-color: white;
}

.mixin (@a) {
  color: @a;
}
```

这里有一个 when 关键字，它引进了一个 guard 序列（在这里只有一个 guard）。现在，假设我们运行以下代码：

```css
.class1 {
  .mixin(#ddd);
}
.class2 {
  .mixin(#555);
}
```

会得到：

```css
.class1 {
  background-color: black;
  color: #ddd;
}

.class2 {
  background-color: white;
  color: #555;
}
```

Learn more

- (More about mixins)[http://www.css88.com/doc/less/features/#mixins-feature]
- (Parametric Mixins)[http://www.css88.com/doc/less/features/#mixins-parametric-feature]

## Nested rules （嵌套规则）

Less 为我们提供了嵌套的能力, 而不是合并在样式表中.假设我们有下面的 CSS:

```css
#header {
  color: black;
}

#header .navigation {
  font-size: 12px;
}

#header .logo {
  width: 300px;
}
```

在 Less 中，我们可以以下面这种方式编写:

```css
#header {
  color: black;

  .navigation {
    font-size: 12px;
  }

  .logo {
    width: 300px;
  }
}
```

这样的代码更简洁, 它模仿了 HTML 的结构.

使用这种方法照样可以在混合中包含伪类(pseudo-selectors)。下面是一个经典的 clearfix 代码，在这里使用 mixin 重写了（& 表示当前选择器的父选择器）:

```css
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```

参见

- [Parent Selectors（父级选择器）](http://www.css88.com/doc/less/features/#parent-selectors-feature)

## Media query bubbling and nested media queries （媒体查询合嵌套媒体查询）

媒体查询同样可以嵌套在选择器中。选择器将被复制到媒体查询体内：

```css
.screencolor {
  @media screen {
    color: green;
    @media (min-width: 768px) {
      color: red;
    }
  }

  @media tv {
    color: black;
  }
}
```

输出

```css
@media screen {
  .screencolor {
    color: green;
  }
}

@media screen and (min-width: 768px) {
  .screencolor {
    color: red;
  }
}

@media tv {
  .screencolor {
    color: black;
  }
}
```

要前置插入一个选择器给继承的(父)选择器时它是很有用的。用过将&放到当前选择器之后就可以做到这一点。

比如，使用 Modernizr 时，你可能希望基于要支持的特性来指定不同的规则：

```css
.header {
  .menu {
    border-radius: 5px;

    .no-borderradius & {
      background-image: url("images/button-background.png");
    }
  }
}
```

选择器*.no-borderradius &*会前置插入*.no-borderradius*给它的父选择器*.header .menu*，最后变成*.no-borderradius .header .menu*形式输出：

```css
.header .menu {
  border-radius: 5px;
}
.no-borderradius .header .menu {
  background-image: url("images/button-background.png");
}
```

## Operations （运算）

任何数值，颜色和变量都可以进行运算。这里有一对示例：

```css
@base: 5%;
@filler: @base * 2;
@other: @base + @filler;

color: #888 / 4;
background-color: @base-color + #111;
height: 100% / 2 + @filler;
```

最后的输出结果与你预期的一样 -- Less 能够推断颜色和单位之间的区别。如果在一个运算中使用了单位，比如：

```css
@var: 1px + 5;
```

在这个例子中 Less 会在最终输出结果中使用这个单位 -- 6px。

## Functions （函数）

Less 提供了许多用于转换颜色，处理字符串和进行算术运算的函数。他们在函数参考一节有详细的的介绍。

这些函数使用起来非常简单。在下面的例子中我们使用 _percentage_ 将 0.5 转换为 50%，然后将基础颜色值的饱和度增加了 5%，最后将背景颜色的亮度增加了 25% 之后又将色相值增加 8:

```css
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // returns `50%`
  color: saturate(@base, 5%);
  background-color: spin(lighten(@base, 25%), 8);
}
```

## Namespaces and Accessors （命名空间和访问器）

(不要将它与 [CSS _@namespace_](http://www.w3.org/TR/css3-namespace/) 或 [namespace 选择器](http://www.w3.org/TR/css3-selectors/#typenmsp)混为一谈)。

有时候，出于组织的目的，或者为了提供一些封装，你会希望将你的 mixins 组合在一起。在 Less 中做到这一点非常直观，假设你想在 #bundle 下捆绑一些 mixins 和变量，以便稍候复用或者分发：

```css
#bundle {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;

    &:hover {
      background-color: white;
    }
  }

  .tab {
    ...;
  }
  .citation {
    ...;
  }
}
```

现在如果我们想在 _#header a_ 中混合 _.button_ 类，那么我们可以这样做：

```css
#header a {
  color: orange;
  #bundle > .button;
}
```

需要注意的是命名空间内声明的变量将只作用于该命名空间，并且在作用域外通过相同的语法是无效的，你会用它来引用一个 mixin (_#Namespace > .mixin-name_)。因此，举例来说，你不能这么做： (_#Namespace > @this-will-not-work_)。

## Scope （作用域）

Less 中的作用域与编程语言中的作用域概念非常相似。首先会在局部查找变量和混合，如果没找到，编译器就会在父作用域中查找，依次类推。

```css
@var: red;

#page {
  @var: white;

  #header {
    color: @var; // white
  }
}
```

变量和混合不必在使用前声明，因此下面的代码与前面的例子等价：

```css
@var: red;

#page {
  #header {
    color: @var; // white
  }

  @var: white;
}
```

参见

- [Lazy Loading(延迟加载)](http://www.css88.com/doc/less/features/#variables-feature-lazy-loading)

## Comments （注释）

可以使用块注释和行注释:

```css
/* One hell of a block
style comment! */
@var: red;

// Get in line!
@var: white;
```

## Importing （导入）

导入工作与你预期的一样。你可以导入一个 .less 文件，然后这个文件中的所有变量都可以使用了。对于 .less 文件而言，其扩展名是可选的。

```css
@import "library"; // library.less
@import "typo.css";
```
