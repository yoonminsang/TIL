// https://www.acmicpc.net/problem/1918
// TODO 코테

// 답지보고서 한참뒤에야 이해했다.
/**
 * @Date 2024.07.10
 */
{
  const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim();
  // const input = `A*(B+C)`;
  // const input = `A+B`;
  // const input = `A+B*C`;
  // const input = `A+B*C+D`;

  function solution(input) {
    const stack = [];
    let result = '';
    for (let i = 0; i < input.length; i++) {
      const v = input[i];
      if (v === '(') {
        stack.push(v);
      } else if (v === ')') {
        while (stack.length && stack.at(-1) !== '(') {
          result += stack.pop();
        }
        stack.pop();
      } else if (v === '*' || v === '/') {
        while (stack.length && (stack.at(-1) === '*' || stack.at(-1) === '/')) {
          result += stack.pop();
        }
        stack.push(v);
      } else if (v === '+' || v === '-') {
        while (stack.length && stack.at(-1) !== '(') {
          result += stack.pop();
        }
        stack.push(v);
      } else {
        result += v;
      }
    }
    while (stack.length) {
      result += stack.pop();
    }
    return result;
  }
  console.log(solution(input));
}
