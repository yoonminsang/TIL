// https://school.programmers.co.kr/learn/courses/30/lessons/42578

// 정답
function solution(clothes) {
  const obj = {};
  clothes.forEach(([value, key]) => {
    obj[key] = obj[key] ?? [];
    obj[key].push(value);
  });
  const arr = Object.values(obj);
  return (
    arr.reduce((acc, cur) => {
      return acc * (cur.length + 1);
    }, 1) - 1
  );
}

/**
 * @Date 2023.07.28
 */
function solution(clothes) {
  const obj = {};
  clothes.forEach(([value, key]) => {
    obj[key] = obj[key] ?? [];
    obj[key].push(value);
  });
  const arr = Object.values(obj);
  return (
    arr.reduce((acc, cur) => {
      return acc * (cur.length + 1);
    }, 1) - 1
  );
}
