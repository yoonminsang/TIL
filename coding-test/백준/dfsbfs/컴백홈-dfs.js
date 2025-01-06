// https://www.acmicpc.net/problem/1987

/**
 * @Date 2025.01.06
 */
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  const input = `3 4 6
....
.T..
....`;
  const [oneLine, ...otherLines] = input.split('\n');
  const [R, C, K] = oneLine.split(' ').map(Number);
  const list = otherLines.map((v) => v.split(''));

  const T = 'T';

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function solution(R, C, K, list) {
    let result = 0;
    const startPoint = [R - 1, 0];
    const endPoint = [0, C - 1];
    const visited = Array(R)
      .fill(null)
      .map(() =>
        Array(C)
          .fill(null)
          .map(() => false),
      );

    dfs(startPoint[0], startPoint[1], 1);
    return result;

    function dfs(y, x, count) {
      if (y === endPoint[0] && x === endPoint[1]) {
        if (count === K) result += 1;
        return;
      }

      visited[y][x] = true;

      for (let i = 0; i < 4; i++) {
        const ny = y + dy[i];
        const nx = x + dx[i];
        if (nx < 0 || ny < 0 || nx >= C || ny >= R) continue;
        if (list[ny][nx] === T) continue;
        if (visited[ny][nx]) continue;
        dfs(ny, nx, count + 1);
      }

      visited[y][x] = false;
    }
  }

  console.log(solution(R, C, K, list));
}
