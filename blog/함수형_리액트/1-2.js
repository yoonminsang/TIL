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

function Counter() {
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
  $root.innerHTML = Counter();
}

render();
// 함수가 재실행되지만 기존의 state는 유지되어야한다. 이를 구현하기 위해 클로저를 사용했다.
// 첫번째 목표 완료
