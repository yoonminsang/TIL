// https://school.programmers.co.kr/learn/courses/30/lessons/181188

// 정답
function solution(targets) {
  let answer = 0;
  let prev = -Infinity;
  targets.sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < targets.length; i++) {
    const start = targets[i][0];
    const end = targets[i][1] - 0.5;
    if (prev < start) {
      prev = end - 0.5;
      answer++;
    }
  }
  return answer;
}

/**
 * @Date 2023.07.28
 */

{
  function solution(targets) {
    let answer = 0;
    let prev = -Infinity;
    targets.sort((a, b) => a[1] - b[1]);
    for (let i = 0; i < targets.length; i++) {
      const start = targets[i][0];
      const end = targets[i][1] - 0.5;
      if (prev < start) {
        prev = end - 0.5;
        answer++;
      }
    }
    return answer;
  }
}
