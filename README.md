## 其他

- [ ] [vue-router 实现](https://)
- [ ] [vuex 实现](https://)
- [ ] [vue-cli 实现](https://)

<hr>

## 目录

`双向绑定 observer`

- [x] [对象检测](#对象检测)
- [ ] [数组检测](#)
- [ ] [依赖](#)

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
