// https://www.acmicpc.net/problem/6603

/**
 * @Date 2024.06.27
 */
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  // const input = `7 1 2 3 4 5 6 7
  // 8 1 2 3 5 8 13 21 34
  // 0`;
  const inputArr = input.trim().split('\n').slice(0, -1);
  /** 로또 뽑는 개수 */
  const COUNT = 6;
  inputArr.forEach((input, index) => {
    const [k, ...S] = input.split(' ').map(Number);
    const combinations = getCombinations(S, COUNT);
    combinations.forEach((combination) => {
      console.log(combination.join(' '));
    });
    const lastIndex = inputArr.length - 1 === index;
    if (!lastIndex) {
      console.log('');
    }
  });

  function getCombinations(arr, selectNumber) {
    if (selectNumber === 1) {
      return arr.map((v) => [v]);
    }
    const result = [];
    arr.forEach((fixed, index) => {
      const rest = arr.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      result.push(...combinations.map((combination) => [fixed, ...combination]));
    });
    return result;
  }
}
