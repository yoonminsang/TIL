// https://www.acmicpc.net/problem/2504

// 생각보다 푸는데 좀 힘들었다.
/**
 * @Date 2024.07.10
 */
{
  const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString().trim();
  const input = `(()[[]])([])`;
  // const input2 = `[][]((])`;

  function solution(input) {
    if (!validation(input)) {
      return 0;
    }

    const allStack = [];
    for (let i = 0; i < input.length; i++) {
      const v = input[i];
      if (v === '(' || v == '[') {
        allStack.push(v);
      } else if (v == ')') {
        const isBeforeBracket = allStack.at(-1) === '(';
        if (isBeforeBracket) {
          allStack.pop();
          allStack.push(2);
        } else {
          let num = 0;
          while (typeof allStack.at(-1) === 'number') {
            num += allStack.pop();
          }
          allStack.pop();
          allStack.push(num * 2);
        }
      } else if (v == ']') {
        const isBeforeBracket = allStack.at(-1) === '[';
        if (isBeforeBracket) {
          allStack.pop();
          allStack.push(3);
        } else {
          let num = 0;
          while (typeof allStack.at(-1) === 'number') {
            num += allStack.pop();
          }
          allStack.pop();
          allStack.push(num * 3);
        }
      }
    }
    return allStack.reduce((acc, cur) => acc + cur, 0);
  }

  function validation(input) {
    const stack = [];
    for (let i = 0; i < input.length; i++) {
      const v = input[i];
      if (v === '(' || v === '[') {
        stack.push(v);
      } else if (v === ')') {
        if (stack.at(-1) === '(') {
          stack.pop();
        } else {
          return false;
        }
      } else if (v === ']') {
        if (stack.at(-1) === '[') {
          stack.pop();
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }

  console.log(solution(input));
}
