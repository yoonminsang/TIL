// https://school.programmers.co.kr/learn/courses/30/lessons/340211#

// 엄청 쉬운 문젠데 힘들게 품..
// 1. dfs로 풀어볼까?
// 2. 아니 bfs가 더 쉽겠네
// 3. 아니 장애물도 없는데 bfs같은거 필요없이 그냥 구현문제네
// 4. 잘 풀었는데 왜 틀리지??
// 5. routes에는 from,to라는 2개의 원소만 있는지 알았는데 여러개의 원소가 들어올 수 있었음...
// 결론: 최소한 실무를 뛸때까지는 알고리즘을 주기적으로 풀자. + 문제 꼼꼼히 읽자...

/**
 * @Date 2024.12.20
 */
{
  // r이 y, c가 x
  function solution(points, routes) {
    const minPathList = [];
    routes.forEach((route) => {
      const result = [];
      for (let i = 0; i < route.length - 1; i++) {
        result.push(...getMinPath(points[route[i] - 1], points[route[i + 1] - 1]).slice(0, -1));
      }
      result.push(points[route.at(-1) - 1]);
      minPathList.push(result);
    });

    const maxMinPathLength = Math.max(...minPathList.map((shortestPath) => shortestPath.length));
    let result = 0;
    for (let i = 0; i < maxMinPathLength; i++) {
      const obj = {};
      minPathList.forEach((shortestPath) => {
        if (shortestPath[i]) {
          const key = shortestPath[i].toString();
          if (obj[key]) {
            obj[key] += 1;
          } else {
            obj[key] = 1;
          }
        }
      });
      result += Object.values(obj).filter((v) => v > 1).length;
    }
    return result;
  }

  function getMinPath(from, to) {
    const result = [from];
    let currentC = from[0];
    let currentR = from[1];
    while (true) {
      const nextPoint = getNextTimePoint(currentC, currentR, to[0], to[1]);
      if (!nextPoint) {
        return result;
      }
      [currentC, currentR] = nextPoint;
      result.push(nextPoint);
    }
  }

  function getNextTimePoint(fromR, fromC, toR, toC) {
    if (fromR !== toR) {
      if (fromR < toR) {
        return [fromR + 1, fromC];
      } else {
        return [fromR - 1, fromC];
      }
    }
    if (fromC !== toC) {
      if (fromC < toC) {
        return [fromR, fromC + 1];
      } else {
        return [fromR, fromC - 1];
      }
    }
    return null;
  }
}

// gpt와 함께 성능 최적화. for문 한번에 모든 처리를 하게 개선. 굳이 for문에서 얻은 데이터를 모두 저장해서 처리할필요가 없음.
{
  // r이 y, c가 x
  function solution(points, routes) {
    const collisionMap = new Map();

    routes.forEach((route) => {
      let path = [];
      for (let i = 0; i < route.length - 1; i++) {
        path.push(...getMinPath(points[route[i] - 1], points[route[i + 1] - 1]).slice(0, -1));
      }
      path.push(points[route.at(-1) - 1]);

      path.forEach(([r, c], time) => {
        const key = `${r},${c},${time}`;
        collisionMap.set(key, (collisionMap.get(key) || 0) + 1);
      });
    });

    let result = 0;

    collisionMap.forEach((count) => {
      if (count > 1) result++;
    });

    return result;
  }

  function getMinPath(from, to) {
    const result = [from];
    let currentC = from[0];
    let currentR = from[1];
    while (true) {
      const nextPoint = getNextTimePoint(currentC, currentR, to[0], to[1]);
      if (!nextPoint) {
        return result;
      }
      [currentC, currentR] = nextPoint;
      result.push(nextPoint);
    }
  }

  function getNextTimePoint(fromR, fromC, toR, toC) {
    if (fromR !== toR) {
      if (fromR < toR) {
        return [fromR + 1, fromC];
      } else {
        return [fromR - 1, fromC];
      }
    }
    if (fromC !== toC) {
      if (fromC < toC) {
        return [fromR, fromC + 1];
      } else {
        return [fromR, fromC - 1];
      }
    }
    return null;
  }
}

