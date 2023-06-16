const setLocalStorage = (key, data) => {
  const stringifyData = JSON.stringify(data);
  localStorage.setItem(key, stringifyData);
};

const getLocalStorage = (key) => {
  const item = localStorage.getItem(key);
  return JSON.parse(item);
};

/** * 주의점: observer 패턴을 적용하지 않아서 동기화되지 않음. */
export const useStorage = (key) => {
  return [
    getLocalStorage(key),
    (data) => {
      setLocalStorage(key, data);
    },
  ];
};

/** examples
export const usePersonalInfoStorage = () => useStorage('personalInfo');
export const useCardStatusStorage = () => useStorage('cardStatus');
*/
