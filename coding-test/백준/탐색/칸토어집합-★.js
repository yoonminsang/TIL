// https://www.acmicpc.net/problem/4779

/**
 * @Date 2024.07.02
 */
// 정답은 맞췄는데 좀 복잡하게 풀었다.
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  const input = `0
1
3
2`;

  input
    .trim()
    .split('\n')
    .map(Number)
    .forEach((N) => {
      const result = recursive(Array(3 ** N).fill('-'));
      console.log(result.join(''));
    });

  function recursive(arr) {
    if (isAllLineLengthOne(arr)) {
      return arr;
    }
    const divideLength = arr.length / 3;
    const one = arr.slice(0, divideLength);
    const three = arr.slice(divideLength * 2);
    for (let i = divideLength; i < divideLength * 2; i++) {
      arr[i] = ' ';
    }
    if (!isAllLineLengthOne(one)) {
      const oneArr = recursive(one);
      for (let i = 0; i < divideLength; i++) {
        arr[i] = oneArr[i];
      }
    }
    if (!isAllLineLengthOne(three)) {
      const threeArr = recursive(three);
      for (let i = divideLength * 2; i < divideLength * 3; i++) {
        arr[i] = threeArr[i - divideLength * 2];
      }
    }
    return arr;
  }

  function isAllLineLengthOne(arr) {
    if (arr.length <= 1) {
      return true;
    }
    let prev = arr[0];
    for (let i = 1; i < arr.length; i++) {
      const next = arr[i];
      if (prev === '-' && next === '-') {
        return false;
      }
      prev = next;
    }
    return true;
  }
}

/**
 * @Date 2024.07.02
 */
// gpt한테 리팩토링해달라했는데 그냥 더 좋은 코드를 알려줘버렸다.. 분할정복 연습하긴 괜찮은듯. 다시 풀어보자
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  const input = `0
1
3
2`;

  input
    .trim()
    .split('\n')
    .map(Number)
    .forEach((N) => {
      console.log(generateCantorSet(N));
    });

  function generateCantorSet(N) {
    if (N === 0) {
      return '-';
    }
    const prev = generateCantorSet(N - 1);
    const center = ' '.repeat(prev.length);
    return prev + center + prev;
  }
}

/**
 * @Date 2025.01.09
 */
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  const input = `0
1
3
2`;
  const list = input.trim().split('\n').map(Number);

  function solution(list) {
    return list.map((n) => getCantor(n)).join('\n');
  }

  const DASH = '-';
  const GAP = ' ';
  function getCantor(N) {
    if (N === 0) return DASH;
    const temp = getCantor(N - 1);
    return temp + GAP.repeat(temp.length) + temp;
  }

  console.log(solution(list));
}
