// 함수형 리액트를 만들어보자.

// 첫번째 목표: 하나의 useState 동작하게 만들기

// 1-1
{
  function useState(initialState) {
    let state = initialState;
    const setState = (nextState) => {
      state = nextState;
      render();
    };
    return [state, setState];
  }

  function App() {
    const [count, setCount] = useState(1);
    console.log('count: ', count);
    window.increase = () => setCount(count + 1);
    window.decrease = () => setCount(count - 1);
    return /*html*/ `
      <div>
        count: ${count}
        <button onclick="increase()">increase</button>
        <button onclick="decrease()">decrease</button>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = App();
  }
  // render();
}
// 함수형 컴포넌트는 리렌더링이 일어날때마다 함수가 다시 호출된다.
// 즉 버튼을 눌르면 count가 증가하지만 `let state = initialState` 코드가 다시 실행되어서 count는 변하지 않는다.

// 1-2
{
  let state;

  function useState(initialState) {
    if (state === undefined) {
      state = initialState;
    }
    const setState = (nextState) => {
      state = nextState;
      render();
    };
    return [state, setState];
  }

  function App() {
    const [count, setCount] = useState(1);
    console.log('count: ', count);
    window.increase = () => setCount(count + 1);
    window.decrease = () => setCount(count - 1);
    return /*html*/ `
      <div>
        count: ${count}
        <button onclick="increase()">increase</button>
        <button onclick="decrease()">decrease</button>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = App();
  }

  // render();
}
// 함수가 재실행되지만 기존의 state는 유지되어야한다. 이를 구현하기 위해 클로저를 사용했다.
// 첫번째 목표 완료

// 두번째 목표: 여러개의 useState 동작하게 만들기

// 2-1
{
  let state;

  function useState(initialState) {
    if (state === undefined) {
      state = initialState;
    }
    const setState = (nextState) => {
      state = nextState;
      render();
    };
    return [state, setState];
  }

  function App() {
    const [count, setCount] = useState(1);
    console.log('count: ', count);
    window.increase = () => setCount(count + 1);
    window.decrease = () => setCount(count - 1);
    return /*html*/ `
      <div>
        count: ${count}  
        <button onclick="increase()">increase</button>
        <button onclick="decrease()">decrease</button>
      </div>
      `;
  }

  function Input() {
    const [input, setInput] = useState('');
    console.log('input: ', input);
    window.changeInput = () => setInput(document.querySelector('input').value);
    return /*html*/ `
      <div>
        input: ${input}
        <input oninput="changeInput()"/>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = `
      ${App()}
      ${Input()}
      `;
  }

  // render();
}
// count와 input이 항상 같은 값을 가진다.
// 두개의 state가 모두 state라는 하나의 클로저를 바라보고 있어서 생기는 문제다.

// 2-2
{
  let states = [];
  let statesIndex = 0;

  function useState(initialState) {
    if (states.length === statesIndex) {
      states.push(initialState);
    }

    const currentIndex = statesIndex;
    const state = states[currentIndex];
    const setState = (nextState) => {
      states[currentIndex] = nextState;
      render();
    };
    // 버그 테스트1
    // const state = states[statesIndex];
    // const setState = (nextState) => {
    //   console.log('setState index', statesIndex);
    //   states[statesIndex] = nextState;
    //   render();
    // };

    statesIndex += 1;
    return [state, setState];
  }

  function App() {
    const [count, setCount] = useState(1);
    console.log('count: ', count);
    window.increase = () => setCount(count + 1);
    window.decrease = () => setCount(count - 1);
    return /*html*/ `
      <div>
        count: ${count}  
        <button onclick="increase()">increase</button>
        <button onclick="decrease(event)">decrease</button>
      </div>
      `;
  }

  function Input() {
    const [input, setInput] = useState('');
    console.log('input: ', input);
    window.changeInput = () => setInput(document.querySelector('input').value);
    return /*html*/ `
      <div>
        input: ${input}
        <input oninput="changeInput()"/>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = `
      ${App()}
      ${Input()}
      `;
    statesIndex = 0;
    // 버그 테스트2: statesIndex 재할당하지 않기
  }

  // render();
}
// useState가 여러개있기 때문에 클로저를 배열로 변경했다.
// 배열로 변경하면서 index를 정확히 연결해줘야한다.

