// https://www.acmicpc.net/problem/7569

// 힘들게 품..
/**
 * @Date 2025.01.08
 */
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  // const input = `5 3 1
  // 0 -1 0 0 0
  // -1 -1 0 1 1
  // 0 0 0 1 1`;
  const input = `5 3 2
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 0 0 0
0 0 1 0 0
0 0 0 0 0`;
  const [oneLine, ...otherLines] = input.split('\n');
  const [M, N, H] = oneLine.split(' ').map(Number);
  const list = [];
  for (let h = 0; h < H; h++) {
    const xyPointList = otherLines.slice(h * N, h * N + N).map((line) => line.split(' ').map(Number));
    list.push(xyPointList);
  }

  const directions = [
    [-1, 0, 0],
    [1, 0, 0],
    [0, -1, 0],
    [0, 1, 0],
    [0, 0, -1],
    [0, 0, 1],
  ];

  // 정수 1은 익은 토마토, 정수 0 은 익지 않은 토마토, 정수 -1은 토마토가 들어있지 않은 칸
  function solution(M, N, H, _list) {
    const list = _list.map((xyPointList) => xyPointList.map((pointList) => pointList.map((v) => v)));
    if (is모두익음(list)) {
      return 0;
    }
    const queue = [find익은토마토좌표목록(list)];
    let result = 0;

    while (queue.length > 0) {
      const pointList = queue.pop();
      const nextPoint = [];
      pointList.forEach(([z, y, x]) => {
        for (const [dz, dy, dx] of directions) {
          const nz = z + dz;
          const ny = y + dy;
          const nx = x + dx;
          if (nx < 0 || ny < 0 || nz < 0 || nx >= M || ny >= N || nz >= H) continue; // 좌표를 넘어간 경우
          if (list[nz][ny][nx] === 1 || list[nz][ny][nx] === -1) continue; // 토마토가 익었거나 존재하지 않는 경우
          list[nz][ny][nx] = 1;
          nextPoint.push([nz, ny, nx]);
        }
      });

      if (nextPoint.length > 0) {
        result += 1;
        queue.push(nextPoint);
      }
    }

    if (is모두익음(list)) {
      return result;
    } else {
      return -1;
    }
  }

  function find익은토마토좌표목록(list) {
    const result = [];
    list.forEach((xyPointList, z) =>
      xyPointList.forEach((pointList, y) => {
        pointList.forEach((v, x) => {
          if (v === 1) {
            result.push([z, y, x]);
          }
        });
      }),
    );
    return result;
  }

  function is모두익음(list) {
    return list.every((xyPointList) => xyPointList.every((pointList) => pointList.every((v) => v !== 0)));
  }

  console.log(solution(M, N, H, list));
}
