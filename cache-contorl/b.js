import { r as React, a as ReactDom, j as labcd } from './chunk-Ca2lm8wB.js';
const f = (n) => {
  const e = document.createElement('div');
  return e.setAttribute('id', n), document.body.appendChild(e), e;
};
m = ({ children, selector = 'portal', blockBodyScroll = !0 }) => {
  const ref = React.useRef(null),
    [state, setState] = React.useState(null),
    [, rerender] = React.useState({});
  return (
    React.useEffect(() => rerender({}), []),
    React.useEffect(() => {
      if (!state) return;
      const t = document.body;
      blockBodyScroll && (t.style.overflow = 'hidden'), (ref.current = f(selector));
      const u = ref.current;
      return (
        rerender({}),
        () => {
          t.contains(u) && (t.removeChild(u), (t.style.overflow = ''));
        }
      );
    }, [state, selector, blockBodyScroll]),
    ref.current
      ? ReactDom.createPortal(children, ref.current)
      : labcd.jsx('span', {
          ref: (t) => t && setState(t),
          style: {
            display: 'none',
          },
        })
  );
};
export { m as P };
//# sourceMappingURL=chunk-CkE64iIc.js.map
