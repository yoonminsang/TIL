// https://school.programmers.co.kr/learn/courses/30/lessons/42747

// 문제 좀 이상함

// 정답
function solution(citations) {
  citations.sort((a, b) => b - a);
  for (let h = citations.length; h >= 0; h--) {
    let count;
    for (count = 0; count < citations.length; count++) {
      if (h > citations[count]) break;
    }
    if (count >= h) return h;
  }
}

/**
 * @Date 2023.07.29
 */
{
  function solution(citations) {
    citations.sort((a, b) => b - a);
    for (let h = citations.length; h >= 0; h--) {
      let count;
      for (count = 0; count < citations.length; count++) {
        if (h > citations[count]) break;
      }
      if (count >= h) return h;
    }
  }
}
