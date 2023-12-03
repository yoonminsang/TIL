// https://school.programmers.co.kr/learn/courses/30/lessons/43164

// dfs

// 정답
function solution(tickets) {
  const result = [];
  dfs(tickets, ['ICN']);
  function dfs(ticketArr, routeArr) {
    if (ticketArr.length === 0) {
      result.push(routeArr);
      return;
    }
    const lastCity = routeArr.at(-1);
    ticketArr.forEach(([startCity, endCity], index) => {
      if (lastCity === startCity) {
        dfs(
          ticketArr.filter((_, i) => i !== index),
          [...routeArr, endCity],
        );
      }
    });
  }
  console.log(result);
  return result.sort()[0];
}

/**
 * @Date 2023.12.03
 */
{
  function solution(tickets) {
    const result = [];
    dfs(tickets, ['ICN']);
    function dfs(ticketArr, routeArr) {
      if (ticketArr.length === 0) {
        result.push(routeArr);
        return;
      }
      const lastCity = routeArr.at(-1);
      ticketArr.forEach(([startCity, endCity], index) => {
        if (lastCity === startCity) {
          dfs(
            ticketArr.filter((_, i) => i !== index),
            [...routeArr, endCity],
          );
        }
      });
    }
    console.log(result);
    return result.sort()[0];
  }
}
