## 其他

- [ ] [vue-router 实现](https://)
- [ ] [vuex 实现](https://)
- [ ] [vue-cli 实现](https://)

<hr>

## 目录

`双向绑定 observer`

- [x] [对象检测](#对象检测)
- [ ] [数组检测](#)
- [x] [依赖](#依赖)
- [x] [observer](#observer)

<hr>

`API`

- `基础`

  - [ ] [\$watch](#)
  - [ ] [\$set](#)
  - [ ] [\$delete](#)

- `事件`

  - [ ] [\$on](#)
  - [ ] [\$off](#)
  - [ ] [\$once](#)
  - [ ] [\$emit](#)

- `生命周期`

  - [ ] [\$forceupdate](#)
  - [ ] [\$destory](#)
  - [ ] [\$nexttick](#)
  - [ ] [\$mount](#)

- `全局`
  - [ ] [extend](#)
  - [ ] [nexttick](#)
  - [ ] [set](#)
  - [ ] [delete](#)
  - [ ] [directive](#)
  - [ ] [filter](#)
  - [ ] [component](#)
  - [ ] [use](#)
  - [ ] [mixin](#)
  - [ ] [compile](#)
  - [ ] [version](#)

<hr>

`虚拟DOM`

- [ ] [vnode](#)
- [ ] [patch 算法](#)

<hr>

`模板编译`

- [ ] [解析器](#)
- [ ] [优化器](#)
- [ ] [代码生成器](#)

<hr>

`架构`

- [ ] [架构](#)

<hr>

`生命周期`

- [ ] [初始化](#)
- [ ] [编译](#)
- [ ] [挂载](#)
- [ ] [卸载](#)

<hr>

`指令`

- [ ] [v-if](#)
- [ ] [v-for](#)
- [ ] [v-on](#)
- [ ] [自定义指令](#)

<hr>

`过滤器`

- [ ] [过滤器](#)

<hr>

`实践技巧`

- [ ] [实践技巧](#)

<hr>

### 对象检测

- [返回目录](#目录)

  <hr>

对象数据侦测主要的实现方法:

1. Object.defineProperty(obj, prop, descriptor)
2. proxy

`目前浏览器对ES6的支持度并不理想,所以主要还是使用Object.defineProperty来实现`

[Object.defineProperty 文档](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)

通过 Object.defineProperty 中的 get 和 set 来实现劫持数据

1. 订阅 读取数据时会调用 get 函数,在这一阶段可以得知哪些地方调用了该数据,从而把这些地方收集起来,称为`依赖`
2. 发布 set 时将收集到的依赖全部通知一遍

<hr>

### 依赖

- [返回目录](#目录)

  <hr>

依赖即是我们需要通知数据变化的位置,哪里用到了该数据,哪里就是依赖

```
<div>{{ age }}</div>
```

以上为例,这个 `div` 标签就是一个依赖,它使用了数据 `age`,在渲染时就会触发 `get`,来展示 `age` 的值,便触发了 `get` 收集依赖,之后在任意地方触发 `set`,就会通知给所有使用了 `age` 的依赖

但是依赖不仅仅是标签,如 watch、template 等等都可以作为依赖,为了便于集中处理,需要定义一个`watcher`来作为依赖管理者,通知依赖时只通知 watcher,再由 watcher 通知其他的具体依赖

<hr>

### observer

- [返回目录](#目录)

  <hr>

observer 主要用来将数据的所有属性转换成 get/set 形式来侦测

如上所述,可以基本实现一个对象的变化检测,但也有缺陷,它只能侦测数据是否被修改,无法侦测新增和删除,这个很好理解

- 对象`新增`时并没有通过 observer 转换成响应式
- 对象`删除`时我们的代码也并没有对删除这一操作做出响应

无法侦测,响应也就无从谈起了,这也是 vue 提供 [\$set](#)以及[\$delete](#) 这两个 API 的原因

<hr>
