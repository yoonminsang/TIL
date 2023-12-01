// https://school.programmers.co.kr/learn/courses/30/lessons/169199#

// ★ 괜찮은 bfs 문제

// 정답
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
