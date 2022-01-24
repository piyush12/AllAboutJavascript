/**
 * Singleton
 */
let counter = 0;
class UserStore {
  constructor() {
    if (!UserStore.instance) {
      this._data = [];
      UserStore.instance = this;
    }

    return UserStore.instance;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }

  setData(){
    this._data.push("hello")
  }
}

const instance = Object.freeze(new UserStore());
const instance2 = new UserStore();
/* Object.freeze(instance);
// instance.increment();
// instance.increment();
// instance2.increment();
console.log(instance) */
