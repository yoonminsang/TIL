export const debounce = (callback, delay) => {
  let timerId;
  return () => {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(callback, delay);
  };
};

export const throttle = (callback, delay) => {
  let timerId;
  return () => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback();
      timerId = null;
    }, delay);
  };
};

export const DEFAULT_URL = {
  web: {
    toString: () => '/web/',
    signup: {
      toString: () => '/web/signup',
    },
  },
};
