// https://school.programmers.co.kr/learn/courses/30/lessons/42587

// max부분 해시 사용하면 최적화 가능할듯?

// 정답
function solution(priorities, location) {
  const queue = priorities.map((priority, index) => {
    return { priority, index };
  });
  let count = 0;
  while (true) {
    const max = Math.max(...queue.map((v) => v.priority));
    const process = queue.shift();
    if (process.priority < max) {
      queue.push(process);
    } else {
      count += 1;
      if (process.index === location) return count;
    }
  }
}

/**
 * @Date 2023.07.28
 */
{
  function solution(priorities, location) {
    const queue = priorities.map((priority, index) => {
      return { priority, index };
    });
    let count = 0;
    while (true) {
      const max = Math.max(...queue.map((v) => v.priority));
      const process = queue.shift();
      if (process.priority < max) {
        queue.push(process);
      } else {
        count += 1;
        if (process.index === location) return count;
      }
    }
  }
}
