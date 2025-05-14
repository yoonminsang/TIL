// https://school.programmers.co.kr/learn/courses/30/lessons/250134

// bfs로 푸는게 좀 빡셌다.
// dfs가 훨씬 쉬움

/**
 * @Date 2025.05.14
 */
// bfs 성공
{
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  // 수레는 벽이나 격자 판 밖으로 움직일 수 없습니다.
  // 수레는 자신이 방문했던 칸으로 움직일 수 없습니다.
  // 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
  // 동시에 두 수레를 같은 칸으로 움직일 수 없습니다.
  // 수레끼리 자리를 바꾸며 움직일 수 없습니다.

  // maze[i][j]	의미
  // 0	빈칸
  // 1	빨간 수레의 시작 칸
  // 2	파란 수레의 시작 칸
  // 3	빨간 수레의 도착 칸
  // 4	파란 수레의 도착 칸
  // 5	벽
  const MAZE_VALUE = {
    empty: 0,
    redStart: 1,
    blueStart: 2,
    redEnd: 3,
    blueEnd: 4,
    wall: 5,
  };

  function generateVisitedKey(redY, redX, blueY, blueX, isRedCompleted, isBlueCompleted) {
    return `${redY},${redX},${blueY},${blueX},${isRedCompleted},${isBlueCompleted}`;
  }

  function generateColorVisitedKey(y, x) {
    return `${y},${x}`;
  }

  // dfs+백트래킹, bfs 모두 가능함.
  // 일단 bfs로 풀기

  function solution(maze) {
    const colLength = maze.length;
    const rowLength = maze[0].length;

    let redStart;
    let blueStart;
    maze.forEach((mazeCol, y) => {
      mazeCol.forEach((v, x) => {
        if (v === MAZE_VALUE.redStart) {
          redStart = [y, x];
        } else if (v === MAZE_VALUE.blueStart) {
          blueStart = [y, x];
        }
      });
    });
    if (!redStart || !blueStart) {
      throw new Error('start, end 변수 할당 실패');
    }

    // [redY,redX,blueY,blueX,isRedCompleted,isBlueCompleted]
    const visited = {};
    visited[generateVisitedKey(redStart[0], redStart[1], blueStart[0], blueStart[1], false, false)] = true;

    const queue = [];
    queue.push({
      redY: redStart[0],
      redX: redStart[1],
      blueY: blueStart[0],
      blueX: blueStart[1],
      count: 0,
      redVisited: { [generateColorVisitedKey(redStart[0], redStart[1])]: true },
      blueVisited: { [generateColorVisitedKey(blueStart[0], blueStart[1])]: true },
      isRedCompleted: false,
      isBlueCompleted: false,
    });

    while (queue.length > 0) {
      const { redY, redX, blueY, blueX, count, redVisited, blueVisited, isRedCompleted, isBlueCompleted } =
        queue.shift();

      if (isRedCompleted && isBlueCompleted) {
        return count;
      }

      for (let i = 0; i < 4; i++) {
        // 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
        const nextRedY = isRedCompleted ? redY : redY + dy[i];
        const nextRedX = isRedCompleted ? redX : redX + dx[i];
        let nextIsRedCompleted = isRedCompleted;
        // 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
        if (!isRedCompleted) {
          // 수레는 벽이나 격자 판 밖으로 움직일 수 없습니다.
          if (nextRedX < 0 || nextRedY < 0 || nextRedX >= rowLength || nextRedY >= colLength) {
            continue;
          }
          if (maze[nextRedY][nextRedX] === MAZE_VALUE.wall) {
            continue;
          }
          // 수레는 자신이 방문했던 칸으로 움직일 수 없습니다.
          if (redVisited[`${nextRedY},${nextRedX}`]) {
            continue;
          }
          // 도착
          if (maze[nextRedY][nextRedX] === MAZE_VALUE.redEnd) {
            nextIsRedCompleted = true;
          }
        }
        for (let j = 0; j < 4; j++) {
          // 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
          const nextBlueY = isBlueCompleted ? blueY : blueY + dy[j];
          const nextBlueX = isBlueCompleted ? blueX : blueX + dx[j];
          let nextIsBlueCompleted = isBlueCompleted;
          // 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
          if (!isBlueCompleted) {
            // 수레는 벽이나 격자 판 밖으로 움직일 수 없습니다.
            if (nextBlueX < 0 || nextBlueY < 0 || nextBlueX >= rowLength || nextBlueY >= colLength) {
              continue;
            }
            if (maze[nextBlueY][nextBlueX] === MAZE_VALUE.wall) {
              continue;
            }
            // 수레는 자신이 방문했던 칸으로 움직일 수 없습니다.
            if (blueVisited[`${nextBlueY},${nextBlueX}`]) {
              continue;
            }
            // 도착
            if (maze[nextBlueY][nextBlueX] === MAZE_VALUE.blueEnd) {
              nextIsBlueCompleted = true;
            }
          }

          // 동시에 두 수레를 같은 칸으로 움직일 수 없습니다.
          if (nextRedY === nextBlueY && nextRedX === nextBlueX) {
            continue;
          }
          // 수레끼리 자리를 바꾸며 움직일 수 없습니다.
          if (nextRedY === blueY && nextRedX === blueX && nextBlueY === redY && nextBlueX === redX) {
            continue;
          }

          const newVisitedKey = generateVisitedKey(
            nextRedY,
            nextRedX,
            nextBlueY,
            nextBlueX,
            nextIsRedCompleted,
            nextIsBlueCompleted,
          );
          if (visited[newVisitedKey]) {
            continue;
          }
          visited[newVisitedKey] = true;

          const nextRedVisited = { ...redVisited };
          nextRedVisited[generateColorVisitedKey(nextRedY, nextRedX)] = true;
          const nextBlueVisited = { ...blueVisited };
          nextBlueVisited[generateColorVisitedKey(nextBlueY, nextBlueX)] = true;

          queue.push({
            redY: nextRedY,
            redX: nextRedX,
            blueY: nextBlueY,
            blueX: nextBlueX,
            count: count + 1,
            redVisited: nextRedVisited,
            blueVisited: nextBlueVisited,
            isRedCompleted: nextIsRedCompleted,
            isBlueCompleted: nextIsBlueCompleted,
          });
        }
      }
    }

    return 0;
  }
}

