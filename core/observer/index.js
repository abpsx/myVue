import Dep from "./dep.js";

function defineReactive(data, key, val) {
  if (typeof val === "object") {
    new Observer(val); // 对象递归添加get/set
  }
  let dep = new Dep();
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      dep.depend();
      return val;
    },
    set: function(newVal) {
      if (val === newVal) {
        return;
      }
      val = newVal;
      dep.notify();
    }
  });
}

// 将所有数据转为get/set形式
export class Observer {
  constructor(value) {
    this.value = value;

    if (!Array.isArray(value)) {
      // 数组与对象的数据检测有差异 通过判断分别处理两种数据类型
      this.walk(value);
    }
  }
  walk(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
      defineReactive(obj, keys[i], obj[keys[i]]);
    }
  }
}
