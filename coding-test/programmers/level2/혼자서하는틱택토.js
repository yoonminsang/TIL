// https://school.programmers.co.kr/learn/courses/30/lessons/160585

// 예외케이스 찾는 문제

// 정답
const O = 'O';
const X = 'X';

function solution(board) {
  const cntO = getCount(board, O);
  const cntX = getCount(board, X);

  const cntBingoO = getBingo(board, O);
  const cntBingoX = getBingo(board, X);
  const isExistBingoO = cntBingoO > 0;
  const isExistBingoX = cntBingoX > 0;
  console.log(cntO, cntX, cntBingoO, cntBingoX, isExistBingoO, isExistBingoX);

  // 실패조건
  // x가 더 많은 경우
  if (cntX > cntO) return 0;
  // o가 2개 이상 더 많은 경우
  if (cntO >= cntX + 2) return 0;
  // o가 이겼는데 o가 x보다 1개 더 많지 않은 경우
  if (isExistBingoO && cntO !== cntX + 1) return 0;
  // x가 이겼지만 x와 o의 개수가 다른 경우
  if (isExistBingoX && cntO !== cntX) return 0;
  // 빙고가 2보다 큰 경우
  if (cntBingoO + cntBingoX > 2) return 0;

  return 1;
}

function getCount(board, string) {
  let result = 0;
  for (let col = 0; col < board.length; col++) {
    for (let row = 0; row < board[0].length; row++) {
      if (board[col][row] === string) result += 1;
    }
  }
  return result;
}

function getBingo(board, string) {
  let result = 0;
  for (let col = 0; col < board.length; col++) {
    // 가로빙고
    if (board[col][0] === string && board[col][1] === string && board[col][2] === string) {
      result += 1;
    }
    // 세로빙고
    if (board[0][col] === string && board[1][col] === string && board[2][col] === string) {
      result += 1;
    }
  }
  // \대각선
  if (board[0][0] === string && board[1][1] === string && board[2][2] === string) {
    result += 1;
  }
  // /대각선
  if (board[0][2] === string && board[1][1] === string && board[2][0] === string) {
    result += 1;
  }
  return result;
}

/**
 * @Date 2023.12.16
 */
{
  const O = 'O';
  const X = 'X';

  function solution(board) {
    const cntO = getCount(board, O);
    const cntX = getCount(board, X);

    const cntBingoO = getBingo(board, O);
    const cntBingoX = getBingo(board, X);
    const isExistBingoO = cntBingoO > 0;
    const isExistBingoX = cntBingoX > 0;
    console.log(cntO, cntX, cntBingoO, cntBingoX, isExistBingoO, isExistBingoX);

    // 실패조건
    // x가 더 많은 경우
    if (cntX > cntO) return 0;
    // o가 2개 이상 더 많은 경우
    if (cntO >= cntX + 2) return 0;
    // o가 이겼는데 o가 x보다 1개 더 많지 않은 경우
    if (isExistBingoO && cntO !== cntX + 1) return 0;
    // x가 이겼지만 x와 o의 개수가 다른 경우
    if (isExistBingoX && cntO !== cntX) return 0;
    // 빙고가 2보다 큰 경우
    if (cntBingoO + cntBingoX > 2) return 0;

    return 1;
  }

  function getCount(board, string) {
    let result = 0;
    for (let col = 0; col < board.length; col++) {
      for (let row = 0; row < board[0].length; row++) {
        if (board[col][row] === string) result += 1;
      }
    }
    return result;
  }

  function getBingo(board, string) {
    let result = 0;
    for (let col = 0; col < board.length; col++) {
      // 가로빙고
      if (board[col][0] === string && board[col][1] === string && board[col][2] === string) {
        result += 1;
      }
      // 세로빙고
      if (board[0][col] === string && board[1][col] === string && board[2][col] === string) {
        result += 1;
      }
    }
    // \대각선
    if (board[0][0] === string && board[1][1] === string && board[2][2] === string) {
      result += 1;
    }
    // /대각선
    if (board[0][2] === string && board[1][1] === string && board[2][0] === string) {
      result += 1;
    }
    return result;
  }
}
