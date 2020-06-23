# Modern JavaScript

## 变量声明

### const 和 let

不要用 `var`，而是用 `const` 和 `let`，分别表示常量和变量。不同于 `var` 的函数作用域，`const` 和 `let` 都是块级作用域。

```javascript
const DELAY = 1000;

let count = 0;
count = count + 1;
```

## Arrow Functions 箭头函数

1. 不需要通过 function 关键字创建函数，并且还可以省略 return 关键字。
2. 箭头函数还会继承当前上下文的 this 关键字

```javascript
// JavaScript ES5 function
function getGreeting() {
  return "Welcome to JavaScript";
}
// JavaScript ES6 arrow function with body
const getGreeting = () => {
  return "Welcome to JavaScript";
};
// JavaScript ES6 arrow function without body and implicit return
const getGreeting = () => "Welcome to JavaScript";
```

## Classes 类

### 类声明

在 ES6 中，我们将原型的实现写在了类中，但本质上还是一样的，都是需要新建一个类名，然后实现构造函数，再实现原型方法。

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + " " + this.lastname;
  }
}

var me = new Developer("Robin", "Wieruch");
console.log(me.getName());
```

### extends 继承

```javascript
class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + " " + this.lastname;
  }
}

class ReactDeveloper extends Developer {
  getJob() {
    return "React Developer";
  }
}

var me = new ReactDeveloper("Robin", "Wieruch");
console.log(me.getName());
console.log(me.getJob());
```

### 实例属性新写法

可以定义在类的最顶层

```javascript
class IncreasingCounter {
  _count = 0;

  get value() {
    console.log("Getting the current value!");
    return this._count;
  }

  increment() {
    this._count++;
  }
}
```

### 静态属性和方法

静态属性指的是 _Class_ 本身的属性，即 _Class.propName_，而不是定义在实例对象（this）上的属性。

如果在一个方法前，加上 static 关键字，就表示该方法不会被实例继承，而是直接通过类来调用，这就称为“静态方法”。

```javascript
class Foo {
  static classMethod() {
    return "hello";
  }
}

Foo.prop = 1;

Foo.prop; // 1

Foo.classMethod(); // 'hello'

var foo = new Foo();
foo.classMethod(); // TypeError: foo.classMethod is not a function
```

## Template Literals 模板字符串

模板字符串提供了另一种做字符串组合的方法。

```javascript
const user = "world";
console.log(`hello ${user}`); // hello world

// 多行
const content = `
  Hello ${firstName},
  Thanks for ordering ${qty} tickets to ${event}.
`;
```

## Import 和 Export

`import` 用于引入模块，`export` 用于导出模块。

比如：

```javascript
// 引入全部
import React from 'react';

// 引入部分
import { connect } from 'dva';
import { Link, Route } from 'dva/router';

// 引入全部并作为 github 对象
import * as github from './services/github';

// 导出默认
export default App;
// 部分导出，需 import { App } from './file'; 引入
export class App extend Component {};
```

## Destructuring 析构赋值

析构赋值让我们从 Object 或 Array 里取部分数据存为变量。

```javascript
const state = { counter: 1, list: ["a", "b"] };
// no object destructuring
const list = state.list;
const counter = state.counter;
// object destructuring
const { list, counter } = state;
```

数组析构

```javascript
const list = ["a", "b"];
// no array destructuring
const itemOne = list[0];
const itemTwo = list[1];
// array destructuring
const [itemOne, itemTwo] = list;
```

我们也可以析构传入的函数参数。

```javascript
// no destructuring
function Greeting(props) {
  return <h1>{props.greeting}</h1>;
}
// destructuring
function Greeting({ greeting }) {
  return <h1>{greeting}</h1>;
}
```

析构时还可以配 alias，让代码更具有语义。

```javascript
const add = (state, { payload: todo }) => {
  return state.concat(todo);
};
```

## Spread Operator 展开语法

Spread Operator 即 3 个点 `...`，有几种不同的使用方法。

可用于组装数组。

```javascript
const todos = ["Learn dva"];
[...todos, "Learn antd"]; // ['Learn dva', 'Learn antd']
```

也可用于获取数组的部分项。

```javascript
const arr = ["a", "b", "c"];
const [first, ...rest] = arr;
rest; // ['b', 'c']

