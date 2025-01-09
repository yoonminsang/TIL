// https://school.programmers.co.kr/learn/courses/30/lessons/43165

// 정답
function solution(numbers, target) {
  let count = 0;
  dfs(0, 0);
  return count;
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) count += 1;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
}

/**
 * @Date 2023.07.29
 */
{
  function solution(numbers, target) {
    let count = 0;
    dfs(0, 0);
    return count;
    function dfs(index, sum) {
      if (index === numbers.length) {
        if (sum === target) count += 1;
        return;
      }
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    }
  }
}

/**
 * @Date 2023.11.13
 */
function solution(numbers, target) {
  let count = 0;
  dfs(0, 0);
  return count;
  function dfs(index, sum) {
    if (index >= numbers.length) {
      if (target === sum) count += 1;
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }
}