// point1. useState내부에 currentIndex라는 변수를 선언하기
// 만약 statesIndex를 그대로 사용하게 되면 버그가 발생한다.
// 위 코드에서 currentIndex를 정의하지 않으면 input이 변경되지 않고 count가 변경되는 버그가 생긴다.
// 즉 setState내부에서 statesIndex는 0으로 간주된다.

// 오래된 클로저
// setState 내부의 statesIndex는 함수가 선언될 당시의 값을 기억한다.
// useState가 여러번 실행되더라도, 이미 만들어진 클로저 내부에서는 이전 값을 계속 참조하게 된다.
// 그러면 states는 왜 제대로 동작하냐는 의문이 들 수 있다.
// states는 원시값이 아닌 객체다. 그렇기 때문에 동일한 값을 참조하게된다.
// 하지만 statesIndex는 원시값이기 때문에 값이 복사되고, 클로저 내부의 statesIndex는 함수 선언 당시의 값을 계속 유지하게 된다.

// point2
// render 될 때마다 statesIndex를 0으로 재선언하지 않으면 statesIndex는 계속 늘어나게 된다.
// 그래서 0으로 초기화가 꼭  필요하다.

// 세번째 목표: 하나의 state와 useEffect 동작하게 만들기

// 3
{
  let states = [];
  let statesIndex = 0;

  function useState(initialState) {
    if (states.length === statesIndex) {
      states.push(initialState);
    }

    const currentIndex = statesIndex;
    const state = states[currentIndex];
    const setState = (nextState) => {
      states[currentIndex] = nextState;
      render();
    };

    statesIndex += 1;
    return [state, setState];
  }

  let prevDeps;

  function useEffect(effect, deps) {
    const hasNoDeps = !deps;
    const hasChangedDeps = !prevDeps || deps.some((dep, i) => !Object.is(dep, prevDeps[i]));

    if (hasNoDeps || hasChangedDeps) {
      effect();
    }
    prevDeps = deps;
  }

  function App() {
    const [count, setCount] = useState(1);
    console.log('count: ', count);
    window.increase = () => setCount(count + 1);
    window.decrease = () => setCount(count - 1);
    window.render = render;
    useEffect(() => {
      console.log('useEffect: count changed', count);
    }, [count]);
    return /*html*/ `
      <div>
        count: ${count}  
        <button onclick="increase()">increase</button>
        <button onclick="decrease(event)">decrease</button>
        <button onclick="render()">rerender</button>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = `
      ${App()}
      `;
    statesIndex = 0;
  }

  // render();
}
// 클로저로 prevDeps를 정의하고 prevDeps와 currentDeps를 비교하면 state가 변경되었을 때 useEffect를 실행할 수 있다.

// 네번째 목표: 여러개의 state와 useEffect 동작하게 만들기

// 4
{
  let states = [];
  let statesIndex = 0;

  function useState(initialState) {
    if (states.length === statesIndex) {
      states.push(initialState);
    }

    const currentIndex = statesIndex;
    const state = states[currentIndex];
    const setState = (nextState) => {
      states[currentIndex] = nextState;
      render();
    };

    statesIndex += 1;
    return [state, setState];
  }

  let effects = [];
  let effectsIndex = 0;

  function useEffect(effect, deps) {
    const currentIndex = effectsIndex; // 오래된 클로저문제 방지
    const hasNoDeps = !deps;
    const prevDeps = effects[currentIndex];

    const hasChangedDeps = !prevDeps || deps.some((dep, i) => !Object.is(dep, prevDeps[i]));

    if (hasNoDeps || hasChangedDeps) {
      effect();
      effects[currentIndex] = deps;
    }

    effectsIndex += 1;
  }

  function App() {
    const [count, setCount] = useState(1);
    const [input, setInput] = useState('');

    console.log('count: ', count);
    console.log('input: ', input);

    window.increase = () => setCount(count + 1);
    window.decrease = () => setCount(count - 1);
    window.changeInput = () => setInput(document.querySelector('input').value);

    window.render = render;

    useEffect(() => {
      console.log('useEffect: count changed', count);
    }, [count]);
    useEffect(() => {
      console.log('useEffect: input changed', input);
    }, [input]);
    return /*html*/ `
      <div>
        count: ${count}  
        <button onclick="increase()">increase</button>
        <button onclick="decrease(event)">decrease</button>
        <button onclick="render()">rerender</button>
      </div>
      <div>
        input: ${input}
        <input oninput="changeInput()"/>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = `
      ${App()}
      `;
    statesIndex = 0;
    effectsIndex = 0;
  }

  // render();
}
// useState와 접근 방법이 크게 다르지 않다.
// deps의 내용이 이전과 변경되었는지 확인하고 변경된 경우에만 effect를 실행한다.

