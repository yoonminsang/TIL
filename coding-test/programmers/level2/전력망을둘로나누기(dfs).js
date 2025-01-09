// // https://school.programmers.co.kr/learn/courses/30/lessons/86971

// 정답
function solution(n, wires) {
  let min = Infinity;
  for (let i = 0; i < n; i++) {
    const graph = makeGraph(n, [...wires.slice(0, i), ...wires.slice(i + 1)]);
    const visited = Array(n + 1).fill(false);
    dfs(1, graph, visited);
    const visitedCount = visited.filter((v) => v === true).length;
    const diff = Math.abs(n - visitedCount - visitedCount);
    min = Math.min(min, diff);
  }
  return min;

  function dfs(node, graph, visited) {
    visited[node] = true;
    graph[node].forEach((v) => {
      if (!visited[v]) dfs(v, graph, visited);
    });
  }
}

function makeGraph(n, arr) {
  const graph = Array(n)
    .fill(null)
    .reduce((acc, cur, index) => {
      acc[index + 1] = [];
      return acc;
    }, {});
  arr.forEach(([from, to]) => {
    graph[from].push(to);
    graph[to].push(from);
  });
  return graph;
}

/**
 * @Date 2023.07.29
 */
{
  function solution(n, wires) {
    let min = Infinity;
    for (let i = 0; i < n; i++) {
      const graph = makeGraph(n, [...wires.slice(0, i), ...wires.slice(i + 1)]);
      const visited = Array(n + 1).fill(false);
      dfs(1, graph, visited);
      const visitedCount = visited.filter((v) => v === true).length;
      const diff = Math.abs(n - visitedCount - visitedCount);
      min = Math.min(min, diff);
    }
    return min;

    function dfs(node, graph, visited) {
      visited[node] = true;
      graph[node].forEach((v) => {
        if (!visited[v]) dfs(v, graph, visited);
      });
    }
  }

  function makeGraph(n, arr) {
    const graph = Array(n)
      .fill(null)
      .reduce((acc, cur, index) => {
        acc[index + 1] = [];
        return acc;
      }, {});
    arr.forEach(([from, to]) => {
      graph[from].push(to);
      graph[to].push(from);
    });
    return graph;
  }
}
