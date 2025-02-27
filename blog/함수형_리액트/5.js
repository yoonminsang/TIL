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
