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
      ${Counter()}
      ${Input()}
      `;
}

render();
