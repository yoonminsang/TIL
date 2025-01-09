// https://school.programmers.co.kr/learn/courses/30/lessons/87946

// solution
function solution(k, dungeons) {
  let count = 0;
  const visitedArr = Array(dungeons.length).fill(false);
  dfs(k, 0);
  return count;

  function dfs(currentFatigue, passedCount) {
    count = Math.max(passedCount, count);
    dungeons.forEach(([minFatigue, spendFatigue], index) => {
      const isVisitedDungeon = visitedArr[index];
      const isFatigueOK = currentFatigue - minFatigue >= 0;
      const isAvailable = !isVisitedDungeon && isFatigueOK;
      if (!isAvailable) return;

      visitedArr[index] = true;
      dfs(currentFatigue - spendFatigue, passedCount + 1);
      visitedArr[index] = false;
    });
  }
}

/**
 * @Date 2023.07.31
 */
{
  function solution(k, dungeons) {
    let count = 0;
    const visitedIndexArr = Array(dungeons.length).fill(false);
    dungeons.forEach((dungeon, index) => {
      visitedIndexArr.fill(false);
      dfs(k, 0, index);
    });
    return count;
    function dfs(currentFatigue, passCount) {
      count = Math.max(count, passCount);
      dungeons.forEach(([minFatigue, spendFatigue], index) => {
        if (currentFatigue >= minFatigue && !visitedIndexArr[index]) {
          visitedIndexArr[index] = true;
          dfs(currentFatigue - spendFatigue, passCount + 1);
          visitedIndexArr[index] = false;
        }
      });
    }
  }
}

/**
 * @Date 2023.11.13
 */
function solution(k, dungeons) {
  let count = 0;
  const visitedArr = Array(dungeons.length).fill(false);
  dfs(k, 0);
  return count;

  function dfs(currentFatigue, passedCount) {
    count = Math.max(passedCount, count);
    dungeons.forEach(([minFatigue, spendFatigue], index) => {
      const isVisitedDungeon = visitedArr[index];
      const isFatigueOK = currentFatigue - minFatigue >= 0;
      const isAvailable = !isVisitedDungeon && isFatigueOK;
      if (!isAvailable) return;

      visitedArr[index] = true;
      dfs(currentFatigue - spendFatigue, passedCount + 1);
      visitedArr[index] = false;
    });
  }
}
