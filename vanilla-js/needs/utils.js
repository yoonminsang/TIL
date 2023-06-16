import { useStorage } from '../core/storage.js';

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

// 변경해서 사용
export const DEFAULT_URL = {
  web: {
    toString: () => '/',
    signup: {
      toString: () => '/signup',
    },
  },
};

// 변경해서 사용
export const usePersonalInfoStorage = () => useStorage('personalInfo');
export const useCardStatusStorage = () => useStorage('cardStatus');
