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
}

render();
