# CSS 开发经验

---

## 移动端

1. 使用用 flex 布局的时候：

- `justify-content: space-around;` 这个属性在低版本浏览器有兼容性问题，尽量避免
- 如果子元素是行内元素，需要加上 `display: block;`，例如：

```html
<div class="flexbox">
  <a class="item">自</a>
  <a class="item">适</a>
  <a class="item">应</a>
</div>
```

```css
.flexbox {
  display: flex;
}

.flexbox .item {
  display: block;
  flex: 1;
}
```

## PC 端
