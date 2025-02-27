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

render();
