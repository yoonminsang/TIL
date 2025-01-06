// https://www.acmicpc.net/problem/1743

// 정답
const fs = require('fs');
const input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.split(' ').map(Number));

const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

function solution() {
  const [N, M, K] = input[0];
  const coordinates = input.slice(1);

  // [세로 가로 coordinates 개수]
  // const [N, M, K] = [3, 4, 5];
  // const coordinates = [
  //   [3, 2],
  //   [2, 2],
  //   [3, 1],
  //   [2, 3],
  //   [1, 1],
  // ];

  const arr = [...Array(N)].map(() => Array(M).fill(false));
  coordinates.forEach(([y, x]) => {
    arr[y - 1][x - 1] = true;
  });

  const visited = Array(N)
    .fill(null)
    .map(() =>
      Array(M)
        .fill(null)
        .map(() => false),
    );

  let max = 0;

  let count = 1;
  for (let y = 0; y < arr.length; y++) {
    for (let x = 0; x < arr[0].length; x++) {
      if (arr[y][x]) {
        dfs(y, x);
        max = Math.max(count, max);
        count = 1;
      }
    }
  }

  return max;

  function dfs(y, x) {
    for (let i = 0; i < 4; i++) {
      visited[y][x] = true;
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
      if (!arr[ny][nx]) continue;
      if (visited[ny][nx]) continue;
      count += 1;
      dfs(ny, nx);
    }
  }
}

console.log(solution());

/**
 * @Date 2024.04.22
 */

{
  const fs = require('fs');
  const input = fs
    .readFileSync('/dev/stdin')
    .toString()
    .trim()
    .split('\n')
    .map((v) => v.split(' ').map(Number));

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function solution() {
    const [N, M, K] = input[0];
    const coordinates = input.slice(1);

    // [세로 가로 coordinates 개수]
    // const [N, M, K] = [3, 4, 5];
    // const coordinates = [
    //   [3, 2],
    //   [2, 2],
    //   [3, 1],
    //   [2, 3],
    //   [1, 1],
    // ];

    const arr = [...Array(N)].map(() => Array(M).fill(false));
    coordinates.forEach(([y, x]) => {
      arr[y - 1][x - 1] = true;
    });

    const visited = Array(N)
      .fill(null)
      .map(() =>
        Array(M)
          .fill(null)
          .map(() => false),
      );

    let max = 0;

    let count = 1;
    for (let y = 0; y < arr.length; y++) {
      for (let x = 0; x < arr[0].length; x++) {
        if (arr[y][x]) {
          dfs(y, x);
          max = Math.max(count, max);
          count = 1;
        }
      }
    }

    return max;

    function dfs(y, x) {
      for (let i = 0; i < 4; i++) {
        visited[y][x] = true;
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
        if (!arr[ny][nx]) continue;
        if (visited[ny][nx]) continue;
        count += 1;
        dfs(ny, nx);
      }
    }
  }

  console.log(solution());
}
