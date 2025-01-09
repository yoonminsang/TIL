// https://school.programmers.co.kr/learn/courses/30/lessons/169199#

// ★ 괜찮은 bfs 문제

/**
 * @Date 2023.12.02
 */
// 문제를 꼼꼼히 읽자...
{
  const EMPTY = '.';
  const OBSTACLE = 'D';
  const GOAL = 'G';
  const FIRST = 'R';
  const POSITION = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right',
  };

  function solution(board) {
    board = board.map((v) => v.split(''));
    const [MAX_Y, MAX_X] = [board.length - 1, board[0].length - 1];
    const visited = board.map((v1) => {
      return v1.map((v2) => {
        if (v2 === OBSTACLE) return true;
        return false;
      });
    });

    const { y: firstY, x: firstX } = getFirstPosition(board);
    const { y: goalY, x: goalX } = getGoalPosition(board);

    visited[firstY][firstX] = true;

    const queue = [{ y: firstY, x: firstX, count: 0 }];
    while (queue.length) {
      const { y, x, count } = queue.shift();
      console.log(`y:${y}, x:${x}, count:${count}`);

      if (y === goalY && x === goalX) return count;

      Object.values(POSITION).forEach((position) => {
        const { y: nextY, x: nextX } = getPosition({ y, x }, position);
        if (canMove(nextY, nextX)) {
          move({ y: nextY, x: nextX }, count);
        }
      });
    }

    return -1;

    // 미끄러진 경우 미끄러진 position 반환
    // 움직일 수 없는 경우 원래 position 반환
    function getPosition({ y, x }, position) {
      switch (position) {
        case POSITION.top:
          return getTopPosition(y, x);
        case POSITION.bottom:
          return getBottomPosition(y, x);
        case POSITION.left:
          return getLeftPosition(y, x);
        case POSITION.right:
          return getRightPosition(y, x);
        default:
          throw new Error(`getPosition error, position:${position}`);
      }
      function getTopPosition(y, x) {
        let nextY = y;
        if (canMoveByBoard(nextY - 1, x) && board[nextY - 1][x] !== OBSTACLE) {
          while (canMoveByBoard(nextY - 1, x) && board[nextY - 1][x] !== OBSTACLE) {
            nextY -= 1;
          }
          return { y: nextY, x };
        }
        return { y, x };
      }
      function getBottomPosition(y, x) {
        let nextY = y;
        if (canMoveByBoard(nextY + 1, x) && board[nextY + 1][x] !== OBSTACLE) {
          while (canMoveByBoard(nextY + 1, x) && board[nextY + 1][x] !== OBSTACLE) {
            nextY += 1;
          }
          return { y: nextY, x };
        }
        return { y, x };
      }
      function getLeftPosition(y, x) {
        let nextX = x;
        if (canMoveByBoard(y, nextX - 1) && board[y][nextX - 1] !== OBSTACLE) {
          while (canMoveByBoard(y, nextX - 1) && board[y][nextX - 1] !== OBSTACLE) {
            nextX -= 1;
          }
          return { y, x: nextX };
        }
        return { y, x };
      }
      function getRightPosition(y, x) {
        let nextX = x;
        if (canMoveByBoard(y, nextX + 1) && board[y][nextX + 1] !== OBSTACLE) {
          while (canMoveByBoard(y, nextX + 1) && board[y][nextX + 1] !== OBSTACLE) {
            nextX += 1;
          }
          return { y, x: nextX };
        }
        return { y, x };
      }
    }

    function move({ y, x }, count) {
      visited[y][x] = true;
      queue.push({ y, x, count: count + 1 });
    }

    function canMoveByBoard(y, x) {
      const canMoveY = y >= 0 && y <= MAX_Y;
      const canMoveX = x >= 0 && x <= MAX_X;
      return canMoveY && canMoveX;
    }

    function canMoveByVisited(y, x) {
      return !visited[y][x];
    }

    function canMove(y, x) {
      return canMoveByBoard(y, x) && canMoveByVisited(y, x);
    }
  }

  function getFirstPosition(board) {
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        if (board[y][x] === FIRST) return { y, x };
      }
    }
    throw new Error('getFirstPosition');
  }

  function getGoalPosition(board) {
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[y].length; x++) {
        if (board[y][x] === GOAL) return { y, x };
      }
    }
    throw new Error('getGoalPosition');
  }
}

// 예전보다 간단히 풀었다 ㅎㅎ
/**
 * @Date 2023.12.02
 */
{
  const EMPTY = '.';
  const START = 'R';
  const OBSTACLE = 'D';
  const GOAL = 'G';

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  // 일반적인 bfs인데 미끄러지는거만 신경쓰면 됌.
  function solution(board) {
    const maxY = board.length;
    const maxX = board[0].length;

    const queue = [[...findCoordinate(board, START), 0]];
    const visited = Array(maxY)
      .fill(null)
      .map(() => Array(maxX).fill(false));

    while (queue.length > 0) {
      const [y, x, count] = queue.shift();
      if (board[y][x] === GOAL) {
        return count;
      }
      for (let i = 0; i < 4; i++) {
        const [ny, nx] = getCoordinateBySlip(y, x, dy[i], dx[i]);
        if (nx < 0 || ny < 0 || nx >= maxX || ny >= maxY) continue;
        if (board[ny][nx] === OBSTACLE) continue;
        if (visited[ny][nx]) continue;

        visited[ny][nx] = true;
        queue.push([ny, nx, count + 1]);
      }
    }
    return -1;

    function getCoordinateBySlip(y, x, dy, dx) {
      let resultY = y;
      let resultX = x;
      while (true) {
        const ny = resultY + dy;
        const nx = resultX + dx;
        if (nx < 0 || ny < 0 || nx >= maxX || ny >= maxY || board[ny][nx] === OBSTACLE) {
          break;
        }
        resultY = ny;
        resultX = nx;
      }
      return [resultY, resultX];
    }
  }

  function findCoordinate(board, value) {
    for (let y = 0; y < board.length; y++) {
      for (let x = 0; x < board[0].length; x++) {
        if (board[y][x] === value) {
          return [y, x];
        }
      }
    }
    throw new Error('좌표를 찾을 수 없습니다.');
  }

  console.log(solution(['...D..R', '.D.G...', '....D.D', 'D....D.', '..D....']) === 7);
}
