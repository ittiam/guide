# ClassName 命名

---

ClassName 的命名应该尽量精短、明确，必须以**字母开头命名**，且**全部字母为小写**，单词之间**统一使用** “-” 连接

## 命名原则

基于姓氏命名法（继承 + 外来），如下图：

![enter image description here](http://labs.qiang.it/ppguide/img/standard_jiapu.png)

祖先模块不能出现下划线，除了是全站公用模块，如 `mod-` 系列的命名：

**推荐：**

```html
<div class="modulename">
  <div class="modulename-info">
    <div class="modulename-son"></div>
    <div class="modulename-son"></div>
    ...
  </div>
</div>

<!-- 这个是全站公用模块，祖先模块允许直接出现下划线 -->
<div class="mod-info">
  <div class="mod-info-son"></div>
  <div class="mod-info-son"></div>
  ...
</div>
```

**不推荐：**

```html
<div class="modulename-info">
  <div class="modulename-info-son"></div>
  <div class="modulename-info-son"></div>
  ...
</div>
```

在子孙模块数量可预测的情况下，严格继承祖先模块的命名前缀

```html
<div class="modulename">
  <div class="modulename-cover"></div>
  <div class="modulename-info"></div>
</div>
```

当子孙模块超过 4 级或以上的时候，可以考虑在祖先模块内具有识辨性的独立缩写作为新的子孙模块

**推荐：**

```html
<div class="modulename">
  <div class="modulename-cover"></div>
  <div class="modulename-info">
    <div class="modulename-info-user">
      <div class="modulename-info-user-img">
        <img src="" alt="" />
        <!-- 这个时候 miui 为 modulename_info_user_img 首字母缩写-->
        <div class="miui-tit"></div>
        <div class="miui-txt"></div>
        ...
      </div>
    </div>
    <div class="modulename-info-list"></div>
  </div>
</div>
```

**不推荐：**

```html
<div class="modulename">
  <div class="modulename-cover"></div>
  <div class="modulename-info">
    <div class="modulename-info-user">
      <div class="modulename-info-user-img">
        <img src="" alt="" />
        <div class="modulename-info-user-img-tit"></div>
        <div class="modulename-info-user-img-txt"></div>
        ...
      </div>
    </div>
    <div class="modulename-info-list"></div>
  </div>
</div>
```

## 模块命名

全站公共模块：以 `mod-` 开头

```html
<div class="mod-yours"></div>
```

业务公共模块：以 `业务名-mod-` 开头

```html
<div class="paipai-mod-yours"></div>
```

## 常用命名推荐

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