// dfs, bfs 구현중 멈춘 코드
{
  ///
  function solution(points, routes) {
    var answer = 0;
    return answer;
  }

  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];

  function dfsByGraph(graph, from, to) {
    const maxX = graph[0].length;
    const maxY = graph.length;
    const visitedGraph = Array(maxY)
      .fill(null)
      .map(() => Array(maxX).fill(false));
    const arr = [];
    dfs(from, [], visitedGraph);
    function dfs(currentPoint, visitedList) {
      for (let i = 0; i < 4; i++) {
        const ny = currentPoint.y + dy[i];
        const nx = currentPoint.x + dx[i];
        if (visitedGraph[ny][nx]) {
          continue;
        }
        if (nx < 0 || ny < 0 || nx >= maxX || ny >= maxY) {
          continue;
        }
        if (ny === to.y && nx === to.x) {
          break;
        }
        visitedGraph[ny][nx] = true;
        dfs({ y: ny, x: nx }, [...visitedList, { y: ny, x: nx }]);
        visitedGraph[ny][nx] = false;
      }
    }
  }

  function solution(points, routes) {
    const graph = Array(100)
      .fill(null)
      .map(() => Array(100).fill(false));
    const shortestPathList = [];
    routes.forEach((route) => {
      const from = points[route[0] - 1];
      const to = points[route[1] - 1];
      shortestPathList.push(getShortestPath(graph, from, to));
    });
    console.log(shortestPathList);
    // TODO: 최단경로리스트로 겹치는 point 개수 구하기
    var answer = 0;
    return answer;
  }

  // const dy = [-1, 1, 0, 0];
  // const dx = [0, 0, 1, -1];

  function getShortestPath(graph, fromPoint, toPoint) {
    const maxX = graph[0].length;
    const maxY = graph.length;

    const visitedGraph = Array(maxY)
      .fill(null)
      .map(() => Array(maxX).fill(false));
    visitedGraph[fromPoint.y][fromPoint.x] = true;
    const visitedList = [];
    visitedList.push(fromPoint);

    const queue = [];
    queue.push(fromPoint);

    while (queue.length > 0) {
      const currentPoint = queue.pop();
      for (let i = 0; i < 4; i++) {
        const ny = currentPoint.y + dy[i];
        const nx = currentPoint.x + dx[i];
        if (visitedGraph[ny][nx]) {
          continue;
        }
        if (nx < 0 || ny < 0 || nx >= maxX || ny >= maxY) {
          continue;
        }
        if (ny === toPoint.y && nx === toPoint.x) {
          visitedList.push({ y: ny, x: nx });
          return visitedList;
        }
        visitedGraph[ny][nx] = true;
        visitedList.push({ y: ny.y, x: nx });
        visitedGraph[ny][nx] = false;
      }
    }
  }

  // function dfsByGraph(graph,from,to){
  //     const maxX = graph[0].length;
  //     const maxY = graph.length;
  //     const visitedGraph = Array(maxY).fill(null).map(()=>Array(maxX).fill(false));
  //     const arr=[];
  //     dfs(from,[],visitedGraph);
  //     function dfs(currentPoint,visitedList){
  //         for (let i = 0; i < 4; i++) {
  //             const ny = currentPoint.y + dy[i];
  //             const nx = currentPoint.x + dx[i];
  //             if(visitedGraph[ny][nx]){
  //                 continue;
  //             }
  //             if (nx < 0 || ny < 0 || nx >= maxX || ny >= maxY){
  //                 continue;
  //             }
  //             if (ny===to.y && nx===to.x){
  //                 break;
  //             }
  //             visitedGraph[ny][nx]=true;
  //             dfs({y:ny, x:nx}, [...visitedList, {y:ny,x:nx}]);
  //             visitedGraph[ny][nx]=false;
  //         }
  //     }
  // }
}
