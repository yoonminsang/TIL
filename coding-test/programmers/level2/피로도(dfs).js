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

/**
 * @Date 2026.01.10
 * @time 15분
 * 매우 쉬운 dfs인데 너무 오랜만에 풀다보니 감잡느라 시간이 오래걸린듯.
 */
{
  // k: 현재피로도, dungeons: [최소필요도,소모피로도]
  function solution(k, dungeons) {
    const visited = Array(dungeons.length).fill(false);
    let maxVisitCount = 0;
    dfs(k);
    function dfs(currentFatigue) {
      // 함수 인자로 넘기면 불필요한 계산을 없앨 수 있음.
      const visitedCount = visited.reduce((acc, cur) => {
        return acc + (cur ? 1 : 0);
      }, 0);
      maxVisitCount = Math.max(maxVisitCount, visitedCount);
      dungeons.forEach(([최소피로도, 소모피로도], index) => {
        const isVisited = visited[index];
        const isPossible피로도 = currentFatigue >= 최소피로도;
        const isPossible = !isVisited && isPossible피로도;
        if (!isPossible) {
          return;
        }
        visited[index] = true;
        dfs(currentFatigue - 소모피로도);
        visited[index] = false;
      });
    }
    return maxVisitCount;
  }
}
