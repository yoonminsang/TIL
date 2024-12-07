// https://school.programmers.co.kr/learn/courses/30/lessons/340212#

// 쉬운 이진탐색문제인데 left가 0이아니라 1이라는 조건을 찾는게 좀 빡셈..

/**
 * @Date 2024.12.8
 */
{
  function solution(diffs, times, limit) {
    let left = 1;
    let right = 10 ** 15;
    while (left <= right) {
      const diffLevel = Math.floor((left + right) / 2);
      let totalTime = 0;
      for (let i = 0; i < diffs.length; i++) {
        const currentDiff = diffs[i];
        const currentTime = times[i];
        const prevTime = times[i - 1] ?? 0;
        if (diffLevel >= currentDiff) {
          totalTime += currentTime;
        } else {
          totalTime += (currentDiff - diffLevel) * (currentTime + prevTime) + currentTime;
        }
      }
      if (totalTime <= limit) {
        right = diffLevel - 1;
      } else {
        left = diffLevel + 1;
      }
    }
    return left;
  }
}
