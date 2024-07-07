// https://www.acmicpc.net/problem/1654

/**
 * @Date 2024.07.07
 */
{
  const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  const input = `4 11
802
743
457
539`;
  const [oneLine, ...otherLines] = input.trim().split('\n');
  const [K, N] = oneLine.split(' ').map(Number);
  const array = otherLines.map(Number);

  function solution(K, N, array) {
    let left = 0;
    let right = Math.max(...array);
    let answer = 0;

    while (left <= right) {
      const center = Math.floor((left + right) / 2);
      const count = array.reduce((acc, cur) => {
        return acc + Math.floor(cur / center);
      }, 0);
      if (count >= N) {
        left = center + 1;
        answer = center;
      } else {
        right = center - 1;
      }
    }
    return answer;
  }
  console.log(solution(K, N, array));
}
