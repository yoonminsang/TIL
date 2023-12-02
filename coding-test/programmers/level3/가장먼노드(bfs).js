// https://school.programmers.co.kr/learn/courses/30/lessons/49189

// 정답
function solution(n, edge) {
  const graph = edge.reduce((acc, [from, to]) => {
    if (!acc[from]) acc[from] = [];
    if (!acc[to]) acc[to] = [];
    acc[from].push(to);
    acc[to].push(from);
    return acc;
  }, {});

  const distanceObj = { 1: 0 };
  const queue = [1];
  while (queue.length) {
    const vertex = queue.shift();
    const distance = distanceObj[vertex];
    graph[vertex].forEach((v) => {
      if (distanceObj[v] !== undefined) return;
      distanceObj[v] = distance + 1;
      queue.push(v);
    });
  }
  const arr = Object.values(distanceObj);
  const max = Math.max(...arr);
  return arr.filter((v) => v === max).length;
}

/**
 * @Date 2023.12.02
 */
// 21분 걸림
{
  function solution(n, edge) {
    const graph = edge.reduce((acc, [from, to]) => {
      if (!acc[from]) acc[from] = [];
      if (!acc[to]) acc[to] = [];
      acc[from].push(to);
      acc[to].push(from);
      return acc;
    }, {});

    const distanceObj = { 1: 0 };
    const queue = [1];
    while (queue.length) {
      const vertex = queue.shift();
      const distance = distanceObj[vertex];
      graph[vertex].forEach((v) => {
        if (distanceObj[v] !== undefined) return;
        distanceObj[v] = distance + 1;
        queue.push(v);
      });
    }
    const arr = Object.values(distanceObj);
    const max = Math.max(...arr);
    return arr.filter((v) => v === max).length;
  }
}
