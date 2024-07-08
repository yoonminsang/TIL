// https://www.acmicpc.net/problem/10799

/**
 * @Date 2024.04.02
 */
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim();
  // const input = '()(((()())(())()))(())'; // 17
  // const input = '(((()(()()))(())()))(()())'; // 24

  const stack = [];
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '(') {
      stack.push('(');
    } else {
      stack.pop();
      if (input[i - 1] === '(') {
        count += stack.length;
      } else {
        count += 1;
      }
    }
  }
  console.log(count);
}

/**
 * @Date 2024.07.09
 */
{
  const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim();
  const input = `(((()(()()))(())()))(()())`;

  const OPEN = '(';

  function solution(input) {
    let count = 0;
    const stack = [];
    for (let i = 0; i < input.length; i++) {
      if (input[i] === OPEN) {
        stack.push(OPEN);
      } else {
        // ()
        if (input[i - 1] === OPEN) {
          count += stack.length - 1;
        }
        // ))
        else {
          count += 1;
        }
        stack.pop();
      }
    }
    return count;
  }
  console.log(solution(input));
}
