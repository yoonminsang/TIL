// https://school.programmers.co.kr/learn/courses/30/lessons/258712

// 준, 받은을 판단하는게 약간 헷갈렸다. 그래서 그냥 주석을 남겼더니 훨씬 쉽게 풀렸다.
// 문제는 당연히 풀었지만 시간이 생각보다 많이 걸리듯..
// 이정도 문제는 10분안에 풀 수 있게 더 연습해야될것같다.

/**
 * @Date 2024.12.23
 */
{
  function solution(friends, gifts) {
    const obj = friends.reduce((acc, cur) => {
      acc[cur] = { givenMap: convertOne(friends), receivedMap: convertOne(friends) };
      delete acc[cur].givenMap[cur];
      delete acc[cur].receivedMap[cur];
      return acc;
    }, {});
    // console.log('1',obj)
    gifts.forEach((gift) => {
      // given: 선물을 준 친구, received: 선물을 받은 친구
      const [given, received] = gift.split(' ');
      obj[given].givenMap[received] += 1;
      obj[received].receivedMap[given] += 1;
    });
    // console.log('2', obj);
    const 선물지수 = Object.entries(obj)
      .map(([friend, { givenMap, receivedMap }]) => {
        return { friend, count: convertTwo(givenMap) - convertTwo(receivedMap) };
      })
      .reduce((acc, { friend, count }) => {
        acc[friend] = count;
        return acc;
      }, {});
    // console.log('선물지수',선물지수)
    const temp = Object.entries(obj).map(([friend, { givenMap, receivedMap }]) => {
      let count = 0;
      for (const f of friends) {
        if (f === friend) {
          continue;
        }
        if (givenMap[f] < receivedMap[f]) {
        } else if (givenMap[f] > receivedMap[f]) {
          count += 1;
        } else if (선물지수[friend] > 선물지수[f]) {
          count += 1;
        }
      }
      return count;
    });
    // console.log('temp',temp)
    return Math.max(...temp);
  }

  // arr => {요소1:0,요소2:0,....}
  function convertOne(arr) {
    return arr.reduce((acc, cur) => {
      acc[cur] = 0;
      return acc;
    }, {});
  }

  // { ryan: 0, frodo: 2, neo: 0 } =>0+2+0
  function convertTwo(obj) {
    return Object.values(obj).reduce((acc, cur) => {
      return acc + cur;
    }, 0);
  }
}
