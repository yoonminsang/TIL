// https://school.programmers.co.kr/learn/courses/30/lessons/155652

// 정답
function solution(s, skip, index) {
  const alpabet = 'abcdefghijklmnopqrstuvwxyz';
  const obj = alpabet.split('').reduce((acc, cur) => {
    acc[cur] = true;
    return acc;
  }, {});
  for (const v of skip) {
    delete obj[v];
  }
  const skipAlpabetArr = Object.keys(obj);

  return s
    .split('')
    .map((v) => {
      const currentIndex = skipAlpabetArr.findIndex((skipAlpabet) => skipAlpabet === v);
      const realIndex = (currentIndex + index) % skipAlpabetArr.length;
      return skipAlpabetArr[realIndex];
    })
    .join('');
}

/**
 * @Date 2023.11.28
 */

// 8분 걸림
{
  function solution(s, skip, index) {
    const alpabet = 'abcdefghijklmnopqrstuvwxyz';
    const obj = alpabet.split('').reduce((acc, cur) => {
      acc[cur] = true;
      return acc;
    }, {});
    for (const v of skip) {
      delete obj[v];
    }
    const skipAlpabetArr = Object.keys(obj);

    return s
      .split('')
      .map((v) => {
        const currentIndex = skipAlpabetArr.findIndex((skipAlpabet) => skipAlpabet === v);
        const realIndex = (currentIndex + index) % skipAlpabetArr.length;
        return skipAlpabetArr[realIndex];
      })
      .join('');
  }
}
