// 간단 리액트
function createStore(reducer, initialState) {
  let state = initialState; // 현재 상태를 저장하는 변수
  let listeners = []; // 상태 변경을 감지하는 리스너 함수들을 저장하는 배열

  // 스토어 객체
  const store = {
    // 현재 상태를 반환하는 함수
    getState: () => state,

    // 액션을 디스패치하는 함수
    dispatch: (action) => {
      // 리듀서를 호출하여 새로운 상태를 얻음
      state = reducer(state, action);

      // 모든 리스너 함수를 호출하여 상태 변경을 알림
      listeners.forEach((listener) => listener());
    },

    // 상태 변경을 감지하는 리스너 함수를 등록하는 함수
    subscribe: (listener) => {
      listeners.push(listener);

      // 반환된 함수를 통해 해당 리스너를 제거할 수 있도록 함
      return () => {
        listeners = listeners.filter((l) => l !== listener);
      };
    },

    // 모든 리스너 초기화
    unsubscribeAll: () => {
      listeners = [];
    },
  };

  return store;
}

// examples: 여러 store 연동하기. combineStore를 구현하지 않아서 여러가지 단점이 보임.
/* 
// action-types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';
const SET_USER = 'SET_USER';

// actions
const increment = () => ({ type: INCREMENT });
const decrement = () => ({ type: DECREMENT });
const setUser = (user) => ({ type: SET_USER, payload: user });

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// 두 번째 리듀서
const userReducer = (state = null, action) => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

// store 생성
const rootReducer = (state = {}, action) => {
  return {
    counter: counterReducer(state.counter, action),
    user: userReducer(state.user, action),
  };
};

const store = createStore(rootReducer, { counter: 0, user: null });
console.log(store.getState());

const unsubscribe = store.subscribe(() => {
  console.log('현재 상태:', store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: SET_USER, payload: '10' });
*/

// examples: 카운터;
/** 
function counterReducer(state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + (action.payload ?? 1);
    case 'DECREMENT':
      return state - (action.payload ?? 1);
    default:
      return state;
  }
}

const store = createStore(counterReducer, 0);

const unsubscribe = store.subscribe(() => {
  console.log('현재 상태:', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT', payload: 10 });
store.dispatch({ type: 'DECREMENT' });
store.dispatch({ type: 'DECREMENT', payload: 10 });

unsubscribe();

store.dispatch({ type: 'INCREMENT' });
 */
