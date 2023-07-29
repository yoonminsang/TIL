// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// ★ bfs 문제 감잡기 좋음

// 정답
function solution(maps) {
  const queue = [{ y: 0, x: 0, passedMapCount: 1 }]; // [y좌표, x좌표, 지나간 칸 수]
  const visited = maps.map((mapY) => mapY.map((v) => (v === 0 ? true : false)));
  while (queue.length) {
    const dequeue = queue.shift();

    // 성공
    if (dequeue.y === maps.length - 1 && dequeue.x === maps[0].length - 1) {
      return dequeue.passedMapCount;
    }

    // 상하좌우 bfs
    addQueueWhenCondition(dequeue.y - 1, dequeue.x, dequeue.passedMapCount); // 상
    addQueueWhenCondition(dequeue.y + 1, dequeue.x, dequeue.passedMapCount); // 하
    addQueueWhenCondition(dequeue.y, dequeue.x - 1, dequeue.passedMapCount); // 좌
    addQueueWhenCondition(dequeue.y, dequeue.x + 1, dequeue.passedMapCount); // 우
  }
  return -1;
  function addQueueWhenCondition(nextY, nextX, passedMapCount) {
    if (
      nextY >= 0 &&
      nextY < maps.length &&
      nextX >= 0 &&
      nextX < maps[0].length &&
      maps[nextY][nextX] === 1 &&
      !visited[nextY][nextX]
    ) {
      queue.push({ y: nextY, x: nextX, passedMapCount: passedMapCount + 1 });
      visited[nextY][nextX] = true;
    }
  }
}

/**
 * @Date 2023.07.30
 */
{
  function solution(maps) {
    const queue = [{ y: 0, x: 0, passedMapCount: 1 }]; // [y좌표, x좌표, 지나간 칸 수]
    const visited = maps.map((mapY) => mapY.map((v) => (v === 0 ? true : false)));
    while (queue.length) {
      const dequeue = queue.shift();

      // 성공
      if (dequeue.y === maps.length - 1 && dequeue.x === maps[0].length - 1) {
        return dequeue.passedMapCount;
      }

      // 상하좌우 bfs
      addQueueWhenCondition(dequeue.y - 1, dequeue.x, dequeue.passedMapCount); // 상
      addQueueWhenCondition(dequeue.y + 1, dequeue.x, dequeue.passedMapCount); // 하
      addQueueWhenCondition(dequeue.y, dequeue.x - 1, dequeue.passedMapCount); // 좌
      addQueueWhenCondition(dequeue.y, dequeue.x + 1, dequeue.passedMapCount); // 우
    }
    return -1;
    function addQueueWhenCondition(nextY, nextX, passedMapCount) {
      if (
        nextY >= 0 &&
        nextY < maps.length &&
        nextX >= 0 &&
        nextX < maps[0].length &&
        maps[nextY][nextX] === 1 &&
        !visited[nextY][nextX]
      ) {
        queue.push({ y: nextY, x: nextX, passedMapCount: passedMapCount + 1 });
        visited[nextY][nextX] = true;
      }
    }
  }
}
