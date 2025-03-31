var Gh = Object.defineProperty;
var bh = (e, t, n) =>
  t in e
    ? Gh(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n,
      })
    : (e[t] = n);
var Ul = (e, t, n) => bh(e, typeof t != 'symbol' ? t + '' : t, n);
function kf(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const l in r)
        if (l !== 'default' && !(l in e)) {
          const o = Object.getOwnPropertyDescriptor(r, l);
          o &&
            Object.defineProperty(
              e,
              l,
              o.get
                ? o
                : {
                    enumerable: !0,
                    get: () => r[l],
                  }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, {
      value: 'Module',
    })
  );
}
var y1 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {};
function xf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function Zh(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', {
      value: !0,
    }),
    Object.keys(e).forEach(function (r) {
      var l = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        l.get
          ? l
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            }
      );
    }),
    n
  );
}
var _f = {
    exports: {},
  },
  li = {},
  Rf = {
    exports: {},
  },
  Q = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rl = Symbol.for('react.element'),
  qh = Symbol.for('react.portal'),
  em = Symbol.for('react.fragment'),
  tm = Symbol.for('react.strict_mode'),
  nm = Symbol.for('react.profiler'),
  rm = Symbol.for('react.provider'),
  lm = Symbol.for('react.context'),
  om = Symbol.for('react.forward_ref'),
  im = Symbol.for('react.suspense'),
  am = Symbol.for('react.memo'),
  um = Symbol.for('react.lazy'),
  As = Symbol.iterator;
function sm(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (As && e[As]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var Cf = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Pf = Object.assign,
  Lf = {};
function _r(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Lf), (this.updater = n || Cf);
}
_r.prototype.isReactComponent = {};
_r.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
    );
  this.updater.enqueueSetState(this, e, t, 'setState');
};
_r.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate');
};
function Tf() {}
Tf.prototype = _r.prototype;
function fu(e, t, n) {
  (this.props = e), (this.context = t), (this.refs = Lf), (this.updater = n || Cf);
}
var du = (fu.prototype = new Tf());
du.constructor = fu;
Pf(du, _r.prototype);
du.isPureReactComponent = !0;
var zs = Array.isArray,
  Nf = Object.prototype.hasOwnProperty,
  pu = {
    current: null,
  },
  Df = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function Of(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = '' + t.key), t))
      Nf.call(t, r) && !Df.hasOwnProperty(r) && (l[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) l.children = n;
  else if (1 < a) {
    for (var u = Array(a), s = 0; s < a; s++) u[s] = arguments[s + 2];
    l.children = u;
  }
  if (e && e.defaultProps) for (r in ((a = e.defaultProps), a)) l[r] === void 0 && (l[r] = a[r]);
  return {
    $$typeof: Rl,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: pu.current,
  };
}
function cm(e, t) {
  return {
    $$typeof: Rl,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function hu(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === Rl;
}
function fm(e) {
  var t = {
    '=': '=0',
    ':': '=2',
  };
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Us = /\/+/g;
function Oi(e, t) {
  return typeof e == 'object' && e !== null && e.key != null ? fm('' + e.key) : t.toString(36);
}
function so(e, t, n, r, l) {
  var o = typeof e;
  (o === 'undefined' || o === 'boolean') && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case 'string':
      case 'number':
        i = !0;
        break;
      case 'object':
        switch (e.$$typeof) {
          case Rl:
          case qh:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === '' ? '.' + Oi(i, 0) : r),
      zs(l)
        ? ((n = ''),
          e != null && (n = e.replace(Us, '$&/') + '/'),
          so(l, t, n, '', function (s) {
            return s;
          }))
        : l != null &&
          (hu(l) &&
            (l = cm(l, n + (!l.key || (i && i.key === l.key) ? '' : ('' + l.key).replace(Us, '$&/') + '/') + e)),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === '' ? '.' : r + ':'), zs(e)))
    for (var a = 0; a < e.length; a++) {
      o = e[a];
      var u = r + Oi(o, a);
      i += so(o, t, n, u, l);
    }
  else if (((u = sm(e)), typeof u == 'function'))
    for (e = u.call(e), a = 0; !(o = e.next()).done; ) (o = o.value), (u = r + Oi(o, a++)), (i += so(o, t, n, u, l));
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t) +
          '). If you meant to render a collection of children, use an array instead.'
      ))
    );
  return i;
}
function $l(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    so(e, r, '', '', function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function dm(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Ve = {
    current: null,
  },
  co = {
    transition: null,
  },
  pm = {
    ReactCurrentDispatcher: Ve,
    ReactCurrentBatchConfig: co,
    ReactCurrentOwner: pu,
  };
Q.Children = {
  map: $l,
  forEach: function (e, t, n) {
    $l(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      $l(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      $l(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!hu(e)) throw Error('React.Children.only expected to receive a single React element child.');
    return e;
  },
};
Q.Component = _r;
Q.Fragment = em;
Q.Profiler = nm;
Q.PureComponent = fu;
Q.StrictMode = tm;
Q.Suspense = im;
Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pm;
Q.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error('React.cloneElement(...): The argument must be a React element, but you passed ' + e + '.');
  var r = Pf({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = pu.current)),
      t.key !== void 0 && (l = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (u in t) Nf.call(t, u) && !Df.hasOwnProperty(u) && (r[u] = t[u] === void 0 && a !== void 0 ? a[u] : t[u]);
  }
  var u = arguments.length - 2;
  if (u === 1) r.children = n;
  else if (1 < u) {
    a = Array(u);
    for (var s = 0; s < u; s++) a[s] = arguments[s + 2];
    r.children = a;
  }
  return {
    $$typeof: Rl,
    type: e.type,
    key: l,
    ref: o,
    props: r,
    _owner: i,
  };
};
Q.createContext = function (e) {
  return (
    (e = {
      $$typeof: lm,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: rm,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
Q.createElement = Of;
Q.createFactory = function (e) {
  var t = Of.bind(null, e);
  return (t.type = e), t;
};
Q.createRef = function () {
  return {
    current: null,
  };
};
Q.forwardRef = function (e) {
  return {
    $$typeof: om,
    render: e,
  };
};
Q.isValidElement = hu;
Q.lazy = function (e) {
  return {
    $$typeof: um,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: dm,
  };
};
Q.memo = function (e, t) {
  return {
    $$typeof: am,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
Q.startTransition = function (e) {
  var t = co.transition;
  co.transition = {};
  try {
    e();
  } finally {
    co.transition = t;
  }
};
Q.unstable_act = function () {
  throw Error('act(...) is not supported in production builds of React.');
};
Q.useCallback = function (e, t) {
  return Ve.current.useCallback(e, t);
};
Q.useContext = function (e) {
  return Ve.current.useContext(e);
};
Q.useDebugValue = function () {};
Q.useDeferredValue = function (e) {
  return Ve.current.useDeferredValue(e);
};
Q.useEffect = function (e, t) {
  return Ve.current.useEffect(e, t);
};
Q.useId = function () {
  return Ve.current.useId();
};
Q.useImperativeHandle = function (e, t, n) {
  return Ve.current.useImperativeHandle(e, t, n);
};
Q.useInsertionEffect = function (e, t) {
  return Ve.current.useInsertionEffect(e, t);
};
Q.useLayoutEffect = function (e, t) {
  return Ve.current.useLayoutEffect(e, t);
};
Q.useMemo = function (e, t) {
  return Ve.current.useMemo(e, t);
};
Q.useReducer = function (e, t, n) {
  return Ve.current.useReducer(e, t, n);
};
Q.useRef = function (e) {
  return Ve.current.useRef(e);
};
Q.useState = function (e) {
  return Ve.current.useState(e);
};
Q.useSyncExternalStore = function (e, t, n) {
  return Ve.current.useSyncExternalStore(e, t, n);
};
Q.useTransition = function () {
  return Ve.current.useTransition();
};
Q.version = '18.2.0';
Rf.exports = Q;
var g = Rf.exports;
const hm = xf(g),
  Mf = kf(
    {
      __proto__: null,
      default: hm,
    },
    [g]
  );
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mm = g,
  vm = Symbol.for('react.element'),
  ym = Symbol.for('react.fragment'),
  gm = Object.prototype.hasOwnProperty,
  wm = mm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Em = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function Ff(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = '' + n), t.key !== void 0 && (o = '' + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) gm.call(t, r) && !Em.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: vm,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: wm.current,
  };
}
li.Fragment = ym;
li.jsx = Ff;
li.jsxs = Ff;
_f.exports = li;
var g1 = _f.exports,
  If = {
    exports: {},
  },
  tt = {},
  jf = {
    exports: {},
  },
  Af = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(M, B) {
    var H = M.length;
    M.push(B);
    e: for (; 0 < H; ) {
      var Z = (H - 1) >>> 1,
        le = M[Z];
      if (0 < l(le, B)) (M[Z] = B), (M[H] = le), (H = Z);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var B = M[0],
      H = M.pop();
    if (H !== B) {
      M[0] = H;
      e: for (var Z = 0, le = M.length, kt = le >>> 1; Z < kt; ) {
        var Te = 2 * (Z + 1) - 1,
          dt = M[Te],
          ze = Te + 1,
          Mt = M[ze];
        if (0 > l(dt, H))
          ze < le && 0 > l(Mt, dt) ? ((M[Z] = Mt), (M[ze] = H), (Z = ze)) : ((M[Z] = dt), (M[Te] = H), (Z = Te));
        else if (ze < le && 0 > l(Mt, H)) (M[Z] = Mt), (M[ze] = H), (Z = ze);
        else break e;
      }
    }
    return B;
  }
  function l(M, B) {
    var H = M.sortIndex - B.sortIndex;
    return H !== 0 ? H : M.id - B.id;
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      a = i.now();
    e.unstable_now = function () {
      return i.now() - a;
    };
  }
  var u = [],
    s = [],
    d = 1,
    c = null,
    f = 3,
    w = !1,
    m = !1,
    k = !1,
    P = typeof setTimeout == 'function' ? setTimeout : null,
    h = typeof clearTimeout == 'function' ? clearTimeout : null,
    p = typeof setImmediate < 'u' ? setImmediate : null;
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function v(M) {
    for (var B = n(s); B !== null; ) {
      if (B.callback === null) r(s);
      else if (B.startTime <= M) r(s), (B.sortIndex = B.expirationTime), t(u, B);
      else break;
      B = n(s);
    }
  }
  function S(M) {
    if (((k = !1), v(M), !m))
      if (n(u) !== null) (m = !0), rt(C);
      else {
        var B = n(s);
        B !== null && ye(S, B.startTime - M);
      }
  }
  function C(M, B) {
    (m = !1), k && ((k = !1), h(R), (R = -1)), (w = !0);
    var H = f;
    try {
      for (v(B), c = n(u); c !== null && (!(c.expirationTime > B) || (M && !K())); ) {
        var Z = c.callback;
        if (typeof Z == 'function') {
          (c.callback = null), (f = c.priorityLevel);
          var le = Z(c.expirationTime <= B);
          (B = e.unstable_now()), typeof le == 'function' ? (c.callback = le) : c === n(u) && r(u), v(B);
        } else r(u);
        c = n(u);
      }
      if (c !== null) var kt = !0;
      else {
        var Te = n(s);
        Te !== null && ye(S, Te.startTime - B), (kt = !1);
      }
      return kt;
    } finally {
      (c = null), (f = H), (w = !1);
    }
  }
  var y = !1,
    L = null,
    R = -1,
    D = 5,
    O = -1;
  function K() {
    return !(e.unstable_now() - O < D);
  }
  function G() {
    if (L !== null) {
      var M = e.unstable_now();
      O = M;
      var B = !0;
      try {
        B = L(!0, M);
      } finally {
        B ? de() : ((y = !1), (L = null));
      }
    } else y = !1;
  }
  var de;
  if (typeof p == 'function')
    de = function () {
      p(G);
    };
  else if (typeof MessageChannel < 'u') {
    var pe = new MessageChannel(),
      Le = pe.port2;
    (pe.port1.onmessage = G),
      (de = function () {
        Le.postMessage(null);
      });
  } else
    de = function () {
      P(G, 0);
    };
  function rt(M) {
    (L = M), y || ((y = !0), de());
  }
  function ye(M, B) {
    R = P(function () {
      M(e.unstable_now());
    }, B);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      m || w || ((m = !0), rt(C));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
          )
        : (D = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(u);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var B = 3;
          break;
        default:
          B = f;
      }
      var H = f;
      f = B;
      try {
        return M();
      } finally {
        f = H;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, B) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var H = f;
      f = M;
      try {
        return B();
      } finally {
        f = H;
      }
    }),
    (e.unstable_scheduleCallback = function (M, B, H) {
      var Z = e.unstable_now();
      switch (
        (typeof H == 'object' && H !== null
          ? ((H = H.delay), (H = typeof H == 'number' && 0 < H ? Z + H : Z))
          : (H = Z),
        M)
      ) {
        case 1:
          var le = -1;
          break;
        case 2:
          le = 250;
          break;
        case 5:
          le = 1073741823;
          break;
        case 4:
          le = 1e4;
          break;
        default:
          le = 5e3;
      }
      return (
        (le = H + le),
        (M = {
          id: d++,
          callback: B,
          priorityLevel: M,
          startTime: H,
          expirationTime: le,
          sortIndex: -1,
        }),
        H > Z
          ? ((M.sortIndex = H), t(s, M), n(u) === null && M === n(s) && (k ? (h(R), (R = -1)) : (k = !0), ye(S, H - Z)))
          : ((M.sortIndex = le), t(u, M), m || w || ((m = !0), rt(C))),
        M
      );
    }),
    (e.unstable_shouldYield = K),
    (e.unstable_wrapCallback = function (M) {
      var B = f;
      return function () {
        var H = f;
        f = B;
        try {
          return M.apply(this, arguments);
        } finally {
          f = H;
        }
      };
    });
})(Af);
jf.exports = Af;
var Sm = jf.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zf = g,
  et = Sm;
function N(e) {
  for (var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1; n < arguments.length; n++)
    t += '&args[]=' + encodeURIComponent(arguments[n]);
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  );
}
var Uf = new Set(),
  al = {};
function Bn(e, t) {
  mr(e, t), mr(e + 'Capture', t);
}
function mr(e, t) {
  for (al[e] = t, e = 0; e < t.length; e++) Uf.add(t[e]);
}
var Vt = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
  fa = Object.prototype.hasOwnProperty,
  km =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  $s = {},
  Bs = {};
function xm(e) {
  return fa.call(Bs, e) ? !0 : fa.call($s, e) ? !1 : km.test(e) ? (Bs[e] = !0) : (($s[e] = !0), !1);
}
function _m(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0;
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-');
    default:
      return !1;
  }
}
function Rm(e, t, n, r) {
  if (t === null || typeof t > 'u' || _m(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function He(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var Me = {};
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Me[e] = new He(e, 0, !1, e, null, !1, !1);
  });
[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0];
  Me[t] = new He(t, 1, !1, e[1], null, !1, !1);
});
['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Me[e] = new He(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
['autoReverse', 'externalResourcesRequired', 'focusable', 'preserveAlpha'].forEach(function (e) {
  Me[e] = new He(e, 2, !1, e, null, !1, !1);
});
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Me[e] = new He(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Me[e] = new He(e, 3, !0, e, null, !1, !1);
});
['capture', 'download'].forEach(function (e) {
  Me[e] = new He(e, 4, !1, e, null, !1, !1);
});
['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Me[e] = new He(e, 6, !1, e, null, !1, !1);
});
['rowSpan', 'start'].forEach(function (e) {
  Me[e] = new He(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mu = /[\-:]([a-z])/g;
function vu(e) {
  return e[1].toUpperCase();
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(mu, vu);
    Me[t] = new He(t, 1, !1, e, null, !1, !1);
  });
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'.split(' ').forEach(function (e) {
  var t = e.replace(mu, vu);
  Me[t] = new He(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1);
});
['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(mu, vu);
  Me[t] = new He(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1);
});
['tabIndex', 'crossOrigin'].forEach(function (e) {
  Me[e] = new He(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new He('xlinkHref', 1, !1, 'xlink:href', 'http://www.w3.org/1999/xlink', !0, !1);
['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Me[e] = new He(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yu(e, t, n, r) {
  var l = Me.hasOwnProperty(t) ? Me[t] : null;
  (l !== null
    ? l.type !== 0
    : r || !(2 < t.length) || (t[0] !== 'o' && t[0] !== 'O') || (t[1] !== 'n' && t[1] !== 'N')) &&
    (Rm(t, n, l, r) && (n = null),
    r || l === null
      ? xm(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : l.mustUseProperty
        ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : '') : n)
        : ((t = l.attributeName),
          (r = l.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((l = l.type),
              (n = l === 3 || (l === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Xt = zf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Bl = Symbol.for('react.element'),
  bn = Symbol.for('react.portal'),
  Zn = Symbol.for('react.fragment'),
  gu = Symbol.for('react.strict_mode'),
  da = Symbol.for('react.profiler'),
  $f = Symbol.for('react.provider'),
  Bf = Symbol.for('react.context'),
  wu = Symbol.for('react.forward_ref'),
  pa = Symbol.for('react.suspense'),
  ha = Symbol.for('react.suspense_list'),
  Eu = Symbol.for('react.memo'),
  en = Symbol.for('react.lazy'),
  Vf = Symbol.for('react.offscreen'),
  Vs = Symbol.iterator;
function Fr(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (Vs && e[Vs]) || e['@@iterator']), typeof e == 'function' ? e : null);
}
var fe = Object.assign,
  Mi;
function Yr(e) {
  if (Mi === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Mi = (t && t[1]) || '';
    }
  return (
    `
` +
    Mi +
    e
  );
}
var Fi = !1;
function Ii(e, t) {
  if (!e || Fi) return '';
  Fi = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (s) {
          var r = s;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (s) {
          r = s;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (s) {
        r = s;
      }
      e();
    }
  } catch (s) {
    if (s && r && typeof s.stack == 'string') {
      for (
        var l = s.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          a = o.length - 1;
        1 <= i && 0 <= a && l[i] !== o[a];

      )
        a--;
      for (; 1 <= i && 0 <= a; i--, a--)
        if (l[i] !== o[a]) {
          if (i !== 1 || a !== 1)
            do
              if ((i--, a--, 0 > a || l[i] !== o[a])) {
                var u =
                  `
` + l[i].replace(' at new ', ' at ');
                return e.displayName && u.includes('<anonymous>') && (u = u.replace('<anonymous>', e.displayName)), u;
              }
            while (1 <= i && 0 <= a);
          break;
        }
    }
  } finally {
    (Fi = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : '') ? Yr(e) : '';
}
function Cm(e) {
  switch (e.tag) {
    case 5:
      return Yr(e.type);
    case 16:
      return Yr('Lazy');
    case 13:
      return Yr('Suspense');
    case 19:
      return Yr('SuspenseList');
    case 0:
    case 2:
    case 15:
      return (e = Ii(e.type, !1)), e;
    case 11:
      return (e = Ii(e.type.render, !1)), e;
    case 1:
      return (e = Ii(e.type, !0)), e;
    default:
      return '';
  }
}
function ma(e) {
  if (e == null) return null;
  if (typeof e == 'function') return e.displayName || e.name || null;
  if (typeof e == 'string') return e;
  switch (e) {
    case Zn:
      return 'Fragment';
    case bn:
      return 'Portal';
    case da:
      return 'Profiler';
    case gu:
      return 'StrictMode';
    case pa:
      return 'Suspense';
    case ha:
      return 'SuspenseList';
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case Bf:
        return (e.displayName || 'Context') + '.Consumer';
      case $f:
        return (e._context.displayName || 'Context') + '.Provider';
      case wu:
        var t = e.render;
        return (
          (e = e.displayName),
          e || ((e = t.displayName || t.name || ''), (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        );
      case Eu:
        return (t = e.displayName || null), t !== null ? t : ma(e.type) || 'Memo';
      case en:
        (t = e._payload), (e = e._init);
        try {
          return ma(e(t));
        } catch {}
    }
  return null;
}
function Pm(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return 'Cache';
    case 9:
      return (t.displayName || 'Context') + '.Consumer';
    case 10:
      return (t._context.displayName || 'Context') + '.Provider';
    case 18:
      return 'DehydratedFragment';
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      );
    case 7:
      return 'Fragment';
    case 5:
      return t;
    case 4:
      return 'Portal';
    case 3:
      return 'Root';
    case 6:
      return 'Text';
    case 16:
      return ma(t);
    case 8:
      return t === gu ? 'StrictMode' : 'Mode';
    case 22:
      return 'Offscreen';
    case 12:
      return 'Profiler';
    case 21:
      return 'Scope';
    case 13:
      return 'Suspense';
    case 19:
      return 'SuspenseList';
    case 25:
      return 'TracingMarker';
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null;
      if (typeof t == 'string') return t;
  }
  return null;
}
function vn(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e;
    case 'object':
      return e;
    default:
      return '';
  }
}
function Hf(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === 'input' && (t === 'checkbox' || t === 'radio');
}
function Lm(e) {
  var t = Hf(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t];
  if (!e.hasOwnProperty(t) && typeof n < 'u' && typeof n.get == 'function' && typeof n.set == 'function') {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = '' + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = '' + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Vl(e) {
  e._valueTracker || (e._valueTracker = Lm(e));
}
function Wf(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = '';
  return e && (r = Hf(e) ? (e.checked ? 'true' : 'false') : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Co(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')) return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function va(e, t) {
  var n = t.checked;
  return fe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Hs(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = vn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled: t.type === 'checkbox' || t.type === 'radio' ? t.checked != null : t.value != null,
    });
}
function Kf(e, t) {
  (t = t.checked), t != null && yu(e, 'checked', t, !1);
}
function ya(e, t) {
  Kf(e, t);
  var n = vn(t.value),
    r = t.type;
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n);
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value');
    return;
  }
  t.hasOwnProperty('value') ? ga(e, t.type, n) : t.hasOwnProperty('defaultValue') && ga(e, t.type, vn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Ws(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type;
    if (!((r !== 'submit' && r !== 'reset') || (t.value !== void 0 && t.value !== null))) return;
    (t = '' + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
  }
  (n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n);
}
function ga(e, t, n) {
  (t !== 'number' || Co(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n));
}
var Qr = Array.isArray;
function sr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t['$' + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = '' + vn(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function wa(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(N(91));
  return fe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  });
}
function Ks(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(N(92));
      if (Qr(n)) {
        if (1 < n.length) throw Error(N(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ''), (n = t);
  }
  e._wrapperState = {
    initialValue: vn(n),
  };
}
function Yf(e, t) {
  var n = vn(t.value),
    r = vn(t.defaultValue);
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r);
}
function Ys(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t);
}
function Qf(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg';
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML';
    default:
      return 'http://www.w3.org/1999/xhtml';
  }
}
function Ea(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? Qf(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e;
}
var Hl,
  Xf = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e) e.innerHTML = t;
    else {
      for (
        Hl = Hl || document.createElement('div'),
          Hl.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = Hl.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ul(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var br = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Tm = ['Webkit', 'ms', 'Moz', 'O'];
Object.keys(br).forEach(function (e) {
  Tm.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (br[t] = br[e]);
  });
});
function Jf(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (br.hasOwnProperty(e) && br[e])
      ? ('' + t).trim()
      : t + 'px';
}
function Gf(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        l = Jf(n, t[n], r);
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Nm = fe(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Sa(e, t) {
  if (t) {
    if (Nm[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(N(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(N(60));
      if (typeof t.dangerouslySetInnerHTML != 'object' || !('__html' in t.dangerouslySetInnerHTML)) throw Error(N(61));
    }
    if (t.style != null && typeof t.style != 'object') throw Error(N(62));
  }
}
function ka(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string';
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1;
    default:
      return !0;
  }
}
var xa = null;
function Su(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var _a = null,
  cr = null,
  fr = null;
function Qs(e) {
  if ((e = Ll(e))) {
    if (typeof _a != 'function') throw Error(N(280));
    var t = e.stateNode;
    t && ((t = si(t)), _a(e.stateNode, e.type, t));
  }
}
function bf(e) {
  cr ? (fr ? fr.push(e) : (fr = [e])) : (cr = e);
}
function Zf() {
  if (cr) {
    var e = cr,
      t = fr;
    if (((fr = cr = null), Qs(e), t)) for (e = 0; e < t.length; e++) Qs(t[e]);
  }
}
function qf(e, t) {
  return e(t);
}
function ed() {}
var ji = !1;
function td(e, t, n) {
  if (ji) return e(t, n);
  ji = !0;
  try {
    return qf(e, t, n);
  } finally {
    (ji = !1), (cr !== null || fr !== null) && (ed(), Zf());
  }
}
function sl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = si(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      (r = !r.disabled) ||
        ((e = e.type), (r = !(e === 'button' || e === 'input' || e === 'select' || e === 'textarea'))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != 'function') throw Error(N(231, t, typeof n));
  return n;
}
var Ra = !1;
if (Vt)
  try {
    var Ir = {};
    Object.defineProperty(Ir, 'passive', {
      get: function () {
        Ra = !0;
      },
    }),
      window.addEventListener('test', Ir, Ir),
      window.removeEventListener('test', Ir, Ir);
  } catch {
    Ra = !1;
  }
function Dm(e, t, n, r, l, o, i, a, u) {
  var s = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, s);
  } catch (d) {
    this.onError(d);
  }
}
var Zr = !1,
  Po = null,
  Lo = !1,
  Ca = null,
  Om = {
    onError: function (e) {
      (Zr = !0), (Po = e);
    },
  };
function Mm(e, t, n, r, l, o, i, a, u) {
  (Zr = !1), (Po = null), Dm.apply(Om, arguments);
}
function Fm(e, t, n, r, l, o, i, a, u) {
  if ((Mm.apply(this, arguments), Zr)) {
    if (Zr) {
      var s = Po;
      (Zr = !1), (Po = null);
    } else throw Error(N(198));
    Lo || ((Lo = !0), (Ca = s));
  }
}
function Vn(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function nd(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
  }
  return null;
}
function Xs(e) {
  if (Vn(e) !== e) throw Error(N(188));
}
function Im(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Vn(e)), t === null)) throw Error(N(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Xs(l), e;
        if (o === r) return Xs(l), t;
        o = o.sibling;
      }
      throw Error(N(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, a = l.child; a; ) {
        if (a === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (a === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        a = a.sibling;
      }
      if (!i) {
        for (a = o.child; a; ) {
          if (a === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (a === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          a = a.sibling;
        }
        if (!i) throw Error(N(189));
      }
    }
    if (n.alternate !== r) throw Error(N(190));
  }
  if (n.tag !== 3) throw Error(N(188));
  return n.stateNode.current === n ? e : t;
}
function rd(e) {
  return (e = Im(e)), e !== null ? ld(e) : null;
}
function ld(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ld(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var od = et.unstable_scheduleCallback,
  Js = et.unstable_cancelCallback,
  jm = et.unstable_shouldYield,
  Am = et.unstable_requestPaint,
  ge = et.unstable_now,
  zm = et.unstable_getCurrentPriorityLevel,
  ku = et.unstable_ImmediatePriority,
  id = et.unstable_UserBlockingPriority,
  To = et.unstable_NormalPriority,
  Um = et.unstable_LowPriority,
  ad = et.unstable_IdlePriority,
  oi = null,
  Pt = null;
function $m(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == 'function')
    try {
      Pt.onCommitFiberRoot(oi, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var gt = Math.clz32 ? Math.clz32 : Hm,
  Bm = Math.log,
  Vm = Math.LN2;
function Hm(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bm(e) / Vm) | 0)) | 0;
}
var Wl = 64,
  Kl = 4194304;
function Xr(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function No(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var a = i & ~l;
    a !== 0 ? (r = Xr(a)) : ((o &= i), o !== 0 && (r = Xr(o)));
  } else (i = n & ~l), i !== 0 ? (r = Xr(i)) : o !== 0 && (r = Xr(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0)))
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - gt(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function Wm(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Km(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - gt(o),
      a = 1 << i,
      u = l[i];
    u === -1 ? (!(a & n) || a & r) && (l[i] = Wm(a, t)) : u <= t && (e.expiredLanes |= a), (o &= ~a);
  }
}
function Pa(e) {
  return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ud() {
  var e = Wl;
  return (Wl <<= 1), !(Wl & 4194240) && (Wl = 64), e;
}
function Ai(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - gt(t)),
    (e[t] = n);
}
function Ym(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - gt(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function xu(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - gt(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var ee = 0;
function sd(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var cd,
  _u,
  fd,
  dd,
  pd,
  La = !1,
  Yl = [],
  un = null,
  sn = null,
  cn = null,
  cl = new Map(),
  fl = new Map(),
  nn = [],
  Qm =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' '
    );
function Gs(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      un = null;
      break;
    case 'dragenter':
    case 'dragleave':
      sn = null;
      break;
    case 'mouseover':
    case 'mouseout':
      cn = null;
      break;
    case 'pointerover':
    case 'pointerout':
      cl.delete(t.pointerId);
      break;
    case 'gotpointercapture':
    case 'lostpointercapture':
      fl.delete(t.pointerId);
  }
}
function jr(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = Ll(t)), t !== null && _u(t)),
      e)
    : ((e.eventSystemFlags |= r), (t = e.targetContainers), l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Xm(e, t, n, r, l) {
  switch (t) {
    case 'focusin':
      return (un = jr(un, e, t, n, r, l)), !0;
    case 'dragenter':
      return (sn = jr(sn, e, t, n, r, l)), !0;
    case 'mouseover':
      return (cn = jr(cn, e, t, n, r, l)), !0;
    case 'pointerover':
      var o = l.pointerId;
      return cl.set(o, jr(cl.get(o) || null, e, t, n, r, l)), !0;
    case 'gotpointercapture':
      return (o = l.pointerId), fl.set(o, jr(fl.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function hd(e) {
  var t = Tn(e.target);
  if (t !== null) {
    var n = Vn(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = nd(n)), t !== null)) {
          (e.blockedOn = t),
            pd(e.priority, function () {
              fd(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function fo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Ta(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (xa = r), n.target.dispatchEvent(r), (xa = null);
    } else return (t = Ll(n)), t !== null && _u(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function bs(e, t, n) {
  fo(e) && n.delete(t);
}
function Jm() {
  (La = !1),
    un !== null && fo(un) && (un = null),
    sn !== null && fo(sn) && (sn = null),
    cn !== null && fo(cn) && (cn = null),
    cl.forEach(bs),
    fl.forEach(bs);
}
function Ar(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null), La || ((La = !0), et.unstable_scheduleCallback(et.unstable_NormalPriority, Jm)));
}
function dl(e) {
  function t(l) {
    return Ar(l, e);
  }
  if (0 < Yl.length) {
    Ar(Yl[0], e);
    for (var n = 1; n < Yl.length; n++) {
      var r = Yl[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    un !== null && Ar(un, e), sn !== null && Ar(sn, e), cn !== null && Ar(cn, e), cl.forEach(t), fl.forEach(t), n = 0;
    n < nn.length;
    n++
  )
    (r = nn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < nn.length && ((n = nn[0]), n.blockedOn === null); ) hd(n), n.blockedOn === null && nn.shift();
}
var dr = Xt.ReactCurrentBatchConfig,
  Do = !0;
function Gm(e, t, n, r) {
  var l = ee,
    o = dr.transition;
  dr.transition = null;
  try {
    (ee = 1), Ru(e, t, n, r);
  } finally {
    (ee = l), (dr.transition = o);
  }
}
function bm(e, t, n, r) {
  var l = ee,
    o = dr.transition;
  dr.transition = null;
  try {
    (ee = 4), Ru(e, t, n, r);
  } finally {
    (ee = l), (dr.transition = o);
  }
}
function Ru(e, t, n, r) {
  if (Do) {
    var l = Ta(e, t, n, r);
    if (l === null) Qi(e, t, r, Oo, n), Gs(e, r);
    else if (Xm(l, e, t, n, r)) r.stopPropagation();
    else if ((Gs(e, r), t & 4 && -1 < Qm.indexOf(e))) {
      for (; l !== null; ) {
        var o = Ll(l);
        if ((o !== null && cd(o), (o = Ta(e, t, n, r)), o === null && Qi(e, t, r, Oo, n), o === l)) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Qi(e, t, r, null, n);
  }
}
var Oo = null;
function Ta(e, t, n, r) {
  if (((Oo = null), (e = Su(r)), (e = Tn(e)), e !== null))
    if (((t = Vn(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = nd(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Oo = e), null;
}
function md(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1;
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4;
    case 'message':
      switch (zm()) {
        case ku:
          return 1;
        case id:
          return 4;
        case To:
        case Um:
          return 16;
        case ad:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ln = null,
  Cu = null,
  po = null;
function vd() {
  if (po) return po;
  var e,
    t = Cu,
    n = t.length,
    r,
    l = 'value' in ln ? ln.value : ln.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (po = l.slice(e, 1 < r ? 1 - r : void 0));
}
function ho(e) {
  var t = e.keyCode;
  return (
    'charCode' in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function Ql() {
  return !0;
}
function Zs() {
  return !1;
}
function nt(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var a in e) e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(o) : o[a]));
    return (
      (this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ql : Zs),
      (this.isPropagationStopped = Zs),
      this
    );
  }
  return (
    fe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault ? n.preventDefault() : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = Ql));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = Ql));
      },
      persist: function () {},
      isPersistent: Ql,
    }),
    t
  );
}
var Rr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Pu = nt(Rr),
  Pl = fe({}, Rr, {
    view: 0,
    detail: 0,
  }),
  Zm = nt(Pl),
  zi,
  Ui,
  zr,
  ii = fe({}, Pl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: Lu,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== zr &&
            (zr && e.type === 'mousemove'
              ? ((zi = e.screenX - zr.screenX), (Ui = e.screenY - zr.screenY))
              : (Ui = zi = 0),
            (zr = e)),
          zi);
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Ui;
    },
  }),
  qs = nt(ii),
  qm = fe({}, ii, {
    dataTransfer: 0,
  }),
  ev = nt(qm),
  tv = fe({}, Pl, {
    relatedTarget: 0,
  }),
  $i = nt(tv),
  nv = fe({}, Rr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  rv = nt(nv),
  lv = fe({}, Rr, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData;
    },
  }),
  ov = nt(lv),
  iv = fe({}, Rr, {
    data: 0,
  }),
  ec = nt(iv),
  av = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  uv = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
    33: 'PageUp',
    34: 'PageDown',
    35: 'End',
    36: 'Home',
    37: 'ArrowLeft',
    38: 'ArrowUp',
    39: 'ArrowRight',
    40: 'ArrowDown',
    45: 'Insert',
    46: 'Delete',
    112: 'F1',
    113: 'F2',
    114: 'F3',
    115: 'F4',
    116: 'F5',
    117: 'F6',
    118: 'F7',
    119: 'F8',
    120: 'F9',
    121: 'F10',
    122: 'F11',
    123: 'F12',
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  sv = {
    Alt: 'altKey',
    Control: 'ctrlKey',
    Meta: 'metaKey',
    Shift: 'shiftKey',
  };
function cv(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sv[e]) ? !!t[e] : !1;
}
function Lu() {
  return cv;
}
var fv = fe({}, Pl, {
    key: function (e) {
      if (e.key) {
        var t = av[e.key] || e.key;
        if (t !== 'Unidentified') return t;
      }
      return e.type === 'keypress'
        ? ((e = ho(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? uv[e.keyCode] || 'Unidentified'
          : '';
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Lu,
    charCode: function (e) {
      return e.type === 'keypress' ? ho(e) : 0;
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === 'keypress' ? ho(e) : e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0;
    },
  }),
  dv = nt(fv),
  pv = fe({}, ii, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tc = nt(pv),
  hv = fe({}, Pl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Lu,
  }),
  mv = nt(hv),
  vv = fe({}, Rr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  yv = nt(vv),
  gv = fe({}, ii, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return 'deltaY' in e ? e.deltaY : 'wheelDeltaY' in e ? -e.wheelDeltaY : 'wheelDelta' in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wv = nt(gv),
  Ev = [9, 13, 27, 32],
  Tu = Vt && 'CompositionEvent' in window,
  qr = null;
Vt && 'documentMode' in document && (qr = document.documentMode);
var Sv = Vt && 'TextEvent' in window && !qr,
  yd = Vt && (!Tu || (qr && 8 < qr && 11 >= qr)),
  nc = ' ',
  rc = !1;
function gd(e, t) {
  switch (e) {
    case 'keyup':
      return Ev.indexOf(t.keyCode) !== -1;
    case 'keydown':
      return t.keyCode !== 229;
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0;
    default:
      return !1;
  }
}
function wd(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null;
}
var qn = !1;
function kv(e, t) {
  switch (e) {
    case 'compositionend':
      return wd(t);
    case 'keypress':
      return t.which !== 32 ? null : ((rc = !0), nc);
    case 'textInput':
      return (e = t.data), e === nc && rc ? null : e;
    default:
      return null;
  }
}
function xv(e, t) {
  if (qn) return e === 'compositionend' || (!Tu && gd(e, t)) ? ((e = vd()), (po = Cu = ln = null), (qn = !1), e) : null;
  switch (e) {
    case 'paste':
      return null;
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case 'compositionend':
      return yd && t.locale !== 'ko' ? null : t.data;
    default:
      return null;
  }
}
var _v = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function lc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === 'input' ? !!_v[e.type] : t === 'textarea';
}
function Ed(e, t, n, r) {
  bf(r),
    (t = Mo(t, 'onChange')),
    0 < t.length &&
      ((n = new Pu('onChange', 'change', null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var el = null,
  pl = null;
function Rv(e) {
  Dd(e, 0);
}
function ai(e) {
  var t = nr(e);
  if (Wf(t)) return e;
}
function Cv(e, t) {
  if (e === 'change') return t;
}
var Sd = !1;
if (Vt) {
  var Bi;
  if (Vt) {
    var Vi = 'oninput' in document;
    if (!Vi) {
      var oc = document.createElement('div');
      oc.setAttribute('oninput', 'return;'), (Vi = typeof oc.oninput == 'function');
    }
    Bi = Vi;
  } else Bi = !1;
  Sd = Bi && (!document.documentMode || 9 < document.documentMode);
}
function ic() {
  el && (el.detachEvent('onpropertychange', kd), (pl = el = null));
}
function kd(e) {
  if (e.propertyName === 'value' && ai(pl)) {
    var t = [];
    Ed(t, pl, e, Su(e)), td(Rv, t);
  }
}
function Pv(e, t, n) {
  e === 'focusin' ? (ic(), (el = t), (pl = n), el.attachEvent('onpropertychange', kd)) : e === 'focusout' && ic();
}
function Lv(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return ai(pl);
}
function Tv(e, t) {
  if (e === 'click') return ai(t);
}
function Nv(e, t) {
  if (e === 'input' || e === 'change') return ai(t);
}
function Dv(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Et = typeof Object.is == 'function' ? Object.is : Dv;
function hl(e, t) {
  if (Et(e, t)) return !0;
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null) return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!fa.call(t, l) || !Et(e[l], t[l])) return !1;
  }
  return !0;
}
function ac(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function uc(e, t) {
  var n = ac(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = ac(n);
  }
}
function xd(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? xd(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1;
}
function _d() {
  for (var e = window, t = Co(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string';
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Co(e.document);
  }
  return t;
}
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' || e.type === 'search' || e.type === 'tel' || e.type === 'url' || e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  );
}
function Ov(e) {
  var t = _d(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && xd(n.ownerDocument.documentElement, n)) {
    if (r !== null && Nu(n)) {
      if (((t = r.start), (e = r.end), e === void 0 && (e = t), 'selectionStart' in n))
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = uc(n, o));
        var i = uc(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
  }
}
var Mv = Vt && 'documentMode' in document && 11 >= document.documentMode,
  er = null,
  Na = null,
  tl = null,
  Da = !1;
function sc(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Da ||
    er == null ||
    er !== Co(r) ||
    ((r = er),
    'selectionStart' in r && Nu(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (tl && hl(tl, r)) ||
      ((tl = r),
      (r = Mo(Na, 'onSelect')),
      0 < r.length &&
        ((t = new Pu('onSelect', 'select', null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = er))));
}
function Xl(e, t) {
  var n = {};
  return (n[e.toLowerCase()] = t.toLowerCase()), (n['Webkit' + e] = 'webkit' + t), (n['Moz' + e] = 'moz' + t), n;
}
var tr = {
    animationend: Xl('Animation', 'AnimationEnd'),
    animationiteration: Xl('Animation', 'AnimationIteration'),
    animationstart: Xl('Animation', 'AnimationStart'),
    transitionend: Xl('Transition', 'TransitionEnd'),
  },
  Hi = {},
  Rd = {};
Vt &&
  ((Rd = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete tr.animationend.animation, delete tr.animationiteration.animation, delete tr.animationstart.animation),
  'TransitionEvent' in window || delete tr.transitionend.transition);
function ui(e) {
  if (Hi[e]) return Hi[e];
  if (!tr[e]) return e;
  var t = tr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Rd) return (Hi[e] = t[n]);
  return e;
}
var Cd = ui('animationend'),
  Pd = ui('animationiteration'),
  Ld = ui('animationstart'),
  Td = ui('transitionend'),
  Nd = new Map(),
  cc =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' '
    );
function wn(e, t) {
  Nd.set(e, t), Bn(t, [e]);
}
for (var Wi = 0; Wi < cc.length; Wi++) {
  var Ki = cc[Wi],
    Fv = Ki.toLowerCase(),
    Iv = Ki[0].toUpperCase() + Ki.slice(1);
  wn(Fv, 'on' + Iv);
}
wn(Cd, 'onAnimationEnd');
wn(Pd, 'onAnimationIteration');
wn(Ld, 'onAnimationStart');
wn('dblclick', 'onDoubleClick');
wn('focusin', 'onFocus');
wn('focusout', 'onBlur');
wn(Td, 'onTransitionEnd');
mr('onMouseEnter', ['mouseout', 'mouseover']);
mr('onMouseLeave', ['mouseout', 'mouseover']);
mr('onPointerEnter', ['pointerout', 'pointerover']);
mr('onPointerLeave', ['pointerout', 'pointerover']);
Bn('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' '));
Bn('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' '));
Bn('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']);
Bn('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' '));
Bn('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' '));
Bn('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '));
var Jr =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' '
    ),
  jv = new Set('cancel close invalid load scroll toggle'.split(' ').concat(Jr));
function fc(e, t, n) {
  var r = e.type || 'unknown-event';
  (e.currentTarget = n), Fm(r, t, void 0, e), (e.currentTarget = null);
}
function Dd(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var a = r[i],
            u = a.instance,
            s = a.currentTarget;
          if (((a = a.listener), u !== o && l.isPropagationStopped())) break e;
          fc(l, a, s), (o = u);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((a = r[i]), (u = a.instance), (s = a.currentTarget), (a = a.listener), u !== o && l.isPropagationStopped())
          )
            break e;
          fc(l, a, s), (o = u);
        }
    }
  }
  if (Lo) throw ((e = Ca), (Lo = !1), (Ca = null), e);
}
function oe(e, t) {
  var n = t[ja];
  n === void 0 && (n = t[ja] = new Set());
  var r = e + '__bubble';
  n.has(r) || (Od(t, e, 2, !1), n.add(r));
}
function Yi(e, t, n) {
  var r = 0;
  t && (r |= 4), Od(n, e, r, t);
}
var Jl = '_reactListening' + Math.random().toString(36).slice(2);
function ml(e) {
  if (!e[Jl]) {
    (e[Jl] = !0),
      Uf.forEach(function (n) {
        n !== 'selectionchange' && (jv.has(n) || Yi(n, !1, e), Yi(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Jl] || ((t[Jl] = !0), Yi('selectionchange', !1, t));
  }
}
function Od(e, t, n, r) {
  switch (md(t)) {
    case 1:
      var l = Gm;
      break;
    case 4:
      l = bm;
      break;
    default:
      l = Ru;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ra || (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') || (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: l,
          })
        : e.addEventListener(t, n, !0)
      : l !== void 0
        ? e.addEventListener(t, n, {
            passive: l,
          })
        : e.addEventListener(t, n, !1);
}
function Qi(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var a = r.stateNode.containerInfo;
        if (a === l || (a.nodeType === 8 && a.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var u = i.tag;
            if (
              (u === 3 || u === 4) &&
              ((u = i.stateNode.containerInfo), u === l || (u.nodeType === 8 && u.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; a !== null; ) {
          if (((i = Tn(a)), i === null)) return;
          if (((u = i.tag), u === 5 || u === 6)) {
            r = o = i;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  td(function () {
    var s = o,
      d = Su(n),
      c = [];
    e: {
      var f = Nd.get(e);
      if (f !== void 0) {
        var w = Pu,
          m = e;
        switch (e) {
          case 'keypress':
            if (ho(n) === 0) break e;
          case 'keydown':
          case 'keyup':
            w = dv;
            break;
          case 'focusin':
            (m = 'focus'), (w = $i);
            break;
          case 'focusout':
            (m = 'blur'), (w = $i);
            break;
          case 'beforeblur':
          case 'afterblur':
            w = $i;
            break;
          case 'click':
            if (n.button === 2) break e;
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            w = qs;
            break;
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            w = ev;
            break;
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            w = mv;
            break;
          case Cd:
          case Pd:
          case Ld:
            w = rv;
            break;
          case Td:
            w = yv;
            break;
          case 'scroll':
            w = Zm;
            break;
          case 'wheel':
            w = wv;
            break;
          case 'copy':
          case 'cut':
          case 'paste':
            w = ov;
            break;
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            w = tc;
        }
        var k = (t & 4) !== 0,
          P = !k && e === 'scroll',
          h = k ? (f !== null ? f + 'Capture' : null) : f;
        k = [];
        for (var p = s, v; p !== null; ) {
          v = p;
          var S = v.stateNode;
          if (
            (v.tag === 5 && S !== null && ((v = S), h !== null && ((S = sl(p, h)), S != null && k.push(vl(p, S, v)))),
            P)
          )
            break;
          p = p.return;
        }
        0 < k.length &&
          ((f = new w(f, m, null, n, d)),
          c.push({
            event: f,
            listeners: k,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === 'mouseover' || e === 'pointerover'),
          (w = e === 'mouseout' || e === 'pointerout'),
          f && n !== xa && (m = n.relatedTarget || n.fromElement) && (Tn(m) || m[Ht]))
        )
          break e;
        if (
          (w || f) &&
          ((f = d.window === d ? d : (f = d.ownerDocument) ? f.defaultView || f.parentWindow : window),
          w
            ? ((m = n.relatedTarget || n.toElement),
              (w = s),
              (m = m ? Tn(m) : null),
              m !== null && ((P = Vn(m)), m !== P || (m.tag !== 5 && m.tag !== 6)) && (m = null))
            : ((w = null), (m = s)),
          w !== m)
        ) {
          if (
            ((k = qs),
            (S = 'onMouseLeave'),
            (h = 'onMouseEnter'),
            (p = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((k = tc), (S = 'onPointerLeave'), (h = 'onPointerEnter'), (p = 'pointer')),
            (P = w == null ? f : nr(w)),
            (v = m == null ? f : nr(m)),
            (f = new k(S, p + 'leave', w, n, d)),
            (f.target = P),
            (f.relatedTarget = v),
            (S = null),
            Tn(d) === s && ((k = new k(h, p + 'enter', m, n, d)), (k.target = v), (k.relatedTarget = P), (S = k)),
            (P = S),
            w && m)
          )
            t: {
              for (k = w, h = m, p = 0, v = k; v; v = Xn(v)) p++;
              for (v = 0, S = h; S; S = Xn(S)) v++;
              for (; 0 < p - v; ) (k = Xn(k)), p--;
              for (; 0 < v - p; ) (h = Xn(h)), v--;
              for (; p--; ) {
                if (k === h || (h !== null && k === h.alternate)) break t;
                (k = Xn(k)), (h = Xn(h));
              }
              k = null;
            }
          else k = null;
          w !== null && dc(c, f, w, k, !1), m !== null && P !== null && dc(c, P, m, k, !0);
        }
      }
      e: {
        if (
          ((f = s ? nr(s) : window),
          (w = f.nodeName && f.nodeName.toLowerCase()),
          w === 'select' || (w === 'input' && f.type === 'file'))
        )
          var C = Cv;
        else if (lc(f))
          if (Sd) C = Nv;
          else {
            C = Lv;
            var y = Pv;
          }
        else
          (w = f.nodeName) && w.toLowerCase() === 'input' && (f.type === 'checkbox' || f.type === 'radio') && (C = Tv);
        if (C && (C = C(e, s))) {
          Ed(c, C, n, d);
          break e;
        }
        y && y(e, f, s),
          e === 'focusout' && (y = f._wrapperState) && y.controlled && f.type === 'number' && ga(f, 'number', f.value);
      }
      switch (((y = s ? nr(s) : window), e)) {
        case 'focusin':
          (lc(y) || y.contentEditable === 'true') && ((er = y), (Na = s), (tl = null));
          break;
        case 'focusout':
          tl = Na = er = null;
          break;
        case 'mousedown':
          Da = !0;
          break;
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          (Da = !1), sc(c, n, d);
          break;
        case 'selectionchange':
          if (Mv) break;
        case 'keydown':
        case 'keyup':
          sc(c, n, d);
      }
      var L;
      if (Tu)
        e: {
          switch (e) {
            case 'compositionstart':
              var R = 'onCompositionStart';
              break e;
            case 'compositionend':
              R = 'onCompositionEnd';
              break e;
            case 'compositionupdate':
              R = 'onCompositionUpdate';
              break e;
          }
          R = void 0;
        }
      else
        qn ? gd(e, n) && (R = 'onCompositionEnd') : e === 'keydown' && n.keyCode === 229 && (R = 'onCompositionStart');
      R &&
        (yd &&
          n.locale !== 'ko' &&
          (qn || R !== 'onCompositionStart'
            ? R === 'onCompositionEnd' && qn && (L = vd())
            : ((ln = d), (Cu = 'value' in ln ? ln.value : ln.textContent), (qn = !0))),
        (y = Mo(s, R)),
        0 < y.length &&
          ((R = new ec(R, e, null, n, d)),
          c.push({
            event: R,
            listeners: y,
          }),
          L ? (R.data = L) : ((L = wd(n)), L !== null && (R.data = L)))),
        (L = Sv ? kv(e, n) : xv(e, n)) &&
          ((s = Mo(s, 'onBeforeInput')),
          0 < s.length &&
            ((d = new ec('onBeforeInput', 'beforeinput', null, n, d)),
            c.push({
              event: d,
              listeners: s,
            }),
            (d.data = L)));
    }
    Dd(c, t);
  });
}
function vl(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function Mo(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o), (o = sl(e, n)), o != null && r.unshift(vl(e, o, l)), (o = sl(e, t)), o != null && r.push(vl(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Xn(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function dc(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var a = n,
      u = a.alternate,
      s = a.stateNode;
    if (u !== null && u === r) break;
    a.tag === 5 &&
      s !== null &&
      ((a = s),
      l
        ? ((u = sl(n, o)), u != null && i.unshift(vl(n, u, a)))
        : l || ((u = sl(n, o)), u != null && i.push(vl(n, u, a)))),
      (n = n.return);
  }
  i.length !== 0 &&
    e.push({
      event: t,
      listeners: i,
    });
}
var Av = /\r\n?/g,
  zv = /\u0000|\uFFFD/g;
function pc(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      Av,
      `
`
    )
    .replace(zv, '');
}
function Gl(e, t, n) {
  if (((t = pc(t)), pc(e) !== t && n)) throw Error(N(425));
}
function Fo() {}
var Oa = null,
  Ma = null;
function Fa(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Ia = typeof setTimeout == 'function' ? setTimeout : void 0,
  Uv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  hc = typeof Promise == 'function' ? Promise : void 0,
  $v =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof hc < 'u'
        ? function (e) {
            return hc.resolve(null).then(e).catch(Bv);
          }
        : Ia;
function Bv(e) {
  setTimeout(function () {
    throw e;
  });
}
function Xi(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(l), dl(t);
          return;
        }
        r--;
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++;
    n = l;
  } while (n);
  dl(t);
}
function fn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break;
      if (t === '/$') return null;
    }
  }
  return e;
}
function mc(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e;
        t--;
      } else n === '/$' && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var Cr = Math.random().toString(36).slice(2),
  Ct = '__reactFiber$' + Cr,
  yl = '__reactProps$' + Cr,
  Ht = '__reactContainer$' + Cr,
  ja = '__reactEvents$' + Cr,
  Vv = '__reactListeners$' + Cr,
  Hv = '__reactHandles$' + Cr;
function Tn(e) {
  var t = e[Ct];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ht] || n[Ct])) {
      if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
        for (e = mc(e); e !== null; ) {
          if ((n = e[Ct])) return n;
          e = mc(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ll(e) {
  return (e = e[Ct] || e[Ht]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function nr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(N(33));
}
function si(e) {
  return e[yl] || null;
}
var Aa = [],
  rr = -1;
function En(e) {
  return {
    current: e,
  };
}
function ae(e) {
  0 > rr || ((e.current = Aa[rr]), (Aa[rr] = null), rr--);
}
function re(e, t) {
  rr++, (Aa[rr] = e.current), (e.current = t);
}
var yn = {},
  Ae = En(yn),
  Qe = En(!1),
  In = yn;
function vr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function Xe(e) {
  return (e = e.childContextTypes), e != null;
}
function Io() {
  ae(Qe), ae(Ae);
}
function vc(e, t, n) {
  if (Ae.current !== yn) throw Error(N(168));
  re(Ae, t), re(Qe, n);
}
function Md(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function')) return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(N(108, Pm(e) || 'Unknown', l));
  return fe({}, n, r);
}
function jo(e) {
  return (
    (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || yn),
    (In = Ae.current),
    re(Ae, e),
    re(Qe, Qe.current),
    !0
  );
}
function yc(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(N(169));
  n ? ((e = Md(e, t, In)), (r.__reactInternalMemoizedMergedChildContext = e), ae(Qe), ae(Ae), re(Ae, e)) : ae(Qe),
    re(Qe, n);
}
var At = null,
  ci = !1,
  Ji = !1;
function Fd(e) {
  At === null ? (At = [e]) : At.push(e);
}
function Wv(e) {
  (ci = !0), Fd(e);
}
function Sn() {
  if (!Ji && At !== null) {
    Ji = !0;
    var e = 0,
      t = ee;
    try {
      var n = At;
      for (ee = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (At = null), (ci = !1);
    } catch (l) {
      throw (At !== null && (At = At.slice(e + 1)), od(ku, Sn), l);
    } finally {
      (ee = t), (Ji = !1);
    }
  }
  return null;
}
var lr = [],
  or = 0,
  Ao = null,
  zo = 0,
  ot = [],
  it = 0,
  jn = null,
  Ut = 1,
  $t = '';
function Cn(e, t) {
  (lr[or++] = zo), (lr[or++] = Ao), (Ao = e), (zo = t);
}
function Id(e, t, n) {
  (ot[it++] = Ut), (ot[it++] = $t), (ot[it++] = jn), (jn = e);
  var r = Ut;
  e = $t;
  var l = 32 - gt(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - gt(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      (Ut = (1 << (32 - gt(t) + l)) | (n << l) | r),
      ($t = o + e);
  } else (Ut = (1 << o) | (n << l) | r), ($t = e);
}
function Du(e) {
  e.return !== null && (Cn(e, 1), Id(e, 1, 0));
}
function Ou(e) {
  for (; e === Ao; ) (Ao = lr[--or]), (lr[or] = null), (zo = lr[--or]), (lr[or] = null);
  for (; e === jn; )
    (jn = ot[--it]), (ot[it] = null), ($t = ot[--it]), (ot[it] = null), (Ut = ot[--it]), (ot[it] = null);
}
var qe = null,
  Ze = null,
  ue = !1,
  yt = null;
function jd(e, t) {
  var n = at(5, null, null, 0);
  (n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gc(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Ze = fn(t.firstChild)), !0) : !1
      );
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Ze = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              jn !== null
                ? {
                    id: Ut,
                    overflow: $t,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = at(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Ze = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function za(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ua(e) {
  if (ue) {
    var t = Ze;
    if (t) {
      var n = t;
      if (!gc(e, t)) {
        if (za(e)) throw Error(N(418));
        t = fn(n.nextSibling);
        var r = qe;
        t && gc(e, t) ? jd(r, n) : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e));
      }
    } else {
      if (za(e)) throw Error(N(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e);
    }
  }
}
function wc(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  qe = e;
}
function bl(e) {
  if (e !== qe) return !1;
  if (!ue) return wc(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type), (t = t !== 'head' && t !== 'body' && !Fa(e.type, e.memoizedProps))),
    t && (t = Ze))
  ) {
    if (za(e)) throw (Ad(), Error(N(418)));
    for (; t; ) jd(e, t), (t = fn(t.nextSibling));
  }
  if ((wc(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(N(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === '/$') {
            if (t === 0) {
              Ze = fn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++;
        }
        e = e.nextSibling;
      }
      Ze = null;
    }
  } else Ze = qe ? fn(e.stateNode.nextSibling) : null;
  return !0;
}
function Ad() {
  for (var e = Ze; e; ) e = fn(e.nextSibling);
}
function yr() {
  (Ze = qe = null), (ue = !1);
}
function Mu(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var Kv = Xt.ReactCurrentBatchConfig;
function ht(e, t) {
  if (e && e.defaultProps) {
    (t = fe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var Uo = En(null),
  $o = null,
  ir = null,
  Fu = null;
function Iu() {
  Fu = ir = $o = null;
}
function ju(e) {
  var t = Uo.current;
  ae(Uo), (e._currentValue = t);
}
function $a(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function pr(e, t) {
  ($o = e),
    (Fu = ir = null),
    (e = e.dependencies),
    e !== null && e.firstContext !== null && (e.lanes & t && (Ye = !0), (e.firstContext = null));
}
function st(e) {
  var t = e._currentValue;
  if (Fu !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      ir === null)
    ) {
      if ($o === null) throw Error(N(308));
      (ir = e),
        ($o.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else ir = ir.next = e;
  return t;
}
var Nn = null;
function Au(e) {
  Nn === null ? (Nn = [e]) : Nn.push(e);
}
function zd(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? ((n.next = n), Au(t)) : ((n.next = l.next), (l.next = n)), (t.interleaved = n), Wt(e, r);
}
function Wt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var tn = !1;
function zu(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function Ud(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Bt(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function dn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), J & 2)) {
    var l = r.pending;
    return l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)), (r.pending = t), Wt(e, n);
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), Au(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Wt(e, n)
  );
}
function mo(e, t, n) {
  if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n);
  }
}
function Ec(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function Bo(e, t, n, r) {
  var l = e.updateQueue;
  tn = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    a = l.shared.pending;
  if (a !== null) {
    l.shared.pending = null;
    var u = a,
      s = u.next;
    (u.next = null), i === null ? (o = s) : (i.next = s), (i = u);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (a = d.lastBaseUpdate),
      a !== i && (a === null ? (d.firstBaseUpdate = s) : (a.next = s), (d.lastBaseUpdate = u)));
  }
  if (o !== null) {
    var c = l.baseState;
    (i = 0), (d = s = u = null), (a = o);
    do {
      var f = a.lane,
        w = a.eventTime;
      if ((r & f) === f) {
        d !== null &&
          (d = d.next =
            {
              eventTime: w,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var m = e,
            k = a;
          switch (((f = t), (w = n), k.tag)) {
            case 1:
              if (((m = k.payload), typeof m == 'function')) {
                c = m.call(w, c, f);
                break e;
              }
              c = m;
              break e;
            case 3:
              m.flags = (m.flags & -65537) | 128;
            case 0:
              if (((m = k.payload), (f = typeof m == 'function' ? m.call(w, c, f) : m), f == null)) break e;
              c = fe({}, c, f);
              break e;
            case 2:
              tn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64), (f = l.effects), f === null ? (l.effects = [a]) : f.push(a));
      } else
        (w = {
          eventTime: w,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          d === null ? ((s = d = w), (u = c)) : (d = d.next = w),
          (i |= f);
      if (((a = a.next), a === null)) {
        if (((a = l.shared.pending), a === null)) break;
        (f = a), (a = f.next), (f.next = null), (l.lastBaseUpdate = f), (l.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (u = c),
      (l.baseState = u),
      (l.firstBaseUpdate = s),
      (l.lastBaseUpdate = d),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (zn |= i), (e.lanes = i), (e.memoizedState = c);
  }
}
function Sc(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != 'function')) throw Error(N(191, l));
        l.call(r);
      }
    }
}
var $d = new zf.Component().refs;
function Ba(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : fe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fi = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Vn(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = hn(e),
      o = Bt(r, l);
    (o.payload = t), n != null && (o.callback = n), (t = dn(e, o, l)), t !== null && (wt(t, e, l, r), mo(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Be(),
      l = hn(e),
      o = Bt(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = dn(e, o, l)),
      t !== null && (wt(t, e, l, r), mo(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Be(),
      r = hn(e),
      l = Bt(n, r);
    (l.tag = 2), t != null && (l.callback = t), (t = dn(e, l, r)), t !== null && (wt(t, e, r, n), mo(t, e, r));
  },
};
function kc(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
        ? !hl(n, r) || !hl(l, o)
        : !0
  );
}
function Bd(e, t, n) {
  var r = !1,
    l = yn,
    o = t.contextType;
  return (
    typeof o == 'object' && o !== null
      ? (o = st(o))
      : ((l = Xe(t) ? In : Ae.current), (r = t.contextTypes), (o = (r = r != null) ? vr(e, l) : yn)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fi),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function xc(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == 'function' && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fi.enqueueReplaceState(t, t.state, null);
}
function Va(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = $d), zu(e);
  var o = t.contextType;
  typeof o == 'object' && o !== null ? (l.context = st(o)) : ((o = Xe(t) ? In : Ae.current), (l.context = vr(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (Ba(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof l.getSnapshotBeforeUpdate == 'function' ||
      (typeof l.UNSAFE_componentWillMount != 'function' && typeof l.componentWillMount != 'function') ||
      ((t = l.state),
      typeof l.componentWillMount == 'function' && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == 'function' && l.UNSAFE_componentWillMount(),
      t !== l.state && fi.enqueueReplaceState(l, l.state, null),
      Bo(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == 'function' && (e.flags |= 4194308);
}
function Ur(e, t, n) {
  if (((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(N(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(N(147, e));
      var l = r,
        o = '' + e;
      return t !== null && t.ref !== null && typeof t.ref == 'function' && t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var a = l.refs;
            a === $d && (a = l.refs = {}), i === null ? delete a[o] : (a[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != 'string') throw Error(N(284));
    if (!n._owner) throw Error(N(290, e));
  }
  return e;
}
function Zl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(N(31, e === '[object Object]' ? 'object with keys {' + Object.keys(t).join(', ') + '}' : e)))
  );
}
function _c(e) {
  var t = e._init;
  return t(e._payload);
}
function Vd(e) {
  function t(h, p) {
    if (e) {
      var v = h.deletions;
      v === null ? ((h.deletions = [p]), (h.flags |= 16)) : v.push(p);
    }
  }
  function n(h, p) {
    if (!e) return null;
    for (; p !== null; ) t(h, p), (p = p.sibling);
    return null;
  }
  function r(h, p) {
    for (h = new Map(); p !== null; ) p.key !== null ? h.set(p.key, p) : h.set(p.index, p), (p = p.sibling);
    return h;
  }
  function l(h, p) {
    return (h = mn(h, p)), (h.index = 0), (h.sibling = null), h;
  }
  function o(h, p, v) {
    return (
      (h.index = v),
      e
        ? ((v = h.alternate), v !== null ? ((v = v.index), v < p ? ((h.flags |= 2), p) : v) : ((h.flags |= 2), p))
        : ((h.flags |= 1048576), p)
    );
  }
  function i(h) {
    return e && h.alternate === null && (h.flags |= 2), h;
  }
  function a(h, p, v, S) {
    return p === null || p.tag !== 6 ? ((p = na(v, h.mode, S)), (p.return = h), p) : ((p = l(p, v)), (p.return = h), p);
  }
  function u(h, p, v, S) {
    var C = v.type;
    return C === Zn
      ? d(h, p, v.props.children, S, v.key)
      : p !== null &&
          (p.elementType === C || (typeof C == 'object' && C !== null && C.$$typeof === en && _c(C) === p.type))
        ? ((S = l(p, v.props)), (S.ref = Ur(h, p, v)), (S.return = h), S)
        : ((S = So(v.type, v.key, v.props, null, h.mode, S)), (S.ref = Ur(h, p, v)), (S.return = h), S);
  }
  function s(h, p, v, S) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== v.containerInfo ||
      p.stateNode.implementation !== v.implementation
      ? ((p = ra(v, h.mode, S)), (p.return = h), p)
      : ((p = l(p, v.children || [])), (p.return = h), p);
  }
  function d(h, p, v, S, C) {
    return p === null || p.tag !== 7
      ? ((p = Fn(v, h.mode, S, C)), (p.return = h), p)
      : ((p = l(p, v)), (p.return = h), p);
  }
  function c(h, p, v) {
    if ((typeof p == 'string' && p !== '') || typeof p == 'number')
      return (p = na('' + p, h.mode, v)), (p.return = h), p;
    if (typeof p == 'object' && p !== null) {
      switch (p.$$typeof) {
        case Bl:
          return (v = So(p.type, p.key, p.props, null, h.mode, v)), (v.ref = Ur(h, null, p)), (v.return = h), v;
        case bn:
          return (p = ra(p, h.mode, v)), (p.return = h), p;
        case en:
          var S = p._init;
          return c(h, S(p._payload), v);
      }
      if (Qr(p) || Fr(p)) return (p = Fn(p, h.mode, v, null)), (p.return = h), p;
      Zl(h, p);
    }
    return null;
  }
  function f(h, p, v, S) {
    var C = p !== null ? p.key : null;
    if ((typeof v == 'string' && v !== '') || typeof v == 'number') return C !== null ? null : a(h, p, '' + v, S);
    if (typeof v == 'object' && v !== null) {
      switch (v.$$typeof) {
        case Bl:
          return v.key === C ? u(h, p, v, S) : null;
        case bn:
          return v.key === C ? s(h, p, v, S) : null;
        case en:
          return (C = v._init), f(h, p, C(v._payload), S);
      }
      if (Qr(v) || Fr(v)) return C !== null ? null : d(h, p, v, S, null);
      Zl(h, v);
    }
    return null;
  }
  function w(h, p, v, S, C) {
    if ((typeof S == 'string' && S !== '') || typeof S == 'number') return (h = h.get(v) || null), a(p, h, '' + S, C);
    if (typeof S == 'object' && S !== null) {
      switch (S.$$typeof) {
        case Bl:
          return (h = h.get(S.key === null ? v : S.key) || null), u(p, h, S, C);
        case bn:
          return (h = h.get(S.key === null ? v : S.key) || null), s(p, h, S, C);
        case en:
          var y = S._init;
          return w(h, p, v, y(S._payload), C);
      }
      if (Qr(S) || Fr(S)) return (h = h.get(v) || null), d(p, h, S, C, null);
      Zl(p, S);
    }
    return null;
  }
  function m(h, p, v, S) {
    for (var C = null, y = null, L = p, R = (p = 0), D = null; L !== null && R < v.length; R++) {
      L.index > R ? ((D = L), (L = null)) : (D = L.sibling);
      var O = f(h, L, v[R], S);
      if (O === null) {
        L === null && (L = D);
        break;
      }
      e && L && O.alternate === null && t(h, L),
        (p = o(O, p, R)),
        y === null ? (C = O) : (y.sibling = O),
        (y = O),
        (L = D);
    }
    if (R === v.length) return n(h, L), ue && Cn(h, R), C;
    if (L === null) {
      for (; R < v.length; R++)
        (L = c(h, v[R], S)), L !== null && ((p = o(L, p, R)), y === null ? (C = L) : (y.sibling = L), (y = L));
      return ue && Cn(h, R), C;
    }
    for (L = r(h, L); R < v.length; R++)
      (D = w(L, h, R, v[R], S)),
        D !== null &&
          (e && D.alternate !== null && L.delete(D.key === null ? R : D.key),
          (p = o(D, p, R)),
          y === null ? (C = D) : (y.sibling = D),
          (y = D));
    return (
      e &&
        L.forEach(function (K) {
          return t(h, K);
        }),
      ue && Cn(h, R),
      C
    );
  }
  function k(h, p, v, S) {
    var C = Fr(v);
    if (typeof C != 'function') throw Error(N(150));
    if (((v = C.call(v)), v == null)) throw Error(N(151));
    for (var y = (C = null), L = p, R = (p = 0), D = null, O = v.next(); L !== null && !O.done; R++, O = v.next()) {
      L.index > R ? ((D = L), (L = null)) : (D = L.sibling);
      var K = f(h, L, O.value, S);
      if (K === null) {
        L === null && (L = D);
        break;
      }
      e && L && K.alternate === null && t(h, L),
        (p = o(K, p, R)),
        y === null ? (C = K) : (y.sibling = K),
        (y = K),
        (L = D);
    }
    if (O.done) return n(h, L), ue && Cn(h, R), C;
    if (L === null) {
      for (; !O.done; R++, O = v.next())
        (O = c(h, O.value, S)), O !== null && ((p = o(O, p, R)), y === null ? (C = O) : (y.sibling = O), (y = O));
      return ue && Cn(h, R), C;
    }
    for (L = r(h, L); !O.done; R++, O = v.next())
      (O = w(L, h, R, O.value, S)),
        O !== null &&
          (e && O.alternate !== null && L.delete(O.key === null ? R : O.key),
          (p = o(O, p, R)),
          y === null ? (C = O) : (y.sibling = O),
          (y = O));
    return (
      e &&
        L.forEach(function (G) {
          return t(h, G);
        }),
      ue && Cn(h, R),
      C
    );
  }
  function P(h, p, v, S) {
    if (
      (typeof v == 'object' && v !== null && v.type === Zn && v.key === null && (v = v.props.children),
      typeof v == 'object' && v !== null)
    ) {
      switch (v.$$typeof) {
        case Bl:
          e: {
            for (var C = v.key, y = p; y !== null; ) {
              if (y.key === C) {
                if (((C = v.type), C === Zn)) {
                  if (y.tag === 7) {
                    n(h, y.sibling), (p = l(y, v.props.children)), (p.return = h), (h = p);
                    break e;
                  }
                } else if (
                  y.elementType === C ||
                  (typeof C == 'object' && C !== null && C.$$typeof === en && _c(C) === y.type)
                ) {
                  n(h, y.sibling), (p = l(y, v.props)), (p.ref = Ur(h, y, v)), (p.return = h), (h = p);
                  break e;
                }
                n(h, y);
                break;
              } else t(h, y);
              y = y.sibling;
            }
            v.type === Zn
              ? ((p = Fn(v.props.children, h.mode, S, v.key)), (p.return = h), (h = p))
              : ((S = So(v.type, v.key, v.props, null, h.mode, S)), (S.ref = Ur(h, p, v)), (S.return = h), (h = S));
          }
          return i(h);
        case bn:
          e: {
            for (y = v.key; p !== null; ) {
              if (p.key === y)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === v.containerInfo &&
                  p.stateNode.implementation === v.implementation
                ) {
                  n(h, p.sibling), (p = l(p, v.children || [])), (p.return = h), (h = p);
                  break e;
                } else {
                  n(h, p);
                  break;
                }
              else t(h, p);
              p = p.sibling;
            }
            (p = ra(v, h.mode, S)), (p.return = h), (h = p);
          }
          return i(h);
        case en:
          return (y = v._init), P(h, p, y(v._payload), S);
      }
      if (Qr(v)) return m(h, p, v, S);
      if (Fr(v)) return k(h, p, v, S);
      Zl(h, v);
    }
    return (typeof v == 'string' && v !== '') || typeof v == 'number'
      ? ((v = '' + v),
        p !== null && p.tag === 6
          ? (n(h, p.sibling), (p = l(p, v)), (p.return = h), (h = p))
          : (n(h, p), (p = na(v, h.mode, S)), (p.return = h), (h = p)),
        i(h))
      : n(h, p);
  }
  return P;
}
var gr = Vd(!0),
  Hd = Vd(!1),
  Tl = {},
  Lt = En(Tl),
  gl = En(Tl),
  wl = En(Tl);
function Dn(e) {
  if (e === Tl) throw Error(N(174));
  return e;
}
function Uu(e, t) {
  switch ((re(wl, t), re(gl, e), re(Lt, Tl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ea(null, '');
      break;
    default:
      (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = Ea(t, e));
  }
  ae(Lt), re(Lt, t);
}
function wr() {
  ae(Lt), ae(gl), ae(wl);
}
function Wd(e) {
  Dn(wl.current);
  var t = Dn(Lt.current),
    n = Ea(t, e.type);
  t !== n && (re(gl, e), re(Lt, n));
}
function $u(e) {
  gl.current === e && (ae(Lt), ae(gl));
}
var se = En(0);
function Vo(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Gi = [];
function Bu() {
  for (var e = 0; e < Gi.length; e++) Gi[e]._workInProgressVersionPrimary = null;
  Gi.length = 0;
}
var vo = Xt.ReactCurrentDispatcher,
  bi = Xt.ReactCurrentBatchConfig,
  An = 0,
  ce = null,
  ke = null,
  Ce = null,
  Ho = !1,
  nl = !1,
  El = 0,
  Yv = 0;
function Fe() {
  throw Error(N(321));
}
function Vu(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Et(e[n], t[n])) return !1;
  return !0;
}
function Hu(e, t, n, r, l, o) {
  if (
    ((An = o),
    (ce = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (vo.current = e === null || e.memoizedState === null ? Gv : bv),
    (e = n(r, l)),
    nl)
  ) {
    o = 0;
    do {
      if (((nl = !1), (El = 0), 25 <= o)) throw Error(N(301));
      (o += 1), (Ce = ke = null), (t.updateQueue = null), (vo.current = Zv), (e = n(r, l));
    } while (nl);
  }
  if (((vo.current = Wo), (t = ke !== null && ke.next !== null), (An = 0), (Ce = ke = ce = null), (Ho = !1), t))
    throw Error(N(300));
  return e;
}
function Wu() {
  var e = El !== 0;
  return (El = 0), e;
}
function Rt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Ce === null ? (ce.memoizedState = Ce = e) : (Ce = Ce.next = e), Ce;
}
function ct() {
  if (ke === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Ce === null ? ce.memoizedState : Ce.next;
  if (t !== null) (Ce = t), (ke = e);
  else {
    if (e === null) throw Error(N(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Ce === null ? (ce.memoizedState = Ce = e) : (Ce = Ce.next = e);
  }
  return Ce;
}
function Sl(e, t) {
  return typeof t == 'function' ? t(e) : t;
}
function Zi(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = ke,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var a = (i = null),
      u = null,
      s = o;
    do {
      var d = s.lane;
      if ((An & d) === d)
        u !== null &&
          (u = u.next =
            {
              lane: 0,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }),
          (r = s.hasEagerState ? s.eagerState : e(r, s.action));
      else {
        var c = {
          lane: d,
          action: s.action,
          hasEagerState: s.hasEagerState,
          eagerState: s.eagerState,
          next: null,
        };
        u === null ? ((a = u = c), (i = r)) : (u = u.next = c), (ce.lanes |= d), (zn |= d);
      }
      s = s.next;
    } while (s !== null && s !== o);
    u === null ? (i = r) : (u.next = a),
      Et(r, t.memoizedState) || (Ye = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = u),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (ce.lanes |= o), (zn |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function qi(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(N(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    Et(o, t.memoizedState) || (Ye = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function Kd() {}
function Yd(e, t) {
  var n = ce,
    r = ct(),
    l = t(),
    o = !Et(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (Ye = !0)),
    (r = r.queue),
    Ku(Jd.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Ce !== null && Ce.memoizedState.tag & 1))
  ) {
    if (((n.flags |= 2048), kl(9, Xd.bind(null, n, r, l, t), void 0, null), Pe === null)) throw Error(N(349));
    An & 30 || Qd(n, t, l);
  }
  return l;
}
function Qd(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = ce.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (ce.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Xd(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), Gd(t) && bd(e);
}
function Jd(e, t, n) {
  return n(function () {
    Gd(t) && bd(e);
  });
}
function Gd(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Et(e, n);
  } catch {
    return !0;
  }
}
function bd(e) {
  var t = Wt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function Rc(e) {
  var t = Rt();
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Jv.bind(null, ce, e)),
    [t.memoizedState, e]
  );
}
function kl(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = ce.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (ce.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null ? (t.lastEffect = e.next = e) : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Zd() {
  return ct().memoizedState;
}
function yo(e, t, n, r) {
  var l = Rt();
  (ce.flags |= e), (l.memoizedState = kl(1 | t, n, void 0, r === void 0 ? null : r));
}
function di(e, t, n, r) {
  var l = ct();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (ke !== null) {
    var i = ke.memoizedState;
    if (((o = i.destroy), r !== null && Vu(r, i.deps))) {
      l.memoizedState = kl(t, n, o, r);
      return;
    }
  }
  (ce.flags |= e), (l.memoizedState = kl(1 | t, n, o, r));
}
function Cc(e, t) {
  return yo(8390656, 8, e, t);
}
function Ku(e, t) {
  return di(2048, 8, e, t);
}
function qd(e, t) {
  return di(4, 2, e, t);
}
function ep(e, t) {
  return di(4, 4, e, t);
}
function tp(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function np(e, t, n) {
  return (n = n != null ? n.concat([e]) : null), di(4, 4, tp.bind(null, t, e), n);
}
function Yu() {}
function rp(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function lp(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Vu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function op(e, t, n) {
  return An & 21
    ? (Et(n, t) || ((n = ud()), (ce.lanes |= n), (zn |= n), (e.baseState = !0)), t)
    : (e.baseState && ((e.baseState = !1), (Ye = !0)), (e.memoizedState = n));
}
function Qv(e, t) {
  var n = ee;
  (ee = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = bi.transition;
  bi.transition = {};
  try {
    e(!1), t();
  } finally {
    (ee = n), (bi.transition = r);
  }
}
function ip() {
  return ct().memoizedState;
}
function Xv(e, t, n) {
  var r = hn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    ap(e))
  )
    up(t, n);
  else if (((n = zd(e, t, n, r)), n !== null)) {
    var l = Be();
    wt(n, e, r, l), sp(n, t, r);
  }
}
function Jv(e, t, n) {
  var r = hn(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (ap(e)) up(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && ((o = t.lastRenderedReducer), o !== null))
      try {
        var i = t.lastRenderedState,
          a = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = a), Et(a, i))) {
          var u = t.interleaved;
          u === null ? ((l.next = l), Au(t)) : ((l.next = u.next), (u.next = l)), (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = zd(e, t, l, r)), n !== null && ((l = Be()), wt(n, e, r, l), sp(n, t, r));
  }
}
function ap(e) {
  var t = e.alternate;
  return e === ce || (t !== null && t === ce);
}
function up(e, t) {
  nl = Ho = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function sp(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), xu(e, n);
  }
}
var Wo = {
    readContext: st,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useInsertionEffect: Fe,
    useLayoutEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useMutableSource: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    unstable_isNewReconciler: !1,
  },
  Gv = {
    readContext: st,
    useCallback: function (e, t) {
      return (Rt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: st,
    useEffect: Cc,
    useImperativeHandle: function (e, t, n) {
      return (n = n != null ? n.concat([e]) : null), yo(4194308, 4, tp.bind(null, t, e), n);
    },
    useLayoutEffect: function (e, t) {
      return yo(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return yo(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Rt();
      return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
    },
    useReducer: function (e, t, n) {
      var r = Rt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Xv.bind(null, ce, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Rt();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: Rc,
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      return (Rt().memoizedState = e);
    },
    useTransition: function () {
      var e = Rc(!1),
        t = e[0];
      return (e = Qv.bind(null, e[1])), (Rt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ce,
        l = Rt();
      if (ue) {
        if (n === void 0) throw Error(N(407));
        n = n();
      } else {
        if (((n = t()), Pe === null)) throw Error(N(349));
        An & 30 || Qd(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t,
      };
      return (
        (l.queue = o),
        Cc(Jd.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        kl(9, Xd.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Rt(),
        t = Pe.identifierPrefix;
      if (ue) {
        var n = $t,
          r = Ut;
        (n = (r & ~(1 << (32 - gt(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = El++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':');
      } else (n = Yv++), (t = ':' + t + 'r' + n.toString(32) + ':');
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  bv = {
    readContext: st,
    useCallback: rp,
    useContext: st,
    useEffect: Ku,
    useImperativeHandle: np,
    useInsertionEffect: qd,
    useLayoutEffect: ep,
    useMemo: lp,
    useReducer: Zi,
    useRef: Zd,
    useState: function () {
      return Zi(Sl);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = ct();
      return op(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = Zi(Sl)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Yd,
    useId: ip,
    unstable_isNewReconciler: !1,
  },
  Zv = {
    readContext: st,
    useCallback: rp,
    useContext: st,
    useEffect: Ku,
    useImperativeHandle: np,
    useInsertionEffect: qd,
    useLayoutEffect: ep,
    useMemo: lp,
    useReducer: qi,
    useRef: Zd,
    useState: function () {
      return qi(Sl);
    },
    useDebugValue: Yu,
    useDeferredValue: function (e) {
      var t = ct();
      return ke === null ? (t.memoizedState = e) : op(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = qi(Sl)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Kd,
    useSyncExternalStore: Yd,
    useId: ip,
    unstable_isNewReconciler: !1,
  };
function Er(e, t) {
  try {
    var n = '',
      r = t;
    do (n += Cm(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null,
  };
}
function ea(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function Ha(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var qv = typeof WeakMap == 'function' ? WeakMap : Map;
function cp(e, t, n) {
  (n = Bt(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      Yo || ((Yo = !0), (qa = r)), Ha(e, t);
    }),
    n
  );
}
function fp(e, t, n) {
  (n = Bt(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == 'function') {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        Ha(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Ha(e, t), typeof r != 'function' && (pn === null ? (pn = new Set([this])) : pn.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : '',
        });
      }),
    n
  );
}
function Pc(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new qv();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = py.bind(null, e, t, n)), t.then(e, e));
}
function Lc(e) {
  do {
    var t;
    if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Tc(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = Bt(-1, 1)), (t.tag = 2), dn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ey = Xt.ReactCurrentOwner,
  Ye = !1;
function $e(e, t, n, r) {
  t.child = e === null ? Hd(t, null, n, r) : gr(t, e.child, n, r);
}
function Nc(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    pr(t, l),
    (r = Hu(e, t, n, r, o, l)),
    (n = Wu()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Kt(e, t, l))
      : (ue && n && Du(t), (t.flags |= 1), $e(e, t, r, l), t.child)
  );
}
function Dc(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == 'function' &&
      !es(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), dp(e, t, o, r, l))
      : ((e = So(n.type, null, r, t, t.mode, l)), (e.ref = t.ref), (e.return = t), (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (((n = n.compare), (n = n !== null ? n : hl), n(i, r) && e.ref === t.ref)) return Kt(e, t, l);
  }
  return (t.flags |= 1), (e = mn(o, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function dp(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (hl(o, r) && e.ref === t.ref)
      if (((Ye = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0)) e.flags & 131072 && (Ye = !0);
      else return (t.lanes = e.lanes), Kt(e, t, l);
  }
  return Wa(e, t, n, r, l);
}
function pp(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        re(ur, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          re(ur, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = o !== null ? o.baseLanes : n),
        re(ur, Ge),
        (Ge |= r);
    }
  else o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n), re(ur, Ge), (Ge |= r);
  return $e(e, t, l, n), t.child;
}
function hp(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Wa(e, t, n, r, l) {
  var o = Xe(n) ? In : Ae.current;
  return (
    (o = vr(t, o)),
    pr(t, l),
    (n = Hu(e, t, n, r, o, l)),
    (r = Wu()),
    e !== null && !Ye
      ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l), Kt(e, t, l))
      : (ue && r && Du(t), (t.flags |= 1), $e(e, t, n, l), t.child)
  );
}
function Oc(e, t, n, r, l) {
  if (Xe(n)) {
    var o = !0;
    jo(t);
  } else o = !1;
  if ((pr(t, l), t.stateNode === null)) go(e, t), Bd(t, n, r), Va(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      a = t.memoizedProps;
    i.props = a;
    var u = i.context,
      s = n.contextType;
    typeof s == 'object' && s !== null ? (s = st(s)) : ((s = Xe(n) ? In : Ae.current), (s = vr(t, s)));
    var d = n.getDerivedStateFromProps,
      c = typeof d == 'function' || typeof i.getSnapshotBeforeUpdate == 'function';
    c ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
      ((a !== r || u !== s) && xc(t, i, r, s)),
      (tn = !1);
    var f = t.memoizedState;
    (i.state = f),
      Bo(t, r, i, l),
      (u = t.memoizedState),
      a !== r || f !== u || Qe.current || tn
        ? (typeof d == 'function' && (Ba(t, n, d, r), (u = t.memoizedState)),
          (a = tn || kc(t, n, a, r, f, u, s))
            ? (c ||
                (typeof i.UNSAFE_componentWillMount != 'function' && typeof i.componentWillMount != 'function') ||
                (typeof i.componentWillMount == 'function' && i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == 'function' && i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = u)),
          (i.props = r),
          (i.state = u),
          (i.context = s),
          (r = a))
        : (typeof i.componentDidMount == 'function' && (t.flags |= 4194308), (r = !1));
  } else {
    (i = t.stateNode),
      Ud(e, t),
      (a = t.memoizedProps),
      (s = t.type === t.elementType ? a : ht(t.type, a)),
      (i.props = s),
      (c = t.pendingProps),
      (f = i.context),
      (u = n.contextType),
      typeof u == 'object' && u !== null ? (u = st(u)) : ((u = Xe(n) ? In : Ae.current), (u = vr(t, u)));
    var w = n.getDerivedStateFromProps;
    (d = typeof w == 'function' || typeof i.getSnapshotBeforeUpdate == 'function') ||
      (typeof i.UNSAFE_componentWillReceiveProps != 'function' && typeof i.componentWillReceiveProps != 'function') ||
      ((a !== c || f !== u) && xc(t, i, r, u)),
      (tn = !1),
      (f = t.memoizedState),
      (i.state = f),
      Bo(t, r, i, l);
    var m = t.memoizedState;
    a !== c || f !== m || Qe.current || tn
      ? (typeof w == 'function' && (Ba(t, n, w, r), (m = t.memoizedState)),
        (s = tn || kc(t, n, s, r, f, m, u) || !1)
          ? (d ||
              (typeof i.UNSAFE_componentWillUpdate != 'function' && typeof i.componentWillUpdate != 'function') ||
              (typeof i.componentWillUpdate == 'function' && i.componentWillUpdate(r, m, u),
              typeof i.UNSAFE_componentWillUpdate == 'function' && i.UNSAFE_componentWillUpdate(r, m, u)),
            typeof i.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != 'function' ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = m)),
        (i.props = r),
        (i.state = m),
        (i.context = u),
        (r = s))
      : (typeof i.componentDidUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != 'function' ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ka(e, t, n, r, o, l);
}
function Ka(e, t, n, r, l, o) {
  hp(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && yc(t, n, !1), Kt(e, t, o);
  (r = t.stateNode), (ey.current = t);
  var a = i && typeof n.getDerivedStateFromError != 'function' ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i ? ((t.child = gr(t, e.child, null, o)), (t.child = gr(t, null, a, o))) : $e(e, t, a, o),
    (t.memoizedState = r.state),
    l && yc(t, n, !0),
    t.child
  );
}
function mp(e) {
  var t = e.stateNode;
  t.pendingContext ? vc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && vc(e, t.context, !1),
    Uu(e, t.containerInfo);
}
function Mc(e, t, n, r, l) {
  return yr(), Mu(l), (t.flags |= 256), $e(e, t, n, r), t.child;
}
var Ya = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function Qa(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function vp(e, t, n) {
  var r = t.pendingProps,
    l = se.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    a;
  if (
    ((a = i) || (a = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    a ? ((o = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (l |= 1),
    re(se, l & 1),
    e === null)
  )
    return (
      Ua(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1 ? (e.data === '$!' ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = {
                mode: 'hidden',
                children: i,
              }),
              !(r & 1) && o !== null ? ((o.childLanes = 0), (o.pendingProps = i)) : (o = mi(i, r, 0, null)),
              (e = Fn(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = Qa(n)),
              (t.memoizedState = Ya),
              e)
            : Qu(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((a = l.dehydrated), a !== null))) return ty(e, t, i, r, a, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (a = l.sibling);
    var u = {
      mode: 'hidden',
      children: r.children,
    };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = u), (t.deletions = null))
        : ((r = mn(l, u)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      a !== null ? (o = mn(a, o)) : ((o = Fn(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? Qa(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ya),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = mn(o, {
      mode: 'visible',
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Qu(e, t) {
  return (
    (t = mi(
      {
        mode: 'visible',
        children: t,
      },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function ql(e, t, n, r) {
  return (
    r !== null && Mu(r),
    gr(t, e.child, null, n),
    (e = Qu(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function ty(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = ea(Error(N(422)))), ql(e, t, i, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (l = t.mode),
          (r = mi(
            {
              mode: 'visible',
              children: r.children,
            },
            l,
            0,
            null
          )),
          (o = Fn(o, l, i, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && gr(t, e.child, null, i),
          (t.child.memoizedState = Qa(i)),
          (t.memoizedState = Ya),
          o);
  if (!(t.mode & 1)) return ql(e, t, i, null);
  if (l.data === '$!') {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (o = Error(N(419))), (r = ea(o, r, void 0)), ql(e, t, i, r);
  }
  if (((a = (i & e.childLanes) !== 0), Ye || a)) {
    if (((r = Pe), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 && l !== o.retryLane && ((o.retryLane = l), Wt(e, l), wt(r, e, l, -1));
    }
    return qu(), (r = ea(Error(N(421)))), ql(e, t, i, r);
  }
  return l.data === '$?'
    ? ((t.flags |= 128), (t.child = e.child), (t = hy.bind(null, e)), (l._reactRetry = t), null)
    : ((e = o.treeContext),
      (Ze = fn(l.nextSibling)),
      (qe = t),
      (ue = !0),
      (yt = null),
      e !== null && ((ot[it++] = Ut), (ot[it++] = $t), (ot[it++] = jn), (Ut = e.id), ($t = e.overflow), (jn = t)),
      (t = Qu(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Fc(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), $a(e.return, t, n);
}
function ta(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function yp(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if (($e(e, t, r.children, n), (r = se.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Fc(e, n, t);
        else if (e.tag === 19) Fc(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((re(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case 'forwards':
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate), e !== null && Vo(e) === null && (l = n), (n = n.sibling);
        (n = l),
          n === null ? ((l = t.child), (t.child = null)) : ((l = n.sibling), (n.sibling = null)),
          ta(t, !1, l, n, o);
        break;
      case 'backwards':
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Vo(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ta(t, !0, n, null, o);
        break;
      case 'together':
        ta(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function go(e, t) {
  !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if ((e !== null && (t.dependencies = e.dependencies), (zn |= t.lanes), !(n & t.childLanes))) return null;
  if (e !== null && t.child !== e.child) throw Error(N(153));
  if (t.child !== null) {
    for (e = t.child, n = mn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
      (e = e.sibling), (n = n.sibling = mn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function ny(e, t, n) {
  switch (t.tag) {
    case 3:
      mp(t), yr();
      break;
    case 5:
      Wd(t);
      break;
    case 1:
      Xe(t.type) && jo(t);
      break;
    case 4:
      Uu(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      re(Uo, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (re(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? vp(e, t, n)
            : (re(se, se.current & 1), (e = Kt(e, t, n)), e !== null ? e.sibling : null);
      re(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return yp(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null && ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        re(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), pp(e, t, n);
  }
  return Kt(e, t, n);
}
var gp, Xa, wp, Ep;
gp = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xa = function () {};
wp = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), Dn(Lt.current);
    var o = null;
    switch (n) {
      case 'input':
        (l = va(e, l)), (r = va(e, r)), (o = []);
        break;
      case 'select':
        (l = fe({}, l, {
          value: void 0,
        })),
          (r = fe({}, r, {
            value: void 0,
          })),
          (o = []);
        break;
      case 'textarea':
        (l = wa(e, l)), (r = wa(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != 'function' && typeof r.onClick == 'function' && (e.onclick = Fo);
    }
    Sa(n, r);
    var i;
    n = null;
    for (s in l)
      if (!r.hasOwnProperty(s) && l.hasOwnProperty(s) && l[s] != null)
        if (s === 'style') {
          var a = l[s];
          for (i in a) a.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''));
        } else
          s !== 'dangerouslySetInnerHTML' &&
            s !== 'children' &&
            s !== 'suppressContentEditableWarning' &&
            s !== 'suppressHydrationWarning' &&
            s !== 'autoFocus' &&
            (al.hasOwnProperty(s) ? o || (o = []) : (o = o || []).push(s, null));
    for (s in r) {
      var u = r[s];
      if (((a = l != null ? l[s] : void 0), r.hasOwnProperty(s) && u !== a && (u != null || a != null)))
        if (s === 'style')
          if (a) {
            for (i in a) !a.hasOwnProperty(i) || (u && u.hasOwnProperty(i)) || (n || (n = {}), (n[i] = ''));
            for (i in u) u.hasOwnProperty(i) && a[i] !== u[i] && (n || (n = {}), (n[i] = u[i]));
          } else n || (o || (o = []), o.push(s, n)), (n = u);
        else
          s === 'dangerouslySetInnerHTML'
            ? ((u = u ? u.__html : void 0),
              (a = a ? a.__html : void 0),
              u != null && a !== u && (o = o || []).push(s, u))
            : s === 'children'
              ? (typeof u != 'string' && typeof u != 'number') || (o = o || []).push(s, '' + u)
              : s !== 'suppressContentEditableWarning' &&
                s !== 'suppressHydrationWarning' &&
                (al.hasOwnProperty(s)
                  ? (u != null && s === 'onScroll' && oe('scroll', e), o || a === u || (o = []))
                  : (o = o || []).push(s, u));
    }
    n && (o = o || []).push('style', n);
    var s = o;
    (t.updateQueue = s) && (t.flags |= 4);
  }
};
Ep = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function $r(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case 'collapsed':
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
        r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
    }
}
function Ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes), (r |= l.subtreeFlags), (r |= l.flags), (l.return = e), (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function ry(e, t, n) {
  var r = t.pendingProps;
  switch ((Ou(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Ie(t), null;
    case 1:
      return Xe(t.type) && Io(), Ie(t), null;
    case 3:
      return (
        (r = t.stateNode),
        wr(),
        ae(Qe),
        ae(Ae),
        Bu(),
        r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (bl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (nu(yt), (yt = null)))),
        Xa(e, t),
        Ie(t),
        null
      );
    case 5:
      $u(t);
      var l = Dn(wl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        wp(e, t, n, r, l), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(N(166));
          return Ie(t), null;
        }
        if (((e = Dn(Lt.current)), bl(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ct] = t), (r[yl] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              oe('cancel', r), oe('close', r);
              break;
            case 'iframe':
            case 'object':
            case 'embed':
              oe('load', r);
              break;
            case 'video':
            case 'audio':
              for (l = 0; l < Jr.length; l++) oe(Jr[l], r);
              break;
            case 'source':
              oe('error', r);
              break;
            case 'img':
            case 'image':
            case 'link':
              oe('error', r), oe('load', r);
              break;
            case 'details':
              oe('toggle', r);
              break;
            case 'input':
              Hs(r, o), oe('invalid', r);
              break;
            case 'select':
              (r._wrapperState = {
                wasMultiple: !!o.multiple,
              }),
                oe('invalid', r);
              break;
            case 'textarea':
              Ks(r, o), oe('invalid', r);
          }
          Sa(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var a = o[i];
              i === 'children'
                ? typeof a == 'string'
                  ? r.textContent !== a &&
                    (o.suppressHydrationWarning !== !0 && Gl(r.textContent, a, e), (l = ['children', a]))
                  : typeof a == 'number' &&
                    r.textContent !== '' + a &&
                    (o.suppressHydrationWarning !== !0 && Gl(r.textContent, a, e), (l = ['children', '' + a]))
                : al.hasOwnProperty(i) && a != null && i === 'onScroll' && oe('scroll', r);
            }
          switch (n) {
            case 'input':
              Vl(r), Ws(r, o, !0);
              break;
            case 'textarea':
              Vl(r), Ys(r);
              break;
            case 'select':
            case 'option':
              break;
            default:
              typeof o.onClick == 'function' && (r.onclick = Fo);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = Qf(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = i.createElement('div')), (e.innerHTML = '<script></script>'), (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = i.createElement(n, {
                      is: r.is,
                    }))
                  : ((e = i.createElement(n)),
                    n === 'select' && ((i = e), r.multiple ? (i.multiple = !0) : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ct] = t),
            (e[yl] = r),
            gp(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = ka(n, r)), n)) {
              case 'dialog':
                oe('cancel', e), oe('close', e), (l = r);
                break;
              case 'iframe':
              case 'object':
              case 'embed':
                oe('load', e), (l = r);
                break;
              case 'video':
              case 'audio':
                for (l = 0; l < Jr.length; l++) oe(Jr[l], e);
                l = r;
                break;
              case 'source':
                oe('error', e), (l = r);
                break;
              case 'img':
              case 'image':
              case 'link':
                oe('error', e), oe('load', e), (l = r);
                break;
              case 'details':
                oe('toggle', e), (l = r);
                break;
              case 'input':
                Hs(e, r), (l = va(e, r)), oe('invalid', e);
                break;
              case 'option':
                l = r;
                break;
              case 'select':
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (l = fe({}, r, {
                    value: void 0,
                  })),
                  oe('invalid', e);
                break;
              case 'textarea':
                Ks(e, r), (l = wa(e, r)), oe('invalid', e);
                break;
              default:
                l = r;
            }
            Sa(n, l), (a = l);
            for (o in a)
              if (a.hasOwnProperty(o)) {
                var u = a[o];
                o === 'style'
                  ? Gf(e, u)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((u = u ? u.__html : void 0), u != null && Xf(e, u))
                    : o === 'children'
                      ? typeof u == 'string'
                        ? (n !== 'textarea' || u !== '') && ul(e, u)
                        : typeof u == 'number' && ul(e, '' + u)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (al.hasOwnProperty(o)
                          ? u != null && o === 'onScroll' && oe('scroll', e)
                          : u != null && yu(e, o, u, i));
              }
            switch (n) {
              case 'input':
                Vl(e), Ws(e, r, !1);
                break;
              case 'textarea':
                Vl(e), Ys(e);
                break;
              case 'option':
                r.value != null && e.setAttribute('value', '' + vn(r.value));
                break;
              case 'select':
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? sr(e, !!r.multiple, o, !1)
                    : r.defaultValue != null && sr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == 'function' && (e.onclick = Fo);
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus;
                break e;
              case 'img':
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Ie(t), null;
    case 6:
      if (e && t.stateNode != null) Ep(e, t, e.memoizedProps, r);
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(N(166));
        if (((n = Dn(wl.current)), Dn(Lt.current), bl(t))) {
          if (
            ((r = t.stateNode), (n = t.memoizedProps), (r[Ct] = t), (o = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                Gl(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Gl(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ct] = t), (t.stateNode = r);
      }
      return Ie(t), null;
    case 13:
      if (
        (ae(se), (r = t.memoizedState), e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && Ze !== null && t.mode & 1 && !(t.flags & 128)) Ad(), yr(), (t.flags |= 98560), (o = !1);
        else if (((o = bl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(N(318));
            if (((o = t.memoizedState), (o = o !== null ? o.dehydrated : null), !o)) throw Error(N(317));
            o[Ct] = t;
          } else yr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Ie(t), (o = !1);
        } else yt !== null && (nu(yt), (yt = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192), t.mode & 1 && (e === null || se.current & 1 ? xe === 0 && (xe = 3) : qu())),
          t.updateQueue !== null && (t.flags |= 4),
          Ie(t),
          null);
    case 4:
      return wr(), Xa(e, t), e === null && ml(t.stateNode.containerInfo), Ie(t), null;
    case 10:
      return ju(t.type._context), Ie(t), null;
    case 17:
      return Xe(t.type) && Io(), Ie(t), null;
    case 19:
      if ((ae(se), (o = t.memoizedState), o === null)) return Ie(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) $r(o, !1);
        else {
          if (xe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Vo(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    $r(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return re(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null && ge() > Sr && ((t.flags |= 128), (r = !0), $r(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Vo(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              $r(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !i.alternate && !ue)
            )
              return Ie(t), null;
          } else
            2 * ge() - o.renderingStartTime > Sr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), $r(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last), n !== null ? (n.sibling = i) : (t.child = i), (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = ge()),
          (t.sibling = null),
          (n = se.current),
          re(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Ie(t), null);
    case 22:
    case 23:
      return (
        Zu(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1 ? Ge & 1073741824 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(N(156, t.tag));
}
function ly(e, t) {
  switch ((Ou(t), t.tag)) {
    case 1:
      return Xe(t.type) && Io(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 3:
      return (
        wr(), ae(Qe), ae(Ae), Bu(), (e = t.flags), e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return $u(t), null;
    case 13:
      if ((ae(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(N(340));
        yr();
      }
      return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
    case 19:
      return ae(se), null;
    case 4:
      return wr(), null;
    case 10:
      return ju(t.type._context), null;
    case 22:
    case 23:
      return Zu(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var eo = !1,
  je = !1,
  oy = typeof WeakSet == 'function' ? WeakSet : Set,
  F = null;
function ar(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null);
      } catch (r) {
        ve(e, t, r);
      }
    else n.current = null;
}
function Ja(e, t, n) {
  try {
    n();
  } catch (r) {
    ve(e, t, r);
  }
}
var Ic = !1;
function iy(e, t) {
  if (((Oa = Do), (e = _d()), Nu(e))) {
    if ('selectionStart' in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            a = -1,
            u = -1,
            s = 0,
            d = 0,
            c = e,
            f = null;
          t: for (;;) {
            for (
              var w;
              c !== n || (l !== 0 && c.nodeType !== 3) || (a = i + l),
                c !== o || (r !== 0 && c.nodeType !== 3) || (u = i + r),
                c.nodeType === 3 && (i += c.nodeValue.length),
                (w = c.firstChild) !== null;

            )
              (f = c), (c = w);
            for (;;) {
              if (c === e) break t;
              if ((f === n && ++s === l && (a = i), f === o && ++d === r && (u = i), (w = c.nextSibling) !== null))
                break;
              (c = f), (f = c.parentNode);
            }
            c = w;
          }
          n =
            a === -1 || u === -1
              ? null
              : {
                  start: a,
                  end: u,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    Ma = {
      focusedElem: e,
      selectionRange: n,
    },
      Do = !1,
      F = t;
    F !== null;

  )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var m = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (m !== null) {
                  var k = m.memoizedProps,
                    P = m.memoizedState,
                    h = t.stateNode,
                    p = h.getSnapshotBeforeUpdate(t.elementType === t.type ? k : ht(t.type, k), P);
                  h.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var v = t.stateNode.containerInfo;
                v.nodeType === 1
                  ? (v.textContent = '')
                  : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(N(163));
            }
        } catch (S) {
          ve(t, t.return, S);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (m = Ic), (Ic = !1), m;
}
function rl(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Ja(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function pi(e, t) {
  if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Ga(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == 'function' ? t(e) : (t.current = e);
  }
}
function Sp(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Sp(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode), t !== null && (delete t[Ct], delete t[yl], delete t[ja], delete t[Vv], delete t[Hv])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function kp(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function jc(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || kp(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ba(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Fo));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ba(e, t, n), e = e.sibling; e !== null; ) ba(e, t, n), (e = e.sibling);
}
function Za(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Za(e, t, n), e = e.sibling; e !== null; ) Za(e, t, n), (e = e.sibling);
}
var De = null,
  mt = !1;
function Zt(e, t, n) {
  for (n = n.child; n !== null; ) xp(e, t, n), (n = n.sibling);
}
function xp(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == 'function')
    try {
      Pt.onCommitFiberUnmount(oi, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || ar(n, t);
    case 6:
      var r = De,
        l = mt;
      (De = null),
        Zt(e, t, n),
        (De = r),
        (mt = l),
        De !== null &&
          (mt
            ? ((e = De), (n = n.stateNode), e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : De.removeChild(n.stateNode));
      break;
    case 18:
      De !== null &&
        (mt
          ? ((e = De), (n = n.stateNode), e.nodeType === 8 ? Xi(e.parentNode, n) : e.nodeType === 1 && Xi(e, n), dl(e))
          : Xi(De, n.stateNode));
      break;
    case 4:
      (r = De), (l = mt), (De = n.stateNode.containerInfo), (mt = !0), Zt(e, t, n), (De = r), (mt = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!je && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag), i !== void 0 && (o & 2 || o & 4) && Ja(n, t, i), (l = l.next);
        } while (l !== r);
      }
      Zt(e, t, n);
      break;
    case 1:
      if (!je && (ar(n, t), (r = n.stateNode), typeof r.componentWillUnmount == 'function'))
        try {
          (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
        } catch (a) {
          ve(n, t, a);
        }
      Zt(e, t, n);
      break;
    case 21:
      Zt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? ((je = (r = je) || n.memoizedState !== null), Zt(e, t, n), (je = r)) : Zt(e, t, n);
      break;
    default:
      Zt(e, t, n);
  }
}
function Ac(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new oy()),
      t.forEach(function (r) {
        var l = my.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function pt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          a = i;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (De = a.stateNode), (mt = !1);
              break e;
            case 3:
              (De = a.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (De = a.stateNode.containerInfo), (mt = !0);
              break e;
          }
          a = a.return;
        }
        if (De === null) throw Error(N(160));
        xp(o, i, l), (De = null), (mt = !1);
        var u = l.alternate;
        u !== null && (u.return = null), (l.return = null);
      } catch (s) {
        ve(l, t, s);
      }
    }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) _p(t, e), (t = t.sibling);
}
function _p(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((pt(t, e), _t(e), r & 4)) {
        try {
          rl(3, e, e.return), pi(3, e);
        } catch (k) {
          ve(e, e.return, k);
        }
        try {
          rl(5, e, e.return);
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 1:
      pt(t, e), _t(e), r & 512 && n !== null && ar(n, n.return);
      break;
    case 5:
      if ((pt(t, e), _t(e), r & 512 && n !== null && ar(n, n.return), e.flags & 32)) {
        var l = e.stateNode;
        try {
          ul(l, '');
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          a = e.type,
          u = e.updateQueue;
        if (((e.updateQueue = null), u !== null))
          try {
            a === 'input' && o.type === 'radio' && o.name != null && Kf(l, o), ka(a, i);
            var s = ka(a, o);
            for (i = 0; i < u.length; i += 2) {
              var d = u[i],
                c = u[i + 1];
              d === 'style'
                ? Gf(l, c)
                : d === 'dangerouslySetInnerHTML'
                  ? Xf(l, c)
                  : d === 'children'
                    ? ul(l, c)
                    : yu(l, d, c, s);
            }
            switch (a) {
              case 'input':
                ya(l, o);
                break;
              case 'textarea':
                Yf(l, o);
                break;
              case 'select':
                var f = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var w = o.value;
                w != null
                  ? sr(l, !!o.multiple, w, !1)
                  : f !== !!o.multiple &&
                    (o.defaultValue != null
                      ? sr(l, !!o.multiple, o.defaultValue, !0)
                      : sr(l, !!o.multiple, o.multiple ? [] : '', !1));
            }
            l[yl] = o;
          } catch (k) {
            ve(e, e.return, k);
          }
      }
      break;
    case 6:
      if ((pt(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(N(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (k) {
          ve(e, e.return, k);
        }
      }
      break;
    case 3:
      if ((pt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
        try {
          dl(t.containerInfo);
        } catch (k) {
          ve(e, e.return, k);
        }
      break;
    case 4:
      pt(t, e), _t(e);
      break;
    case 13:
      pt(t, e),
        _t(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o || (l.alternate !== null && l.alternate.memoizedState !== null) || (Gu = ge())),
        r & 4 && Ac(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (s = je) || d), pt(t, e), (je = s)) : pt(t, e),
        _t(e),
        r & 8192)
      ) {
        if (((s = e.memoizedState !== null), (e.stateNode.isHidden = s) && !d && e.mode & 1))
          for (F = e, d = e.child; d !== null; ) {
            for (c = F = d; F !== null; ) {
              switch (((f = F), (w = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  rl(4, f, f.return);
                  break;
                case 1:
                  ar(f, f.return);
                  var m = f.stateNode;
                  if (typeof m.componentWillUnmount == 'function') {
                    (r = f), (n = f.return);
                    try {
                      (t = r), (m.props = t.memoizedProps), (m.state = t.memoizedState), m.componentWillUnmount();
                    } catch (k) {
                      ve(r, n, k);
                    }
                  }
                  break;
                case 5:
                  ar(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    Uc(c);
                    continue;
                  }
              }
              w !== null ? ((w.return = f), (F = w)) : Uc(c);
            }
            d = d.sibling;
          }
        e: for (d = null, c = e; ; ) {
          if (c.tag === 5) {
            if (d === null) {
              d = c;
              try {
                (l = c.stateNode),
                  s
                    ? ((o = l.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((a = c.stateNode),
                      (u = c.memoizedProps.style),
                      (i = u != null && u.hasOwnProperty('display') ? u.display : null),
                      (a.style.display = Jf('display', i)));
              } catch (k) {
                ve(e, e.return, k);
              }
            }
          } else if (c.tag === 6) {
            if (d === null)
              try {
                c.stateNode.nodeValue = s ? '' : c.memoizedProps;
              } catch (k) {
                ve(e, e.return, k);
              }
          } else if (((c.tag !== 22 && c.tag !== 23) || c.memoizedState === null || c === e) && c.child !== null) {
            (c.child.return = c), (c = c.child);
            continue;
          }
          if (c === e) break e;
          for (; c.sibling === null; ) {
            if (c.return === null || c.return === e) break e;
            d === c && (d = null), (c = c.return);
          }
          d === c && (d = null), (c.sibling.return = c.return), (c = c.sibling);
        }
      }
      break;
    case 19:
      pt(t, e), _t(e), r & 4 && Ac(e);
      break;
    case 21:
      break;
    default:
      pt(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (kp(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(N(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (ul(l, ''), (r.flags &= -33));
          var o = jc(e);
          Za(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            a = jc(e);
          ba(e, a, i);
          break;
        default:
          throw Error(N(161));
      }
    } catch (u) {
      ve(e, e.return, u);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function ay(e, t, n) {
  (F = e), Rp(e);
}
function Rp(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var l = F,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || eo;
      if (!i) {
        var a = l.alternate,
          u = (a !== null && a.memoizedState !== null) || je;
        a = eo;
        var s = je;
        if (((eo = i), (je = u) && !s))
          for (F = l; F !== null; )
            (i = F),
              (u = i.child),
              i.tag === 22 && i.memoizedState !== null ? $c(l) : u !== null ? ((u.return = i), (F = u)) : $c(l);
        for (; o !== null; ) (F = o), Rp(o), (o = o.sibling);
        (F = l), (eo = a), (je = s);
      }
      zc(e);
    } else l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (F = o)) : zc(e);
  }
}
function zc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || pi(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var l = t.elementType === t.type ? n.memoizedProps : ht(t.type, n.memoizedProps);
                  r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                }
              var o = t.updateQueue;
              o !== null && Sc(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Sc(t, i, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var u = t.memoizedProps;
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    u.autoFocus && n.focus();
                    break;
                  case 'img':
                    u.src && (n.src = u.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var s = t.alternate;
                if (s !== null) {
                  var d = s.memoizedState;
                  if (d !== null) {
                    var c = d.dehydrated;
                    c !== null && dl(c);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(N(163));
          }
        je || (t.flags & 512 && Ga(t));
      } catch (f) {
        ve(t, t.return, f);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Uc(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function $c(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            pi(4, t);
          } catch (u) {
            ve(t, n, u);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == 'function') {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (u) {
              ve(t, l, u);
            }
          }
          var o = t.return;
          try {
            Ga(t);
          } catch (u) {
            ve(t, o, u);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Ga(t);
          } catch (u) {
            ve(t, i, u);
          }
      }
    } catch (u) {
      ve(t, t.return, u);
    }
    if (t === e) {
      F = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (F = a);
      break;
    }
    F = t.return;
  }
}
var uy = Math.ceil,
  Ko = Xt.ReactCurrentDispatcher,
  Xu = Xt.ReactCurrentOwner,
  ut = Xt.ReactCurrentBatchConfig,
  J = 0,
  Pe = null,
  Se = null,
  Oe = 0,
  Ge = 0,
  ur = En(0),
  xe = 0,
  xl = null,
  zn = 0,
  hi = 0,
  Ju = 0,
  ll = null,
  Ke = null,
  Gu = 0,
  Sr = 1 / 0,
  jt = null,
  Yo = !1,
  qa = null,
  pn = null,
  to = !1,
  on = null,
  Qo = 0,
  ol = 0,
  eu = null,
  wo = -1,
  Eo = 0;
function Be() {
  return J & 6 ? ge() : wo !== -1 ? wo : (wo = ge());
}
function hn(e) {
  return e.mode & 1
    ? J & 2 && Oe !== 0
      ? Oe & -Oe
      : Kv.transition !== null
        ? (Eo === 0 && (Eo = ud()), Eo)
        : ((e = ee), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : md(e.type))), e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < ol) throw ((ol = 0), (eu = null), Error(N(185)));
  Cl(e, n, r),
    (!(J & 2) || e !== Pe) &&
      (e === Pe && (!(J & 2) && (hi |= n), xe === 4 && rn(e, Oe)),
      Je(e, r),
      n === 1 && J === 0 && !(t.mode & 1) && ((Sr = ge() + 500), ci && Sn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  Km(e, t);
  var r = No(e, e === Pe ? Oe : 0);
  if (r === 0) n !== null && Js(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Js(n), t === 1))
      e.tag === 0 ? Wv(Bc.bind(null, e)) : Fd(Bc.bind(null, e)),
        $v(function () {
          !(J & 6) && Sn();
        }),
        (n = null);
    else {
      switch (sd(r)) {
        case 1:
          n = ku;
          break;
        case 4:
          n = id;
          break;
        case 16:
          n = To;
          break;
        case 536870912:
          n = ad;
          break;
        default:
          n = To;
      }
      n = Mp(n, Cp.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Cp(e, t) {
  if (((wo = -1), (Eo = 0), J & 6)) throw Error(N(327));
  var n = e.callbackNode;
  if (hr() && e.callbackNode !== n) return null;
  var r = No(e, e === Pe ? Oe : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = Xo(e, r);
  else {
    t = r;
    var l = J;
    J |= 2;
    var o = Lp();
    (Pe !== e || Oe !== t) && ((jt = null), (Sr = ge() + 500), Mn(e, t));
    do
      try {
        fy();
        break;
      } catch (a) {
        Pp(e, a);
      }
    while (!0);
    Iu(), (Ko.current = o), (J = l), Se !== null ? (t = 0) : ((Pe = null), (Oe = 0), (t = xe));
  }
  if (t !== 0) {
    if ((t === 2 && ((l = Pa(e)), l !== 0 && ((r = l), (t = tu(e, l)))), t === 1))
      throw ((n = xl), Mn(e, 0), rn(e, r), Je(e, ge()), n);
    if (t === 6) rn(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !sy(l) &&
          ((t = Xo(e, r)), t === 2 && ((o = Pa(e)), o !== 0 && ((r = o), (t = tu(e, o)))), t === 1))
      )
        throw ((n = xl), Mn(e, 0), rn(e, r), Je(e, ge()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(N(345));
        case 2:
          Pn(e, Ke, jt);
          break;
        case 3:
          if ((rn(e, r), (r & 130023424) === r && ((t = Gu + 500 - ge()), 10 < t))) {
            if (No(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              Be(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Ia(Pn.bind(null, e, Ke, jt), t);
            break;
          }
          Pn(e, Ke, jt);
          break;
        case 4:
          if ((rn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - gt(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = ge() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * uy(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Ia(Pn.bind(null, e, Ke, jt), r);
            break;
          }
          Pn(e, Ke, jt);
          break;
        case 5:
          Pn(e, Ke, jt);
          break;
        default:
          throw Error(N(329));
      }
    }
  }
  return Je(e, ge()), e.callbackNode === n ? Cp.bind(null, e) : null;
}
function tu(e, t) {
  var n = ll;
  return (
    e.current.memoizedState.isDehydrated && (Mn(e, t).flags |= 256),
    (e = Xo(e, t)),
    e !== 2 && ((t = Ke), (Ke = n), t !== null && nu(t)),
    e
  );
}
function nu(e) {
  Ke === null ? (Ke = e) : Ke.push.apply(Ke, e);
}
function sy(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!Et(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function rn(e, t) {
  for (t &= ~Ju, t &= ~hi, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - gt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Bc(e) {
  if (J & 6) throw Error(N(327));
  hr();
  var t = No(e, 0);
  if (!(t & 1)) return Je(e, ge()), null;
  var n = Xo(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Pa(e);
    r !== 0 && ((t = r), (n = tu(e, r)));
  }
  if (n === 1) throw ((n = xl), Mn(e, 0), rn(e, t), Je(e, ge()), n);
  if (n === 6) throw Error(N(345));
  return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), Pn(e, Ke, jt), Je(e, ge()), null;
}
function bu(e, t) {
  var n = J;
  J |= 1;
  try {
    return e(t);
  } finally {
    (J = n), J === 0 && ((Sr = ge() + 500), ci && Sn());
  }
}
function Un(e) {
  on !== null && on.tag === 0 && !(J & 6) && hr();
  var t = J;
  J |= 1;
  var n = ut.transition,
    r = ee;
  try {
    if (((ut.transition = null), (ee = 1), e)) return e();
  } finally {
    (ee = r), (ut.transition = n), (J = t), !(J & 6) && Sn();
  }
}
function Zu() {
  (Ge = ur.current), ae(ur);
}
function Mn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Uv(n)), Se !== null))
    for (n = Se.return; n !== null; ) {
      var r = n;
      switch ((Ou(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Io();
          break;
        case 3:
          wr(), ae(Qe), ae(Ae), Bu();
          break;
        case 5:
          $u(r);
          break;
        case 4:
          wr();
          break;
        case 13:
          ae(se);
          break;
        case 19:
          ae(se);
          break;
        case 10:
          ju(r.type._context);
          break;
        case 22:
        case 23:
          Zu();
      }
      n = n.return;
    }
  if (
    ((Pe = e),
    (Se = e = mn(e.current, null)),
    (Oe = Ge = t),
    (xe = 0),
    (xl = null),
    (Ju = hi = zn = 0),
    (Ke = ll = null),
    Nn !== null)
  ) {
    for (t = 0; t < Nn.length; t++)
      if (((n = Nn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    Nn = null;
  }
  return e;
}
function Pp(e, t) {
  do {
    var n = Se;
    try {
      if ((Iu(), (vo.current = Wo), Ho)) {
        for (var r = ce.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Ho = !1;
      }
      if (
        ((An = 0), (Ce = ke = ce = null), (nl = !1), (El = 0), (Xu.current = null), n === null || n.return === null)
      ) {
        (xe = 1), (xl = t), (Se = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          a = n,
          u = t;
        if (((t = Oe), (a.flags |= 32768), u !== null && typeof u == 'object' && typeof u.then == 'function')) {
          var s = u,
            d = a,
            c = d.tag;
          if (!(d.mode & 1) && (c === 0 || c === 11 || c === 15)) {
            var f = d.alternate;
            f
              ? ((d.updateQueue = f.updateQueue), (d.memoizedState = f.memoizedState), (d.lanes = f.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var w = Lc(i);
          if (w !== null) {
            (w.flags &= -257), Tc(w, i, a, o, t), w.mode & 1 && Pc(o, s, t), (t = w), (u = s);
            var m = t.updateQueue;
            if (m === null) {
              var k = new Set();
              k.add(u), (t.updateQueue = k);
            } else m.add(u);
            break e;
          } else {
            if (!(t & 1)) {
              Pc(o, s, t), qu();
              break e;
            }
            u = Error(N(426));
          }
        } else if (ue && a.mode & 1) {
          var P = Lc(i);
          if (P !== null) {
            !(P.flags & 65536) && (P.flags |= 256), Tc(P, i, a, o, t), Mu(Er(u, a));
            break e;
          }
        }
        (o = u = Er(u, a)), xe !== 4 && (xe = 2), ll === null ? (ll = [o]) : ll.push(o), (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var h = cp(o, u, t);
              Ec(o, h);
              break e;
            case 1:
              a = u;
              var p = o.type,
                v = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof p.getDerivedStateFromError == 'function' ||
                  (v !== null && typeof v.componentDidCatch == 'function' && (pn === null || !pn.has(v))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var S = fp(o, a, t);
                Ec(o, S);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Np(n);
    } catch (C) {
      (t = C), Se === n && n !== null && (Se = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Lp() {
  var e = Ko.current;
  return (Ko.current = Wo), e === null ? Wo : e;
}
function qu() {
  (xe === 0 || xe === 3 || xe === 2) && (xe = 4), Pe === null || (!(zn & 268435455) && !(hi & 268435455)) || rn(Pe, Oe);
}
function Xo(e, t) {
  var n = J;
  J |= 2;
  var r = Lp();
  (Pe !== e || Oe !== t) && ((jt = null), Mn(e, t));
  do
    try {
      cy();
      break;
    } catch (l) {
      Pp(e, l);
    }
  while (!0);
  if ((Iu(), (J = n), (Ko.current = r), Se !== null)) throw Error(N(261));
  return (Pe = null), (Oe = 0), xe;
}
function cy() {
  for (; Se !== null; ) Tp(Se);
}
function fy() {
  for (; Se !== null && !jm(); ) Tp(Se);
}
function Tp(e) {
  var t = Op(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps), t === null ? Np(e) : (Se = t), (Xu.current = null);
}
function Np(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = ly(n, t)), n !== null)) {
        (n.flags &= 32767), (Se = n);
        return;
      }
      if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (xe = 6), (Se = null);
        return;
      }
    } else if (((n = ry(n, t, Ge)), n !== null)) {
      Se = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Se = t;
      return;
    }
    Se = t = e;
  } while (t !== null);
  xe === 0 && (xe = 5);
}
function Pn(e, t, n) {
  var r = ee,
    l = ut.transition;
  try {
    (ut.transition = null), (ee = 1), dy(e, t, n, r);
  } finally {
    (ut.transition = l), (ee = r);
  }
  return null;
}
function dy(e, t, n, r) {
  do hr();
  while (on !== null);
  if (J & 6) throw Error(N(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(N(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (Ym(e, o),
    e === Pe && ((Se = Pe = null), (Oe = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      to ||
      ((to = !0),
      Mp(To, function () {
        return hr(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = ut.transition), (ut.transition = null);
    var i = ee;
    ee = 1;
    var a = J;
    (J |= 4),
      (Xu.current = null),
      iy(e, n),
      _p(n, e),
      Ov(Ma),
      (Do = !!Oa),
      (Ma = Oa = null),
      (e.current = n),
      ay(n),
      Am(),
      (J = a),
      (ee = i),
      (ut.transition = o);
  } else e.current = n;
  if (
    (to && ((to = !1), (on = e), (Qo = l)),
    (o = e.pendingLanes),
    o === 0 && (pn = null),
    $m(n.stateNode),
    Je(e, ge()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]),
        r(l.value, {
          componentStack: l.stack,
          digest: l.digest,
        });
  if (Yo) throw ((Yo = !1), (e = qa), (qa = null), e);
  return (
    Qo & 1 && e.tag !== 0 && hr(),
    (o = e.pendingLanes),
    o & 1 ? (e === eu ? ol++ : ((ol = 0), (eu = e))) : (ol = 0),
    Sn(),
    null
  );
}
function hr() {
  if (on !== null) {
    var e = sd(Qo),
      t = ut.transition,
      n = ee;
    try {
      if (((ut.transition = null), (ee = 16 > e ? 16 : e), on === null)) var r = !1;
      else {
        if (((e = on), (on = null), (Qo = 0), J & 6)) throw Error(N(331));
        var l = J;
        for (J |= 4, F = e.current; F !== null; ) {
          var o = F,
            i = o.child;
          if (F.flags & 16) {
            var a = o.deletions;
            if (a !== null) {
              for (var u = 0; u < a.length; u++) {
                var s = a[u];
                for (F = s; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      rl(8, d, o);
                  }
                  var c = d.child;
                  if (c !== null) (c.return = d), (F = c);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var f = d.sibling,
                        w = d.return;
                      if ((Sp(d), d === s)) {
                        F = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = w), (F = f);
                        break;
                      }
                      F = w;
                    }
                }
              }
              var m = o.alternate;
              if (m !== null) {
                var k = m.child;
                if (k !== null) {
                  m.child = null;
                  do {
                    var P = k.sibling;
                    (k.sibling = null), (k = P);
                  } while (k !== null);
                }
              }
              F = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (F = i);
          else
            e: for (; F !== null; ) {
              if (((o = F), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    rl(9, o, o.return);
                }
              var h = o.sibling;
              if (h !== null) {
                (h.return = o.return), (F = h);
                break e;
              }
              F = o.return;
            }
        }
        var p = e.current;
        for (F = p; F !== null; ) {
          i = F;
          var v = i.child;
          if (i.subtreeFlags & 2064 && v !== null) (v.return = i), (F = v);
          else
            e: for (i = p; F !== null; ) {
              if (((a = F), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      pi(9, a);
                  }
                } catch (C) {
                  ve(a, a.return, C);
                }
              if (a === i) {
                F = null;
                break e;
              }
              var S = a.sibling;
              if (S !== null) {
                (S.return = a.return), (F = S);
                break e;
              }
              F = a.return;
            }
        }
        if (((J = l), Sn(), Pt && typeof Pt.onPostCommitFiberRoot == 'function'))
          try {
            Pt.onPostCommitFiberRoot(oi, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (ee = n), (ut.transition = t);
    }
  }
  return !1;
}
function Vc(e, t, n) {
  (t = Er(n, t)), (t = cp(e, t, 1)), (e = dn(e, t, 1)), (t = Be()), e !== null && (Cl(e, 1, t), Je(e, t));
}
function ve(e, t, n) {
  if (e.tag === 3) Vc(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Vc(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' && (pn === null || !pn.has(r)))
        ) {
          (e = Er(n, e)), (e = fp(t, e, 1)), (t = dn(t, e, 1)), (e = Be()), t !== null && (Cl(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function py(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Be()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Pe === e &&
      (Oe & n) === n &&
      (xe === 4 || (xe === 3 && (Oe & 130023424) === Oe && 500 > ge() - Gu) ? Mn(e, 0) : (Ju |= n)),
    Je(e, t);
}
function Dp(e, t) {
  t === 0 && (e.mode & 1 ? ((t = Kl), (Kl <<= 1), !(Kl & 130023424) && (Kl = 4194304)) : (t = 1));
  var n = Be();
  (e = Wt(e, t)), e !== null && (Cl(e, t, n), Je(e, n));
}
function hy(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dp(e, n);
}
function my(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(N(314));
  }
  r !== null && r.delete(t), Dp(e, n);
}
var Op;
Op = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Qe.current) Ye = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Ye = !1), ny(e, t, n);
      Ye = !!(e.flags & 131072);
    }
  else (Ye = !1), ue && t.flags & 1048576 && Id(t, zo, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      go(e, t), (e = t.pendingProps);
      var l = vr(t, Ae.current);
      pr(t, n), (l = Hu(null, t, r, e, l, n));
      var o = Wu();
      return (
        (t.flags |= 1),
        typeof l == 'object' && l !== null && typeof l.render == 'function' && l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Xe(r) ? ((o = !0), jo(t)) : (o = !1),
            (t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null),
            zu(t),
            (l.updater = fi),
            (t.stateNode = l),
            (l._reactInternals = t),
            Va(t, r, e, n),
            (t = Ka(null, t, r, !0, o, n)))
          : ((t.tag = 0), ue && o && Du(t), $e(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (go(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = yy(r)),
          (e = ht(r, e)),
          l)
        ) {
          case 0:
            t = Wa(null, t, r, e, n);
            break e;
          case 1:
            t = Oc(null, t, r, e, n);
            break e;
          case 11:
            t = Nc(null, t, r, e, n);
            break e;
          case 14:
            t = Dc(null, t, r, ht(r.type, e), n);
            break e;
        }
        throw Error(N(306, r, ''));
      }
      return t;
    case 0:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : ht(r, l)), Wa(e, t, r, l, n);
    case 1:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : ht(r, l)), Oc(e, t, r, l, n);
    case 3:
      e: {
        if ((mp(t), e === null)) throw Error(N(387));
        (r = t.pendingProps), (o = t.memoizedState), (l = o.element), Ud(e, t), Bo(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = Er(Error(N(423)), t)), (t = Mc(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = Er(Error(N(424)), t)), (t = Mc(e, t, r, n, l));
            break e;
          } else
            for (
              Ze = fn(t.stateNode.containerInfo.firstChild),
                qe = t,
                ue = !0,
                yt = null,
                n = Hd(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((yr(), r === l)) {
            t = Kt(e, t, n);
            break e;
          }
          $e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Wd(t),
        e === null && Ua(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        Fa(r, l) ? (i = null) : o !== null && Fa(r, o) && (t.flags |= 32),
        hp(e, t),
        $e(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Ua(t), null;
    case 13:
      return vp(e, t, n);
    case 4:
      return (
        Uu(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = gr(t, null, r, n)) : $e(e, t, r, n),
        t.child
      );
    case 11:
      return (r = t.type), (l = t.pendingProps), (l = t.elementType === r ? l : ht(r, l)), Nc(e, t, r, l, n);
    case 7:
      return $e(e, t, t.pendingProps, n), t.child;
    case 8:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return $e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          re(Uo, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (Et(o.value, i)) {
            if (o.children === l.children && !Qe.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var a = o.dependencies;
              if (a !== null) {
                i = o.child;
                for (var u = a.firstContext; u !== null; ) {
                  if (u.context === r) {
                    if (o.tag === 1) {
                      (u = Bt(-1, n & -n)), (u.tag = 2);
                      var s = o.updateQueue;
                      if (s !== null) {
                        s = s.shared;
                        var d = s.pending;
                        d === null ? (u.next = u) : ((u.next = d.next), (d.next = u)), (s.pending = u);
                      }
                    }
                    (o.lanes |= n), (u = o.alternate), u !== null && (u.lanes |= n), $a(o.return, n, t), (a.lanes |= n);
                    break;
                  }
                  u = u.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(N(341));
                (i.lanes |= n), (a = i.alternate), a !== null && (a.lanes |= n), $a(i, n, t), (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        $e(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        pr(t, n),
        (l = st(l)),
        (r = r(l)),
        (t.flags |= 1),
        $e(e, t, r, n),
        t.child
      );
    case 14:
      return (r = t.type), (l = ht(r, t.pendingProps)), (l = ht(r.type, l)), Dc(e, t, r, l, n);
    case 15:
      return dp(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : ht(r, l)),
        go(e, t),
        (t.tag = 1),
        Xe(r) ? ((e = !0), jo(t)) : (e = !1),
        pr(t, n),
        Bd(t, r, l),
        Va(t, r, l, n),
        Ka(null, t, r, !0, e, n)
      );
    case 19:
      return yp(e, t, n);
    case 22:
      return pp(e, t, n);
  }
  throw Error(N(156, t.tag));
};
function Mp(e, t) {
  return od(e, t);
}
function vy(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function at(e, t, n, r) {
  return new vy(e, t, n, r);
}
function es(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function yy(e) {
  if (typeof e == 'function') return es(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === wu)) return 11;
    if (e === Eu) return 14;
  }
  return 2;
}
function mn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = at(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function So(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == 'function')) es(e) && (i = 1);
  else if (typeof e == 'string') i = 5;
  else
    e: switch (e) {
      case Zn:
        return Fn(n.children, l, o, t);
      case gu:
        (i = 8), (l |= 8);
        break;
      case da:
        return (e = at(12, n, t, l | 2)), (e.elementType = da), (e.lanes = o), e;
      case pa:
        return (e = at(13, n, t, l)), (e.elementType = pa), (e.lanes = o), e;
      case ha:
        return (e = at(19, n, t, l)), (e.elementType = ha), (e.lanes = o), e;
      case Vf:
        return mi(n, l, o, t);
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case $f:
              i = 10;
              break e;
            case Bf:
              i = 9;
              break e;
            case wu:
              i = 11;
              break e;
            case Eu:
              i = 14;
              break e;
            case en:
              (i = 16), (r = null);
              break e;
          }
        throw Error(N(130, e == null ? e : typeof e, ''));
    }
  return (t = at(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t;
}
function Fn(e, t, n, r) {
  return (e = at(7, e, r, t)), (e.lanes = n), e;
}
function mi(e, t, n, r) {
  return (
    (e = at(22, e, r, t)),
    (e.elementType = Vf),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function na(e, t, n) {
  return (e = at(6, e, null, t)), (e.lanes = n), e;
}
function ra(e, t, n) {
  return (
    (t = at(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function gy(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ai(0)),
    (this.expirationTimes = Ai(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ai(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function ts(e, t, n, r, l, o, i, a, u) {
  return (
    (e = new gy(e, t, n, a, u)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = at(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    zu(o),
    e
  );
}
function wy(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: bn,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Fp(e) {
  if (!e) return yn;
  e = e._reactInternals;
  e: {
    if (Vn(e) !== e || e.tag !== 1) throw Error(N(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Xe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(N(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Xe(n)) return Md(e, n, t);
  }
  return t;
}
function Ip(e, t, n, r, l, o, i, a, u) {
  return (
    (e = ts(n, r, !0, e, l, o, i, a, u)),
    (e.context = Fp(null)),
    (n = e.current),
    (r = Be()),
    (l = hn(n)),
    (o = Bt(r, l)),
    (o.callback = t ?? null),
    dn(n, o, l),
    (e.current.lanes = l),
    Cl(e, l, r),
    Je(e, r),
    e
  );
}
function vi(e, t, n, r) {
  var l = t.current,
    o = Be(),
    i = hn(l);
  return (
    (n = Fp(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Bt(o, i)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = dn(l, t, i)),
    e !== null && (wt(e, l, i, o), mo(e, l, i)),
    i
  );
}
function Jo(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Hc(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ns(e, t) {
  Hc(e, t), (e = e.alternate) && Hc(e, t);
}
function Ey() {
  return null;
}
var jp =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e);
      };
function rs(e) {
  this._internalRoot = e;
}
yi.prototype.render = rs.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(N(409));
  vi(e, t, null, null);
};
yi.prototype.unmount = rs.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Un(function () {
      vi(null, e, null, null);
    }),
      (t[Ht] = null);
  }
};
function yi(e) {
  this._internalRoot = e;
}
yi.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = dd();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < nn.length && t !== 0 && t < nn[n].priority; n++);
    nn.splice(n, 0, e), n === 0 && hd(e);
  }
};
function ls(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function gi(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  );
}
function Wc() {}
function Sy(e, t, n, r, l) {
  if (l) {
    if (typeof r == 'function') {
      var o = r;
      r = function () {
        var s = Jo(i);
        o.call(s);
      };
    }
    var i = Ip(t, r, e, 0, null, !1, !1, '', Wc);
    return (e._reactRootContainer = i), (e[Ht] = i.current), ml(e.nodeType === 8 ? e.parentNode : e), Un(), i;
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == 'function') {
    var a = r;
    r = function () {
      var s = Jo(u);
      a.call(s);
    };
  }
  var u = ts(e, 0, !1, null, null, !1, !1, '', Wc);
  return (
    (e._reactRootContainer = u),
    (e[Ht] = u.current),
    ml(e.nodeType === 8 ? e.parentNode : e),
    Un(function () {
      vi(t, u, n, r);
    }),
    u
  );
}
function wi(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == 'function') {
      var a = l;
      l = function () {
        var u = Jo(i);
        a.call(u);
      };
    }
    vi(t, i, e, l);
  } else i = Sy(n, t, e, l, r);
  return Jo(i);
}
cd = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Xr(t.pendingLanes);
        n !== 0 && (xu(t, n | 1), Je(t, ge()), !(J & 6) && ((Sr = ge() + 500), Sn()));
      }
      break;
    case 13:
      Un(function () {
        var r = Wt(e, 1);
        if (r !== null) {
          var l = Be();
          wt(r, e, 1, l);
        }
      }),
        ns(e, 1);
  }
};
_u = function (e) {
  if (e.tag === 13) {
    var t = Wt(e, 134217728);
    if (t !== null) {
      var n = Be();
      wt(t, e, 134217728, n);
    }
    ns(e, 134217728);
  }
};
fd = function (e) {
  if (e.tag === 13) {
    var t = hn(e),
      n = Wt(e, t);
    if (n !== null) {
      var r = Be();
      wt(n, e, t, r);
    }
    ns(e, t);
  }
};
dd = function () {
  return ee;
};
pd = function (e, t) {
  var n = ee;
  try {
    return (ee = e), t();
  } finally {
    ee = n;
  }
};
_a = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((ya(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll('input[name=' + JSON.stringify('' + t) + '][type="radio"]'), t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = si(r);
            if (!l) throw Error(N(90));
            Wf(r), ya(r, l);
          }
        }
      }
      break;
    case 'textarea':
      Yf(e, n);
      break;
    case 'select':
      (t = n.value), t != null && sr(e, !!n.multiple, t, !1);
  }
};
qf = bu;
ed = Un;
var ky = {
    usingClientEntryPoint: !1,
    Events: [Ll, nr, si, bf, Zf, bu],
  },
  Br = {
    findFiberByHostInstance: Tn,
    bundleType: 0,
    version: '18.2.0',
    rendererPackageName: 'react-dom',
  },
  xy = {
    bundleType: Br.bundleType,
    version: Br.version,
    rendererPackageName: Br.rendererPackageName,
    rendererConfig: Br.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Xt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = rd(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Br.findFiberByHostInstance || Ey,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var no = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!no.isDisabled && no.supportsFiber)
    try {
      (oi = no.inject(xy)), (Pt = no);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ky;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ls(t)) throw Error(N(200));
  return wy(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!ls(e)) throw Error(N(299));
  var n = !1,
    r = '',
    l = jp;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = ts(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ht] = t.current),
    ml(e.nodeType === 8 ? e.parentNode : e),
    new rs(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == 'function' ? Error(N(188)) : ((e = Object.keys(e).join(',')), Error(N(268, e)));
  return (e = rd(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Un(e);
};
tt.hydrate = function (e, t, n) {
  if (!gi(t)) throw Error(N(200));
  return wi(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!ls(e)) throw Error(N(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = '',
    i = jp;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = Ip(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ht] = t.current),
    ml(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new yi(t);
};
tt.render = function (e, t, n) {
  if (!gi(t)) throw Error(N(200));
  return wi(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!gi(e)) throw Error(N(40));
  return e._reactRootContainer
    ? (Un(function () {
        wi(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ht] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = bu;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!gi(n)) throw Error(N(200));
  if (e == null || e._reactInternals === void 0) throw Error(N(38));
  return wi(e, t, n, !1, r);
};
tt.version = '18.2.0-next-9e3b772b8-20220608';
function Ap() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ap);
    } catch (e) {
      console.error(e);
    }
}
Ap(), (If.exports = tt);
var zp = If.exports;
const _y = xf(zp),
  Ry = kf(
    {
      __proto__: null,
      default: _y,
    },
    [zp]
  );
/**
 * @remix-run/router v1.21.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ie() {
  return (
    (ie = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ie.apply(this, arguments)
  );
}
var Ee;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Ee || (Ee = {}));
const Kc = 'popstate';
function w1(e) {
  e === void 0 && (e = {});
  function t(r, l) {
    let { pathname: o, search: i, hash: a } = r.location;
    return _l(
      '',
      {
        pathname: o,
        search: i,
        hash: a,
      },
      (l.state && l.state.usr) || null,
      (l.state && l.state.key) || 'default'
    );
  }
  function n(r, l) {
    return typeof l == 'string' ? l : gn(l);
  }
  return Py(t, n, null, e);
}
function V(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function kr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Cy() {
  return Math.random().toString(36).substr(2, 8);
}
function Yc(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
  };
}
function _l(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    ie(
      {
        pathname: typeof e == 'string' ? e : e.pathname,
        search: '',
        hash: '',
      },
      typeof t == 'string' ? Jt(t) : t,
      {
        state: n,
        key: (t && t.key) || r || Cy(),
      }
    )
  );
}
function gn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  );
}
function Jt(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function Py(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: l = document.defaultView, v5Compat: o = !1 } = r,
    i = l.history,
    a = Ee.Pop,
    u = null,
    s = d();
  s == null &&
    ((s = 0),
    i.replaceState(
      ie({}, i.state, {
        idx: s,
      }),
      ''
    ));
  function d() {
    return (
      i.state || {
        idx: null,
      }
    ).idx;
  }
  function c() {
    a = Ee.Pop;
    let P = d(),
      h = P == null ? null : P - s;
    (s = P),
      u &&
        u({
          action: a,
          location: k.location,
          delta: h,
        });
  }
  function f(P, h) {
    a = Ee.Push;
    let p = _l(k.location, P, h);
    s = d() + 1;
    let v = Yc(p, s),
      S = k.createHref(p);
    try {
      i.pushState(v, '', S);
    } catch (C) {
      if (C instanceof DOMException && C.name === 'DataCloneError') throw C;
      l.location.assign(S);
    }
    o &&
      u &&
      u({
        action: a,
        location: k.location,
        delta: 1,
      });
  }
  function w(P, h) {
    a = Ee.Replace;
    let p = _l(k.location, P, h);
    s = d();
    let v = Yc(p, s),
      S = k.createHref(p);
    i.replaceState(v, '', S),
      o &&
        u &&
        u({
          action: a,
          location: k.location,
          delta: 0,
        });
  }
  function m(P) {
    let h = l.location.origin !== 'null' ? l.location.origin : l.location.href,
      p = typeof P == 'string' ? P : gn(P);
    return (
      (p = p.replace(/ $/, '%20')),
      V(h, 'No window.location.(origin|href) available to create URL for href: ' + p),
      new URL(p, h)
    );
  }
  let k = {
    get action() {
      return a;
    },
    get location() {
      return e(l, i);
    },
    listen(P) {
      if (u) throw new Error('A history only accepts one active listener');
      return (
        l.addEventListener(Kc, c),
        (u = P),
        () => {
          l.removeEventListener(Kc, c), (u = null);
        }
      );
    },
    createHref(P) {
      return t(l, P);
    },
    createURL: m,
    encodeLocation(P) {
      let h = m(P);
      return {
        pathname: h.pathname,
        search: h.search,
        hash: h.hash,
      };
    },
    push: f,
    replace: w,
    go(P) {
      return i.go(P);
    },
  };
  return k;
}
var te;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})(te || (te = {}));
const Ly = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function Ty(e) {
  return e.index === !0;
}
function Go(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((l, o) => {
      let i = [...n, String(o)],
        a = typeof l.id == 'string' ? l.id : i.join('-');
      if (
        (V(l.index !== !0 || !l.children, 'Cannot specify children on an index route'),
        V(
          !r[a],
          'Found a route id collision on id "' + a + `".  Route id's must be globally unique within Data Router usages`
        ),
        Ty(l))
      ) {
        let u = ie({}, l, t(l), {
          id: a,
        });
        return (r[a] = u), u;
      } else {
        let u = ie({}, l, t(l), {
          id: a,
          children: void 0,
        });
        return (r[a] = u), l.children && (u.children = Go(l.children, t, i, r)), u;
      }
    })
  );
}
function zt(e, t, n) {
  return n === void 0 && (n = '/'), ko(e, t, n, !1);
}
function ko(e, t, n, r) {
  let l = typeof t == 'string' ? Jt(t) : t,
    o = ft(l.pathname || '/', n);
  if (o == null) return null;
  let i = $p(e);
  Ny(i);
  let a = null;
  for (let u = 0; a == null && u < i.length; ++u) {
    let s = By(o);
    a = Uy(i[u], s, r);
  }
  return a;
}
function Up(e, t) {
  let { route: n, pathname: r, params: l } = e;
  return {
    id: n.id,
    pathname: r,
    params: l,
    data: t[n.id],
    handle: n.handle,
  };
}
function $p(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let l = (o, i, a) => {
    let u = {
      relativePath: a === void 0 ? o.path || '' : a,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: i,
      route: o,
    };
    u.relativePath.startsWith('/') &&
      (V(
        u.relativePath.startsWith(r),
        'Absolute route path "' +
          u.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.'
      ),
      (u.relativePath = u.relativePath.slice(r.length)));
    let s = Tt([r, u.relativePath]),
      d = n.concat(u);
    o.children &&
      o.children.length > 0 &&
      (V(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + s + '".')
      ),
      $p(o.children, t, d, s)),
      !(o.path == null && !o.index) &&
        t.push({
          path: s,
          score: Ay(s, o.index),
          routesMeta: d,
        });
  };
  return (
    e.forEach((o, i) => {
      var a;
      if (o.path === '' || !((a = o.path) != null && a.includes('?'))) l(o, i);
      else for (let u of Bp(o.path)) l(o, i, u);
    }),
    t
  );
}
function Bp(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    l = n.endsWith('?'),
    o = n.replace(/\?$/, '');
  if (r.length === 0) return l ? [o, ''] : [o];
  let i = Bp(r.join('/')),
    a = [];
  return (
    a.push(...i.map((u) => (u === '' ? o : [o, u].join('/')))),
    l && a.push(...i),
    a.map((u) => (e.startsWith('/') && u === '' ? '/' : u))
  );
}
function Ny(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : zy(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const Dy = /^:[\w-]+$/,
  Oy = 3,
  My = 2,
  Fy = 1,
  Iy = 10,
  jy = -2,
  Qc = (e) => e === '*';
function Ay(e, t) {
  let n = e.split('/'),
    r = n.length;
  return (
    n.some(Qc) && (r += jy),
    t && (r += My),
    n.filter((l) => !Qc(l)).reduce((l, o) => l + (Dy.test(o) ? Oy : o === '' ? Fy : Iy), r)
  );
}
function zy(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, l) => r === t[l]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function Uy(e, t, n) {
  n === void 0 && (n = !1);
  let { routesMeta: r } = e,
    l = {},
    o = '/',
    i = [];
  for (let a = 0; a < r.length; ++a) {
    let u = r[a],
      s = a === r.length - 1,
      d = o === '/' ? t : t.slice(o.length) || '/',
      c = bo(
        {
          path: u.relativePath,
          caseSensitive: u.caseSensitive,
          end: s,
        },
        d
      ),
      f = u.route;
    if (
      (!c &&
        s &&
        n &&
        !r[r.length - 1].route.index &&
        (c = bo(
          {
            path: u.relativePath,
            caseSensitive: u.caseSensitive,
            end: !1,
          },
          d
        )),
      !c)
    )
      return null;
    Object.assign(l, c.params),
      i.push({
        params: l,
        pathname: Tt([o, c.pathname]),
        pathnameBase: Wy(Tt([o, c.pathnameBase])),
        route: f,
      }),
      c.pathnameBase !== '/' && (o = Tt([o, c.pathnameBase]));
  }
  return i;
}
function bo(e, t) {
  typeof e == 'string' &&
    (e = {
      path: e,
      caseSensitive: !1,
      end: !0,
    });
  let [n, r] = $y(e.path, e.caseSensitive, e.end),
    l = t.match(n);
  if (!l) return null;
  let o = l[0],
    i = o.replace(/(.)\/+$/, '$1'),
    a = l.slice(1);
  return {
    params: r.reduce((s, d, c) => {
      let { paramName: f, isOptional: w } = d;
      if (f === '*') {
        let k = a[c] || '';
        i = o.slice(0, o.length - k.length).replace(/(.)\/+$/, '$1');
      }
      const m = a[c];
      return w && !m ? (s[f] = void 0) : (s[f] = (m || '').replace(/%2F/g, '/')), s;
    }, {}),
    pathname: o,
    pathnameBase: i,
    pattern: e,
  };
}
function $y(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    kr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".')
    );
  let r = [],
    l =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (i, a, u) => (
            r.push({
              paramName: a,
              isOptional: u != null,
            }),
            u ? '/?([^\\/]+)?' : '/([^\\/]+)'
          )
        );
  return (
    e.endsWith('*')
      ? (r.push({
          paramName: '*',
        }),
        (l += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (l += '\\/*$')
        : e !== '' && e !== '/' && (l += '(?:(?=\\/|$))'),
    [new RegExp(l, t ? void 0 : 'i'), r]
  );
}
function By(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      kr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').')
      ),
      e
    );
  }
}
function ft(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Vy(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: l = '' } = typeof e == 'string' ? Jt(e) : e;
  return {
    pathname: n ? (n.startsWith('/') ? n : Hy(n, t)) : t,
    search: Ky(r),
    hash: Yy(l),
  };
}
function Hy(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach((l) => {
      l === '..' ? n.length > 1 && n.pop() : l !== '.' && n.push(l);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function la(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Vp(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function os(e, t) {
  let n = Vp(e);
  return t ? n.map((r, l) => (l === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function is(e, t, n, r) {
  r === void 0 && (r = !1);
  let l;
  typeof e == 'string'
    ? (l = Jt(e))
    : ((l = ie({}, e)),
      V(!l.pathname || !l.pathname.includes('?'), la('?', 'pathname', 'search', l)),
      V(!l.pathname || !l.pathname.includes('#'), la('#', 'pathname', 'hash', l)),
      V(!l.search || !l.search.includes('#'), la('#', 'search', 'hash', l)));
  let o = e === '' || l.pathname === '',
    i = o ? '/' : l.pathname,
    a;
  if (i == null) a = n;
  else {
    let c = t.length - 1;
    if (!r && i.startsWith('..')) {
      let f = i.split('/');
      for (; f[0] === '..'; ) f.shift(), (c -= 1);
      l.pathname = f.join('/');
    }
    a = c >= 0 ? t[c] : '/';
  }
  let u = Vy(l, a),
    s = i && i !== '/' && i.endsWith('/'),
    d = (o || i === '.') && n.endsWith('/');
  return !u.pathname.endsWith('/') && (s || d) && (u.pathname += '/'), u;
}
const Tt = (e) => e.join('/').replace(/\/\/+/g, '/'),
  Wy = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Ky = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Yy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Qy {
  constructor(t, n) {
    (this.type = 'DataWithResponseInit'), (this.data = t), (this.init = n || null);
  }
}
function Xy(e, t) {
  return new Qy(
    e,
    typeof t == 'number'
      ? {
          status: t,
        }
      : t
  );
}
class Zo extends Error {}
class Jy {
  constructor(t, n) {
    (this.pendingKeysSet = new Set()),
      (this.subscribers = new Set()),
      (this.deferredKeys = []),
      V(t && typeof t == 'object' && !Array.isArray(t), 'defer() only accepts plain objects');
    let r;
    (this.abortPromise = new Promise((o, i) => (r = i))), (this.controller = new AbortController());
    let l = () => r(new Zo('Deferred data aborted'));
    (this.unlistenAbortSignal = () => this.controller.signal.removeEventListener('abort', l)),
      this.controller.signal.addEventListener('abort', l),
      (this.data = Object.entries(t).reduce((o, i) => {
        let [a, u] = i;
        return Object.assign(o, {
          [a]: this.trackPromise(a, u),
        });
      }, {})),
      this.done && this.unlistenAbortSignal(),
      (this.init = n);
  }
  trackPromise(t, n) {
    if (!(n instanceof Promise)) return n;
    this.deferredKeys.push(t), this.pendingKeysSet.add(t);
    let r = Promise.race([n, this.abortPromise]).then(
      (l) => this.onSettle(r, t, void 0, l),
      (l) => this.onSettle(r, t, l)
    );
    return (
      r.catch(() => {}),
      Object.defineProperty(r, '_tracked', {
        get: () => !0,
      }),
      r
    );
  }
  onSettle(t, n, r, l) {
    if (this.controller.signal.aborted && r instanceof Zo)
      return (
        this.unlistenAbortSignal(),
        Object.defineProperty(t, '_error', {
          get: () => r,
        }),
        Promise.reject(r)
      );
    if ((this.pendingKeysSet.delete(n), this.done && this.unlistenAbortSignal(), r === void 0 && l === void 0)) {
      let o = new Error(
        'Deferred data for key "' +
          n +
          '" resolved/rejected with `undefined`, you must resolve/reject with a value or `null`.'
      );
      return (
        Object.defineProperty(t, '_error', {
          get: () => o,
        }),
        this.emit(!1, n),
        Promise.reject(o)
      );
    }
    return l === void 0
      ? (Object.defineProperty(t, '_error', {
          get: () => r,
        }),
        this.emit(!1, n),
        Promise.reject(r))
      : (Object.defineProperty(t, '_data', {
          get: () => l,
        }),
        this.emit(!1, n),
        l);
  }
  emit(t, n) {
    this.subscribers.forEach((r) => r(t, n));
  }
  subscribe(t) {
    return this.subscribers.add(t), () => this.subscribers.delete(t);
  }
  cancel() {
    this.controller.abort(), this.pendingKeysSet.forEach((t, n) => this.pendingKeysSet.delete(n)), this.emit(!0);
  }
  async resolveData(t) {
    let n = !1;
    if (!this.done) {
      let r = () => this.cancel();
      t.addEventListener('abort', r),
        (n = await new Promise((l) => {
          this.subscribe((o) => {
            t.removeEventListener('abort', r), (o || this.done) && l(o);
          });
        }));
    }
    return n;
  }
  get done() {
    return this.pendingKeysSet.size === 0;
  }
  get unwrappedData() {
    return (
      V(this.data !== null && this.done, 'Can only unwrap data on initialized and settled deferreds'),
      Object.entries(this.data).reduce((t, n) => {
        let [r, l] = n;
        return Object.assign(t, {
          [r]: by(l),
        });
      }, {})
    );
  }
  get pendingKeys() {
    return Array.from(this.pendingKeysSet);
  }
}
function Gy(e) {
  return e instanceof Promise && e._tracked === !0;
}
function by(e) {
  if (!Gy(e)) return e;
  if (e._error) throw e._error;
  return e._data;
}
const Hp = function (t, n) {
  n === void 0 && (n = 302);
  let r = n;
  typeof r == 'number'
    ? (r = {
        status: r,
      })
    : typeof r.status > 'u' && (r.status = 302);
  let l = new Headers(r.headers);
  return (
    l.set('Location', t),
    new Response(
      null,
      ie({}, r, {
        headers: l,
      })
    )
  );
};
class $n {
  constructor(t, n, r, l) {
    l === void 0 && (l = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = l),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function Pr(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  );
}
const Wp = ['post', 'put', 'patch', 'delete'],
  Zy = new Set(Wp),
  qy = ['get', ...Wp],
  eg = new Set(qy),
  tg = new Set([301, 302, 303, 307, 308]),
  ng = new Set([307, 308]),
  oa = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Kp = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Vr = {
    state: 'unblocked',
    proceed: void 0,
    reset: void 0,
    location: void 0,
  },
  as = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  rg = (e) => ({
    hasErrorBoundary: !!e.hasErrorBoundary,
  }),
  Yp = 'remix-router-transitions';
function E1(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    r = !n;
  V(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let l;
  if (e.mapRouteProperties) l = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let E = e.detectErrorBoundary;
    l = (x) => ({
      hasErrorBoundary: E(x),
    });
  } else l = rg;
  let o = {},
    i = Go(e.routes, l, void 0, o),
    a,
    u = e.basename || '/',
    s = e.dataStrategy || ag,
    d = e.patchRoutesOnNavigation,
    c = ie(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        v7_skipActionErrorRevalidation: !1,
      },
      e.future
    ),
    f = null,
    w = new Set(),
    m = null,
    k = null,
    P = null,
    h = e.hydrationData != null,
    p = zt(i, e.history.location, u),
    v = null;
  if (p == null && !d) {
    let E = We(404, {
        pathname: e.history.location.pathname,
      }),
      { matches: x, route: _ } = lf(i);
    (p = x),
      (v = {
        [_.id]: E,
      });
  }
  p && !e.hydrationData && Il(p, i, e.history.location.pathname).active && (p = null);
  let S;
  if (p)
    if (p.some((E) => E.route.lazy)) S = !1;
    else if (!p.some((E) => E.route.loader)) S = !0;
    else if (c.v7_partialHydration) {
      let E = e.hydrationData ? e.hydrationData.loaderData : null,
        x = e.hydrationData ? e.hydrationData.errors : null;
      if (x) {
        let _ = p.findIndex((T) => x[T.route.id] !== void 0);
        S = p.slice(0, _ + 1).every((T) => !lu(T.route, E, x));
      } else S = p.every((_) => !lu(_.route, E, x));
    } else S = e.hydrationData != null;
  else if (((S = !1), (p = []), c.v7_partialHydration)) {
    let E = Il(null, i, e.history.location.pathname);
    E.active && E.matches && (p = E.matches);
  }
  let C,
    y = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: p,
      initialized: S,
      navigation: oa,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || v,
      fetchers: new Map(),
      blockers: new Map(),
    },
    L = Ee.Pop,
    R = !1,
    D,
    O = !1,
    K = new Map(),
    G = null,
    de = !1,
    pe = !1,
    Le = [],
    rt = new Set(),
    ye = new Map(),
    M = 0,
    B = -1,
    H = new Map(),
    Z = new Set(),
    le = new Map(),
    kt = new Map(),
    Te = new Set(),
    dt = new Map(),
    ze = new Map(),
    Mt;
  function Mh() {
    if (
      ((f = e.history.listen((E) => {
        let { action: x, location: _, delta: T } = E;
        if (Mt) {
          Mt(), (Mt = void 0);
          return;
        }
        kr(
          ze.size === 0 || T != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
        );
        let I = Ms({
          currentLocation: y.location,
          nextLocation: _,
          historyAction: x,
        });
        if (I && T != null) {
          let U = new Promise((W) => {
            Mt = W;
          });
          e.history.go(T * -1),
            Fl(I, {
              state: 'blocked',
              location: _,
              proceed() {
                Fl(I, {
                  state: 'proceeding',
                  proceed: void 0,
                  reset: void 0,
                  location: _,
                }),
                  U.then(() => e.history.go(T));
              },
              reset() {
                let W = new Map(y.blockers);
                W.set(I, Vr),
                  Ue({
                    blockers: W,
                  });
              },
            });
          return;
        }
        return xn(x, _);
      })),
      n)
    ) {
      Sg(t, K);
      let E = () => kg(t, K);
      t.addEventListener('pagehide', E), (G = () => t.removeEventListener('pagehide', E));
    }
    return (
      y.initialized ||
        xn(Ee.Pop, y.location, {
          initialHydration: !0,
        }),
      C
    );
  }
  function Fh() {
    f && f(),
      G && G(),
      w.clear(),
      D && D.abort(),
      y.fetchers.forEach((E, x) => Ml(x)),
      y.blockers.forEach((E, x) => Os(x));
  }
  function Ih(E) {
    return w.add(E), () => w.delete(E);
  }
  function Ue(E, x) {
    x === void 0 && (x = {}), (y = ie({}, y, E));
    let _ = [],
      T = [];
    c.v7_fetcherPersist &&
      y.fetchers.forEach((I, U) => {
        I.state === 'idle' && (Te.has(U) ? T.push(U) : _.push(U));
      }),
      [...w].forEach((I) =>
        I(y, {
          deletedFetchers: T,
          viewTransitionOpts: x.viewTransitionOpts,
          flushSync: x.flushSync === !0,
        })
      ),
      c.v7_fetcherPersist && (_.forEach((I) => y.fetchers.delete(I)), T.forEach((I) => Ml(I)));
  }
  function Wn(E, x, _) {
    var T, I;
    let { flushSync: U } = _ === void 0 ? {} : _,
      W =
        y.actionData != null &&
        y.navigation.formMethod != null &&
        vt(y.navigation.formMethod) &&
        y.navigation.state === 'loading' &&
        ((T = E.state) == null ? void 0 : T._isRedirect) !== !0,
      A;
    x.actionData
      ? Object.keys(x.actionData).length > 0
        ? (A = x.actionData)
        : (A = null)
      : W
        ? (A = y.actionData)
        : (A = null);
    let z = x.loaderData ? nf(y.loaderData, x.loaderData, x.matches || [], x.errors) : y.loaderData,
      j = y.blockers;
    j.size > 0 && ((j = new Map(j)), j.forEach((X, Ne) => j.set(Ne, Vr)));
    let $ =
      R === !0 ||
      (y.navigation.formMethod != null &&
        vt(y.navigation.formMethod) &&
        ((I = E.state) == null ? void 0 : I._isRedirect) !== !0);
    a && ((i = a), (a = void 0)),
      de ||
        L === Ee.Pop ||
        (L === Ee.Push ? e.history.push(E, E.state) : L === Ee.Replace && e.history.replace(E, E.state));
    let Y;
    if (L === Ee.Pop) {
      let X = K.get(y.location.pathname);
      X && X.has(E.pathname)
        ? (Y = {
            currentLocation: y.location,
            nextLocation: E,
          })
        : K.has(E.pathname) &&
          (Y = {
            currentLocation: E,
            nextLocation: y.location,
          });
    } else if (O) {
      let X = K.get(y.location.pathname);
      X ? X.add(E.pathname) : ((X = new Set([E.pathname])), K.set(y.location.pathname, X)),
        (Y = {
          currentLocation: y.location,
          nextLocation: E,
        });
    }
    Ue(
      ie({}, x, {
        actionData: A,
        loaderData: z,
        historyAction: L,
        location: E,
        initialized: !0,
        navigation: oa,
        revalidation: 'idle',
        restoreScrollPosition: Is(E, x.matches || y.matches),
        preventScrollReset: $,
        blockers: j,
      }),
      {
        viewTransitionOpts: Y,
        flushSync: U === !0,
      }
    ),
      (L = Ee.Pop),
      (R = !1),
      (O = !1),
      (de = !1),
      (pe = !1),
      (Le = []);
  }
  async function Rs(E, x) {
    if (typeof E == 'number') {
      e.history.go(E);
      return;
    }
    let _ = ru(
        y.location,
        y.matches,
        u,
        c.v7_prependBasename,
        E,
        c.v7_relativeSplatPath,
        x == null ? void 0 : x.fromRouteId,
        x == null ? void 0 : x.relative
      ),
      { path: T, submission: I, error: U } = Xc(c.v7_normalizeFormMethod, !1, _, x),
      W = y.location,
      A = _l(y.location, T, x && x.state);
    A = ie({}, A, e.history.encodeLocation(A));
    let z = x && x.replace != null ? x.replace : void 0,
      j = Ee.Push;
    z === !0
      ? (j = Ee.Replace)
      : z === !1 ||
        (I != null && vt(I.formMethod) && I.formAction === y.location.pathname + y.location.search && (j = Ee.Replace));
    let $ = x && 'preventScrollReset' in x ? x.preventScrollReset === !0 : void 0,
      Y = (x && x.flushSync) === !0,
      X = Ms({
        currentLocation: W,
        nextLocation: A,
        historyAction: j,
      });
    if (X) {
      Fl(X, {
        state: 'blocked',
        location: A,
        proceed() {
          Fl(X, {
            state: 'proceeding',
            proceed: void 0,
            reset: void 0,
            location: A,
          }),
            Rs(E, x);
        },
        reset() {
          let Ne = new Map(y.blockers);
          Ne.set(X, Vr),
            Ue({
              blockers: Ne,
            });
        },
      });
      return;
    }
    return await xn(j, A, {
      submission: I,
      pendingError: U,
      preventScrollReset: $,
      replace: x && x.replace,
      enableViewTransition: x && x.viewTransition,
      flushSync: Y,
    });
  }
  function jh() {
    if (
      (Li(),
      Ue({
        revalidation: 'loading',
      }),
      y.navigation.state !== 'submitting')
    ) {
      if (y.navigation.state === 'idle') {
        xn(y.historyAction, y.location, {
          startUninterruptedRevalidation: !0,
        });
        return;
      }
      xn(L || y.historyAction, y.navigation.location, {
        overrideNavigation: y.navigation,
        enableViewTransition: O === !0,
      });
    }
  }
  async function xn(E, x, _) {
    D && D.abort(),
      (D = null),
      (L = E),
      (de = (_ && _.startUninterruptedRevalidation) === !0),
      Yh(y.location, y.matches),
      (R = (_ && _.preventScrollReset) === !0),
      (O = (_ && _.enableViewTransition) === !0);
    let T = a || i,
      I = _ && _.overrideNavigation,
      U = zt(T, x, u),
      W = (_ && _.flushSync) === !0,
      A = Il(U, T, x.pathname);
    if ((A.active && A.matches && (U = A.matches), !U)) {
      let { error: ne, notFoundMatches: q, route: he } = Ti(x.pathname);
      Wn(
        x,
        {
          matches: q,
          loaderData: {},
          errors: {
            [he.id]: ne,
          },
        },
        {
          flushSync: W,
        }
      );
      return;
    }
    if (y.initialized && !pe && pg(y.location, x) && !(_ && _.submission && vt(_.submission.formMethod))) {
      Wn(
        x,
        {
          matches: U,
        },
        {
          flushSync: W,
        }
      );
      return;
    }
    D = new AbortController();
    let z = Jn(e.history, x, D.signal, _ && _.submission),
      j;
    if (_ && _.pendingError)
      j = [
        Ln(U).route.id,
        {
          type: te.error,
          error: _.pendingError,
        },
      ];
    else if (_ && _.submission && vt(_.submission.formMethod)) {
      let ne = await Ah(z, x, _.submission, U, A.active, {
        replace: _.replace,
        flushSync: W,
      });
      if (ne.shortCircuited) return;
      if (ne.pendingActionResult) {
        let [q, he] = ne.pendingActionResult;
        if (be(he) && Pr(he.error) && he.error.status === 404) {
          (D = null),
            Wn(x, {
              matches: ne.matches,
              loaderData: {},
              errors: {
                [q]: he.error,
              },
            });
          return;
        }
      }
      (U = ne.matches || U),
        (j = ne.pendingActionResult),
        (I = ia(x, _.submission)),
        (W = !1),
        (A.active = !1),
        (z = Jn(e.history, z.url, z.signal));
    }
    let {
      shortCircuited: $,
      matches: Y,
      loaderData: X,
      errors: Ne,
    } = await zh(
      z,
      x,
      U,
      A.active,
      I,
      _ && _.submission,
      _ && _.fetcherSubmission,
      _ && _.replace,
      _ && _.initialHydration === !0,
      W,
      j
    );
    $ ||
      ((D = null),
      Wn(
        x,
        ie(
          {
            matches: Y || U,
          },
          rf(j),
          {
            loaderData: X,
            errors: Ne,
          }
        )
      ));
  }
  async function Ah(E, x, _, T, I, U) {
    U === void 0 && (U = {}), Li();
    let W = wg(x, _);
    if (
      (Ue(
        {
          navigation: W,
        },
        {
          flushSync: U.flushSync === !0,
        }
      ),
      I)
    ) {
      let j = await jl(T, x.pathname, E.signal);
      if (j.type === 'aborted')
        return {
          shortCircuited: !0,
        };
      if (j.type === 'error') {
        let $ = Ln(j.partialMatches).route.id;
        return {
          matches: j.partialMatches,
          pendingActionResult: [
            $,
            {
              type: te.error,
              error: j.error,
            },
          ],
        };
      } else if (j.matches) T = j.matches;
      else {
        let { notFoundMatches: $, error: Y, route: X } = Ti(x.pathname);
        return {
          matches: $,
          pendingActionResult: [
            X.id,
            {
              type: te.error,
              error: Y,
            },
          ],
        };
      }
    }
    let A,
      z = Gr(T, x);
    if (!z.route.action && !z.route.lazy)
      A = {
        type: te.error,
        error: We(405, {
          method: E.method,
          pathname: x.pathname,
          routeId: z.route.id,
        }),
      };
    else if (((A = (await Nr('action', y, E, [z], T, null))[z.route.id]), E.signal.aborted))
      return {
        shortCircuited: !0,
      };
    if (On(A)) {
      let j;
      return (
        U && U.replace != null
          ? (j = U.replace)
          : (j = qc(A.response.headers.get('Location'), new URL(E.url), u) === y.location.pathname + y.location.search),
        await _n(E, A, !0, {
          submission: _,
          replace: j,
        }),
        {
          shortCircuited: !0,
        }
      );
    }
    if (an(A))
      throw We(400, {
        type: 'defer-action',
      });
    if (be(A)) {
      let j = Ln(T, z.route.id);
      return (
        (U && U.replace) !== !0 && (L = Ee.Push),
        {
          matches: T,
          pendingActionResult: [j.route.id, A],
        }
      );
    }
    return {
      matches: T,
      pendingActionResult: [z.route.id, A],
    };
  }
  async function zh(E, x, _, T, I, U, W, A, z, j, $) {
    let Y = I || ia(x, U),
      X = U || W || af(Y),
      Ne = !de && (!c.v7_partialHydration || !z);
    if (T) {
      if (Ne) {
        let me = Cs($);
        Ue(
          ie(
            {
              navigation: Y,
            },
            me !== void 0
              ? {
                  actionData: me,
                }
              : {}
          ),
          {
            flushSync: j,
          }
        );
      }
      let b = await jl(_, x.pathname, E.signal);
      if (b.type === 'aborted')
        return {
          shortCircuited: !0,
        };
      if (b.type === 'error') {
        let me = Ln(b.partialMatches).route.id;
        return {
          matches: b.partialMatches,
          loaderData: {},
          errors: {
            [me]: b.error,
          },
        };
      } else if (b.matches) _ = b.matches;
      else {
        let { error: me, notFoundMatches: Yn, route: Mr } = Ti(x.pathname);
        return {
          matches: Yn,
          loaderData: {},
          errors: {
            [Mr.id]: me,
          },
        };
      }
    }
    let ne = a || i,
      [q, he] = Gc(
        e.history,
        y,
        _,
        X,
        x,
        c.v7_partialHydration && z === !0,
        c.v7_skipActionErrorRevalidation,
        pe,
        Le,
        rt,
        Te,
        le,
        Z,
        ne,
        u,
        $
      );
    if (
      (Ni((b) => !(_ && _.some((me) => me.route.id === b)) || (q && q.some((me) => me.route.id === b))),
      (B = ++M),
      q.length === 0 && he.length === 0)
    ) {
      let b = Ns();
      return (
        Wn(
          x,
          ie(
            {
              matches: _,
              loaderData: {},
              errors:
                $ && be($[1])
                  ? {
                      [$[0]]: $[1].error,
                    }
                  : null,
            },
            rf($),
            b
              ? {
                  fetchers: new Map(y.fetchers),
                }
              : {}
          ),
          {
            flushSync: j,
          }
        ),
        {
          shortCircuited: !0,
        }
      );
    }
    if (Ne) {
      let b = {};
      if (!T) {
        b.navigation = Y;
        let me = Cs($);
        me !== void 0 && (b.actionData = me);
      }
      he.length > 0 && (b.fetchers = Uh(he)),
        Ue(b, {
          flushSync: j,
        });
    }
    he.forEach((b) => {
      bt(b.key), b.controller && ye.set(b.key, b.controller);
    });
    let Kn = () => he.forEach((b) => bt(b.key));
    D && D.signal.addEventListener('abort', Kn);
    let { loaderResults: Dr, fetcherResults: It } = await Ps(y, _, q, he, E);
    if (E.signal.aborted)
      return {
        shortCircuited: !0,
      };
    D && D.signal.removeEventListener('abort', Kn), he.forEach((b) => ye.delete(b.key));
    let xt = ro(Dr);
    if (xt)
      return (
        await _n(E, xt.result, !0, {
          replace: A,
        }),
        {
          shortCircuited: !0,
        }
      );
    if (((xt = ro(It)), xt))
      return (
        Z.add(xt.key),
        await _n(E, xt.result, !0, {
          replace: A,
        }),
        {
          shortCircuited: !0,
        }
      );
    let { loaderData: Di, errors: Or } = tf(y, _, Dr, $, he, It, dt);
    dt.forEach((b, me) => {
      b.subscribe((Yn) => {
        (Yn || b.done) && dt.delete(me);
      });
    }),
      c.v7_partialHydration && z && y.errors && (Or = ie({}, y.errors, Or));
    let Rn = Ns(),
      Al = Ds(B),
      zl = Rn || Al || he.length > 0;
    return ie(
      {
        matches: _,
        loaderData: Di,
        errors: Or,
      },
      zl
        ? {
            fetchers: new Map(y.fetchers),
          }
        : {}
    );
  }
  function Cs(E) {
    if (E && !be(E[1]))
      return {
        [E[0]]: E[1].data,
      };
    if (y.actionData) return Object.keys(y.actionData).length === 0 ? null : y.actionData;
  }
  function Uh(E) {
    return (
      E.forEach((x) => {
        let _ = y.fetchers.get(x.key),
          T = Hr(void 0, _ ? _.data : void 0);
        y.fetchers.set(x.key, T);
      }),
      new Map(y.fetchers)
    );
  }
  function $h(E, x, _, T) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
      );
    bt(E);
    let I = (T && T.flushSync) === !0,
      U = a || i,
      W = ru(
        y.location,
        y.matches,
        u,
        c.v7_prependBasename,
        _,
        c.v7_relativeSplatPath,
        x,
        T == null ? void 0 : T.relative
      ),
      A = zt(U, W, u),
      z = Il(A, U, W);
    if ((z.active && z.matches && (A = z.matches), !A)) {
      Ft(
        E,
        x,
        We(404, {
          pathname: W,
        }),
        {
          flushSync: I,
        }
      );
      return;
    }
    let { path: j, submission: $, error: Y } = Xc(c.v7_normalizeFormMethod, !0, W, T);
    if (Y) {
      Ft(E, x, Y, {
        flushSync: I,
      });
      return;
    }
    let X = Gr(A, j),
      Ne = (T && T.preventScrollReset) === !0;
    if ($ && vt($.formMethod)) {
      Bh(E, x, j, X, A, z.active, I, Ne, $);
      return;
    }
    le.set(E, {
      routeId: x,
      path: j,
    }),
      Vh(E, x, j, X, A, z.active, I, Ne, $);
  }
  async function Bh(E, x, _, T, I, U, W, A, z) {
    Li(), le.delete(E);
    function j(we) {
      if (!we.route.action && !we.route.lazy) {
        let Qn = We(405, {
          method: z.formMethod,
          pathname: _,
          routeId: x,
        });
        return (
          Ft(E, x, Qn, {
            flushSync: W,
          }),
          !0
        );
      }
      return !1;
    }
    if (!U && j(T)) return;
    let $ = y.fetchers.get(E);
    Gt(E, Eg(z, $), {
      flushSync: W,
    });
    let Y = new AbortController(),
      X = Jn(e.history, _, Y.signal, z);
    if (U) {
      let we = await jl(I, _, X.signal);
      if (we.type === 'aborted') return;
      if (we.type === 'error') {
        Ft(E, x, we.error, {
          flushSync: W,
        });
        return;
      } else if (we.matches) {
        if (((I = we.matches), (T = Gr(I, _)), j(T))) return;
      } else {
        Ft(
          E,
          x,
          We(404, {
            pathname: _,
          }),
          {
            flushSync: W,
          }
        );
        return;
      }
    }
    ye.set(E, Y);
    let Ne = M,
      q = (await Nr('action', y, X, [T], I, E))[T.route.id];
    if (X.signal.aborted) {
      ye.get(E) === Y && ye.delete(E);
      return;
    }
    if (c.v7_fetcherPersist && Te.has(E)) {
      if (On(q) || be(q)) {
        Gt(E, qt(void 0));
        return;
      }
    } else {
      if (On(q))
        if ((ye.delete(E), B > Ne)) {
          Gt(E, qt(void 0));
          return;
        } else
          return (
            Z.add(E),
            Gt(E, Hr(z)),
            _n(X, q, !1, {
              fetcherSubmission: z,
              preventScrollReset: A,
            })
          );
      if (be(q)) {
        Ft(E, x, q.error);
        return;
      }
    }
    if (an(q))
      throw We(400, {
        type: 'defer-action',
      });
    let he = y.navigation.location || y.location,
      Kn = Jn(e.history, he, Y.signal),
      Dr = a || i,
      It = y.navigation.state !== 'idle' ? zt(Dr, y.navigation.location, u) : y.matches;
    V(It, "Didn't find any matches after fetcher action");
    let xt = ++M;
    H.set(E, xt);
    let Di = Hr(z, q.data);
    y.fetchers.set(E, Di);
    let [Or, Rn] = Gc(e.history, y, It, z, he, !1, c.v7_skipActionErrorRevalidation, pe, Le, rt, Te, le, Z, Dr, u, [
      T.route.id,
      q,
    ]);
    Rn.filter((we) => we.key !== E).forEach((we) => {
      let Qn = we.key,
        js = y.fetchers.get(Qn),
        Jh = Hr(void 0, js ? js.data : void 0);
      y.fetchers.set(Qn, Jh), bt(Qn), we.controller && ye.set(Qn, we.controller);
    }),
      Ue({
        fetchers: new Map(y.fetchers),
      });
    let Al = () => Rn.forEach((we) => bt(we.key));
    Y.signal.addEventListener('abort', Al);
    let { loaderResults: zl, fetcherResults: b } = await Ps(y, It, Or, Rn, Kn);
    if (Y.signal.aborted) return;
    Y.signal.removeEventListener('abort', Al), H.delete(E), ye.delete(E), Rn.forEach((we) => ye.delete(we.key));
    let me = ro(zl);
    if (me)
      return _n(Kn, me.result, !1, {
        preventScrollReset: A,
      });
    if (((me = ro(b)), me))
      return (
        Z.add(me.key),
        _n(Kn, me.result, !1, {
          preventScrollReset: A,
        })
      );
    let { loaderData: Yn, errors: Mr } = tf(y, It, zl, void 0, Rn, b, dt);
    if (y.fetchers.has(E)) {
      let we = qt(q.data);
      y.fetchers.set(E, we);
    }
    Ds(xt),
      y.navigation.state === 'loading' && xt > B
        ? (V(L, 'Expected pending action'),
          D && D.abort(),
          Wn(y.navigation.location, {
            matches: It,
            loaderData: Yn,
            errors: Mr,
            fetchers: new Map(y.fetchers),
          }))
        : (Ue({
            errors: Mr,
            loaderData: nf(y.loaderData, Yn, It, Mr),
            fetchers: new Map(y.fetchers),
          }),
          (pe = !1));
  }
  async function Vh(E, x, _, T, I, U, W, A, z) {
    let j = y.fetchers.get(E);
    Gt(E, Hr(z, j ? j.data : void 0), {
      flushSync: W,
    });
    let $ = new AbortController(),
      Y = Jn(e.history, _, $.signal);
    if (U) {
      let q = await jl(I, _, Y.signal);
      if (q.type === 'aborted') return;
      if (q.type === 'error') {
        Ft(E, x, q.error, {
          flushSync: W,
        });
        return;
      } else if (q.matches) (I = q.matches), (T = Gr(I, _));
      else {
        Ft(
          E,
          x,
          We(404, {
            pathname: _,
          }),
          {
            flushSync: W,
          }
        );
        return;
      }
    }
    ye.set(E, $);
    let X = M,
      ne = (await Nr('loader', y, Y, [T], I, E))[T.route.id];
    if ((an(ne) && (ne = (await us(ne, Y.signal, !0)) || ne), ye.get(E) === $ && ye.delete(E), !Y.signal.aborted)) {
      if (Te.has(E)) {
        Gt(E, qt(void 0));
        return;
      }
      if (On(ne))
        if (B > X) {
          Gt(E, qt(void 0));
          return;
        } else {
          Z.add(E),
            await _n(Y, ne, !1, {
              preventScrollReset: A,
            });
          return;
        }
      if (be(ne)) {
        Ft(E, x, ne.error);
        return;
      }
      V(!an(ne), 'Unhandled fetcher deferred data'), Gt(E, qt(ne.data));
    }
  }
  async function _n(E, x, _, T) {
    let { submission: I, fetcherSubmission: U, preventScrollReset: W, replace: A } = T === void 0 ? {} : T;
    x.response.headers.has('X-Remix-Revalidate') && (pe = !0);
    let z = x.response.headers.get('Location');
    V(z, 'Expected a Location header on the redirect Response'), (z = qc(z, new URL(E.url), u));
    let j = _l(y.location, z, {
      _isRedirect: !0,
    });
    if (n) {
      let q = !1;
      if (x.response.headers.has('X-Remix-Reload-Document')) q = !0;
      else if (as.test(z)) {
        const he = e.history.createURL(z);
        q = he.origin !== t.location.origin || ft(he.pathname, u) == null;
      }
      if (q) {
        A ? t.location.replace(z) : t.location.assign(z);
        return;
      }
    }
    D = null;
    let $ = A === !0 || x.response.headers.has('X-Remix-Replace') ? Ee.Replace : Ee.Push,
      { formMethod: Y, formAction: X, formEncType: Ne } = y.navigation;
    !I && !U && Y && X && Ne && (I = af(y.navigation));
    let ne = I || U;
    if (ng.has(x.response.status) && ne && vt(ne.formMethod))
      await xn($, j, {
        submission: ie({}, ne, {
          formAction: z,
        }),
        preventScrollReset: W || R,
        enableViewTransition: _ ? O : void 0,
      });
    else {
      let q = ia(j, I);
      await xn($, j, {
        overrideNavigation: q,
        fetcherSubmission: U,
        preventScrollReset: W || R,
        enableViewTransition: _ ? O : void 0,
      });
    }
  }
  async function Nr(E, x, _, T, I, U) {
    let W,
      A = {};
    try {
      W = await ug(s, E, x, _, T, I, U, o, l);
    } catch (z) {
      return (
        T.forEach((j) => {
          A[j.route.id] = {
            type: te.error,
            error: z,
          };
        }),
        A
      );
    }
    for (let [z, j] of Object.entries(W))
      if (hg(j)) {
        let $ = j.result;
        A[z] = {
          type: te.redirect,
          response: fg($, _, z, I, u, c.v7_relativeSplatPath),
        };
      } else A[z] = await cg(j);
    return A;
  }
  async function Ps(E, x, _, T, I) {
    let U = E.matches,
      W = Nr('loader', E, I, _, x, null),
      A = Promise.all(
        T.map(async ($) => {
          if ($.matches && $.match && $.controller) {
            let X = (await Nr('loader', E, Jn(e.history, $.path, $.controller.signal), [$.match], $.matches, $.key))[
              $.match.route.id
            ];
            return {
              [$.key]: X,
            };
          } else
            return Promise.resolve({
              [$.key]: {
                type: te.error,
                error: We(404, {
                  pathname: $.path,
                }),
              },
            });
        })
      ),
      z = await W,
      j = (await A).reduce(($, Y) => Object.assign($, Y), {});
    return (
      await Promise.all([yg(x, z, I.signal, U, E.loaderData), gg(x, j, T)]),
      {
        loaderResults: z,
        fetcherResults: j,
      }
    );
  }
  function Li() {
    (pe = !0),
      Le.push(...Ni()),
      le.forEach((E, x) => {
        ye.has(x) && rt.add(x), bt(x);
      });
  }
  function Gt(E, x, _) {
    _ === void 0 && (_ = {}),
      y.fetchers.set(E, x),
      Ue(
        {
          fetchers: new Map(y.fetchers),
        },
        {
          flushSync: (_ && _.flushSync) === !0,
        }
      );
  }
  function Ft(E, x, _, T) {
    T === void 0 && (T = {});
    let I = Ln(y.matches, x);
    Ml(E),
      Ue(
        {
          errors: {
            [I.route.id]: _,
          },
          fetchers: new Map(y.fetchers),
        },
        {
          flushSync: (T && T.flushSync) === !0,
        }
      );
  }
  function Ls(E) {
    return c.v7_fetcherPersist && (kt.set(E, (kt.get(E) || 0) + 1), Te.has(E) && Te.delete(E)), y.fetchers.get(E) || Kp;
  }
  function Ml(E) {
    let x = y.fetchers.get(E);
    ye.has(E) && !(x && x.state === 'loading' && H.has(E)) && bt(E),
      le.delete(E),
      H.delete(E),
      Z.delete(E),
      Te.delete(E),
      rt.delete(E),
      y.fetchers.delete(E);
  }
  function Hh(E) {
    if (c.v7_fetcherPersist) {
      let x = (kt.get(E) || 0) - 1;
      x <= 0 ? (kt.delete(E), Te.add(E)) : kt.set(E, x);
    } else Ml(E);
    Ue({
      fetchers: new Map(y.fetchers),
    });
  }
  function bt(E) {
    let x = ye.get(E);
    x && (x.abort(), ye.delete(E));
  }
  function Ts(E) {
    for (let x of E) {
      let _ = Ls(x),
        T = qt(_.data);
      y.fetchers.set(x, T);
    }
  }
  function Ns() {
    let E = [],
      x = !1;
    for (let _ of Z) {
      let T = y.fetchers.get(_);
      V(T, 'Expected fetcher: ' + _), T.state === 'loading' && (Z.delete(_), E.push(_), (x = !0));
    }
    return Ts(E), x;
  }
  function Ds(E) {
    let x = [];
    for (let [_, T] of H)
      if (T < E) {
        let I = y.fetchers.get(_);
        V(I, 'Expected fetcher: ' + _), I.state === 'loading' && (bt(_), H.delete(_), x.push(_));
      }
    return Ts(x), x.length > 0;
  }
  function Wh(E, x) {
    let _ = y.blockers.get(E) || Vr;
    return ze.get(E) !== x && ze.set(E, x), _;
  }
  function Os(E) {
    y.blockers.delete(E), ze.delete(E);
  }
  function Fl(E, x) {
    let _ = y.blockers.get(E) || Vr;
    V(
      (_.state === 'unblocked' && x.state === 'blocked') ||
        (_.state === 'blocked' && x.state === 'blocked') ||
        (_.state === 'blocked' && x.state === 'proceeding') ||
        (_.state === 'blocked' && x.state === 'unblocked') ||
        (_.state === 'proceeding' && x.state === 'unblocked'),
      'Invalid blocker state transition: ' + _.state + ' -> ' + x.state
    );
    let T = new Map(y.blockers);
    T.set(E, x),
      Ue({
        blockers: T,
      });
  }
  function Ms(E) {
    let { currentLocation: x, nextLocation: _, historyAction: T } = E;
    if (ze.size === 0) return;
    ze.size > 1 && kr(!1, 'A router only supports one blocker at a time');
    let I = Array.from(ze.entries()),
      [U, W] = I[I.length - 1],
      A = y.blockers.get(U);
    if (
      !(A && A.state === 'proceeding') &&
      W({
        currentLocation: x,
        nextLocation: _,
        historyAction: T,
      })
    )
      return U;
  }
  function Ti(E) {
    let x = We(404, {
        pathname: E,
      }),
      _ = a || i,
      { matches: T, route: I } = lf(_);
    return (
      Ni(),
      {
        notFoundMatches: T,
        route: I,
        error: x,
      }
    );
  }
  function Ni(E) {
    let x = [];
    return (
      dt.forEach((_, T) => {
        (!E || E(T)) && (_.cancel(), x.push(T), dt.delete(T));
      }),
      x
    );
  }
  function Kh(E, x, _) {
    if (((m = E), (P = x), (k = _ || null), !h && y.navigation === oa)) {
      h = !0;
      let T = Is(y.location, y.matches);
      T != null &&
        Ue({
          restoreScrollPosition: T,
        });
    }
    return () => {
      (m = null), (P = null), (k = null);
    };
  }
  function Fs(E, x) {
    return (
      (k &&
        k(
          E,
          x.map((T) => Up(T, y.loaderData))
        )) ||
      E.key
    );
  }
  function Yh(E, x) {
    if (m && P) {
      let _ = Fs(E, x);
      m[_] = P();
    }
  }
  function Is(E, x) {
    if (m) {
      let _ = Fs(E, x),
        T = m[_];
      if (typeof T == 'number') return T;
    }
    return null;
  }
  function Il(E, x, _) {
    if (d)
      if (E) {
        if (Object.keys(E[0].params).length > 0)
          return {
            active: !0,
            matches: ko(x, _, u, !0),
          };
      } else
        return {
          active: !0,
          matches: ko(x, _, u, !0) || [],
        };
    return {
      active: !1,
      matches: null,
    };
  }
  async function jl(E, x, _) {
    if (!d)
      return {
        type: 'success',
        matches: E,
      };
    let T = E;
    for (;;) {
      let I = a == null,
        U = a || i,
        W = o;
      try {
        await d({
          path: x,
          matches: T,
          patch: (j, $) => {
            _.aborted || Zc(j, $, U, W, l);
          },
        });
      } catch (j) {
        return {
          type: 'error',
          error: j,
          partialMatches: T,
        };
      } finally {
        I && !_.aborted && (i = [...i]);
      }
      if (_.aborted)
        return {
          type: 'aborted',
        };
      let A = zt(U, x, u);
      if (A)
        return {
          type: 'success',
          matches: A,
        };
      let z = ko(U, x, u, !0);
      if (!z || (T.length === z.length && T.every((j, $) => j.route.id === z[$].route.id)))
        return {
          type: 'success',
          matches: null,
        };
      T = z;
    }
  }
  function Qh(E) {
    (o = {}), (a = Go(E, l, void 0, o));
  }
  function Xh(E, x) {
    let _ = a == null;
    Zc(E, x, a || i, o, l), _ && ((i = [...i]), Ue({}));
  }
  return (
    (C = {
      get basename() {
        return u;
      },
      get future() {
        return c;
      },
      get state() {
        return y;
      },
      get routes() {
        return i;
      },
      get window() {
        return t;
      },
      initialize: Mh,
      subscribe: Ih,
      enableScrollRestoration: Kh,
      navigate: Rs,
      fetch: $h,
      revalidate: jh,
      createHref: (E) => e.history.createHref(E),
      encodeLocation: (E) => e.history.encodeLocation(E),
      getFetcher: Ls,
      deleteFetcher: Hh,
      dispose: Fh,
      getBlocker: Wh,
      deleteBlocker: Os,
      patchRoutes: Xh,
      _internalFetchControllers: ye,
      _internalActiveDeferreds: dt,
      _internalSetRoutes: Qh,
    }),
    C
  );
}
function lg(e) {
  return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0));
}
function ru(e, t, n, r, l, o, i, a) {
  let u, s;
  if (i) {
    u = [];
    for (let c of t)
      if ((u.push(c), c.route.id === i)) {
        s = c;
        break;
      }
  } else (u = t), (s = t[t.length - 1]);
  let d = is(l || '.', os(u, o), ft(e.pathname, n) || e.pathname, a === 'path');
  if ((l == null && ((d.search = e.search), (d.hash = e.hash)), (l == null || l === '' || l === '.') && s)) {
    let c = ss(d.search);
    if (s.route.index && !c) d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index';
    else if (!s.route.index && c) {
      let f = new URLSearchParams(d.search),
        w = f.getAll('index');
      f.delete('index'), w.filter((k) => k).forEach((k) => f.append('index', k));
      let m = f.toString();
      d.search = m ? '?' + m : '';
    }
  }
  return r && n !== '/' && (d.pathname = d.pathname === '/' ? n : Tt([n, d.pathname])), gn(d);
}
function Xc(e, t, n, r) {
  if (!r || !lg(r))
    return {
      path: n,
    };
  if (r.formMethod && !vg(r.formMethod))
    return {
      path: n,
      error: We(405, {
        method: r.formMethod,
      }),
    };
  let l = () => ({
      path: n,
      error: We(400, {
        type: 'invalid-body',
      }),
    }),
    o = r.formMethod || 'get',
    i = e ? o.toUpperCase() : o.toLowerCase(),
    a = Jp(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!vt(i)) return l();
      let f =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((w, m) => {
                let [k, P] = m;
                return (
                  '' +
                  w +
                  k +
                  '=' +
                  P +
                  `
`
                );
              }, '')
            : String(r.body);
      return {
        path: n,
        submission: {
          formMethod: i,
          formAction: a,
          formEncType: r.formEncType,
          formData: void 0,
          json: void 0,
          text: f,
        },
      };
    } else if (r.formEncType === 'application/json') {
      if (!vt(i)) return l();
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: {
            formMethod: i,
            formAction: a,
            formEncType: r.formEncType,
            formData: void 0,
            json: f,
            text: void 0,
          },
        };
      } catch {
        return l();
      }
    }
  }
  V(typeof FormData == 'function', 'FormData is not available in this environment');
  let u, s;
  if (r.formData) (u = ou(r.formData)), (s = r.formData);
  else if (r.body instanceof FormData) (u = ou(r.body)), (s = r.body);
  else if (r.body instanceof URLSearchParams) (u = r.body), (s = ef(u));
  else if (r.body == null) (u = new URLSearchParams()), (s = new FormData());
  else
    try {
      (u = new URLSearchParams(r.body)), (s = ef(u));
    } catch {
      return l();
    }
  let d = {
    formMethod: i,
    formAction: a,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: s,
    json: void 0,
    text: void 0,
  };
  if (vt(d.formMethod))
    return {
      path: n,
      submission: d,
    };
  let c = Jt(n);
  return (
    t && c.search && ss(c.search) && u.append('index', ''),
    (c.search = '?' + u),
    {
      path: gn(c),
      submission: d,
    }
  );
}
function Jc(e, t, n) {
  n === void 0 && (n = !1);
  let r = e.findIndex((l) => l.route.id === t);
  return r >= 0 ? e.slice(0, n ? r + 1 : r) : e;
}
function Gc(e, t, n, r, l, o, i, a, u, s, d, c, f, w, m, k) {
  let P = k ? (be(k[1]) ? k[1].error : k[1].data) : void 0,
    h = e.createURL(t.location),
    p = e.createURL(l),
    v = n;
  o && t.errors ? (v = Jc(n, Object.keys(t.errors)[0], !0)) : k && be(k[1]) && (v = Jc(n, k[0]));
  let S = k ? k[1].statusCode : void 0,
    C = i && S && S >= 400,
    y = v.filter((R, D) => {
      let { route: O } = R;
      if (O.lazy) return !0;
      if (O.loader == null) return !1;
      if (o) return lu(O, t.loaderData, t.errors);
      if (og(t.loaderData, t.matches[D], R) || u.some((de) => de === R.route.id)) return !0;
      let K = t.matches[D],
        G = R;
      return bc(
        R,
        ie(
          {
            currentUrl: h,
            currentParams: K.params,
            nextUrl: p,
            nextParams: G.params,
          },
          r,
          {
            actionResult: P,
            actionStatus: S,
            defaultShouldRevalidate: C
              ? !1
              : a || h.pathname + h.search === p.pathname + p.search || h.search !== p.search || Qp(K, G),
          }
        )
      );
    }),
    L = [];
  return (
    c.forEach((R, D) => {
      if (o || !n.some((pe) => pe.route.id === R.routeId) || d.has(D)) return;
      let O = zt(w, R.path, m);
      if (!O) {
        L.push({
          key: D,
          routeId: R.routeId,
          path: R.path,
          matches: null,
          match: null,
          controller: null,
        });
        return;
      }
      let K = t.fetchers.get(D),
        G = Gr(O, R.path),
        de = !1;
      f.has(D)
        ? (de = !1)
        : s.has(D)
          ? (s.delete(D), (de = !0))
          : K && K.state !== 'idle' && K.data === void 0
            ? (de = a)
            : (de = bc(
                G,
                ie(
                  {
                    currentUrl: h,
                    currentParams: t.matches[t.matches.length - 1].params,
                    nextUrl: p,
                    nextParams: n[n.length - 1].params,
                  },
                  r,
                  {
                    actionResult: P,
                    actionStatus: S,
                    defaultShouldRevalidate: C ? !1 : a,
                  }
                )
              )),
        de &&
          L.push({
            key: D,
            routeId: R.routeId,
            path: R.path,
            matches: O,
            match: G,
            controller: new AbortController(),
          });
    }),
    [y, L]
  );
}
function lu(e, t, n) {
  if (e.lazy) return !0;
  if (!e.loader) return !1;
  let r = t != null && t[e.id] !== void 0,
    l = n != null && n[e.id] !== void 0;
  return !r && l ? !1 : typeof e.loader == 'function' && e.loader.hydrate === !0 ? !0 : !r && !l;
}
function og(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    l = e[n.route.id] === void 0;
  return r || l;
}
function Qp(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function bc(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
function Zc(e, t, n, r, l) {
  var o;
  let i;
  if (e) {
    let s = r[e];
    V(s, 'No route found to patch children into: routeId = ' + e), s.children || (s.children = []), (i = s.children);
  } else i = n;
  let a = t.filter((s) => !i.some((d) => Xp(s, d))),
    u = Go(a, l, [e || '_', 'patch', String(((o = i) == null ? void 0 : o.length) || '0')], r);
  i.push(...u);
}
function Xp(e, t) {
  return 'id' in e && 'id' in t && e.id === t.id
    ? !0
    : e.index === t.index && e.path === t.path && e.caseSensitive === t.caseSensitive
      ? (!e.children || e.children.length === 0) && (!t.children || t.children.length === 0)
        ? !0
        : e.children.every((n, r) => {
            var l;
            return (l = t.children) == null ? void 0 : l.some((o) => Xp(n, o));
          })
      : !1;
}
async function ig(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let l = n[e.id];
  V(l, 'No route found in manifest');
  let o = {};
  for (let i in r) {
    let u = l[i] !== void 0 && i !== 'hasErrorBoundary';
    kr(
      !u,
      'Route "' +
        l.id +
        '" has a static property "' +
        i +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + i + '" will be ignored.')
    ),
      !u && !Ly.has(i) && (o[i] = r[i]);
  }
  Object.assign(l, o),
    Object.assign(
      l,
      ie({}, t(l), {
        lazy: void 0,
      })
    );
}
async function ag(e) {
  let { matches: t } = e,
    n = t.filter((l) => l.shouldLoad);
  return (await Promise.all(n.map((l) => l.resolve()))).reduce(
    (l, o, i) =>
      Object.assign(l, {
        [n[i].route.id]: o,
      }),
    {}
  );
}
async function ug(e, t, n, r, l, o, i, a, u, s) {
  let d = o.map((w) => (w.route.lazy ? ig(w.route, u, a) : void 0)),
    c = o.map((w, m) => {
      let k = d[m],
        P = l.some((p) => p.route.id === w.route.id);
      return ie({}, w, {
        shouldLoad: P,
        resolve: async (p) => (
          p && r.method === 'GET' && (w.route.lazy || w.route.loader) && (P = !0),
          P
            ? sg(t, r, w, k, p, s)
            : Promise.resolve({
                type: te.data,
                result: void 0,
              })
        ),
      });
    }),
    f = await e({
      matches: c,
      request: r,
      params: o[0].params,
      fetcherKey: i,
      context: s,
    });
  try {
    await Promise.all(d);
  } catch {}
  return f;
}
async function sg(e, t, n, r, l, o) {
  let i,
    a,
    u = (s) => {
      let d,
        c = new Promise((m, k) => (d = k));
      (a = () => d()), t.signal.addEventListener('abort', a);
      let f = (m) =>
          typeof s != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' +
                    ('"' + e + '" [routeId: ' + n.route.id + ']')
                )
              )
            : s(
                {
                  request: t,
                  params: n.params,
                  context: o,
                },
                ...(m !== void 0 ? [m] : [])
              ),
        w = (async () => {
          try {
            return {
              type: 'data',
              result: await (l ? l((k) => f(k)) : f()),
            };
          } catch (m) {
            return {
              type: 'error',
              result: m,
            };
          }
        })();
      return Promise.race([w, c]);
    };
  try {
    let s = n.route[e];
    if (r)
      if (s) {
        let d,
          [c] = await Promise.all([
            u(s).catch((f) => {
              d = f;
            }),
            r,
          ]);
        if (d !== void 0) throw d;
        i = c;
      } else if ((await r, (s = n.route[e]), s)) i = await u(s);
      else if (e === 'action') {
        let d = new URL(t.url),
          c = d.pathname + d.search;
        throw We(405, {
          method: t.method,
          pathname: c,
          routeId: n.route.id,
        });
      } else
        return {
          type: te.data,
          result: void 0,
        };
    else if (s) i = await u(s);
    else {
      let d = new URL(t.url),
        c = d.pathname + d.search;
      throw We(404, {
        pathname: c,
      });
    }
    V(
      i.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.'
    );
  } catch (s) {
    return {
      type: te.error,
      result: s,
    };
  } finally {
    a && t.signal.removeEventListener('abort', a);
  }
  return i;
}
async function cg(e) {
  let { result: t, type: n } = e;
  if (Gp(t)) {
    let s;
    try {
      let d = t.headers.get('Content-Type');
      d && /\bapplication\/json\b/.test(d)
        ? t.body == null
          ? (s = null)
          : (s = await t.json())
        : (s = await t.text());
    } catch (d) {
      return {
        type: te.error,
        error: d,
      };
    }
    return n === te.error
      ? {
          type: te.error,
          error: new $n(t.status, t.statusText, s),
          statusCode: t.status,
          headers: t.headers,
        }
      : {
          type: te.data,
          data: s,
          statusCode: t.status,
          headers: t.headers,
        };
  }
  if (n === te.error) {
    if (of(t)) {
      var r;
      if (t.data instanceof Error) {
        var l;
        return {
          type: te.error,
          error: t.data,
          statusCode: (l = t.init) == null ? void 0 : l.status,
        };
      }
      t = new $n(((r = t.init) == null ? void 0 : r.status) || 500, void 0, t.data);
    }
    return {
      type: te.error,
      error: t,
      statusCode: Pr(t) ? t.status : void 0,
    };
  }
  if (mg(t)) {
    var o, i;
    return {
      type: te.deferred,
      deferredData: t,
      statusCode: (o = t.init) == null ? void 0 : o.status,
      headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers),
    };
  }
  if (of(t)) {
    var a, u;
    return {
      type: te.data,
      data: t.data,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers: (u = t.init) != null && u.headers ? new Headers(t.init.headers) : void 0,
    };
  }
  return {
    type: te.data,
    data: t,
  };
}
function fg(e, t, n, r, l, o) {
  let i = e.headers.get('Location');
  if ((V(i, 'Redirects returned/thrown from loaders/actions must have a Location header'), !as.test(i))) {
    let a = r.slice(0, r.findIndex((u) => u.route.id === n) + 1);
    (i = ru(new URL(t.url), a, l, !0, i, o)), e.headers.set('Location', i);
  }
  return e;
}
function qc(e, t, n) {
  if (as.test(e)) {
    let r = e,
      l = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      o = ft(l.pathname, n) != null;
    if (l.origin === t.origin && o) return l.pathname + l.search + l.hash;
  }
  return e;
}
function Jn(e, t, n, r) {
  let l = e.createURL(Jp(t)).toString(),
    o = {
      signal: n,
    };
  if (r && vt(r.formMethod)) {
    let { formMethod: i, formEncType: a } = r;
    (o.method = i.toUpperCase()),
      a === 'application/json'
        ? ((o.headers = new Headers({
            'Content-Type': a,
          })),
          (o.body = JSON.stringify(r.json)))
        : a === 'text/plain'
          ? (o.body = r.text)
          : a === 'application/x-www-form-urlencoded' && r.formData
            ? (o.body = ou(r.formData))
            : (o.body = r.formData);
  }
  return new Request(l, o);
}
function ou(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function ef(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function dg(e, t, n, r, l) {
  let o = {},
    i = null,
    a,
    u = !1,
    s = {},
    d = n && be(n[1]) ? n[1].error : void 0;
  return (
    e.forEach((c) => {
      if (!(c.route.id in t)) return;
      let f = c.route.id,
        w = t[f];
      if ((V(!On(w), 'Cannot handle redirect results in processLoaderData'), be(w))) {
        let m = w.error;
        d !== void 0 && ((m = d), (d = void 0)), (i = i || {});
        {
          let k = Ln(e, f);
          i[k.route.id] == null && (i[k.route.id] = m);
        }
        (o[f] = void 0), u || ((u = !0), (a = Pr(w.error) ? w.error.status : 500)), w.headers && (s[f] = w.headers);
      } else
        an(w)
          ? (r.set(f, w.deferredData),
            (o[f] = w.deferredData.data),
            w.statusCode != null && w.statusCode !== 200 && !u && (a = w.statusCode),
            w.headers && (s[f] = w.headers))
          : ((o[f] = w.data),
            w.statusCode && w.statusCode !== 200 && !u && (a = w.statusCode),
            w.headers && (s[f] = w.headers));
    }),
    d !== void 0 &&
      n &&
      ((i = {
        [n[0]]: d,
      }),
      (o[n[0]] = void 0)),
    {
      loaderData: o,
      errors: i,
      statusCode: a || 200,
      loaderHeaders: s,
    }
  );
}
function tf(e, t, n, r, l, o, i) {
  let { loaderData: a, errors: u } = dg(t, n, r, i);
  return (
    l.forEach((s) => {
      let { key: d, match: c, controller: f } = s,
        w = o[d];
      if ((V(w, 'Did not find corresponding fetcher result'), !(f && f.signal.aborted)))
        if (be(w)) {
          let m = Ln(e.matches, c == null ? void 0 : c.route.id);
          (u && u[m.route.id]) ||
            (u = ie({}, u, {
              [m.route.id]: w.error,
            })),
            e.fetchers.delete(d);
        } else if (On(w)) V(!1, 'Unhandled fetcher revalidation redirect');
        else if (an(w)) V(!1, 'Unhandled fetcher deferred data');
        else {
          let m = qt(w.data);
          e.fetchers.set(d, m);
        }
    }),
    {
      loaderData: a,
      errors: u,
    }
  );
}
function nf(e, t, n, r) {
  let l = ie({}, t);
  for (let o of n) {
    let i = o.route.id;
    if (
      (t.hasOwnProperty(i) ? t[i] !== void 0 && (l[i] = t[i]) : e[i] !== void 0 && o.route.loader && (l[i] = e[i]),
      r && r.hasOwnProperty(i))
    )
      break;
  }
  return l;
}
function rf(e) {
  return e
    ? be(e[1])
      ? {
          actionData: {},
        }
      : {
          actionData: {
            [e[0]]: e[1].data,
          },
        }
    : {};
}
function Ln(e, t) {
  return (
    (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
      .reverse()
      .find((r) => r.route.hasErrorBoundary === !0) || e[0]
  );
}
function lf(e) {
  let t =
    e.length === 1
      ? e[0]
      : e.find((n) => n.index || !n.path || n.path === '/') || {
          id: '__shim-error-route__',
        };
  return {
    matches: [
      {
        params: {},
        pathname: '',
        pathnameBase: '',
        route: t,
      },
    ],
    route: t,
  };
}
function We(e, t) {
  let { pathname: n, routeId: r, method: l, type: o, message: i } = t === void 0 ? {} : t,
    a = 'Unknown Server Error',
    u = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((a = 'Bad Request'),
        l && n && r
          ? (u =
              'You made a ' +
              l +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : o === 'defer-action'
            ? (u = 'defer() is not supported in actions')
            : o === 'invalid-body' && (u = 'Unable to encode submission body'))
      : e === 403
        ? ((a = 'Forbidden'), (u = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((a = 'Not Found'), (u = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((a = 'Method Not Allowed'),
            l && n && r
              ? (u =
                  'You made a ' +
                  l.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : l && (u = 'Invalid request method "' + l.toUpperCase() + '"')),
    new $n(e || 500, a, new Error(u), !0)
  );
}
function ro(e) {
  let t = Object.entries(e);
  for (let n = t.length - 1; n >= 0; n--) {
    let [r, l] = t[n];
    if (On(l))
      return {
        key: r,
        result: l,
      };
  }
}
function Jp(e) {
  let t = typeof e == 'string' ? Jt(e) : e;
  return gn(
    ie({}, t, {
      hash: '',
    })
  );
}
function pg(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search
    ? !1
    : e.hash === ''
      ? t.hash !== ''
      : e.hash === t.hash
        ? !0
        : t.hash !== '';
}
function hg(e) {
  return Gp(e.result) && tg.has(e.result.status);
}
function an(e) {
  return e.type === te.deferred;
}
function be(e) {
  return e.type === te.error;
}
function On(e) {
  return (e && e.type) === te.redirect;
}
function of(e) {
  return (
    typeof e == 'object' && e != null && 'type' in e && 'data' in e && 'init' in e && e.type === 'DataWithResponseInit'
  );
}
function mg(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Gp(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function vg(e) {
  return eg.has(e.toLowerCase());
}
function vt(e) {
  return Zy.has(e.toLowerCase());
}
async function yg(e, t, n, r, l) {
  let o = Object.entries(t);
  for (let i = 0; i < o.length; i++) {
    let [a, u] = o[i],
      s = e.find((f) => (f == null ? void 0 : f.route.id) === a);
    if (!s) continue;
    let d = r.find((f) => f.route.id === s.route.id),
      c = d != null && !Qp(d, s) && (l && l[s.route.id]) !== void 0;
    an(u) &&
      c &&
      (await us(u, n, !1).then((f) => {
        f && (t[a] = f);
      }));
  }
}
async function gg(e, t, n) {
  for (let r = 0; r < n.length; r++) {
    let { key: l, routeId: o, controller: i } = n[r],
      a = t[l];
    e.find((s) => (s == null ? void 0 : s.route.id) === o) &&
      an(a) &&
      (V(i, 'Expected an AbortController for revalidating fetcher deferred result'),
      await us(a, i.signal, !0).then((s) => {
        s && (t[l] = s);
      }));
  }
}
async function us(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return {
          type: te.data,
          data: e.deferredData.unwrappedData,
        };
      } catch (l) {
        return {
          type: te.error,
          error: l,
        };
      }
    return {
      type: te.data,
      data: e.deferredData.data,
    };
  }
}
function ss(e) {
  return new URLSearchParams(e).getAll('index').some((t) => t === '');
}
function Gr(e, t) {
  let n = typeof t == 'string' ? Jt(t).search : t.search;
  if (e[e.length - 1].route.index && ss(n || '')) return e[e.length - 1];
  let r = Vp(e);
  return r[r.length - 1];
}
function af(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: l, formData: o, json: i } = e;
  if (!(!t || !n || !r)) {
    if (l != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: void 0,
        text: l,
      };
    if (o != null)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: o,
        json: void 0,
        text: void 0,
      };
    if (i !== void 0)
      return {
        formMethod: t,
        formAction: n,
        formEncType: r,
        formData: void 0,
        json: i,
        text: void 0,
      };
  }
}
function ia(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function wg(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Hr(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function Eg(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function qt(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function Sg(e, t) {
  try {
    let n = e.sessionStorage.getItem(Yp);
    if (n) {
      let r = JSON.parse(n);
      for (let [l, o] of Object.entries(r || {})) o && Array.isArray(o) && t.set(l, new Set(o || []));
    }
  } catch {}
}
function kg(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, l] of t) n[r] = [...l];
    try {
      e.sessionStorage.setItem(Yp, JSON.stringify(n));
    } catch (r) {
      kr(!1, 'Failed to save applied view transitions in sessionStorage (' + r + ').');
    }
  }
}
/**
 * React Router v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function qo() {
  return (
    (qo = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qo.apply(this, arguments)
  );
}
const Lr = g.createContext(null),
  Nl = g.createContext(null),
  ei = g.createContext(null),
  St = g.createContext(null),
  cs = g.createContext(null),
  Dt = g.createContext({
    outlet: null,
    matches: [],
    isDataRoute: !1,
  }),
  bp = g.createContext(null);
function fs(e, t) {
  let { relative: n } = t === void 0 ? {} : t;
  Dl() || V(!1);
  let { basename: r, navigator: l } = g.useContext(St),
    {
      hash: o,
      pathname: i,
      search: a,
    } = Ol(e, {
      relative: n,
    }),
    u = i;
  return (
    r !== '/' && (u = i === '/' ? r : Tt([r, i])),
    l.createHref({
      pathname: u,
      search: a,
      hash: o,
    })
  );
}
function Dl() {
  return g.useContext(cs) != null;
}
function Ot() {
  return Dl() || V(!1), g.useContext(cs).location;
}
function Zp(e) {
  g.useContext(St).static || g.useLayoutEffect(e);
}
function qp() {
  let { isDataRoute: e } = g.useContext(Dt);
  return e ? Ug() : xg();
}
function xg() {
  Dl() || V(!1);
  let e = g.useContext(Lr),
    { basename: t, future: n, navigator: r } = g.useContext(St),
    { matches: l } = g.useContext(Dt),
    { pathname: o } = Ot(),
    i = JSON.stringify(os(l, n.v7_relativeSplatPath)),
    a = g.useRef(!1);
  return (
    Zp(() => {
      a.current = !0;
    }),
    g.useCallback(
      function (s, d) {
        if ((d === void 0 && (d = {}), !a.current)) return;
        if (typeof s == 'number') {
          r.go(s);
          return;
        }
        let c = is(s, JSON.parse(i), o, d.relative === 'path');
        e == null && t !== '/' && (c.pathname = c.pathname === '/' ? t : Tt([t, c.pathname])),
          (d.replace ? r.replace : r.push)(c, d.state, d);
      },
      [t, r, i, o, e]
    )
  );
}
const _g = g.createContext(null);
function Rg(e) {
  let t = g.useContext(Dt).outlet;
  return (
    t &&
    g.createElement(
      _g.Provider,
      {
        value: e,
      },
      t
    )
  );
}
function Ol(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = g.useContext(St),
    { matches: l } = g.useContext(Dt),
    { pathname: o } = Ot(),
    i = JSON.stringify(os(l, r.v7_relativeSplatPath));
  return g.useMemo(() => is(e, JSON.parse(i), o, n === 'path'), [e, i, o, n]);
}
function Cg(e, t, n, r) {
  Dl() || V(!1);
  let { navigator: l } = g.useContext(St),
    { matches: o } = g.useContext(Dt),
    i = o[o.length - 1],
    a = i ? i.params : {};
  i && i.pathname;
  let u = i ? i.pathnameBase : '/';
  i && i.route;
  let s = Ot(),
    d;
  d = s;
  let c = d.pathname || '/',
    f = c;
  if (u !== '/') {
    let k = u.replace(/^\//, '').split('/');
    f = '/' + c.replace(/^\//, '').split('/').slice(k.length).join('/');
  }
  let w = zt(e, {
    pathname: f,
  });
  return Dg(
    w &&
      w.map((k) =>
        Object.assign({}, k, {
          params: Object.assign({}, a, k.params),
          pathname: Tt([u, l.encodeLocation ? l.encodeLocation(k.pathname).pathname : k.pathname]),
          pathnameBase:
            k.pathnameBase === '/'
              ? u
              : Tt([u, l.encodeLocation ? l.encodeLocation(k.pathnameBase).pathname : k.pathnameBase]),
        })
      ),
    o,
    n,
    r
  );
}
function Pg() {
  let e = nh(),
    t = Pr(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    l = {
      padding: '0.5rem',
      backgroundColor: 'rgba(200,200,200, 0.5)',
    };
  return g.createElement(
    g.Fragment,
    null,
    g.createElement('h2', null, 'Unexpected Application Error!'),
    g.createElement(
      'h3',
      {
        style: {
          fontStyle: 'italic',
        },
      },
      t
    ),
    n
      ? g.createElement(
          'pre',
          {
            style: l,
          },
          n
        )
      : null,
    null
  );
}
const Lg = g.createElement(Pg, null);
class Tg extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return {
      error: t,
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? {
          error: t.error,
          location: t.location,
          revalidation: t.revalidation,
        }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? g.createElement(
          Dt.Provider,
          {
            value: this.props.routeContext,
          },
          g.createElement(bp.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Ng(e) {
  let { routeContext: t, match: n, children: r } = e,
    l = g.useContext(Lr);
  return (
    l &&
      l.static &&
      l.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (l.staticContext._deepestRenderedBoundaryId = n.route.id),
    g.createElement(
      Dt.Provider,
      {
        value: t,
      },
      r
    )
  );
}
function Dg(e, t, n, r) {
  var l;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var o;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if ((o = r) != null && o.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
      e = n.matches;
    else return null;
  }
  let i = e,
    a = (l = n) == null ? void 0 : l.errors;
  if (a != null) {
    let d = i.findIndex((c) => c.route.id && (a == null ? void 0 : a[c.route.id]) !== void 0);
    d >= 0 || V(!1), (i = i.slice(0, Math.min(i.length, d + 1)));
  }
  let u = !1,
    s = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < i.length; d++) {
      let c = i[d];
      if (((c.route.HydrateFallback || c.route.hydrateFallbackElement) && (s = d), c.route.id)) {
        let { loaderData: f, errors: w } = n,
          m = c.route.loader && f[c.route.id] === void 0 && (!w || w[c.route.id] === void 0);
        if (c.route.lazy || m) {
          (u = !0), s >= 0 ? (i = i.slice(0, s + 1)) : (i = [i[0]]);
          break;
        }
      }
    }
  return i.reduceRight((d, c, f) => {
    let w,
      m = !1,
      k = null,
      P = null;
    n &&
      ((w = a && c.route.id ? a[c.route.id] : void 0),
      (k = c.route.errorElement || Lg),
      u &&
        (s < 0 && f === 0
          ? ((m = !0), (P = null))
          : s === f && ((m = !0), (P = c.route.hydrateFallbackElement || null))));
    let h = t.concat(i.slice(0, f + 1)),
      p = () => {
        let v;
        return (
          w
            ? (v = k)
            : m
              ? (v = P)
              : c.route.Component
                ? (v = g.createElement(c.route.Component, null))
                : c.route.element
                  ? (v = c.route.element)
                  : (v = d),
          g.createElement(Ng, {
            match: c,
            routeContext: {
              outlet: d,
              matches: h,
              isDataRoute: n != null,
            },
            children: v,
          })
        );
      };
    return n && (c.route.ErrorBoundary || c.route.errorElement || f === 0)
      ? g.createElement(Tg, {
          location: n.location,
          revalidation: n.revalidation,
          component: k,
          error: w,
          children: p(),
          routeContext: {
            outlet: null,
            matches: h,
            isDataRoute: !0,
          },
        })
      : p();
  }, null);
}
var eh = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e
    );
  })(eh || {}),
  Yt = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Yt || {});
function Og(e) {
  let t = g.useContext(Lr);
  return t || V(!1), t;
}
function Ei(e) {
  let t = g.useContext(Nl);
  return t || V(!1), t;
}
function Mg(e) {
  let t = g.useContext(Dt);
  return t || V(!1), t;
}
function Si(e) {
  let t = Mg(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || V(!1), n.route.id;
}
function Fg() {
  return Si(Yt.UseRouteId);
}
function Ig() {
  return Ei(Yt.UseNavigation).navigation;
}
function th() {
  let { matches: e, loaderData: t } = Ei(Yt.UseMatches);
  return g.useMemo(() => e.map((n) => Up(n, t)), [e, t]);
}
function jg() {
  let e = Ei(Yt.UseLoaderData),
    t = Si(Yt.UseLoaderData);
  if (e.errors && e.errors[t] != null) {
    console.error('You cannot `useLoaderData` in an errorElement (routeId: ' + t + ')');
    return;
  }
  return e.loaderData[t];
}
function nh() {
  var e;
  let t = g.useContext(bp),
    n = Ei(Yt.UseRouteError),
    r = Si(Yt.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function Ag() {
  let e = g.useContext(ei);
  return e == null ? void 0 : e._data;
}
function zg() {
  let e = g.useContext(ei);
  return e == null ? void 0 : e._error;
}
function Ug() {
  let { router: e } = Og(eh.UseNavigateStable),
    t = Si(Yt.UseNavigateStable),
    n = g.useRef(!1);
  return (
    Zp(() => {
      n.current = !0;
    }),
    g.useCallback(
      function (l, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof l == 'number'
              ? e.navigate(l)
              : e.navigate(
                  l,
                  qo(
                    {
                      fromRouteId: t,
                    },
                    o
                  )
                ));
      },
      [e, t]
    )
  );
}
const uf = {};
function $g(e, t) {
  uf[t] || ((uf[t] = !0), console.warn(t));
}
const Gn = (e, t, n) =>
  $g(
    e,
    '⚠️ React Router Future Flag Warning: ' +
      t +
      '. ' +
      ('You can use the `' + e + '` future flag to opt-in early. ') +
      ('For more information, see ' + n + '.')
  );
function Bg(e, t) {
  (e == null ? void 0 : e.v7_startTransition) === void 0 &&
    Gn(
      'v7_startTransition',
      'React Router will begin wrapping state updates in `React.startTransition` in v7',
      'https://reactrouter.com/v6/upgrading/future#v7_starttransition'
    ),
    (e == null ? void 0 : e.v7_relativeSplatPath) === void 0 &&
      (!t || !t.v7_relativeSplatPath) &&
      Gn(
        'v7_relativeSplatPath',
        'Relative route resolution within Splat routes is changing in v7',
        'https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath'
      ),
    t &&
      (t.v7_fetcherPersist === void 0 &&
        Gn(
          'v7_fetcherPersist',
          'The persistence behavior of fetchers is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist'
        ),
      t.v7_normalizeFormMethod === void 0 &&
        Gn(
          'v7_normalizeFormMethod',
          'Casing of `formMethod` fields is being normalized to uppercase in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod'
        ),
      t.v7_partialHydration === void 0 &&
        Gn(
          'v7_partialHydration',
          '`RouterProvider` hydration behavior is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_partialhydration'
        ),
      t.v7_skipActionErrorRevalidation === void 0 &&
        Gn(
          'v7_skipActionErrorRevalidation',
          'The revalidation behavior after 4xx/5xx `action` responses is changing in v7',
          'https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation'
        ));
}
function S1(e) {
  return Rg(e.context);
}
function Vg(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: l = Ee.Pop,
    navigator: o,
    static: i = !1,
    future: a,
  } = e;
  Dl() && V(!1);
  let u = t.replace(/^\/*/, '/'),
    s = g.useMemo(
      () => ({
        basename: u,
        navigator: o,
        static: i,
        future: qo(
          {
            v7_relativeSplatPath: !1,
          },
          a
        ),
      }),
      [u, a, o, i]
    );
  typeof r == 'string' && (r = Jt(r));
  let { pathname: d = '/', search: c = '', hash: f = '', state: w = null, key: m = 'default' } = r,
    k = g.useMemo(() => {
      let P = ft(d, u);
      return P == null
        ? null
        : {
            location: {
              pathname: P,
              search: c,
              hash: f,
              state: w,
              key: m,
            },
            navigationType: l,
          };
    }, [u, d, c, f, w, m, l]);
  return k == null
    ? null
    : g.createElement(
        St.Provider,
        {
          value: s,
        },
        g.createElement(cs.Provider, {
          children: n,
          value: k,
        })
      );
}
function Hg(e) {
  let { children: t, errorElement: n, resolve: r } = e;
  return g.createElement(
    Kg,
    {
      resolve: r,
      errorElement: n,
    },
    g.createElement(Yg, null, t)
  );
}
var lt = (function (e) {
  return (e[(e.pending = 0)] = 'pending'), (e[(e.success = 1)] = 'success'), (e[(e.error = 2)] = 'error'), e;
})(lt || {});
const Wg = new Promise(() => {});
class Kg extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        error: null,
      });
  }
  static getDerivedStateFromError(t) {
    return {
      error: t,
    };
  }
  componentDidCatch(t, n) {
    console.error('<Await> caught the following error during render', t, n);
  }
  render() {
    let { children: t, errorElement: n, resolve: r } = this.props,
      l = null,
      o = lt.pending;
    if (!(r instanceof Promise))
      (o = lt.success),
        (l = Promise.resolve()),
        Object.defineProperty(l, '_tracked', {
          get: () => !0,
        }),
        Object.defineProperty(l, '_data', {
          get: () => r,
        });
    else if (this.state.error) {
      o = lt.error;
      let i = this.state.error;
      (l = Promise.reject().catch(() => {})),
        Object.defineProperty(l, '_tracked', {
          get: () => !0,
        }),
        Object.defineProperty(l, '_error', {
          get: () => i,
        });
    } else
      r._tracked
        ? ((l = r), (o = '_error' in l ? lt.error : '_data' in l ? lt.success : lt.pending))
        : ((o = lt.pending),
          Object.defineProperty(r, '_tracked', {
            get: () => !0,
          }),
          (l = r.then(
            (i) =>
              Object.defineProperty(r, '_data', {
                get: () => i,
              }),
            (i) =>
              Object.defineProperty(r, '_error', {
                get: () => i,
              })
          )));
    if (o === lt.error && l._error instanceof Zo) throw Wg;
    if (o === lt.error && !n) throw l._error;
    if (o === lt.error)
      return g.createElement(ei.Provider, {
        value: l,
        children: n,
      });
    if (o === lt.success)
      return g.createElement(ei.Provider, {
        value: l,
        children: t,
      });
    throw l;
  }
}
function Yg(e) {
  let { children: t } = e,
    n = Ag(),
    r = typeof t == 'function' ? t(n) : t;
  return g.createElement(g.Fragment, null, r);
}
function k1(e) {
  let t = {
    hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
  };
  return (
    e.Component &&
      Object.assign(t, {
        element: g.createElement(e.Component),
        Component: void 0,
      }),
    e.HydrateFallback &&
      Object.assign(t, {
        hydrateFallbackElement: g.createElement(e.HydrateFallback),
        HydrateFallback: void 0,
      }),
    e.ErrorBoundary &&
      Object.assign(t, {
        errorElement: g.createElement(e.ErrorBoundary),
        ErrorBoundary: void 0,
      }),
    t
  );
}
/**
 * React Router DOM v6.28.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Nt() {
  return (
    (Nt = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Nt.apply(this, arguments)
  );
}
function ds(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    l,
    o;
  for (o = 0; o < r.length; o++) (l = r[o]), !(t.indexOf(l) >= 0) && (n[l] = e[l]);
  return n;
}
const xo = 'get',
  aa = 'application/x-www-form-urlencoded';
function ki(e) {
  return e != null && typeof e.tagName == 'string';
}
function Qg(e) {
  return ki(e) && e.tagName.toLowerCase() === 'button';
}
function Xg(e) {
  return ki(e) && e.tagName.toLowerCase() === 'form';
}
function Jg(e) {
  return ki(e) && e.tagName.toLowerCase() === 'input';
}
function Gg(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function bg(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Gg(e);
}
function iu(e) {
  return (
    e === void 0 && (e = ''),
    new URLSearchParams(
      typeof e == 'string' || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((l) => [n, l]) : [[n, r]]);
          }, [])
    )
  );
}
function Zg(e, t) {
  let n = iu(e);
  return (
    t &&
      t.forEach((r, l) => {
        n.has(l) ||
          t.getAll(l).forEach((o) => {
            n.append(l, o);
          });
      }),
    n
  );
}
let lo = null;
function qg() {
  if (lo === null)
    try {
      new FormData(document.createElement('form'), 0), (lo = !1);
    } catch {
      lo = !0;
    }
  return lo;
}
const e0 = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain']);
function ua(e) {
  return e != null && !e0.has(e) ? null : e;
}
function t0(e, t) {
  let n, r, l, o, i;
  if (Xg(e)) {
    let a = e.getAttribute('action');
    (r = a ? ft(a, t) : null),
      (n = e.getAttribute('method') || xo),
      (l = ua(e.getAttribute('enctype')) || aa),
      (o = new FormData(e));
  } else if (Qg(e) || (Jg(e) && (e.type === 'submit' || e.type === 'image'))) {
    let a = e.form;
    if (a == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');
    let u = e.getAttribute('formaction') || a.getAttribute('action');
    if (
      ((r = u ? ft(u, t) : null),
      (n = e.getAttribute('formmethod') || a.getAttribute('method') || xo),
      (l = ua(e.getAttribute('formenctype')) || ua(a.getAttribute('enctype')) || aa),
      (o = new FormData(a, e)),
      !qg())
    ) {
      let { name: s, type: d, value: c } = e;
      if (d === 'image') {
        let f = s ? s + '.' : '';
        o.append(f + 'x', '0'), o.append(f + 'y', '0');
      } else s && o.append(s, c);
    }
  } else {
    if (ki(e)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');
    (n = xo), (r = null), (l = aa), (i = e);
  }
  return (
    o && l === 'text/plain' && ((i = o), (o = void 0)),
    {
      action: r,
      method: n.toLowerCase(),
      encType: l,
      formData: o,
      body: i,
    }
  );
}
const n0 = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  r0 = ['aria-current', 'caseSensitive', 'className', 'end', 'style', 'to', 'viewTransition', 'children'],
  l0 = [
    'fetcherKey',
    'navigate',
    'reloadDocument',
    'replace',
    'state',
    'method',
    'action',
    'onSubmit',
    'relative',
    'preventScrollReset',
    'viewTransition',
  ],
  o0 = '6';
try {
  window.__reactRouterVersion = o0;
} catch {}
const rh = g.createContext({
    isTransitioning: !1,
  }),
  lh = g.createContext(new Map()),
  i0 = 'startTransition',
  sf = Mf[i0],
  a0 = 'flushSync',
  cf = Ry[a0],
  u0 = 'useId',
  ff = Mf[u0];
function s0(e) {
  sf ? sf(e) : e();
}
function Wr(e) {
  cf ? cf(e) : e();
}
let c0 = class {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = (r) => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = (r) => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
};
function _1(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [l, o] = g.useState(n.state),
    [i, a] = g.useState(),
    [u, s] = g.useState({
      isTransitioning: !1,
    }),
    [d, c] = g.useState(),
    [f, w] = g.useState(),
    [m, k] = g.useState(),
    P = g.useRef(new Map()),
    { v7_startTransition: h } = r || {},
    p = g.useCallback(
      (R) => {
        h ? s0(R) : R();
      },
      [h]
    ),
    v = g.useCallback(
      (R, D) => {
        let { deletedFetchers: O, flushSync: K, viewTransitionOpts: G } = D;
        O.forEach((pe) => P.current.delete(pe)),
          R.fetchers.forEach((pe, Le) => {
            pe.data !== void 0 && P.current.set(Le, pe.data);
          });
        let de =
          n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != 'function';
        if (!G || de) {
          K ? Wr(() => o(R)) : p(() => o(R));
          return;
        }
        if (K) {
          Wr(() => {
            f && (d && d.resolve(), f.skipTransition()),
              s({
                isTransitioning: !0,
                flushSync: !0,
                currentLocation: G.currentLocation,
                nextLocation: G.nextLocation,
              });
          });
          let pe = n.window.document.startViewTransition(() => {
            Wr(() => o(R));
          });
          pe.finished.finally(() => {
            Wr(() => {
              c(void 0),
                w(void 0),
                a(void 0),
                s({
                  isTransitioning: !1,
                });
            });
          }),
            Wr(() => w(pe));
          return;
        }
        f
          ? (d && d.resolve(),
            f.skipTransition(),
            k({
              state: R,
              currentLocation: G.currentLocation,
              nextLocation: G.nextLocation,
            }))
          : (a(R),
            s({
              isTransitioning: !0,
              flushSync: !1,
              currentLocation: G.currentLocation,
              nextLocation: G.nextLocation,
            }));
      },
      [n.window, f, d, P, p]
    );
  g.useLayoutEffect(() => n.subscribe(v), [n, v]),
    g.useEffect(() => {
      u.isTransitioning && !u.flushSync && c(new c0());
    }, [u]),
    g.useEffect(() => {
      if (d && i && n.window) {
        let R = i,
          D = d.promise,
          O = n.window.document.startViewTransition(async () => {
            p(() => o(R)), await D;
          });
        O.finished.finally(() => {
          c(void 0),
            w(void 0),
            a(void 0),
            s({
              isTransitioning: !1,
            });
        }),
          w(O);
      }
    }, [p, i, d, n.window]),
    g.useEffect(() => {
      d && i && l.location.key === i.location.key && d.resolve();
    }, [d, f, l.location, i]),
    g.useEffect(() => {
      !u.isTransitioning &&
        m &&
        (a(m.state),
        s({
          isTransitioning: !0,
          flushSync: !1,
          currentLocation: m.currentLocation,
          nextLocation: m.nextLocation,
        }),
        k(void 0));
    }, [u.isTransitioning, m]),
    g.useEffect(() => {}, []);
  let S = g.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: (R) => n.navigate(R),
        push: (R, D, O) =>
          n.navigate(R, {
            state: D,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
        replace: (R, D, O) =>
          n.navigate(R, {
            replace: !0,
            state: D,
            preventScrollReset: O == null ? void 0 : O.preventScrollReset,
          }),
      }),
      [n]
    ),
    C = n.basename || '/',
    y = g.useMemo(
      () => ({
        router: n,
        navigator: S,
        static: !1,
        basename: C,
      }),
      [n, S, C]
    ),
    L = g.useMemo(
      () => ({
        v7_relativeSplatPath: n.future.v7_relativeSplatPath,
      }),
      [n.future.v7_relativeSplatPath]
    );
  return (
    g.useEffect(() => Bg(r, n.future), [r, n.future]),
    g.createElement(
      g.Fragment,
      null,
      g.createElement(
        Lr.Provider,
        {
          value: y,
        },
        g.createElement(
          Nl.Provider,
          {
            value: l,
          },
          g.createElement(
            lh.Provider,
            {
              value: P.current,
            },
            g.createElement(
              rh.Provider,
              {
                value: u,
              },
              g.createElement(
                Vg,
                {
                  basename: C,
                  location: l.location,
                  navigationType: l.historyAction,
                  navigator: S,
                  future: L,
                },
                l.initialized || n.future.v7_partialHydration
                  ? g.createElement(f0, {
                      routes: n.routes,
                      future: n.future,
                      state: l,
                    })
                  : t
              )
            )
          )
        )
      ),
      null
    )
  );
}
const f0 = g.memo(d0);
function d0(e) {
  let { routes: t, future: n, state: r } = e;
  return Cg(t, void 0, r, n);
}
const p0 = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u',
  h0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  oh = g.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: l,
        reloadDocument: o,
        replace: i,
        state: a,
        target: u,
        to: s,
        preventScrollReset: d,
        viewTransition: c,
      } = t,
      f = ds(t, n0),
      { basename: w } = g.useContext(St),
      m,
      k = !1;
    if (typeof s == 'string' && h0.test(s) && ((m = s), p0))
      try {
        let v = new URL(window.location.href),
          S = s.startsWith('//') ? new URL(v.protocol + s) : new URL(s),
          C = ft(S.pathname, w);
        S.origin === v.origin && C != null ? (s = C + S.search + S.hash) : (k = !0);
      } catch {}
    let P = fs(s, {
        relative: l,
      }),
      h = v0(s, {
        replace: i,
        state: a,
        target: u,
        preventScrollReset: d,
        relative: l,
        viewTransition: c,
      });
    function p(v) {
      r && r(v), v.defaultPrevented || h(v);
    }
    return g.createElement(
      'a',
      Nt({}, f, {
        href: m || P,
        onClick: k || o ? r : p,
        ref: n,
        target: u,
      })
    );
  }),
  m0 = g.forwardRef(function (t, n) {
    let {
        'aria-current': r = 'page',
        caseSensitive: l = !1,
        className: o = '',
        end: i = !1,
        style: a,
        to: u,
        viewTransition: s,
        children: d,
      } = t,
      c = ds(t, r0),
      f = Ol(u, {
        relative: c.relative,
      }),
      w = Ot(),
      m = g.useContext(Nl),
      { navigator: k, basename: P } = g.useContext(St),
      h = m != null && k0(f) && s === !0,
      p = k.encodeLocation ? k.encodeLocation(f).pathname : f.pathname,
      v = w.pathname,
      S = m && m.navigation && m.navigation.location ? m.navigation.location.pathname : null;
    l || ((v = v.toLowerCase()), (S = S ? S.toLowerCase() : null), (p = p.toLowerCase())),
      S && P && (S = ft(S, P) || S);
    const C = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length;
    let y = v === p || (!i && v.startsWith(p) && v.charAt(C) === '/'),
      L = S != null && (S === p || (!i && S.startsWith(p) && S.charAt(p.length) === '/')),
      R = {
        isActive: y,
        isPending: L,
        isTransitioning: h,
      },
      D = y ? r : void 0,
      O;
    typeof o == 'function'
      ? (O = o(R))
      : (O = [o, y ? 'active' : null, L ? 'pending' : null, h ? 'transitioning' : null].filter(Boolean).join(' '));
    let K = typeof a == 'function' ? a(R) : a;
    return g.createElement(
      oh,
      Nt({}, c, {
        'aria-current': D,
        className: O,
        ref: n,
        style: K,
        to: u,
        viewTransition: s,
      }),
      typeof d == 'function' ? d(R) : d
    );
  }),
  ih = g.forwardRef((e, t) => {
    let {
        fetcherKey: n,
        navigate: r,
        reloadDocument: l,
        replace: o,
        state: i,
        method: a = xo,
        action: u,
        onSubmit: s,
        relative: d,
        preventScrollReset: c,
        viewTransition: f,
      } = e,
      w = ds(e, l0),
      m = sh(),
      k = w0(u, {
        relative: d,
      }),
      P = a.toLowerCase() === 'get' ? 'get' : 'post',
      h = (p) => {
        if ((s && s(p), p.defaultPrevented)) return;
        p.preventDefault();
        let v = p.nativeEvent.submitter,
          S = (v == null ? void 0 : v.getAttribute('formmethod')) || a;
        m(v || p.currentTarget, {
          fetcherKey: n,
          method: S,
          navigate: r,
          replace: o,
          state: i,
          relative: d,
          preventScrollReset: c,
          viewTransition: f,
        });
      };
    return g.createElement(
      'form',
      Nt(
        {
          ref: t,
          method: P,
          action: k,
          onSubmit: l ? s : h,
        },
        w
      )
    );
  });
var xr;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(xr || (xr = {}));
var ti;
(function (e) {
  (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(ti || (ti = {}));
function xi(e) {
  let t = g.useContext(Lr);
  return t || V(!1), t;
}
function ah(e) {
  let t = g.useContext(Nl);
  return t || V(!1), t;
}
function v0(e, t) {
  let {
      target: n,
      replace: r,
      state: l,
      preventScrollReset: o,
      relative: i,
      viewTransition: a,
    } = t === void 0 ? {} : t,
    u = qp(),
    s = Ot(),
    d = Ol(e, {
      relative: i,
    });
  return g.useCallback(
    (c) => {
      if (bg(c, n)) {
        c.preventDefault();
        let f = r !== void 0 ? r : gn(s) === gn(d);
        u(e, {
          replace: f,
          state: l,
          preventScrollReset: o,
          relative: i,
          viewTransition: a,
        });
      }
    },
    [s, u, d, r, l, n, e, o, i, a]
  );
}
function R1(e) {
  let t = g.useRef(iu(e)),
    n = g.useRef(!1),
    r = Ot(),
    l = g.useMemo(() => Zg(r.search, n.current ? null : t.current), [r.search]),
    o = qp(),
    i = g.useCallback(
      (a, u) => {
        const s = iu(typeof a == 'function' ? a(l) : a);
        (n.current = !0), o('?' + s, u);
      },
      [o, l]
    );
  return [l, i];
}
function y0() {
  if (typeof document > 'u')
    throw new Error(
      'You are calling submit during the server render. Try calling submit within a `useEffect` or callback instead.'
    );
}
let g0 = 0,
  uh = () => '__' + String(++g0) + '__';
function sh() {
  let { router: e } = xi(xr.UseSubmit),
    { basename: t } = g.useContext(St),
    n = Fg();
  return g.useCallback(
    function (r, l) {
      l === void 0 && (l = {}), y0();
      let { action: o, method: i, encType: a, formData: u, body: s } = t0(r, t);
      if (l.navigate === !1) {
        let d = l.fetcherKey || uh();
        e.fetch(d, n, l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          flushSync: l.flushSync,
        });
      } else
        e.navigate(l.action || o, {
          preventScrollReset: l.preventScrollReset,
          formData: u,
          body: s,
          formMethod: l.method || i,
          formEncType: l.encType || a,
          replace: l.replace,
          state: l.state,
          fromRouteId: n,
          flushSync: l.flushSync,
          viewTransition: l.viewTransition,
        });
    },
    [e, t, n]
  );
}
function w0(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { basename: r } = g.useContext(St),
    l = g.useContext(Dt);
  l || V(!1);
  let [o] = l.matches.slice(-1),
    i = Nt(
      {},
      Ol(e || '.', {
        relative: n,
      })
    ),
    a = Ot();
  if (e == null) {
    i.search = a.search;
    let u = new URLSearchParams(i.search),
      s = u.getAll('index');
    if (s.some((c) => c === '')) {
      u.delete('index'), s.filter((f) => f).forEach((f) => u.append('index', f));
      let c = u.toString();
      i.search = c ? '?' + c : '';
    }
  }
  return (
    (!e || e === '.') && o.route.index && (i.search = i.search ? i.search.replace(/^\?/, '?index&') : '?index'),
    r !== '/' && (i.pathname = i.pathname === '/' ? r : Tt([r, i.pathname])),
    gn(i)
  );
}
function E0(e) {
  var t;
  let { key: n } = e === void 0 ? {} : e,
    { router: r } = xi(xr.UseFetcher),
    l = ah(ti.UseFetcher),
    o = g.useContext(lh),
    i = g.useContext(Dt),
    a = (t = i.matches[i.matches.length - 1]) == null ? void 0 : t.route.id;
  o || V(!1), i || V(!1), a == null && V(!1);
  let u = ff ? ff() : '',
    [s, d] = g.useState(n || u);
  n && n !== s ? d(n) : s || d(uh()),
    g.useEffect(
      () => (
        r.getFetcher(s),
        () => {
          r.deleteFetcher(s);
        }
      ),
      [r, s]
    );
  let c = g.useCallback(
      (p, v) => {
        a || V(!1), r.fetch(s, a, p, v);
      },
      [s, a, r]
    ),
    f = sh(),
    w = g.useCallback(
      (p, v) => {
        f(
          p,
          Nt({}, v, {
            navigate: !1,
            fetcherKey: s,
          })
        );
      },
      [s, f]
    ),
    m = g.useMemo(
      () =>
        g.forwardRef((v, S) =>
          g.createElement(
            ih,
            Nt({}, v, {
              navigate: !1,
              fetcherKey: s,
              ref: S,
            })
          )
        ),
      [s]
    ),
    k = l.fetchers.get(s) || Kp,
    P = o.get(s);
  return g.useMemo(
    () =>
      Nt(
        {
          Form: m,
          submit: w,
          load: c,
        },
        k,
        {
          data: P,
        }
      ),
    [m, w, c, k, P]
  );
}
const df = 'react-router-scroll-positions';
let oo = {};
function C1(e) {
  let { getKey: t, storageKey: n } = e === void 0 ? {} : e,
    { router: r } = xi(xr.UseScrollRestoration),
    { restoreScrollPosition: l, preventScrollReset: o } = ah(ti.UseScrollRestoration),
    { basename: i } = g.useContext(St),
    a = Ot(),
    u = th(),
    s = Ig();
  g.useEffect(
    () => (
      (window.history.scrollRestoration = 'manual'),
      () => {
        window.history.scrollRestoration = 'auto';
      }
    ),
    []
  ),
    S0(
      g.useCallback(() => {
        if (s.state === 'idle') {
          let d = (t ? t(a, u) : null) || a.key;
          oo[d] = window.scrollY;
        }
        try {
          sessionStorage.setItem(n || df, JSON.stringify(oo));
        } catch {}
        window.history.scrollRestoration = 'auto';
      }, [n, t, s.state, a, u])
    ),
    typeof document < 'u' &&
      (g.useLayoutEffect(() => {
        try {
          let d = sessionStorage.getItem(n || df);
          d && (oo = JSON.parse(d));
        } catch {}
      }, [n]),
      g.useLayoutEffect(() => {
        let d =
            t && i !== '/'
              ? (f, w) =>
                  t(
                    Nt({}, f, {
                      pathname: ft(f.pathname, i) || f.pathname,
                    }),
                    w
                  )
              : t,
          c = r == null ? void 0 : r.enableScrollRestoration(oo, () => window.scrollY, d);
        return () => c && c();
      }, [r, i, t]),
      g.useLayoutEffect(() => {
        if (l !== !1) {
          if (typeof l == 'number') {
            window.scrollTo(0, l);
            return;
          }
          if (a.hash) {
            let d = document.getElementById(decodeURIComponent(a.hash.slice(1)));
            if (d) {
              d.scrollIntoView();
              return;
            }
          }
          o !== !0 && window.scrollTo(0, 0);
        }
      }, [a, l, o]));
}
function S0(e, t) {
  let { capture: n } = {};
  g.useEffect(() => {
    let r =
      n != null
        ? {
            capture: n,
          }
        : void 0;
    return (
      window.addEventListener('pagehide', e, r),
      () => {
        window.removeEventListener('pagehide', e, r);
      }
    );
  }, [e, n]);
}
function k0(e, t) {
  t === void 0 && (t = {});
  let n = g.useContext(rh);
  n == null && V(!1);
  let { basename: r } = xi(xr.useViewTransitionState),
    l = Ol(e, {
      relative: t.relative,
    });
  if (!n.isTransitioning) return !1;
  let o = ft(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    i = ft(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return bo(l.pathname, i) != null || bo(l.pathname, o) != null;
}
var x0 = -1,
  _0 = -2,
  R0 = -3,
  C0 = -4,
  P0 = -5,
  L0 = -6,
  T0 = -7,
  N0 = 'B',
  D0 = 'D',
  ch = 'E',
  O0 = 'M',
  M0 = 'N',
  fh = 'P',
  F0 = 'R',
  I0 = 'S',
  j0 = 'Y',
  A0 = 'U',
  z0 = 'Z',
  dh = class {
    constructor() {
      Ul(this, 'promise');
      Ul(this, 'resolve');
      Ul(this, 'reject');
      this.promise = new Promise((e, t) => {
        (this.resolve = e), (this.reject = t);
      });
    }
  };
function U0() {
  const e = new TextDecoder();
  let t = '';
  return new TransformStream({
    transform(n, r) {
      const l = e.decode(n, {
          stream: !0,
        }),
        o = (t + l).split(`
`);
      t = o.pop() || '';
      for (const i of o) r.enqueue(i);
    },
    flush(n) {
      t && n.enqueue(t);
    },
  });
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0');
var sa = typeof window < 'u' ? window : typeof globalThis < 'u' ? globalThis : void 0;
function au(e) {
  const { hydrated: t, values: n } = this;
  if (typeof e == 'number') return pf.call(this, e);
  if (!Array.isArray(e) || !e.length) throw new SyntaxError();
  const r = n.length;
  for (const l of e) n.push(l);
  return (t.length = n.length), pf.call(this, r);
}
function pf(e) {
  const { hydrated: t, values: n, deferred: r, plugins: l } = this;
  let o;
  const i = [
    [
      e,
      (u) => {
        o = u;
      },
    ],
  ];
  let a = [];
  for (; i.length > 0; ) {
    const [u, s] = i.pop();
    switch (u) {
      case T0:
        s(void 0);
        continue;
      case P0:
        s(null);
        continue;
      case _0:
        s(NaN);
        continue;
      case L0:
        s(1 / 0);
        continue;
      case R0:
        s(-1 / 0);
        continue;
      case C0:
        s(-0);
        continue;
    }
    if (t[u]) {
      s(t[u]);
      continue;
    }
    const d = n[u];
    if (!d || typeof d != 'object') {
      (t[u] = d), s(d);
      continue;
    }
    if (Array.isArray(d))
      if (typeof d[0] == 'string') {
        const [c, f, w] = d;
        switch (c) {
          case D0:
            s((t[u] = new Date(f)));
            continue;
          case A0:
            s((t[u] = new URL(f)));
            continue;
          case N0:
            s((t[u] = BigInt(f)));
            continue;
          case F0:
            s((t[u] = new RegExp(f, w)));
            continue;
          case j0:
            s((t[u] = Symbol.for(f)));
            continue;
          case I0:
            const m = new Set();
            t[u] = m;
            for (let S = 1; S < d.length; S++)
              i.push([
                d[S],
                (C) => {
                  m.add(C);
                },
              ]);
            s(m);
            continue;
          case O0:
            const k = new Map();
            t[u] = k;
            for (let S = 1; S < d.length; S += 2) {
              const C = [];
              i.push([
                d[S + 1],
                (y) => {
                  C[1] = y;
                },
              ]),
                i.push([
                  d[S],
                  (y) => {
                    C[0] = y;
                  },
                ]),
                a.push(() => {
                  k.set(C[0], C[1]);
                });
            }
            s(k);
            continue;
          case M0:
            const P = Object.create(null);
            t[u] = P;
            for (const S of Object.keys(f).reverse()) {
              const C = [];
              i.push([
                f[S],
                (y) => {
                  C[1] = y;
                },
              ]),
                i.push([
                  Number(S.slice(1)),
                  (y) => {
                    C[0] = y;
                  },
                ]),
                a.push(() => {
                  P[C[0]] = C[1];
                });
            }
            s(P);
            continue;
          case fh:
            if (t[f]) s((t[u] = t[f]));
            else {
              const S = new dh();
              (r[f] = S), s((t[u] = S.promise));
            }
            continue;
          case ch:
            const [, h, p] = d;
            let v = p && sa && sa[p] ? new sa[p](h) : new Error(h);
            (t[u] = v), s(v);
            continue;
          case z0:
            s((t[u] = t[f]));
            continue;
          default:
            if (Array.isArray(l)) {
              const S = [],
                C = d.slice(1);
              for (let y = 0; y < C.length; y++) {
                const L = C[y];
                i.push([
                  L,
                  (R) => {
                    S[y] = R;
                  },
                ]);
              }
              a.push(() => {
                for (const y of l) {
                  const L = y(d[0], ...S);
                  if (L) {
                    s((t[u] = L.value));
                    return;
                  }
                }
                throw new SyntaxError();
              });
              continue;
            }
            throw new SyntaxError();
        }
      } else {
        const c = [];
        t[u] = c;
        for (let f = 0; f < d.length; f++) {
          const w = d[f];
          w !== x0 &&
            i.push([
              w,
              (m) => {
                c[f] = m;
              },
            ]);
        }
        s(c);
        continue;
      }
    else {
      const c = {};
      t[u] = c;
      for (const f of Object.keys(d).reverse()) {
        const w = [];
        i.push([
          d[f],
          (m) => {
            w[1] = m;
          },
        ]),
          i.push([
            Number(f.slice(1)),
            (m) => {
              w[0] = m;
            },
          ]),
          a.push(() => {
            c[w[0]] = w[1];
          });
      }
      s(c);
      continue;
    }
  }
  for (; a.length > 0; ) a.pop()();
  return o;
}
async function $0(e, t) {
  const { plugins: n } = t ?? {},
    r = new dh(),
    l = e.pipeThrough(U0()).getReader(),
    o = {
      values: [],
      hydrated: [],
      deferred: {},
      plugins: n,
    },
    i = await B0.call(o, l);
  let a = r.promise;
  return (
    i.done
      ? r.resolve()
      : (a = V0.call(o, l)
          .then(r.resolve)
          .catch((u) => {
            for (const s of Object.values(o.deferred)) s.reject(u);
            r.reject(u);
          })),
    {
      done: a.then(() => l.closed),
      value: i.value,
    }
  );
}
async function B0(e) {
  const t = await e.read();
  if (!t.value) throw new SyntaxError();
  let n;
  try {
    n = JSON.parse(t.value);
  } catch {
    throw new SyntaxError();
  }
  return {
    done: t.done,
    value: au.call(this, n),
  };
}
async function V0(e) {
  let t = await e.read();
  for (; !t.done; ) {
    if (!t.value) continue;
    const n = t.value;
    switch (n[0]) {
      case fh: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          o = this.deferred[l];
        if (!o) throw new Error(`Deferred ID ${l} not found in stream`);
        const i = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const u = au.call(this, a);
        o.resolve(u);
        break;
      }
      case ch: {
        const r = n.indexOf(':'),
          l = Number(n.slice(1, r)),
          o = this.deferred[l];
        if (!o) throw new Error(`Deferred ID ${l} not found in stream`);
        const i = n.slice(r + 1);
        let a;
        try {
          a = JSON.parse(i);
        } catch {
          throw new SyntaxError();
        }
        const u = au.call(this, a);
        o.reject(u);
        break;
      }
      default:
        throw new SyntaxError();
    }
    t = await e.read();
  }
}
/**
 * @remix-run/server-runtime v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const ph = Symbol('SingleFetchRedirect');
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function _e() {
  return (
    (_e = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    _e.apply(this, arguments)
  );
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function Qt(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
async function hh(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await import(e.module);
    return (t[e.id] = n), n;
  } catch (n) {
    return (
      console.error(`Error loading route module \`${e.module}\`, reloading page...`),
      console.error(n),
      window.__remixContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function H0(e, t, n) {
  let r = e
      .map((o) => {
        var i;
        let a = t[o.route.id],
          u = n.routes[o.route.id];
        return [
          u.css
            ? u.css.map((s) => ({
                rel: 'stylesheet',
                href: s,
              }))
            : [],
          (a == null || (i = a.links) === null || i === void 0 ? void 0 : i.call(a)) || [],
        ];
      })
      .flat(2),
    l = J0(e, n);
  return vh(r, l);
}
async function mh(e, t) {
  var n, r;
  if ((!e.css && !t.links) || !b0()) return;
  let l = [
    ((n = e.css) === null || n === void 0
      ? void 0
      : n.map((a) => ({
          rel: 'stylesheet',
          href: a,
        }))) ?? [],
    ((r = t.links) === null || r === void 0 ? void 0 : r.call(t)) ?? [],
  ].flat(1);
  if (l.length === 0) return;
  let o = [];
  for (let a of l)
    !ps(a) &&
      a.rel === 'stylesheet' &&
      o.push({
        ...a,
        rel: 'preload',
        as: 'style',
      });
  let i = o.filter(
    (a) =>
      (!a.media || window.matchMedia(a.media).matches) &&
      !document.querySelector(`link[rel="stylesheet"][href="${a.href}"]`)
  );
  await Promise.all(i.map(W0));
}
async function W0(e) {
  return new Promise((t) => {
    let n = document.createElement('link');
    Object.assign(n, e);
    function r() {
      document.head.contains(n) && document.head.removeChild(n);
    }
    (n.onload = () => {
      r(), t();
    }),
      (n.onerror = () => {
        r(), t();
      }),
      document.head.appendChild(n);
  });
}
function ps(e) {
  return e != null && typeof e.page == 'string';
}
function K0(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === 'preload' && typeof e.imageSrcSet == 'string' && typeof e.imageSizes == 'string'
      : typeof e.rel == 'string' && typeof e.href == 'string';
}
async function Y0(e, t, n) {
  let r = await Promise.all(
    e.map(async (l) => {
      let o = await hh(t.routes[l.route.id], n);
      return o.links ? o.links() : [];
    })
  );
  return vh(
    r
      .flat(1)
      .filter(K0)
      .filter((l) => l.rel === 'stylesheet' || l.rel === 'preload')
      .map((l) =>
        l.rel === 'stylesheet'
          ? {
              ...l,
              rel: 'prefetch',
              as: 'style',
            }
          : {
              ...l,
              rel: 'prefetch',
            }
      )
  );
}
function hf(e, t, n, r, l, o, i) {
  let a = yh(e),
    u = (c, f) => (n[f] ? c.route.id !== n[f].route.id : !0),
    s = (c, f) => {
      var w;
      return (
        n[f].pathname !== c.pathname ||
        (((w = n[f].route.path) === null || w === void 0 ? void 0 : w.endsWith('*')) &&
          n[f].params['*'] !== c.params['*'])
      );
    };
  return i === 'data' && (o.v3_singleFetch || l.search !== a.search)
    ? t.filter((c, f) => {
        if (!r.routes[c.route.id].hasLoader) return !1;
        if (u(c, f) || s(c, f)) return !0;
        let m = o.v3_singleFetch || l.search !== a.search;
        if (c.route.shouldRevalidate) {
          var k;
          let P = c.route.shouldRevalidate({
            currentUrl: new URL(l.pathname + l.search + l.hash, window.origin),
            currentParams: ((k = n[0]) === null || k === void 0 ? void 0 : k.params) || {},
            nextUrl: new URL(e, window.origin),
            nextParams: c.params,
            defaultShouldRevalidate: m,
          });
          if (typeof P == 'boolean') return P;
        }
        return m;
      })
    : t.filter((c, f) => {
        let w = r.routes[c.route.id];
        return (i === 'assets' || w.hasLoader) && (u(c, f) || s(c, f));
      });
}
function Q0(e, t, n) {
  let r = yh(e);
  return hs(
    t
      .filter((l) => n.routes[l.route.id].hasLoader && !n.routes[l.route.id].hasClientLoader)
      .map((l) => {
        let { pathname: o, search: i } = r,
          a = new URLSearchParams(i);
        return a.set('_data', l.route.id), `${o}?${a}`;
      })
  );
}
function X0(e, t) {
  return hs(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function J0(e, t) {
  return hs(
    e
      .map((n) => {
        let r = t.routes[n.route.id],
          l = [r.module];
        return r.imports && (l = l.concat(r.imports)), l;
      })
      .flat(1)
  );
}
function hs(e) {
  return [...new Set(e)];
}
function G0(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function vh(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((l, o) => {
    if (t && !ps(o) && o.as === 'script' && o.href && r.has(o.href)) return l;
    let a = JSON.stringify(G0(o));
    return (
      n.has(a) ||
        (n.add(a),
        l.push({
          key: a,
          link: o,
        })),
      l
    );
  }, []);
}
function yh(e) {
  let t = Jt(e);
  return t.search === void 0 && (t.search = ''), t;
}
let io;
function b0() {
  if (io !== void 0) return io;
  let e = document.createElement('link');
  return (io = e.relList.supports('preload')), (e = null), io;
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const Z0 = {
    '&': '\\u0026',
    '>': '\\u003e',
    '<': '\\u003c',
    '\u2028': '\\u2028',
    '\u2029': '\\u2029',
  },
  q0 = /[&><\u2028\u2029]/g;
function ao(e) {
  return e.replace(q0, (t) => Z0[t]);
}
function mf(e) {
  return {
    __html: e,
  };
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ew(e) {
  return e.headers.get('X-Remix-Catch') != null;
}
function tw(e) {
  return e.headers.get('X-Remix-Error') != null;
}
function nw(e) {
  return (
    ms(e) &&
    e.status >= 400 &&
    e.headers.get('X-Remix-Error') == null &&
    e.headers.get('X-Remix-Catch') == null &&
    e.headers.get('X-Remix-Response') == null
  );
}
function rw(e) {
  return e.headers.get('X-Remix-Redirect') != null;
}
function lw(e) {
  var t;
  return !!((t = e.headers.get('Content-Type')) !== null && t !== void 0 && t.match(/text\/remix-deferred/));
}
function ms(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.headers == 'object' &&
    typeof e.body < 'u'
  );
}
function ow(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
async function gh(e, t, n = 0) {
  let r = new URL(e.url);
  r.searchParams.set('_data', t), n > 0 && (await new Promise((a) => setTimeout(a, 5 ** n * 10)));
  let l = await _i(e),
    o = window.__remixRevalidation,
    i = await fetch(r.href, l).catch((a) => {
      if (
        typeof o == 'number' &&
        o === window.__remixRevalidation &&
        (a == null ? void 0 : a.name) === 'TypeError' &&
        n < 3
      )
        return gh(e, t, n + 1);
      throw a;
    });
  if (tw(i)) {
    let a = await i.json(),
      u = new Error(a.message);
    return (u.stack = a.stack), u;
  }
  if (nw(i)) {
    let a = await i.text(),
      u = new Error(a);
    return (u.stack = void 0), u;
  }
  return i;
}
async function _i(e) {
  let t = {
    signal: e.signal,
  };
  if (e.method !== 'GET') {
    t.method = e.method;
    let n = e.headers.get('Content-Type');
    n && /\bapplication\/json\b/.test(n)
      ? ((t.headers = {
          'Content-Type': n,
        }),
        (t.body = JSON.stringify(await e.json())))
      : n && /\btext\/plain\b/.test(n)
        ? ((t.headers = {
            'Content-Type': n,
          }),
          (t.body = await e.text()))
        : n && /\bapplication\/x-www-form-urlencoded\b/.test(n)
          ? (t.body = new URLSearchParams(await e.text()))
          : (t.body = await e.formData());
  }
  return t;
}
const iw = '__deferred_promise:';
async function aw(e) {
  if (!e) throw new Error('parseDeferredReadableStream requires stream argument');
  let t,
    n = {};
  try {
    let r = uw(e),
      o = (await r.next()).value;
    if (!o) throw new Error('no critical data');
    let i = JSON.parse(o);
    if (typeof i == 'object' && i !== null)
      for (let [a, u] of Object.entries(i))
        typeof u != 'string' ||
          !u.startsWith(iw) ||
          ((t = t || {}),
          (t[a] = new Promise((s, d) => {
            n[a] = {
              resolve: (c) => {
                s(c), delete n[a];
              },
              reject: (c) => {
                d(c), delete n[a];
              },
            };
          })));
    return (
      (async () => {
        try {
          for await (let a of r) {
            let [u, ...s] = a.split(':'),
              d = s.join(':'),
              c = JSON.parse(d);
            if (u === 'data') for (let [f, w] of Object.entries(c)) n[f] && n[f].resolve(w);
            else if (u === 'error')
              for (let [f, w] of Object.entries(c)) {
                let m = new Error(w.message);
                (m.stack = w.stack), n[f] && n[f].reject(m);
              }
          }
          for (let [a, u] of Object.entries(n)) u.reject(new Zo(`Deferred ${a} will never be resolved`));
        } catch (a) {
          for (let u of Object.values(n)) u.reject(a);
        }
      })(),
      new Jy({
        ...i,
        ...t,
      })
    );
  } catch (r) {
    for (let l of Object.values(n)) l.reject(r);
    throw r;
  }
}
async function* uw(e) {
  let t = e.getReader(),
    n = [],
    r = [],
    l = !1,
    o = new TextEncoder(),
    i = new TextDecoder(),
    a = async () => {
      if (r.length > 0) return r.shift();
      for (; !l && r.length === 0; ) {
        let s = await t.read();
        if (s.done) {
          l = !0;
          break;
        }
        n.push(s.value);
        try {
          let c = i.decode(vf(...n)).split(`

`);
          if (
            (c.length >= 2 &&
              (r.push(...c.slice(0, -1)),
              (n = [
                o.encode(
                  c.slice(-1).join(`

`)
                ),
              ])),
            r.length > 0)
          )
            break;
        } catch {
          continue;
        }
      }
      return (
        r.length > 0 ||
          (n.length > 0 &&
            ((r = i
              .decode(vf(...n))
              .split(
                `

`
              )
              .filter((d) => d)),
            (n = []))),
        r.shift()
      );
    },
    u = await a();
  for (; u; ) yield u, (u = await a());
}
function vf(...e) {
  let t = new Uint8Array(e.reduce((r, l) => r + l.length, 0)),
    n = 0;
  for (let r of e) t.set(r, n), (n += r.length);
  return t;
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function P1(e, t, n) {
  return async ({ request: r, matches: l, fetcherKey: o }) =>
    r.method !== 'GET' ? sw(r, l) : o ? fw(r, l) : cw(e, t, n(), r, l);
}
async function sw(e, t) {
  let n = t.find((o) => o.shouldLoad);
  Qt(n, 'No action match found');
  let r,
    l = await n.resolve(
      async (o) =>
        await o(async () => {
          let a = Ri(e.url),
            u = await _i(e),
            { data: s, status: d } = await vs(a, u);
          return (r = d), uu(s, n.route.id);
        })
    );
  return ms(l.result) || Pr(l.result)
    ? {
        [n.route.id]: l,
      }
    : {
        [n.route.id]: {
          type: l.type,
          result: Xy(l.result, r),
        },
      };
}
async function cw(e, t, n, r, l) {
  let o = new Set(),
    i = !1,
    a = l.map(() => yf()),
    u = Promise.all(a.map((m) => m.promise)),
    s = yf(),
    d = Eh(Ri(r.url)),
    c = await _i(r),
    f = {},
    w = Promise.all(
      l.map(async (m, k) =>
        m.resolve(async (P) => {
          if ((a[k].resolve(), !m.shouldLoad)) {
            var h;
            if (!n.state.initialized) return;
            if (
              m.route.id in n.state.loaderData &&
              e.routes[m.route.id].hasLoader &&
              (h = t[m.route.id]) !== null &&
              h !== void 0 &&
              h.shouldRevalidate
            ) {
              i = !0;
              return;
            }
          }
          if (e.routes[m.route.id].hasClientLoader) {
            e.routes[m.route.id].hasLoader && (i = !0);
            try {
              let p = await wh(P, d, c, m.route.id);
              f[m.route.id] = {
                type: 'data',
                result: p,
              };
            } catch (p) {
              f[m.route.id] = {
                type: 'error',
                result: p,
              };
            }
            return;
          }
          e.routes[m.route.id].hasLoader && o.add(m.route.id);
          try {
            let p = await P(async () => {
              let v = await s.promise;
              return Sh(v, m.route.id);
            });
            f[m.route.id] = {
              type: 'data',
              result: p,
            };
          } catch (p) {
            f[m.route.id] = {
              type: 'error',
              result: p,
            };
          }
        })
      )
    );
  if ((await u, (!n.state.initialized || o.size === 0) && !window.__remixHdrActive)) s.resolve({});
  else
    try {
      i &&
        o.size > 0 &&
        d.searchParams.set(
          '_routes',
          l
            .filter((k) => o.has(k.route.id))
            .map((k) => k.route.id)
            .join(',')
        );
      let m = await vs(d, c);
      s.resolve(m.data);
    } catch (m) {
      s.reject(m);
    }
  return await w, f;
}
async function fw(e, t) {
  let n = t.find((l) => l.shouldLoad);
  Qt(n, 'No fetcher match found');
  let r = await n.resolve(async (l) => {
    let o = Eh(Ri(e.url)),
      i = await _i(e);
    return wh(l, o, i, n.route.id);
  });
  return {
    [n.route.id]: r,
  };
}
function wh(e, t, n, r) {
  return e(async () => {
    let l = new URL(t);
    l.searchParams.set('_routes', r);
    let { data: o } = await vs(l, n);
    return Sh(o, r);
  });
}
function Eh(e) {
  let t = e.searchParams.getAll('index');
  e.searchParams.delete('index');
  let n = [];
  for (let r of t) r && n.push(r);
  for (let r of n) e.searchParams.append('index', r);
  return e;
}
function Ri(e) {
  let t = typeof e == 'string' ? new URL(e, window.location.origin) : e;
  return t.pathname === '/' ? (t.pathname = '_root.data') : (t.pathname = `${t.pathname.replace(/\/$/, '')}.data`), t;
}
async function vs(e, t) {
  let n = await fetch(e, t);
  Qt(n.body, 'No response body to decode');
  try {
    let r = await dw(n.body, window);
    return {
      status: n.status,
      data: r.value,
    };
  } catch (r) {
    throw (console.error(r), new Error(`Unable to decode turbo-stream response from URL: ${e.toString()}`));
  }
}
function dw(e, t) {
  return $0(e, {
    plugins: [
      (n, ...r) => {
        if (n === 'SanitizedError') {
          let [l, o, i] = r,
            a = Error;
          l && l in t && typeof t[l] == 'function' && (a = t[l]);
          let u = new a(o);
          return (
            (u.stack = i),
            {
              value: u,
            }
          );
        }
        if (n === 'ErrorResponse') {
          let [l, o, i] = r;
          return {
            value: new $n(o, i, l),
          };
        }
        if (n === 'SingleFetchRedirect')
          return {
            value: {
              [ph]: r[0],
            },
          };
      },
      (n, r) => {
        if (n === 'SingleFetchFallback')
          return {
            value: void 0,
          };
        if (n === 'SingleFetchClassInstance')
          return {
            value: r,
          };
      },
    ],
  });
}
function Sh(e, t) {
  let n = e[ph];
  return n ? uu(n, t) : e[t] !== void 0 ? uu(e[t], t) : null;
}
function uu(e, t) {
  if ('error' in e) throw e.error;
  if ('redirect' in e) {
    let n = {};
    throw (
      (e.revalidate && (n['X-Remix-Revalidate'] = 'yes'),
      e.reload && (n['X-Remix-Reload-Document'] = 'yes'),
      e.replace && (n['X-Remix-Replace'] = 'yes'),
      Hp(e.redirect, {
        status: e.status,
        headers: n,
      }))
    );
  } else {
    if ('data' in e) return e.data;
    throw new Error(`No response found for routeId "${t}"`);
  }
}
function yf() {
  let e,
    t,
    n = new Promise((r, l) => {
      (e = async (o) => {
        r(o);
        try {
          await n;
        } catch {}
      }),
        (t = async (o) => {
          l(o);
          try {
            await n;
          } catch {}
        });
    });
  return {
    promise: n,
    resolve: e,
    reject: t,
  };
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
class L1 extends g.Component {
  constructor(t) {
    super(t),
      (this.state = {
        error: t.error || null,
        location: t.location,
      });
  }
  static getDerivedStateFromError(t) {
    return {
      error: t,
    };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location
      ? {
          error: t.error || null,
          location: t.location,
        }
      : {
          error: t.error || n.error,
          location: n.location,
        };
  }
  render() {
    return this.state.error
      ? g.createElement(kh, {
          error: this.state.error,
          isOutsideRemixApp: !0,
        })
      : this.props.children;
  }
}
function kh({ error: e, isOutsideRemixApp: t }) {
  console.error(e);
  let n = g.createElement('script', {
    dangerouslySetInnerHTML: {
      __html: `
        console.log(
          "💿 Hey developer 👋. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."
        );
      `,
    },
  });
  if (Pr(e))
    return g.createElement(
      su,
      {
        title: 'Unhandled Thrown Response!',
      },
      g.createElement(
        'h1',
        {
          style: {
            fontSize: '24px',
          },
        },
        e.status,
        ' ',
        e.statusText
      ),
      n
    );
  let r;
  if (e instanceof Error) r = e;
  else {
    let l = e == null ? 'Unknown Error' : typeof e == 'object' && 'toString' in e ? e.toString() : JSON.stringify(e);
    r = new Error(l);
  }
  return g.createElement(
    su,
    {
      title: 'Application Error!',
      isOutsideRemixApp: t,
    },
    g.createElement(
      'h1',
      {
        style: {
          fontSize: '24px',
        },
      },
      'Application Error'
    ),
    g.createElement(
      'pre',
      {
        style: {
          padding: '2rem',
          background: 'hsla(10, 50%, 50%, 0.1)',
          color: 'red',
          overflow: 'auto',
        },
      },
      r.stack
    ),
    n
  );
}
function su({ title: e, renderScripts: t, isOutsideRemixApp: n, children: r }) {
  var l;
  let { routeModules: o } = Tr();
  return (l = o.root) !== null && l !== void 0 && l.Layout && !n
    ? r
    : g.createElement(
        'html',
        {
          lang: 'en',
        },
        g.createElement(
          'head',
          null,
          g.createElement('meta', {
            charSet: 'utf-8',
          }),
          g.createElement('meta', {
            name: 'viewport',
            content: 'width=device-width,initial-scale=1,viewport-fit=cover',
          }),
          g.createElement('title', null, e)
        ),
        g.createElement(
          'body',
          null,
          g.createElement(
            'main',
            {
              style: {
                fontFamily: 'system-ui, sans-serif',
                padding: '2rem',
              },
            },
            r,
            t ? g.createElement(Mw, null) : null
          )
        )
      );
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function pw() {
  return g.createElement(
    su,
    {
      title: 'Loading...',
      renderScripts: !0,
    },
    g.createElement('script', {
      dangerouslySetInnerHTML: {
        __html: `
              console.log(
                "💿 Hey developer 👋. You can provide a way better UX than this " +
                "when your app is loading JS modules and/or running \`clientLoader\` " +
                "functions. Check out https://remix.run/route/hydrate-fallback " +
                "for more information."
              );
            `,
      },
    })
  );
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function xh(e) {
  let t = {};
  return (
    Object.values(e).forEach((n) => {
      let r = n.parentId || '';
      t[r] || (t[r] = []), t[r].push(n);
    }),
    t
  );
}
function hw(e, t, n) {
  let r = _h(t),
    l = t.HydrateFallback && (!n || e.id === 'root') ? t.HydrateFallback : e.id === 'root' ? pw : void 0,
    o = t.ErrorBoundary
      ? t.ErrorBoundary
      : e.id === 'root'
        ? () =>
            g.createElement(kh, {
              error: nh(),
            })
        : void 0;
  return e.id === 'root' && t.Layout
    ? {
        ...(r
          ? {
              element: g.createElement(t.Layout, null, g.createElement(r, null)),
            }
          : {
              Component: r,
            }),
        ...(o
          ? {
              errorElement: g.createElement(t.Layout, null, g.createElement(o, null)),
            }
          : {
              ErrorBoundary: o,
            }),
        ...(l
          ? {
              hydrateFallbackElement: g.createElement(t.Layout, null, g.createElement(l, null)),
            }
          : {
              HydrateFallback: l,
            }),
      }
    : {
        Component: r,
        ErrorBoundary: o,
        HydrateFallback: l,
      };
}
function T1(e, t, n, r, l, o) {
  return ys(t, n, r, l, o, '', xh(t), e);
}
function uo(e, t, n) {
  if (n) {
    let i = `You cannot call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} in SPA Mode (routeId: "${t.id}")`;
    throw (console.error(i), new $n(400, 'Bad Request', new Error(i), !0));
  }
  let l = `You are trying to call ${e === 'action' ? 'serverAction()' : 'serverLoader()'} on a route that does not have a server ${e} (routeId: "${t.id}")`;
  if ((e === 'loader' && !t.hasLoader) || (e === 'action' && !t.hasAction))
    throw (console.error(l), new $n(400, 'Bad Request', new Error(l), !0));
}
function ca(e, t) {
  let n = e === 'clientAction' ? 'a' : 'an',
    r = `Route "${t}" does not have ${n} ${e}, but you are trying to submit to it. To fix this, please add ${n} \`${e}\` function to the route`;
  throw (console.error(r), new $n(405, 'Method Not Allowed', new Error(r), !0));
}
function ys(e, t, n, r, l, o = '', i = xh(e), a) {
  return (i[o] || []).map((u) => {
    let s = t[u.id];
    async function d(v, S, C) {
      if (typeof C == 'function') return await C();
      let y = await yw(v, u);
      return S ? gw(y) : y;
    }
    function c(v, S, C) {
      return u.hasLoader ? d(v, S, C) : Promise.resolve(null);
    }
    function f(v, S, C) {
      if (!u.hasAction) throw ca('action', u.id);
      return d(v, S, C);
    }
    async function w(v) {
      let S = t[u.id],
        C = S ? mh(u, S) : Promise.resolve();
      try {
        return v();
      } finally {
        await C;
      }
    }
    let m = {
      id: u.id,
      index: u.index,
      path: u.path,
    };
    if (s) {
      var k, P, h;
      Object.assign(m, {
        ...m,
        ...hw(u, s, l),
        handle: s.handle,
        shouldRevalidate: gf(r, s, u.id, a),
      });
      let v = n == null || (k = n.loaderData) === null || k === void 0 ? void 0 : k[u.id],
        S = n == null || (P = n.errors) === null || P === void 0 ? void 0 : P[u.id],
        C = a == null && (((h = s.clientLoader) === null || h === void 0 ? void 0 : h.hydrate) === !0 || !u.hasLoader);
      (m.loader = async ({ request: y, params: L }, R) => {
        try {
          return await w(
            async () => (
              Qt(s, 'No `routeModule` available for critical-route loader'),
              s.clientLoader
                ? s.clientLoader({
                    request: y,
                    params: L,
                    async serverLoader() {
                      if ((uo('loader', u, l), C)) {
                        if (v !== void 0) return v;
                        if (S !== void 0) throw S;
                        return null;
                      }
                      return c(y, !0, R);
                    },
                  })
                : l
                  ? null
                  : c(y, !1, R)
            )
          );
        } finally {
          C = !1;
        }
      }),
        (m.loader.hydrate = Ew(u, s, l)),
        (m.action = ({ request: y, params: L }, R) =>
          w(async () => {
            if ((Qt(s, 'No `routeModule` available for critical-route action'), !s.clientAction)) {
              if (l) throw ca('clientAction', u.id);
              return f(y, !1, R);
            }
            return s.clientAction({
              request: y,
              params: L,
              async serverAction() {
                return uo('action', u, l), f(y, !0, R);
              },
            });
          }));
    } else
      u.hasClientLoader || (m.loader = ({ request: v }, S) => w(() => (l ? Promise.resolve(null) : c(v, !1, S)))),
        u.hasClientAction ||
          (m.action = ({ request: v }, S) =>
            w(() => {
              if (l) throw ca('clientAction', u.id);
              return f(v, !1, S);
            })),
        (m.lazy = async () => {
          let v = await vw(u, t),
            S = {
              ...v,
            };
          if (v.clientLoader) {
            let C = v.clientLoader;
            S.loader = (y, L) =>
              C({
                ...y,
                async serverLoader() {
                  return uo('loader', u, l), c(y.request, !0, L);
                },
              });
          }
          if (v.clientAction) {
            let C = v.clientAction;
            S.action = (y, L) =>
              C({
                ...y,
                async serverAction() {
                  return uo('action', u, l), f(y.request, !0, L);
                },
              });
          }
          return {
            ...(S.loader
              ? {
                  loader: S.loader,
                }
              : {}),
            ...(S.action
              ? {
                  action: S.action,
                }
              : {}),
            hasErrorBoundary: S.hasErrorBoundary,
            shouldRevalidate: gf(r, S, u.id, a),
            handle: S.handle,
            Component: S.Component,
            ErrorBoundary: S.ErrorBoundary,
          };
        });
    let p = ys(e, t, n, r, l, u.id, i, a);
    return p.length > 0 && (m.children = p), m;
  });
}
function gf(e, t, n, r) {
  if (r) return mw(n, t.shouldRevalidate, r);
  if (e.v3_singleFetch && t.shouldRevalidate) {
    let l = t.shouldRevalidate;
    return (o) =>
      l({
        ...o,
        defaultShouldRevalidate: !0,
      });
  }
  return t.shouldRevalidate;
}
function mw(e, t, n) {
  let r = !1;
  return (l) => (r ? (t ? t(l) : l.defaultShouldRevalidate) : ((r = !0), n.has(e)));
}
async function vw(e, t) {
  let n = await hh(e, t);
  return (
    await mh(e, n),
    {
      Component: _h(n),
      ErrorBoundary: n.ErrorBoundary,
      clientAction: n.clientAction,
      clientLoader: n.clientLoader,
      handle: n.handle,
      links: n.links,
      meta: n.meta,
      shouldRevalidate: n.shouldRevalidate,
    }
  );
}
async function yw(e, t) {
  let n = await gh(e, t.id);
  if (n instanceof Error) throw n;
  if (rw(n)) throw ww(n);
  if (ew(n)) throw n;
  return lw(n) && n.body ? await aw(n.body) : n;
}
function gw(e) {
  if (ow(e)) return e.data;
  if (ms(e)) {
    let t = e.headers.get('Content-Type');
    return t && /\bapplication\/json\b/.test(t) ? e.json() : e.text();
  }
  return e;
}
function ww(e) {
  let t = parseInt(e.headers.get('X-Remix-Status'), 10) || 302,
    n = e.headers.get('X-Remix-Redirect'),
    r = {},
    l = e.headers.get('X-Remix-Revalidate');
  l && (r['X-Remix-Revalidate'] = l);
  let o = e.headers.get('X-Remix-Reload-Document');
  o && (r['X-Remix-Reload-Document'] = o);
  let i = e.headers.get('X-Remix-Replace');
  return (
    i && (r['X-Remix-Replace'] = i),
    Hp(n, {
      status: t,
      headers: r,
    })
  );
}
function _h(e) {
  if (e.default == null) return;
  if (!(typeof e.default == 'object' && Object.keys(e.default).length === 0)) return e.default;
}
function Ew(e, t, n) {
  return (n && e.id !== 'root') || (t.clientLoader != null && (t.clientLoader.hydrate === !0 || e.hasLoader !== !0));
}
/**
 * @remix-run/react v2.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
const _o = new Set(),
  Sw = 1e3,
  ni = new Set(),
  kw = 7680;
function gs(e, t) {
  return e.v3_lazyRouteDiscovery === !0 && !t;
}
function xw(e, t) {
  let n = new Set(t.state.matches.map((i) => i.route.id)),
    r = t.state.location.pathname.split('/').filter(Boolean),
    l = ['/'];
  for (r.pop(); r.length > 0; ) l.push(`/${r.join('/')}`), r.pop();
  l.forEach((i) => {
    let a = zt(t.routes, i, t.basename);
    a && a.forEach((u) => n.add(u.route.id));
  });
  let o = [...n].reduce(
    (i, a) =>
      Object.assign(i, {
        [a]: e.routes[a],
      }),
    {}
  );
  return {
    ...e,
    routes: o,
  };
}
function N1(e, t, n, r, l) {
  if (gs(n, r))
    return async ({ path: o, patch: i }) => {
      ni.has(o) || (await Rh([o], e, t, n, r, l, i));
    };
}
function D1(e, t, n, r, l) {
  g.useEffect(() => {
    var o;
    if (!gs(r, l) || ((o = navigator.connection) === null || o === void 0 ? void 0 : o.saveData) === !0) return;
    function i(c) {
      let f = c.tagName === 'FORM' ? c.getAttribute('action') : c.getAttribute('href');
      if (!f) return;
      let w = new URL(f, window.location.origin);
      ni.has(w.pathname) || _o.add(w.pathname);
    }
    async function a() {
      let c = Array.from(_o.keys()).filter((f) => (ni.has(f) ? (_o.delete(f), !1) : !0));
      if (c.length !== 0)
        try {
          await Rh(c, t, n, r, l, e.basename, e.patchRoutes);
        } catch (f) {
          console.error('Failed to fetch manifest patches', f);
        }
    }
    document.body.querySelectorAll('a[data-discover], form[data-discover]').forEach((c) => i(c)), a();
    let u = Rw(a, 100);
    function s(c) {
      return c.nodeType === Node.ELEMENT_NODE;
    }
    let d = new MutationObserver((c) => {
      let f = new Set();
      c.forEach((w) => {
        [w.target, ...w.addedNodes].forEach((m) => {
          s(m) &&
            (((m.tagName === 'A' && m.getAttribute('data-discover')) ||
              (m.tagName === 'FORM' && m.getAttribute('data-discover'))) &&
              f.add(m),
            m.tagName !== 'A' && m.querySelectorAll('a[data-discover], form[data-discover]').forEach((k) => f.add(k)));
        });
      }),
        f.forEach((w) => i(w)),
        u();
    });
    return (
      d.observe(document.documentElement, {
        subtree: !0,
        childList: !0,
        attributes: !0,
        attributeFilter: ['data-discover', 'href', 'action'],
      }),
      () => d.disconnect()
    );
  }, [r, l, t, n, e]);
}
async function Rh(e, t, n, r, l, o, i) {
  let a = `${o ?? '/'}/__manifest`.replace(/\/+/g, '/'),
    u = new URL(a, window.location.origin);
  if (
    (e.sort().forEach((m) => u.searchParams.append('p', m)),
    u.searchParams.set('version', t.version),
    u.toString().length > kw)
  ) {
    _o.clear();
    return;
  }
  let s = await fetch(u);
  if (s.ok) {
    if (s.status >= 400) throw new Error(await s.text());
  } else throw new Error(`${s.status} ${s.statusText}`);
  let d = await s.json(),
    c = new Set(Object.keys(t.routes)),
    f = Object.values(d).reduce(
      (m, k) =>
        c.has(k.id)
          ? m
          : Object.assign(m, {
              [k.id]: k,
            }),
      {}
    );
  Object.assign(t.routes, f), e.forEach((m) => _w(m, ni));
  let w = new Set();
  Object.values(f).forEach((m) => {
    (!m.parentId || !f[m.parentId]) && w.add(m.parentId);
  }),
    w.forEach((m) => i(m || null, ys(f, n, null, r, l, m)));
}
function _w(e, t) {
  if (t.size >= Sw) {
    let n = t.values().next().value;
    typeof n == 'string' && t.delete(n);
  }
  t.add(e);
}
function Rw(e, t) {
  let n;
  return (...r) => {
    window.clearTimeout(n), (n = window.setTimeout(() => e(...r), t));
  };
}
function Ch() {
  let e = g.useContext(Lr);
  return Qt(e, 'You must render this element inside a <DataRouterContext.Provider> element'), e;
}
function Ci() {
  let e = g.useContext(Nl);
  return Qt(e, 'You must render this element inside a <DataRouterStateContext.Provider> element'), e;
}
const Ph = g.createContext(void 0);
Ph.displayName = 'Remix';
function Tr() {
  let e = g.useContext(Ph);
  return Qt(e, 'You must render this element inside a <Remix> element'), e;
}
function Lh(e, t) {
  let [n, r] = g.useState(!1),
    [l, o] = g.useState(!1),
    { onFocus: i, onBlur: a, onMouseEnter: u, onMouseLeave: s, onTouchStart: d } = t,
    c = g.useRef(null);
  g.useEffect(() => {
    if ((e === 'render' && o(!0), e === 'viewport')) {
      let m = (P) => {
          P.forEach((h) => {
            o(h.isIntersecting);
          });
        },
        k = new IntersectionObserver(m, {
          threshold: 0.5,
        });
      return (
        c.current && k.observe(c.current),
        () => {
          k.disconnect();
        }
      );
    }
  }, [e]);
  let f = () => {
      e === 'intent' && r(!0);
    },
    w = () => {
      e === 'intent' && (r(!1), o(!1));
    };
  return (
    g.useEffect(() => {
      if (n) {
        let m = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(m);
        };
      }
    }, [n]),
    [
      l,
      c,
      {
        onFocus: Kr(i, f),
        onBlur: Kr(a, w),
        onMouseEnter: Kr(u, f),
        onMouseLeave: Kr(s, w),
        onTouchStart: Kr(d, f),
      },
    ]
  );
}
const ws = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
function Es(e, t, n) {
  return e === 'render' && !t && !n ? 'true' : void 0;
}
let Cw = g.forwardRef(({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
  let o = typeof e == 'string' && ws.test(e),
    i = fs(e),
    [a, u, s] = Lh(t, r);
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(
      m0,
      _e({}, r, s, {
        ref: Th(l, u),
        to: e,
        'data-discover': Es(n, o, r.reloadDocument),
      })
    ),
    a && !o
      ? g.createElement(ks, {
          page: i,
        })
      : null
  );
});
Cw.displayName = 'NavLink';
let Pw = g.forwardRef(({ to: e, prefetch: t = 'none', discover: n = 'render', ...r }, l) => {
  let o = typeof e == 'string' && ws.test(e),
    i = fs(e),
    [a, u, s] = Lh(t, r);
  return g.createElement(
    g.Fragment,
    null,
    g.createElement(
      oh,
      _e({}, r, s, {
        ref: Th(l, u),
        to: e,
        'data-discover': Es(n, o, r.reloadDocument),
      })
    ),
    a && !o
      ? g.createElement(ks, {
          page: i,
        })
      : null
  );
});
Pw.displayName = 'Link';
let Lw = g.forwardRef(({ discover: e = 'render', ...t }, n) => {
  let r = typeof t.action == 'string' && ws.test(t.action);
  return g.createElement(
    ih,
    _e({}, t, {
      ref: n,
      'data-discover': Es(e, r, t.reloadDocument),
    })
  );
});
Lw.displayName = 'Form';
function Kr(e, t) {
  return (n) => {
    e && e(n), n.defaultPrevented || t(n);
  };
}
function Ss(e, t, n) {
  if (n && !Ro) return [e[0]];
  if (t) {
    let r = e.findIndex((l) => t[l.route.id] !== void 0);
    return e.slice(0, r + 1);
  }
  return e;
}
function O1() {
  let { isSpaMode: e, manifest: t, routeModules: n, criticalCss: r } = Tr(),
    { errors: l, matches: o } = Ci(),
    i = Ss(o, l, e),
    a = g.useMemo(() => H0(i, n, t), [i, n, t]);
  return g.createElement(
    g.Fragment,
    null,
    r
      ? g.createElement('style', {
          dangerouslySetInnerHTML: {
            __html: r,
          },
        })
      : null,
    a.map(({ key: u, link: s }) =>
      ps(s)
        ? g.createElement(
            ks,
            _e(
              {
                key: u,
              },
              s
            )
          )
        : g.createElement(
            'link',
            _e(
              {
                key: u,
              },
              s
            )
          )
    )
  );
}
function ks({ page: e, ...t }) {
  let { router: n } = Ch(),
    r = g.useMemo(() => zt(n.routes, e, n.basename), [n.routes, e, n.basename]);
  return r
    ? g.createElement(
        Nw,
        _e(
          {
            page: e,
            matches: r,
          },
          t
        )
      )
    : (console.warn(`Tried to prefetch ${e} but no routes matched.`), null);
}
function Tw(e) {
  let { manifest: t, routeModules: n } = Tr(),
    [r, l] = g.useState([]);
  return (
    g.useEffect(() => {
      let o = !1;
      return (
        Y0(e, t, n).then((i) => {
          o || l(i);
        }),
        () => {
          o = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Nw({ page: e, matches: t, ...n }) {
  let r = Ot(),
    { future: l, manifest: o, routeModules: i } = Tr(),
    { loaderData: a, matches: u } = Ci(),
    s = g.useMemo(() => hf(e, t, u, o, r, l, 'data'), [e, t, u, o, r, l]),
    d = g.useMemo(() => {
      if (!l.v3_singleFetch) return Q0(e, s, o);
      if (e === r.pathname + r.search + r.hash) return [];
      let m = new Set(),
        k = !1;
      if (
        (t.forEach((h) => {
          var p;
          o.routes[h.route.id].hasLoader &&
            ((!s.some((v) => v.route.id === h.route.id) &&
              h.route.id in a &&
              (p = i[h.route.id]) !== null &&
              p !== void 0 &&
              p.shouldRevalidate) ||
            o.routes[h.route.id].hasClientLoader
              ? (k = !0)
              : m.add(h.route.id));
        }),
        m.size === 0)
      )
        return [];
      let P = Ri(e);
      return (
        k &&
          m.size > 0 &&
          P.searchParams.set(
            '_routes',
            t
              .filter((h) => m.has(h.route.id))
              .map((h) => h.route.id)
              .join(',')
          ),
        [P.pathname + P.search]
      );
    }, [l.v3_singleFetch, a, r, o, s, t, e, i]),
    c = g.useMemo(() => hf(e, t, u, o, r, l, 'assets'), [e, t, u, o, r, l]),
    f = g.useMemo(() => X0(c, o), [c, o]),
    w = Tw(c);
  return g.createElement(
    g.Fragment,
    null,
    d.map((m) =>
      g.createElement(
        'link',
        _e(
          {
            key: m,
            rel: 'prefetch',
            as: 'fetch',
            href: m,
          },
          n
        )
      )
    ),
    f.map((m) =>
      g.createElement(
        'link',
        _e(
          {
            key: m,
            rel: 'modulepreload',
            href: m,
          },
          n
        )
      )
    ),
    w.map(({ key: m, link: k }) =>
      g.createElement(
        'link',
        _e(
          {
            key: m,
          },
          k
        )
      )
    )
  );
}
function M1() {
  let { isSpaMode: e, routeModules: t } = Tr(),
    { errors: n, matches: r, loaderData: l } = Ci(),
    o = Ot(),
    i = Ss(r, n, e),
    a = null;
  n && (a = n[i[i.length - 1].route.id]);
  let u = [],
    s = null,
    d = [];
  for (let c = 0; c < i.length; c++) {
    let f = i[c],
      w = f.route.id,
      m = l[w],
      k = f.params,
      P = t[w],
      h = [],
      p = {
        id: w,
        data: m,
        meta: [],
        params: f.params,
        pathname: f.pathname,
        handle: f.route.handle,
        error: a,
      };
    if (
      ((d[c] = p),
      P != null && P.meta
        ? (h =
            typeof P.meta == 'function'
              ? P.meta({
                  data: m,
                  params: k,
                  location: o,
                  matches: d,
                  error: a,
                })
              : Array.isArray(P.meta)
                ? [...P.meta]
                : P.meta)
        : s && (h = [...s]),
      (h = h || []),
      !Array.isArray(h))
    )
      throw new Error(
        'The route at ' +
          f.route.path +
          ` returns an invalid value. All route meta functions must return an array of meta objects.

To reference the meta function API, see https://remix.run/route/meta`
      );
    (p.meta = h), (d[c] = p), (u = [...h]), (s = u);
  }
  return g.createElement(
    g.Fragment,
    null,
    u.flat().map((c) => {
      if (!c) return null;
      if ('tagName' in c) {
        let { tagName: f, ...w } = c;
        if (!Dw(f))
          return console.warn(`A meta object uses an invalid tagName: ${f}. Expected either 'link' or 'meta'`), null;
        let m = f;
        return g.createElement(
          m,
          _e(
            {
              key: JSON.stringify(w),
            },
            w
          )
        );
      }
      if ('title' in c)
        return g.createElement(
          'title',
          {
            key: 'title',
          },
          String(c.title)
        );
      if (
        ('charset' in c && (c.charSet ?? (c.charSet = c.charset), delete c.charset),
        'charSet' in c && c.charSet != null)
      )
        return typeof c.charSet == 'string'
          ? g.createElement('meta', {
              key: 'charSet',
              charSet: c.charSet,
            })
          : null;
      if ('script:ld+json' in c)
        try {
          let f = JSON.stringify(c['script:ld+json']);
          return g.createElement('script', {
            key: `script:ld+json:${f}`,
            type: 'application/ld+json',
            dangerouslySetInnerHTML: {
              __html: f,
            },
          });
        } catch {
          return null;
        }
      return g.createElement(
        'meta',
        _e(
          {
            key: JSON.stringify(c),
          },
          c
        )
      );
    })
  );
}
function Dw(e) {
  return typeof e == 'string' && /^(meta|link)$/.test(e);
}
function Ow(e) {
  return g.createElement(Hg, e);
}
let Ro = !1;
function Mw(e) {
  let {
      manifest: t,
      serverHandoffString: n,
      abortDelay: r,
      serializeError: l,
      isSpaMode: o,
      future: i,
      renderMeta: a,
    } = Tr(),
    { router: u, static: s, staticContext: d } = Ch(),
    { matches: c } = Ci(),
    f = gs(i, o);
  a && (a.didRenderScripts = !0);
  let w = Ss(c, null, o);
  g.useEffect(() => {
    Ro = !0;
  }, []);
  let m = (y, L) => {
      let R;
      return (
        l && L instanceof Error ? (R = l(L)) : (R = L),
        `${JSON.stringify(y)}:__remixContext.p(!1, ${ao(JSON.stringify(R))})`
      );
    },
    k = (y, L, R) => {
      let D;
      try {
        D = JSON.stringify(R);
      } catch (O) {
        return m(L, O);
      }
      return `${JSON.stringify(L)}:__remixContext.p(${ao(D)})`;
    },
    P = (y, L, R) => {
      let D;
      return (
        l && R instanceof Error ? (D = l(R)) : (D = R),
        `__remixContext.r(${JSON.stringify(y)}, ${JSON.stringify(L)}, !1, ${ao(JSON.stringify(D))})`
      );
    },
    h = (y, L, R) => {
      let D;
      try {
        D = JSON.stringify(R);
      } catch (O) {
        return P(y, L, O);
      }
      return `__remixContext.r(${JSON.stringify(y)}, ${JSON.stringify(L)}, ${ao(D)})`;
    },
    p = [],
    v = g.useMemo(() => {
      var y;
      let L = i.v3_singleFetch
          ? 'window.__remixContext.stream = new ReadableStream({start(controller){window.__remixContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());'
          : '',
        R = d ? `window.__remixContext = ${n};${L}` : ' ',
        D = i.v3_singleFetch || d == null ? void 0 : d.activeDeferreds;
      R += D
        ? [
            '__remixContext.p = function(v,e,p,x) {',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p=Promise.reject(x);',
            '  } else {',
            '    p=Promise.resolve(v);',
            '  }',
            '  return p;',
            '};',
            '__remixContext.n = function(i,k) {',
            '  __remixContext.t = __remixContext.t || {};',
            '  __remixContext.t[i] = __remixContext.t[i] || {};',
            '  let p = new Promise((r, e) => {__remixContext.t[i][k] = {r:(v)=>{r(v);},e:(v)=>{e(v);}};});',
            typeof r == 'number'
              ? `setTimeout(() => {if(typeof p._error !== "undefined" || typeof p._data !== "undefined"){return;} __remixContext.t[i][k].e(new Error("Server timeout."))}, ${r});`
              : '',
            '  return p;',
            '};',
            '__remixContext.r = function(i,k,v,e,p,x) {',
            '  p = __remixContext.t[i][k];',
            "  if (typeof e !== 'undefined') {",
            `    x=new Error("Unexpected Server Error");
    x.stack=undefined;`,
            '    p.e(x);',
            '  } else {',
            '    p.r(v);',
            '  }',
            '};',
          ].join(`
`) +
          Object.entries(D).map(([K, G]) => {
            let de = new Set(G.pendingKeys),
              pe = G.deferredKeys.map((Le) => {
                if (de.has(Le))
                  return (
                    p.push(
                      g.createElement(wf, {
                        key: `${K} | ${Le}`,
                        deferredData: G,
                        routeId: K,
                        dataKey: Le,
                        scriptProps: e,
                        serializeData: h,
                        serializeError: P,
                      })
                    ),
                    `${JSON.stringify(Le)}:__remixContext.n(${JSON.stringify(K)}, ${JSON.stringify(Le)})`
                  );
                {
                  let rt = G.data[Le];
                  return typeof rt._error < 'u' ? m(Le, rt._error) : k(K, Le, rt._data);
                }
              }).join(`,
`);
            return `Object.assign(__remixContext.state.loaderData[${JSON.stringify(K)}], {${pe}});`;
          }).join(`
`) +
          (p.length > 0 ? `__remixContext.a=${p.length};` : '')
        : '';
      let O = s
        ? `${(y = t.hmr) !== null && y !== void 0 && y.runtime ? `import ${JSON.stringify(t.hmr.runtime)};` : ''}${f ? '' : `import ${JSON.stringify(t.url)}`};
${w.map((K, G) => `import * as route${G} from ${JSON.stringify(t.routes[K.route.id].module)};`).join(`
`)}
${f ? `window.__remixManifest = ${JSON.stringify(xw(t, u), null, 2)};` : ''}
window.__remixRouteModules = {${w.map((K, G) => `${JSON.stringify(K.route.id)}:route${G}`).join(',')}};

import(${JSON.stringify(t.entry.module)});`
        : ' ';
      return g.createElement(
        g.Fragment,
        null,
        g.createElement(
          'script',
          _e({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: mf(R),
            type: void 0,
          })
        ),
        g.createElement(
          'script',
          _e({}, e, {
            suppressHydrationWarning: !0,
            dangerouslySetInnerHTML: mf(O),
            type: 'module',
            async: !0,
          })
        )
      );
    }, []);
  if (!s && typeof __remixContext == 'object' && __remixContext.a)
    for (let y = 0; y < __remixContext.a; y++)
      p.push(
        g.createElement(wf, {
          key: y,
          scriptProps: e,
          serializeData: h,
          serializeError: P,
        })
      );
  let S = w
      .map((y) => {
        let L = t.routes[y.route.id];
        return (L.imports || []).concat([L.module]);
      })
      .flat(1),
    C = Ro ? [] : t.entry.imports.concat(S);
  return Ro
    ? null
    : g.createElement(
        g.Fragment,
        null,
        f
          ? null
          : g.createElement('link', {
              rel: 'modulepreload',
              href: t.url,
              crossOrigin: e.crossOrigin,
            }),
        g.createElement('link', {
          rel: 'modulepreload',
          href: t.entry.module,
          crossOrigin: e.crossOrigin,
        }),
        Iw(C).map((y) =>
          g.createElement('link', {
            key: y,
            rel: 'modulepreload',
            href: y,
            crossOrigin: e.crossOrigin,
          })
        ),
        v,
        p
      );
}
function wf({ dataKey: e, deferredData: t, routeId: n, scriptProps: r, serializeData: l, serializeError: o }) {
  return (
    typeof document > 'u' &&
      t &&
      e &&
      n &&
      Qt(
        t.pendingKeys.includes(e),
        `Deferred data for route ${n} with key ${e} was not pending but tried to render a script for it.`
      ),
    g.createElement(
      g.Suspense,
      {
        fallback:
          typeof document > 'u' && t && e && n
            ? null
            : g.createElement(
                'script',
                _e({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: {
                    __html: ' ',
                  },
                })
              ),
      },
      typeof document > 'u' && t && e && n
        ? g.createElement(Ow, {
            resolve: t.data[e],
            errorElement: g.createElement(Fw, {
              dataKey: e,
              routeId: n,
              scriptProps: r,
              serializeError: o,
            }),
            children: (i) =>
              g.createElement(
                'script',
                _e({}, r, {
                  async: !0,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: {
                    __html: l(n, e, i),
                  },
                })
              ),
          })
        : g.createElement(
            'script',
            _e({}, r, {
              async: !0,
              suppressHydrationWarning: !0,
              dangerouslySetInnerHTML: {
                __html: ' ',
              },
            })
          )
    )
  );
}
function Fw({ dataKey: e, routeId: t, scriptProps: n, serializeError: r }) {
  let l = zg();
  return g.createElement(
    'script',
    _e({}, n, {
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: r(t, e, l),
      },
    })
  );
}
function Iw(e) {
  return [...new Set(e)];
}
function F1() {
  return th();
}
function I1() {
  return jg();
}
function j1(e = {}) {
  return E0(e);
}
function Th(...e) {
  return (t) => {
    e.forEach((n) => {
      typeof n == 'function' ? n(t) : n != null && (n.current = t);
    });
  };
}
var kn = {
  exports: {},
};
const jw = {},
  Aw = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        default: jw,
      },
      Symbol.toStringTag,
      {
        value: 'Module',
      }
    )
  ),
  Pi = Zh(Aw),
  zw = 'dotenv',
  Uw = '16.4.5',
  $w = 'Loads environment variables from .env file',
  Bw = 'lib/main.js',
  Vw = 'lib/main.d.ts',
  Hw = {
    '.': {
      types: './lib/main.d.ts',
      require: './lib/main.js',
      default: './lib/main.js',
    },
    './config': './config.js',
    './config.js': './config.js',
    './lib/env-options': './lib/env-options.js',
    './lib/env-options.js': './lib/env-options.js',
    './lib/cli-options': './lib/cli-options.js',
    './lib/cli-options.js': './lib/cli-options.js',
    './package.json': './package.json',
  },
  Ww = {
    'dts-check': 'tsc --project tests/types/tsconfig.json',
    lint: 'standard',
    'lint-readme': 'standard-markdown',
    pretest: 'npm run lint && npm run dts-check',
    test: 'tap tests/*.js --100 -Rspec',
    'test:coverage': 'tap --coverage-report=lcov',
    prerelease: 'npm test',
    release: 'standard-version',
  },
  Kw = {
    type: 'git',
    url: 'git://github.com/motdotla/dotenv.git',
  },
  Yw = 'https://dotenvx.com',
  Qw = ['dotenv', 'env', '.env', 'environment', 'variables', 'config', 'settings'],
  Xw = 'README.md',
  Jw = 'BSD-2-Clause',
  Gw = {
    '@definitelytyped/dtslint': '^0.0.133',
    '@types/node': '^18.11.3',
    decache: '^4.6.1',
    sinon: '^14.0.1',
    standard: '^17.0.0',
    'standard-markdown': '^7.1.0',
    'standard-version': '^9.5.0',
    tap: '^16.3.0',
    tar: '^6.1.11',
    typescript: '^4.8.4',
  },
  bw = {
    node: '>=12',
  },
  Zw = {
    fs: !1,
  },
  qw = {
    name: zw,
    version: Uw,
    description: $w,
    main: Bw,
    types: Vw,
    exports: Hw,
    scripts: Ww,
    repository: Kw,
    funding: Yw,
    keywords: Qw,
    readmeFilename: Xw,
    license: Jw,
    devDependencies: Gw,
    engines: bw,
    browser: Zw,
  };
var il = {};
const cu = Pi,
  xs = Pi,
  e1 = Pi,
  t1 = Pi,
  n1 = qw,
  _s = n1.version,
  r1 =
    /(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/gm;
function l1(e) {
  const t = {};
  let n = e.toString();
  n = n.replace(
    /\r\n?/gm,
    `
`
  );
  let r;
  for (; (r = r1.exec(n)) != null; ) {
    const l = r[1];
    let o = r[2] || '';
    o = o.trim();
    const i = o[0];
    (o = o.replace(/^(['"`])([\s\S]*)\1$/gm, '$2')),
      i === '"' &&
        ((o = o.replace(
          /\\n/g,
          `
`
        )),
        (o = o.replace(/\\r/g, '\r'))),
      (t[l] = o);
  }
  return t;
}
function o1(e) {
  const t = Dh(e),
    n = Re.configDotenv({
      path: t,
    });
  if (!n.parsed) {
    const i = new Error(`MISSING_DATA: Cannot parse ${t} for an unknown reason`);
    throw ((i.code = 'MISSING_DATA'), i);
  }
  const r = Nh(e).split(','),
    l = r.length;
  let o;
  for (let i = 0; i < l; i++)
    try {
      const a = r[i].trim(),
        u = u1(n, a);
      o = Re.decrypt(u.ciphertext, u.key);
      break;
    } catch (a) {
      if (i + 1 >= l) throw a;
    }
  return Re.parse(o);
}
function i1(e) {
  console.log(`[dotenv@${_s}][INFO] ${e}`);
}
function a1(e) {
  console.log(`[dotenv@${_s}][WARN] ${e}`);
}
function ri(e) {
  console.log(`[dotenv@${_s}][DEBUG] ${e}`);
}
function Nh(e) {
  return e && e.DOTENV_KEY && e.DOTENV_KEY.length > 0
    ? e.DOTENV_KEY
    : il.DOTENV_KEY && il.DOTENV_KEY.length > 0
      ? il.DOTENV_KEY
      : '';
}
function u1(e, t) {
  let n;
  try {
    n = new URL(t);
  } catch (a) {
    if (a.code === 'ERR_INVALID_URL') {
      const u = new Error(
        'INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development'
      );
      throw ((u.code = 'INVALID_DOTENV_KEY'), u);
    }
    throw a;
  }
  const r = n.password;
  if (!r) {
    const a = new Error('INVALID_DOTENV_KEY: Missing key part');
    throw ((a.code = 'INVALID_DOTENV_KEY'), a);
  }
  const l = n.searchParams.get('environment');
  if (!l) {
    const a = new Error('INVALID_DOTENV_KEY: Missing environment part');
    throw ((a.code = 'INVALID_DOTENV_KEY'), a);
  }
  const o = `DOTENV_VAULT_${l.toUpperCase()}`,
    i = e.parsed[o];
  if (!i) {
    const a = new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${o} in your .env.vault file.`);
    throw ((a.code = 'NOT_FOUND_DOTENV_ENVIRONMENT'), a);
  }
  return {
    ciphertext: i,
    key: r,
  };
}
function Dh(e) {
  let t = null;
  if (e && e.path && e.path.length > 0)
    if (Array.isArray(e.path))
      for (const n of e.path) cu.existsSync(n) && (t = n.endsWith('.vault') ? n : `${n}.vault`);
    else t = e.path.endsWith('.vault') ? e.path : `${e.path}.vault`;
  else t = xs.resolve(process.cwd(), '.env.vault');
  return cu.existsSync(t) ? t : null;
}
function Ef(e) {
  return e[0] === '~' ? xs.join(e1.homedir(), e.slice(1)) : e;
}
function s1(e) {
  i1('Loading env from encrypted .env.vault');
  const t = Re._parseVault(e);
  let n = il;
  return (
    e && e.processEnv != null && (n = e.processEnv),
    Re.populate(n, t, e),
    {
      parsed: t,
    }
  );
}
function c1(e) {
  const t = xs.resolve(process.cwd(), '.env');
  let n = 'utf8';
  const r = !!(e && e.debug);
  e && e.encoding ? (n = e.encoding) : r && ri('No encoding is specified. UTF-8 is used by default');
  let l = [t];
  if (e && e.path)
    if (!Array.isArray(e.path)) l = [Ef(e.path)];
    else {
      l = [];
      for (const u of e.path) l.push(Ef(u));
    }
  let o;
  const i = {};
  for (const u of l)
    try {
      const s = Re.parse(
        cu.readFileSync(u, {
          encoding: n,
        })
      );
      Re.populate(i, s, e);
    } catch (s) {
      r && ri(`Failed to load ${u} ${s.message}`), (o = s);
    }
  let a = il;
  return (
    e && e.processEnv != null && (a = e.processEnv),
    Re.populate(a, i, e),
    o
      ? {
          parsed: i,
          error: o,
        }
      : {
          parsed: i,
        }
  );
}
function f1(e) {
  if (Nh(e).length === 0) return Re.configDotenv(e);
  const t = Dh(e);
  return t
    ? Re._configVault(e)
    : (a1(`You set DOTENV_KEY but you are missing a .env.vault file at ${t}. Did you forget to build it?`),
      Re.configDotenv(e));
}
function d1(e, t) {
  const n = Buffer.from(t.slice(-64), 'hex');
  let r = Buffer.from(e, 'base64');
  const l = r.subarray(0, 12),
    o = r.subarray(-16);
  r = r.subarray(12, -16);
  try {
    const i = t1.createDecipheriv('aes-256-gcm', n, l);
    return i.setAuthTag(o), `${i.update(r)}${i.final()}`;
  } catch (i) {
    const a = i instanceof RangeError,
      u = i.message === 'Invalid key length',
      s = i.message === 'Unsupported state or unable to authenticate data';
    if (a || u) {
      const d = new Error('INVALID_DOTENV_KEY: It must be 64 characters long (or more)');
      throw ((d.code = 'INVALID_DOTENV_KEY'), d);
    } else if (s) {
      const d = new Error('DECRYPTION_FAILED: Please check your DOTENV_KEY');
      throw ((d.code = 'DECRYPTION_FAILED'), d);
    } else throw i;
  }
}
function p1(e, t, n = {}) {
  const r = !!(n && n.debug),
    l = !!(n && n.override);
  if (typeof t != 'object') {
    const o = new Error('OBJECT_REQUIRED: Please check the processEnv argument being passed to populate');
    throw ((o.code = 'OBJECT_REQUIRED'), o);
  }
  for (const o of Object.keys(t))
    Object.prototype.hasOwnProperty.call(e, o)
      ? (l === !0 && (e[o] = t[o]),
        r &&
          ri(
            l === !0
              ? `"${o}" is already defined and WAS overwritten`
              : `"${o}" is already defined and was NOT overwritten`
          ))
      : (e[o] = t[o]);
}
const Re = {
  configDotenv: c1,
  _configVault: s1,
  _parseVault: o1,
  config: f1,
  decrypt: d1,
  parse: l1,
  populate: p1,
};
kn.exports.configDotenv = Re.configDotenv;
kn.exports._configVault = Re._configVault;
kn.exports._parseVault = Re._parseVault;
kn.exports.config = Re.config;
kn.exports.decrypt = Re.decrypt;
kn.exports.parse = Re.parse;
kn.exports.populate = Re.populate;
kn.exports = Re;
var h1 = Object.defineProperty,
  m1 = (e, t) =>
    h1(e, 'name', {
      value: t,
      configurable: !0,
    }),
  Sf = {
    Production: 'prod',
    Alpha: 'alpha',
  },
  Hn = m1(
    ({ alpha: e, production: t }) => ({
      [Sf.Alpha]: e,
      [Sf.Production]: t,
    }),
    'createRecordByEnv'
  );
/*! For license information please see index.mjs.LEGAL.txt */
function Oh(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  var r = Array.from(typeof e == 'string' ? [e] : e);
  r[r.length - 1] = r[r.length - 1].replace(/\r?\n([\t ]*)$/, '');
  var l = r.reduce(function (a, u) {
    var s = u.match(/\n([\t ]+|(?!\s).)/g);
    return s
      ? a.concat(
          s.map(function (d) {
            var c, f;
            return (f = (c = d.match(/[\t ]/g)) === null || c === void 0 ? void 0 : c.length) !== null && f !== void 0
              ? f
              : 0;
          })
        )
      : a;
  }, []);
  if (l.length) {
    var o = new RegExp(
      `
[	 ]{` +
        Math.min.apply(Math, l) +
        '}',
      'g'
    );
    r = r.map(function (a) {
      return a.replace(
        o,
        `
`
      );
    });
  }
  r[0] = r[0].replace(/^\r?\n/, '');
  var i = r[0];
  return (
    t.forEach(function (a, u) {
      var s = i.match(/(?:^|\n)( *)$/),
        d = s ? s[1] : '',
        c = a;
      typeof a == 'string' &&
        a.includes(`
`) &&
        (c = String(a)
          .split(
            `
`
          )
          .map(function (f, w) {
            return w === 0 ? f : '' + d + f;
          }).join(`
`)),
        (i += c + r[u + 1]);
    }),
    i
  );
}
const A1 = Oh`
  (() => {
    document.documentElement.dataset.carotene = "";
    var d = window.matchMedia("(prefers-color-scheme: dark)"),
      a = () => {
        document.documentElement.dataset.caroteneColorMode = d.matches
          ? "dark"
          : "light";
      };
    "addEventListener" in d
      ? d.addEventListener("change", a)
      : "addListener" in d && d.addListener(a),
      a();
  })();
`,
  z1 = Oh`
  !function(t,e,n,s,a,c,i,o,p){t.AppsFlyerSdkObject=a,t.AF=t.AF||function(){(t.AF.q=t.AF.q||[]).push([Date.now()].concat(Array.prototype.slice.call(arguments)))},t.AF.id=t.AF.id||i,t.AF.plugins={},o=e.createElement(n),p=e.getElementsByTagName(n)[0],o.async=1,o.src="https://websdk.appsflyer.com?"+(c.length>0?"st="+c.split(",").sort().join(",")+"&":"")+(i.length>0?"af_id="+i:""),p.parentNode.insertBefore(o,p)}(window,document,"script",0,"AF","banners",{banners: {key: "a5ca9e0a-c2fd-4afb-b855-f1deea3ce5d7"}});
  AF('banners', 'showBanner')
`,
  U1 = {
    ca: 'https://ca.karrotmarket.com/policy/privacy',
    us: 'https://us.karrotmarket.com/policy/privacy',
    uk: 'https://uk.karrotmarket.com/policy/privacy',
    jp: 'https://jp.karrotmarket.com/policy/privacy',
    kr: 'https://privacy.daangn.com/',
  },
  $1 = {
    GooglePlay: 'https://play.google.com/store/apps/details?id=com.towneers.www&hl=ko',
    AppStore:
      'https://apps.apple.com/kr/app/%EB%8B%B9%EA%B7%BC%EB%A7%88%EC%BC%93-%EC%A4%91%EA%B3%A0%EA%B1%B0%EB%9E%98-%ED%95%84%EC%88%98%EC%95%B1/id1018769995',
  },
  B1 = '92caf15a36e20dd7883c22230a35492c8b7ef804',
  V1 = '1463621440622064',
  H1 = 'GTM-NVJRT2M',
  W1 = {
    Mobile: {
      Feed: 'https://karrot.onelink.me/gNx7/4bed3b30?af_dp=towneers://open?from=website&deep_link_value=towneers://open?from=website',
      ArticleDetail: (e) =>
        `https://karrot.onelink.me/gNx7/bzrphfuc?af_dp=${encodeURIComponent(`karrot://articles/${e}?from=website`)}&deep_link_value=${encodeURIComponent(`karrot://articles/${e}?from=website`)}`,
    },
    Web: {
      Feed: 'https://karrot.onelink.me/gNx7/t1iccvrq?deep_link_value=towneers://open?from=website',
      ArticleDetail: (e) =>
        `https://karrot.onelink.me/gNx7/f4098dd3?deep_link_value=karrot://articles/${e}?from=website`,
    },
  },
  K1 = {
    localProfile:
      'https://dnvefa72aowie.cloudfront.net/origin/etc/202402/2d023585efe8fad401729578a2cef344929e9f8df03c2740c7c8b7b1dc90999d.png',
  },
  Y1 = 'https://cdn.sanity.io/images/ym8073e8',
  Q1 = 'https://karrotmarket-com-sanity-cdn.krrt.io',
  X1 = 400,
  J1 =
    'https://daangn.onelink.me/oWdR/1f9a32c9?af_dp=karrot://open?from=website&deep_link_value=karrot://open?from=website',
  G1 = {
    kr: '당근',
    ca: 'Karrot',
    uk: 'Karrot',
    us: 'Karrot',
    jp: 'Karrot',
  },
  b1 = 'https://dtxw8q4qct0d4.cloudfront.net';
Hn({
  alpha: 'karrot.alpha://',
  production: 'karrot://',
});
Hn({
  alpha: 'https://alpha.bizpop-client.krrt.io/',
  production: 'https://bizpop-client.krrt.io/',
});
Hn({
  alpha: 'https://community-web-apartment.alpha.kr.karrotmarket.com',
  production: 'https://community-web-apartment.kr.karrotmarket.com',
});
Hn({
  alpha: 'https://community-web-group.alpha.karrotwebview.com',
  production: 'https://community-web-group.karrotwebview.com',
});
const Z1 = 'https://6516b498149442e094c9fff2b63a8ec5@o24217.ingest.us.sentry.io/4505514179231744',
  q1 = Hn({
    alpha: 'karrot.alpha://articles/',
    production: 'karrot://articles/',
  });
Hn({
  alpha: 'https://car.alpha.karrotwebview.com',
  production: 'https://car.karrotwebview.com',
});
Hn({
  alpha:
    'karrot.alpha://minikarrot/router?remote=https%3A%2F%2Fjobs.alpha.karrotwebview.com%2Fbiz%2Fjob-post%2Fcreate%3Freferrer%3Dpermalink&navbar=false&scrollable=false',
  production:
    'karrot://minikarrot/router?remote=https%3A%2F%2Fjobs.karrotwebview.com%2Fbiz%2Fjob-post%2Fcreate%3Freferrer%3Dpermalink&navbar=false&scrollable=false',
});
const eE = '#FF6F0F';
export {
  A1 as $,
  $1 as A,
  q1 as B,
  j1 as C,
  K1 as D,
  $n as E,
  Hn as F,
  W1 as G,
  Q1 as H,
  y1 as I,
  Pi as J,
  J1 as K,
  eE as L,
  Tr as M,
  th as N,
  C1 as O,
  H1 as P,
  X1 as Q,
  hm as R,
  Y1 as S,
  U1 as T,
  G1 as U,
  B1 as V,
  V1 as W,
  nh as X,
  Sf as Y,
  O1 as Z,
  _e as _,
  _y as a,
  Mw as a0,
  Oh as a1,
  M1 as a2,
  S1 as a3,
  z1 as a4,
  Mf as a5,
  sh as a6,
  R1 as b,
  Ot as c,
  zp as d,
  b1 as e,
  T1 as f,
  xf as g,
  dw as h,
  Qt as i,
  g1 as j,
  ys as k,
  E1 as l,
  zt as m,
  w1 as n,
  k1 as o,
  P1 as p,
  N1 as q,
  g as r,
  Ew as s,
  D1 as t,
  I1 as u,
  Ph as v,
  L1 as w,
  _1 as x,
  Z1 as y,
  F1 as z,
};
//# sourceMappingURL=chunk-Ca2lm8wB.js.map
