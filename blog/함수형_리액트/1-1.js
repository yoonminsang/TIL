function useState(initialState) {
  let state = initialState;
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