// 다섯번째 목표: useRef 구현하기
{
  let states = [];
  let statesIndex = 0;

  function useState(initialState) {
    if (states.length === statesIndex) {
      states.push(initialState);
    }

    const currentIndex = statesIndex;
    const state = states[currentIndex];
    const setState = (nextState) => {
      states[currentIndex] = nextState;
      render();
    };

    statesIndex += 1;
    return [state, setState];
  }

  let effects = [];
  let effectsIndex = 0;

  function useEffect(effect, deps) {
    const currentIndex = effectsIndex; // 오래된 클로저문제 방지
    const hasNoDeps = !deps;
    const prevDeps = effects[currentIndex];

    const hasChangedDeps = !prevDeps || deps.some((dep, i) => !Object.is(dep, prevDeps[i]));

    if (hasNoDeps || hasChangedDeps) {
      effect();
      effects[currentIndex] = deps;
    }

    effectsIndex += 1;
  }

  let refs = [];
  let refsIndex = 0;

  function useRef(initialValue) {
    if (refs.length === refsIndex) {
      refs.push({ current: initialValue });
    }

    const ref = refs[refsIndex];
    refsIndex += 1;
    return ref;
  }

  function App() {
    const [input, setInput] = useState('');
    const countRef = useRef(0);

    console.log('count: ', countRef.current);
    console.log('input: ', input);

    window.increase = () => (countRef.current = countRef.current + 1);
    window.decrease = () => (countRef.current = countRef.current - 1);
    window.changeInput = () => setInput(document.querySelector('input').value);

    window.render = render;

    useEffect(() => {
      console.log('useEffect: count changed', countRef.current);
    }, [countRef.current]);
    useEffect(() => {
      console.log('useEffect: input changed', input);
    }, [input]);
    return /*html*/ `
      <div>
        count: ${countRef.current}  
        <button onclick="increase()">increase</button>
        <button onclick="decrease(event)">decrease</button>
        <button onclick="render()">rerender</button>
      </div>
      <div>
        input: ${input}
        <input oninput="changeInput()"/>
      </div>
      `;
  }

  function render() {
    const $root = document.getElementById('root');
    $root.innerHTML = `
      ${App()}
      `;
    statesIndex = 0;
    effectsIndex = 0;
    refsIndex = 0;
  }

  render();
}
// useRef도 useState와 크게 다른게 없다.
// setState 대신 ref.current를 이용해서 상태를 변경하는 부분만 다르다.
// html에 ref를 적용하는건 v-dom을 구현해야 할 수 있기 때문에 일단은 생략한다.
