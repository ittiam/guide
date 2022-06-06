# ClassName 命名

---

ClassName 的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**

## BEM 规范

`BEM` 是一种命名 CSS 样式的命名方法和规范，全称 `Block`（块）、 `Element`（元素）、`Modifier`（修饰符）。

- `Block`：一般可以看做是独立具有实际意义的模块部分，例如 header,container,menu 等
- `Element`：组成 `Block` 的一部分，没有具体的实际意义，一般也不独立使用，例如 menu item，list item，header title 等
- `Modifier`：一般是块或者元素的修饰状态或者行为，例如 disabled，color，checked 等

而 `BEM` 的写法一般是 `.block-name__element-name--modifier-name`，其中 `Block` 与 `Element` 之间连接是通过 `__` 双下划线，`Block`，`Element` 与 `Modifier` 之间是通过 `--` 双中划线进行连接，当使用 `less` 或者 `sass` 语法编写 `css` 时，通过嵌套语法也能够很简洁的书写这部分样式。

```html
<div class="head">
    <div class="head__title">
    标题
    <div class="head__title--disabled">
      置灰内容
    </div>
  </div>
</div>
```

```less
.head {
  background-color: #fff;

  &__title {
    font-size: 14px;
    color: #666;

    &--disabled: {
        color: #f00;
    }
  }
}
```

### BEM修饰器

根据不同的场景，组件可能会表现出不同的样式。比如分页组件在pc端具有具体的页码以及上下页按钮，但在移动端，因空间有限，可能只保留上下页按钮。我们可以用修饰器来区分这两种情况。默认情况下，分页按钮的类名为 `page-btn`，但在移动端，我们需要加多个类名 `page-btn--min`

```css
/* 缩小版分页组件中，具体页码按钮隐去 */
.page-btn--min .page-btn__btn {
  display: none;
}

.page-btn--min .page-btn__prev { width: 50%; }

.page-btn--min .page-btn__prev { width: 50%; }
```

上面这种情况用了子代选择器，`BEM` 是不允许这么写的，`BEM` 中修饰器的样式不依赖于任何结构关系，也就是说，元素的状态改变只会影响自身，不对其他元素进行影响，但实际上，这很难做到的。以上的写法不会造成样式冲突的，而且权重的影响也不大。

`BEM` 修饰器代表着元素的状态，但有时候元素的状态需要js来控制，此时遵循规范没有任何好处，比如激活状态，`BEM` 推荐的写法是：

```css
.block__element { display: none; }

.block__element--active { display: block; }
```

当用js为该元素添加状态时，我们需要知道该元素的名字` block__element`，这样我们才能推导出它的激活状态为 `block__element--active`，这是不合理的，因为很多时候我们无法得知元素的名称，所以这时候，我们应该统一js控制状态的类名格式，比如 `is-active`、`js-active`等等，这些类名只用作标识，不予许有默认的公共样式：

```css
.block__element { display: none; }

.block__element.is-active { display: block; }
```

### 原子类和BEM

`BEM` 可以不需要用到原子类，但是如果已经引入了类似 `Windi CSS`、`Tailwind CSS`, and `Twind` 等原子框架，也没必要强制避免使用原子类，比如“pull-right”、"ellipsis"、“clearfix”等等类，这些类非常实用，和 `BEM` 是可以互补的。

在组件开发中其实不推荐使用原子类，因为这会降低组件的可复用性。可复用性的最理想状态就是组件不仅仅在不同的页面中表现一致，在跨项目的情况下，也能够运行良好。如果组件的样式因为依赖于某几个原子类就要依赖整个 `Bootstrap` 库，那么组件的迁移负担就重很多了。

原子类更适合应用在实际页面中，这是因为页面变动大而且不可复用，假设在 `header` 中，我们用到了两个组件 `logo` 和 `user-panel`（用户操作面板），两个组件分别置于 `header` 的左侧和右侧，我们可以这么写：

```html
<div class="header clearfix">
  <div class="logo pull-left">
    <!-- ... -->
  </div>
  <div class="user-panel pull-left">
    <!-- ... -->
  </div>
</div>
```

`header` 可以封装成一个模块，但它复用程度不高，不能算是组件，所以即使使用原子类也没有关系。在项目中，使用原子类之前应该考虑一下，这个场景是否变动大而且不可复用，如果是的话，我们可以放心的使用原子类。

组件应该是“自洽的”，其本身就应该构成了一个“生态圈”，也就是说，他几乎不需要外部供给，自给自足就能够运转下去。

### 实际页面中也应该使用BEM

在实际页面中也需要用到BEM命名方法，不然乱起的一个名字很可能就和某一组件冲突了，导致样式相互覆盖。

假如我们有联系页面，路径是 `/pages/contact/` 。那么该页面的模块名可以是 `page-contact`，其名下元素均以 `page-contact__element-name` 命名。

一般来说，实际页面中只是对组件进行调用，对组件的位置进行调整，但不会对组件内部细节进行修改。但实际情况下，同一个组件在不同页面不同模样的情况也是有的，所以会出现在实际页面中对组件样式进行微调的代码：

```css
/* 联系页面对分页按钮进行微调 */
.page-contact .page-btn {}
```

但更推荐的做法是给分页组件添加一个修饰器，将上面的样式放到修饰器名下，再根据实际情况运用到页面中

`BEM` 命名规范可以让样式的命名更加模块化，组件之间结构独立，减少了命名之间的冲突，有着不错的易读性、维护性等等，但可能会让项目中的样式命特别的长。

## 常用命名推荐

_包裹类_： container, wrapper, outer, inner, box, header, footer, main, content, aside, page, section, block

_状态类_： primary, secondary, success, danger, warning, info, error, link, light, dark, disabled, active, checked, loading, empty

_尺寸类_： large, middle, small, bigger, smaller

_组件类_： card, list, picture, carousel, swiper, menu, navs, badge, hint, modal, dialog

_位置类_： first, last, current, prev, next, forward, back

_文本类_： title, desc, content, date, author, category,label,tag

_人物类_： avatar, name, age, post, intro

**注意**：ad、banner、gg、guanggao 等有机会和广告挂勾的字眼不建议直接用来做 ClassName，因为有些浏览器插件（Chrome 的广告拦截插件等）会直接过滤这些类名，因此

```html
<div class="ad"></div>
```

这种广告的英文或拼音类名不应该出现

另外，**敏感不和谐字眼**也不应该出现，如：

```html
<div class="fuck"></div>
<div class="jer"></div>
<div class="sm"></div>
<div class="gcd"></div>
<div class="ass"></div>
<div class="KMT"></div>
...
```
