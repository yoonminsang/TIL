// https://school.programmers.co.kr/learn/courses/30/lessons/12952

/**
 * @Date 2025.05.18
 */
{
  function solution(n) {
    // 각 col에 놓인 퀸의 row 위치 저장
    // [1,3,0,3]
    const queens = [];

    let count = 0;

    dfs(0);

    return count;

    function dfs(row) {
      if (row === n) {
        count += 1;
        return;
      }
      for (let col = 0; col < n; col++) {
        if (isValid(row, col)) {
          queens[row] = col;
          dfs(row + 1);
        }
      }
    }

    function isValid(row, col) {
      for (let i = 0; i < row; i++) {
        if (queens[i] === col) return false;
        if (Math.abs(i - row) === Math.abs(queens[i] - col)) return false;
      }
      return true;
    }
  }
}
