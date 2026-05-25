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

/**
 * @Date 2026.05.15
 * 개선 버전: 중복 분기 제거 + validation 통합 (한 번의 순회)
 */
{
  const input = `(()[[]])([])`;

  const PAIR = {
    ')': { open: '(', mul: 2 },
    ']': { open: '[', mul: 3 },
  };

  function solution(input) {
    const stack = [];
    for (const v of input) {
      if (v === '(' || v === '[') {
        stack.push(v);
        continue;
      }

      const { open, mul } = PAIR[v];
      let num = 0;
      while (typeof stack.at(-1) === 'number') {
        num += stack.pop();
      }
      if (stack.pop() !== open) return 0;
      stack.push((num || 1) * mul);
    }

    return stack.every((x) => typeof x === 'number')
      ? stack.reduce((acc, cur) => acc + cur, 0)
      : 0;
  }

  console.log(solution(input));
}

// https://www.hackerrank.com/challenges/balanced-brackets/problem
/**
 * @Date 2026.05.15
 * 세 종류 괄호 ((), {}, []) 의 균형 검사.
 * 여는 괄호는 push, 닫는 괄호는 top이 매칭되는 여는 괄호인지 확인.
 */
{
  const input = `3
{[()]}
{[(])}
{{[[(())]]}}`;

  const PAIR = { ')': '(', '}': '{', ']': '[' };

  function isBalanced(s) {
    const stack = [];
    for (const v of s) {
      if (v === '(' || v === '{' || v === '[') {
        stack.push(v);
      } else {
        if (stack.pop() !== PAIR[v]) return 'NO';
      }
    }
    return stack.length === 0 ? 'YES' : 'NO';
  }

  function solution(input) {
    const [, ...lines] = input.split('\n');
    return lines.map(isBalanced).join('\n');
  }

  console.log(solution(input));
}
