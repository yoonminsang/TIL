// https://www.acmicpc.net/problem/10819

/**
 * @Date 2024.07.01
 */
// 실패. 8!(40320) * 8 = 322560. 시간복잡도는 남음. 근데 왜 런타임에러가 나지??
// 메모리 제한 때문인가??
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  //   const input = `6
  // 20 1 15 8 4 10`;
  const [oneLine, twoLine] = input.trim().split('\n');
  const N = Number(oneLine);
  const arr = twoLine.split(' ').map(Number);

  const permutations = getPermutations(arr, N);

  function absDiffInArr(arr) {
    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);
      result += diff;
    }
    return result;
  }

  const max = permutations.reduce((acc, cur) => {
    const diff = absDiffInArr(cur);
    if (diff > acc) {
      return diff;
    }
    return acc;
  }, 0);
  console.log(max);

  function getPermutations(arr, selectNumber) {
    if (selectNumber === 1) {
      return arr.map((v) => [v]);
    }
    const result = [];
    arr.forEach((fixed, index) => {
      const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      result.push(...permutations.map((permutation) => [fixed, ...permutation]));
    });
    return result;
  }
}

/**
 * @Date 2024.07.01
 */
// 성공. 백트래킹으로 품.
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  //   const input = `6
  // 20 1 15 8 4 10`;
  const [oneLine, twoLine] = input.trim().split('\n');
  const N = Number(oneLine);
  const inputArr = twoLine.split(' ').map(Number);

  const visitList = Array(N).fill(false);
  const arrForDfs = [];
  let max = 0;

  function absDiffInArr(arr) {
    let result = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      const diff = Math.abs(arr[i] - arr[i + 1]);
      result += diff;
    }
    return result;
  }

  function dfs(depth) {
    if (depth === N) {
      max = Math.max(max, absDiffInArr(arrForDfs));
      return;
    }
    for (let i = 0; i < N; i++) {
      if (visitList[i]) {
        continue;
      }
      visitList[i] = true;
      arrForDfs.push(inputArr[i]);
      dfs(depth + 1);
      visitList[i] = false;
      arrForDfs.pop();
    }
  }
  dfs(0);
  console.log(max);
}