// dfs + 백트래킹
{
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  // 수레는 벽이나 격자 판 밖으로 움직일 수 없습니다.
  // 수레는 자신이 방문했던 칸으로 움직일 수 없습니다.
  // 자신의 도착 칸에 위치한 수레는 움직이지 않습니다. 계속 해당 칸에 고정해 놓아야 합니다.
  // 동시에 두 수레를 같은 칸으로 움직일 수 없습니다.
  // 수레끼리 자리를 바꾸며 움직일 수 없습니다.

  // maze[i][j]	의미
  // 0	빈칸
  // 1	빨간 수레의 시작 칸
  // 2	파란 수레의 시작 칸
  // 3	빨간 수레의 도착 칸
  // 4	파란 수레의 도착 칸
  // 5	벽
  const MAZE_VALUE = {
    empty: 0,
    redStart: 1,
    blueStart: 2,
    redEnd: 3,
    blueEnd: 4,
    wall: 5,
  };

  function solution(maze) {
    const colLength = maze.length;
    const rowLength = maze[0].length;

    const { redStart, blueStart } = getInitialPosition();

    const redVisited = Array(colLength)
      .fill(null)
      .map(() => Array(rowLength).fill(false));
    const blueVisited = Array(colLength)
      .fill(null)
      .map(() => Array(rowLength).fill(false));

    const countSet = new Set();

    redVisited[redStart[0]][redStart[1]] = true;
    blueVisited[blueStart[0]][blueStart[1]] = true;
    dfs(redStart[0], redStart[1], blueStart[0], blueStart[1], 0);

    if (countSet.size > 0) {
      return Math.min(...countSet);
    } else {
      return 0;
    }

    function getInitialPosition() {
      let redStart;
      let blueStart;
      maze.forEach((mazeCol, y) => {
        mazeCol.forEach((v, x) => {
          if (v === MAZE_VALUE.redStart) {
            redStart = [y, x];
          } else if (v === MAZE_VALUE.blueStart) {
            blueStart = [y, x];
          }
        });
      });
      if (!redStart || !blueStart) {
        throw new Error('start, end 변수 할당 실패');
      }
      return { redStart, blueStart };
    }

    function dfs(redY, redX, blueY, blueX, count) {
      if (maze[redY][redX] === MAZE_VALUE.redEnd && maze[blueY][blueX] === MAZE_VALUE.blueEnd) {
        countSet.add(count);
        return count;
      }

      for (let i = 0; i < 4; i++) {
        const isRedCompleted = maze[redY][redX] === MAZE_VALUE.redEnd;
        const nextRedY = isRedCompleted ? redY : redY + dy[i];
        const nextRedX = isRedCompleted ? redX : redX + dx[i];
        if (!isRedCompleted) {
          if (nextRedX < 0 || nextRedY < 0 || nextRedX >= rowLength || nextRedY >= colLength) continue;
          if (maze[nextRedY][nextRedX] === MAZE_VALUE.wall) continue;
          if (redVisited[nextRedY][nextRedX]) continue;
        }
        for (let j = 0; j < 4; j++) {
          const isBlueCompleted = maze[blueY][blueX] === MAZE_VALUE.blueEnd;
          const nextBlueY = isBlueCompleted ? blueY : blueY + dy[j];
          const nextBlueX = isBlueCompleted ? blueX : blueX + dx[j];
          if (!isBlueCompleted) {
            if (nextBlueX < 0 || nextBlueY < 0 || nextBlueX >= rowLength || nextBlueY >= colLength) continue;
            if (maze[nextBlueY][nextBlueX] === MAZE_VALUE.wall) continue;
            if (blueVisited[nextBlueY][nextBlueX]) continue;
          }
          if (nextRedY === nextBlueY && nextRedX === nextBlueX) continue;
          if (nextRedY === blueY && nextRedX === blueX && nextBlueY === redY && nextBlueX === redX) continue;
          redVisited[nextRedY][nextRedX] = true;
          blueVisited[nextBlueY][nextBlueX] = true;
          dfs(nextRedY, nextRedX, nextBlueY, nextBlueX, count + 1);
          redVisited[nextRedY][nextRedX] = false;
          blueVisited[nextBlueY][nextBlueX] = false;
        }
      }
    }
  }

  console.log(
    solution([
      [1, 4],
      [0, 0],
      [2, 3],
    ]),
  );
  // 3

  console.log(
    solution([
      [1, 0, 2],
      [0, 0, 0],
      [5, 0, 5],
      [4, 0, 3],
    ]),
  );
  // 7
}
