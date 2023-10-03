// https://school.programmers.co.kr/learn/courses/30/lessons/42883

// 정답
function solution(number, k) {
  const stack = [];
  let index = 0;
  let deletedCount = k;
  while (index < number.length) {
    if (stack.at(-1) < number[index] && deletedCount > 0) {
      stack.pop();
      deletedCount -= 1;
    } else {
      stack.push(number[index]);
      index += 1;
    }
  }
  return stack.join('').slice(0, number.length - k);
}

/**
 * @Date 2023.10.03
 */
{
  function solution(number, k) {
    const stack = [];
    let index = 0;
    let deletedCount = k;
    while (index < number.length) {
      if (stack.at(-1) < number[index] && deletedCount > 0) {
        stack.pop();
        deletedCount -= 1;
      } else {
        stack.push(number[index]);
        index += 1;
      }
    }
    return stack.join('').slice(0, number.length - k);
  }
}
