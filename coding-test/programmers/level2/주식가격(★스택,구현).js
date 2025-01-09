// https://school.programmers.co.kr/learn/courses/30/lessons/42584

// ★ 스택, 구현

// 정답
function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];
  prices.forEach((price, i) => {
    while (stack.length && price < prices[stack.at(-1)]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  });
  while (stack.length) {
    const index = stack.pop();
    answer[index] = prices.length - 1 - index;
  }
  return answer;
}

/**
 * @Date 2023.07.29
 */
{
  function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];
    prices.forEach((price, i) => {
      while (stack.length && price < prices[stack.at(-1)]) {
        const index = stack.pop();
        answer[index] = i - index;
      }
      stack.push(i);
    });
    while (stack.length) {
      const index = stack.pop();
      answer[index] = prices.length - 1 - index;
    }
    return answer;
  }
}

// 잘 생각이 안나서 가장 직관적인 이중 루프로 품. prices길이는 10^5이라서 n^2이면 10^10이고 100초 걸림. 문제 잘못만든듯. 이건 시간복잡도 초과 떠야됌. 스택으로 풀어야 시간복잡도 충족함
/**
 * @Date 2025.01.09
 */
{
  function solution(prices) {
    const result = [];
    for (let i = 0; i < prices.length; i++) {
      const currentPrice = prices[i];
      const initialJ = i + 1;
      let j = initialJ;
      for (j; j < prices.length; j++) {
        if (currentPrice > prices[j]) {
          j += 1;
          break;
        }
      }
      result.push(j - initialJ);
    }
    return result;
  }
}
