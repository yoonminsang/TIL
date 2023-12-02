// 간단하게 만든 store.
// class를 extends해서 새로운 클래스 인스턴스를 만들기 때문에 여러 store를 만들때 사용할 수 있습니다.

class Observable {
  constructor() {
    this._observers = new Set();
  }
  subscribe(observer) {
    this._observers.add(observer);
    return () => {
      this._observers = [...this._observers].filter((subscriber) => subscriber !== observer);
    };
  }

  unsubscribe(observer) {
    this._observers = [...this._observers].filter((subscriber) => subscriber !== observer);
  }

  unsubscribeAll() {
    this._observers = new Set();
  }

  notify(data) {
    this._observers.forEach((observer) => observer(data));
  }
}

class Store extends Observable {
  constructor(state) {
    super();
    this._state = state;
    this._debouncedId = -1;
  }

  subscribe(observer) {
    super.subscribe(observer);
    observer();
  }

  get state() {
    return this._state;
  }

  setState(updater) {
    const nextState = typeof updater === 'function' ? updater(this._state) : updater;
    this._state = nextState;
    this.debounceFrame(() => {
      this.notify(this._state);
    });
  }

  debounceFrame(callback) {
    cancelAnimationFrame(this._debouncedId);
    this._debouncedId = requestAnimationFrame(callback);
  }
}

// examples: 유저
/*
class UserStore extends Store {
  constructor(state) {
    super(state);
  }
  setUser(user) {
    this.setState(user);
  }
}

const userStore = new UserStore();
const unsubscribe = userStore.subscribe((state) => {
  console.log(`state: ${JSON.stringify(state)}`);
});
userStore.setState({ id: 1, name: 'minsang' });
userStore.setState((prevState) => ({ ...prevState, uuid: 'uuid' }));
userStore.setState((prevState) => ({ ...prevState, uuid: 'uuid' }));
userStore.setState((prevState) => ({ ...prevState, uuid: 'uuid' }));
 */