// With ignore
const [first, , ...rest] = arr;
rest; // ['c']
```

还可收集函数参数为数组。

```javascript
function directions(first, ...rest) {
  console.log(rest);
}
directions("a", "b", "c"); // ['b', 'c'];
```

代替 apply。

```javascript
function foo(x, y, z) {}
const args = [1, 2, 3];

// 下面两句效果相同
foo.apply(null, args);
foo(...args);
```

对于 Object 而言，用于组合成新的 Object 。(ES2017 stage-2 proposal)

```javascript
const foo = {
  a: 1,
  b: 2,
};
const bar = {
  b: 3,
  c: 2,
};
const d = 4;

const ret = { ...foo, ...bar, d }; // { a:1, b:3, c:2, d:4 }
```

## Promises

_Promise_ 用于更优雅地处理异步请求。比如发起异步请求：

```javascript
fetch("/api/todos")
  .then((res) => res.json())
  .then((data) => ({ data }))
  .catch((err) => ({ err }));
```

定义 Promise 。

```javascript
const delay = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

delay(1000).then((_) => {
  console.log("executed");
});
```

## Async 和 Await

通过 _async_ 函数，可以使得异步操作变得更加方便。返回值是个 _Promise_

```javascript
async function fetch() {
  await fetchData();
  return "done";
}
```

```javascript
async function logInOrder(urls) {
  // 并发读取远程URL
  const textPromises = urls.map(async (url) => {
    const response = await fetch(url);
    return response.text();
  });

  // 按次序输出
  for (const textPromise of textPromises) {
    console.log(await textPromise);
  }
}
```

## Decorator 装饰器

装饰器（Decorator）是一种函数，用来注释或修改类和类方法，写成@ + 函数名。它可以放在类和类方法的定义前面。

修改类

```javascript
class MyReactComponent extends React.Component {}

export default connect(mapStateToProps, mapDispatchToProps)(MyReactComponent);

// 使用装饰器
@connect(mapStateToProps, mapDispatchToProps)
export default class MyReactComponent extends React.Component {}
```

## Set, Map, WeakSet, WeakMap

### Set

Set 对象允许你存储任何类型的唯一值，无论是原始值或者是对象引用。

```javascript
let mySet = new Set();

mySet.add(1); // Set [ 1 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add(5); // Set [ 1, 5 ]
mySet.add("some text"); // Set [ 1, 5, "some text" ]
let o = { a: 1, b: 2 };
mySet.add(o);

mySet.add({ a: 1, b: 2 }); // o 指向的是不同的对象，所以没问题

mySet.has(1); // true
mySet.has(3); // false
mySet.has(5); // true
mySet.has(Math.sqrt(25)); // true
mySet.has("Some Text".toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // true,  从set中移除5
mySet.has(5); // false, 5已经被移除

mySet.size; // 4, 刚刚移除一个值
console.log(mySet); // Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}
```

### WeakSet

存储的值只能是对象。

### Map

Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。

Map 可以保持 key 的类型。

```javascript
let myMap = new Map();

let keyObj = {};
let keyFunc = function() {};
let keyString = "a string";

// 添加键
myMap.set(keyString, "和键'a string'关联的值");
myMap.set(keyObj, "和键keyObj关联的值");
myMap.set(keyFunc, "和键keyFunc关联的值");

myMap.size; // 3

// 读取值
myMap.get(keyString); // "和键'a string'关联的值"
myMap.get(keyObj); // "和键keyObj关联的值"
myMap.get(keyFunc); // "和键keyFunc关联的值"

myMap.get("a string"); // "和键'a string'关联的值"
// 因为keyString === 'a string'
myMap.get({}); // undefined, 因为keyObj !== {}
myMap.get(function() {}); // undefined, 因为keyFunc !== function () {}
```

### WeakMap
