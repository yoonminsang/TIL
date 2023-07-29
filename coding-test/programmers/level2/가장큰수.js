// https://school.programmers.co.kr/learn/courses/30/lessons/42746

// 정답
function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join('');
  if (result.startsWith('0')) return '0';
  return result;
}

/**
 * @Date 2023.07.28
 */
function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => Number(b + a) - Number(a + b))
    .join('');
  if (result.startsWith('0')) return '0';
  return result;
}
