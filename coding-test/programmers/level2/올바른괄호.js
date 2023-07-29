// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 풀 가치가 없는 문제

// 정답
function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count += 1;
    } else {
      count -= 1;
    }
    if (count < 0) return false;
  }
  return count === 0;
}

/**
 * @Date 2023.07.28
 */
{
  function solution(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
        count += 1;
      } else {
        count -= 1;
      }
      if (count < 0) return false;
    }
    return count === 0;
  }
}
