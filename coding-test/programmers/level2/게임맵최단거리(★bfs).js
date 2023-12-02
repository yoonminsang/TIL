// https://school.programmers.co.kr/learn/courses/30/lessons/1844

// ★ bfs 문제 감잡기 좋음

// 정답
function solution(maps) {
  const [MAX_Y, MAX_X] = [maps.length - 1, maps[0].length - 1];

  // [y좌표, x좌표, 지나간 칸] (일반적인 수학 좌표계와 다름. 로봇의 처음 위치가 0,0)
  const queue = [{ y: 0, x: 0, passedCount: 1 }];
  // v가 0이라면 방문할 수 없기 때문에 방문했다고 가정.
  const visited = maps.map((map) => {
    return map.map((v) => {
      return v ? false : true;
    });
  });

  while (queue.length) {
    const { y, x, passedCount } = queue.shift();

    // 성공
    if (y === MAX_Y && x === MAX_X) return passedCount;

    // 상하좌우 이동가능한지 확인하고 이동
    if (canMove(y + 1, x)) move(y + 1, x, passedCount + 1);
    if (canMove(y - 1, x)) move(y - 1, x, passedCount + 1);
    if (canMove(y, x - 1)) move(y, x - 1, passedCount + 1);
    if (canMove(y, x + 1)) move(y, x + 1, passedCount + 1);
  }

  // 실패
  return -1;

  // bfs
  function move(nextY, nextX, nextPassedCount) {
    visited[nextY][nextX] = true;
    queue.push({ y: nextY, x: nextX, passedCount: nextPassedCount });
  }
  function canMove(nextY, nextX) {
    const canMoveY = nextY >= 0 && nextY <= MAX_Y;
    const canMoveX = nextX >= 0 && nextX <= MAX_X;
    return canMoveY && canMoveX && !visited[nextY][nextX];
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

/**
 * @Date 2023.11. 13
 */
function solution(maps) {
  const [MAX_Y, MAX_X] = [maps.length - 1, maps[0].length - 1];

  // [y좌표, x좌표, 지나간 칸] (일반적인 수학 좌표계와 다름. 로봇의 처음 위치가 0,0)
  const queue = [{ y: 0, x: 0, passedCount: 1 }];
  // v가 0이라면 방문할 수 없기 때문에 방문했다고 가정.
  const visited = maps.map((map) => {
    return map.map((v) => {
      return v ? false : true;
    });
  });

  while (queue.length) {
    const { y, x, passedCount } = queue.shift();

    // 성공
    if (y === MAX_Y && x === MAX_X) return passedCount;

    // 상하좌우 이동가능한지 확인하고 이동
    if (canMove(y + 1, x)) move(y + 1, x, passedCount + 1);
    if (canMove(y - 1, x)) move(y - 1, x, passedCount + 1);
    if (canMove(y, x - 1)) move(y, x - 1, passedCount + 1);
    if (canMove(y, x + 1)) move(y, x + 1, passedCount + 1);
  }

  // 실패
  return -1;

  // bfs
  function move(nextY, nextX, nextPassedCount) {
    visited[nextY][nextX] = true;
    queue.push({ y: nextY, x: nextX, passedCount: nextPassedCount });
  }
  function canMove(nextY, nextX) {
    const canMoveY = nextY >= 0 && nextY <= MAX_Y;
    const canMoveX = nextX >= 0 && nextX <= MAX_X;
    return canMoveY && canMoveX && !visited[nextY][nextX];
  }
}
