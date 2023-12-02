// https://school.programmers.co.kr/learn/courses/30/lessons/43238

// 이분탐색

// 정답
function solution(n, times) {
  const maxTime = Math.max(...times);
  let left = 0;
  let right = maxTime * n;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = times.reduce((acc, time) => {
      const count = Math.floor(mid / time);
      return acc + count;
    }, 0);
    if (count >= n) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
}

/**
 * @Date 2023.12.02
 */
{
  function solution(n, times) {
    const maxTime = Math.max(...times);
    let left = 0;
    let right = maxTime * n;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const count = times.reduce((acc, time) => {
        const count = Math.floor(mid / time);
        return acc + count;
      }, 0);
      if (count >= n) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}
