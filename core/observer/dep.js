export default class Dep {
  constructor() {
    this.subs = [];
  }

  addSub(sub) {
    this.subs.push(sub);
  }
  removeSub(sub) {
    remove(this.subs, sub);
  }

  // 订阅
  depend() {
    if (window.target) {
      // 假设window.target为依赖
      this.addSub(window.target);
    }
  }

  // 发布
  notify() {
    const subs = this.subs.slice(); // 浅拷贝

    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}

function remove(arr, item) {
  if (arr.length) {
    const index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
