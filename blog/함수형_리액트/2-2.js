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
