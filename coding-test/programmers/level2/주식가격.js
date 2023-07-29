// https://school.programmers.co.kr/learn/courses/30/lessons/42584

// ★

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
