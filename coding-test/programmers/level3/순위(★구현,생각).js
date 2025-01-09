// https://school.programmers.co.kr/learn/courses/30/lessons/49191

// ★ 구현, 생각
// 이런문제에서는 3단, 4단, 5단 논법까지 테스트케이스를 만들어서 돌리면 좋을듯.

/**
 * @Date 2023.12.02
 */
// 첫번째 시도 실패(30분대)
// 3단 논법은 맞지만 4단 논법일 때 처리가 안됌.
// 왜냐하면 a > b > c 일때 a에 c에 있는 값들만 추가를 하고 있음.
// c에 있는 것 분만 아니라 c > d > e 일때 d, e도 전부 추가를 해야함

// 입력값 〉	4, [[1, 2], [2, 3], [3, 4]]
// 기댓값 〉	4
// 실행 결과 〉	실행한 결괏값 3이 기댓값 4과 다릅니다.
{
  function solution(n, results) {
    const graph = Array(n + 1)
      .fill(null)
      .reduce((acc, cur, index) => {
        if (index === 0) return acc;
        acc[index] = { winners: [], losers: [] };
        return acc;
      }, {});
    console.log('grpah1', graph);

    results.forEach(([win, lose]) => {
      graph[win].winners.push(lose);
      graph[lose].losers.push(win);
    });
    console.log('graph2', graph);

    // 삼단논법
    // a가 b한테 졌는데 b가 c한테 짐(a<b, b<c) => a<b<c
    // a가 b한테 이겼는데 b가 c한테 이김(a>b, b>c) => a>b>c

    Object.entries(graph).forEach(([n, { winners, losers }]) => {
      // n이 losers한테 졌는데 losers가 graph[loser].losers한테 짐.(n<losers<graph[loser].losers)
      losers.forEach((loser) => {
        graph[n].losers = [...new Set([...graph[n].losers, ...graph[loser].losers])];
      });
      // n이 winners한테 이겼는데 winners가 graph[winner].winners한테 이김(n>winners<graph[winner].winners)
      // a:n, b:winner, c:
      winners.forEach((winner) => {
        graph[n].winners = [...new Set([...graph[n].winners, ...graph[winner].winners])];
      });
    });
    console.log('graph3', graph);

    return Object.values(graph).reduce((acc, { winners, losers }) => {
      if (winners.length + losers.length === n - 1) return acc + 1;
      return acc;
    }, 0);
  }
}

// 삼단논법 적용
{
  function solution(n, results) {
    // 그래프 초기화
    // 0번째 index는 사용하지 않습니다.
    const graph = Array(n + 1)
      .fill(null)
      .map(() => ({ winners: new Set(), losers: new Set() }));
    console.log('graph1', graph);

    // 경기 결과 반영
    results.forEach(([winner, loser]) => {
      graph[winner].winners.add(loser);
      graph[loser].losers.add(winner);
    });
    console.log('graph2', graph);

    // 삼단논법 적용
    graph.slice(1).forEach(({ winners, losers }, i) => {
      // (a>b, b>c) => a>b>c
      winners.forEach((winner1, j) => {
        graph[winner1].winners.forEach((winner2, k) => {
          winners.add(winner2);
        });
      });

      // (a<b, b<c) => a<b<c
      losers.forEach((loser1) => {
        graph[loser1].losers.forEach((loser2) => {
          losers.add(loser2);
        });
      });
      console.log('for', graph);
    });
    console.log('graph3', graph);

    return graph.reduce((acc, { winners, losers }) => {
      if (winners.size + losers.size === n - 1) return acc + 1;
      return acc;
    }, 0);
  }
}

// 이긴선수의 진수를 업데이트하는 방법
// 이겼는데 진 선수를 업데이트하는게 조금(많이) 헷갈림
// 그대신 n^2 시간 복잡도임
{
  function solution(n, results) {
    // 그래프 초기화
    // 0번째 index는 사용하지 않습니다.
    const graph = Array(n + 1)
      .fill()
      .map(() => ({ winners: new Set(), losers: new Set() }));
    console.log('graph1', graph);

    // 경기 결과 반영
    results.forEach(([winner, loser]) => {
      graph[winner].winners.add(loser);
      graph[loser].losers.add(winner);
    });
    console.log('graph2', graph);

    // 각 선수에 대해 이긴 선수와 진 선수를 갱신
    graph.slice(1).forEach(({ winners, losers }, index) => {
      winners.forEach((winner) => {
        // index: 선수
        // winners: 선수가 이긴 목록
        // losers: 선수가 진 목록
        // winner: 선수가 현재 이긴 선수
        // graph[winner]: winner 데이터
        // graph[winner].losers: winner 데이터에서 진 목록

        // winner 데이터에서 진 목록에 선수가 진 목록을 추가

        // examples
        // input [[1,2],[2,3],[3,4]]
        // 2번째 선수가 들어올 때 graph[winner]는 3, graph[winner].losers(3의 loser)는 2, losers는 1
        // 즉 3번째 선수의 losers에 1을 추가.

        // 이긴 선수의 진 선수 목록을 갱신
        graph[winner].losers = new Set([...graph[winner].losers, ...losers]);
      });
      losers.forEach((loser) => {
        // 진 선수의 이긴 선수 목록을 갱신
        graph[loser].winners = new Set([...graph[loser].winners, ...winners]);
      });
      console.log('for', graph);
    });
    console.log('graph3', graph);

    return graph.reduce((acc, { winners, losers }) => {
      if (winners.size + losers.size === n - 1) return acc + 1;
      return acc;
    }, 0);
  }
}

/**
 * @Date 2025.01.09
 */
{
  function solution(n, results) {
    // 0번째 index는 사용하지 않음.
    const graph = Array(n + 1)
      .fill(null)
      .map(() => ({ winners: new Set(), losers: new Set() }));
    results.forEach(([winner, loser]) => {
      graph[winner].winners.add(loser);
      graph[loser].losers.add(winner);
    });

    // a > b > c
    graph.forEach(({ winners, losers }, player) => {
      // a의 winners에 c를 업데이트
      losers.forEach((loser) => {
        graph[loser].winners = new Set([...graph[loser].winners, ...winners]);
      });
      // c의 losers에 a를 업데이트
      winners.forEach((winner) => {
        graph[winner].losers = new Set([...graph[winner].losers, ...losers]);
      });
    });
    const count = graph.filter(({ winners, losers }) => winners.size + losers.size === n - 1).length;
    return count;
  }
}
