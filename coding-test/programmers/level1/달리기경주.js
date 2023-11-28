// https://school.programmers.co.kr/learn/courses/30/lessons/178871

// 정답
function solution(players, callings) {
  // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
  const obj1 = players.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});
  // { '0': 'mumu', '1': 'soe', '2': 'poe', '3': 'kai', '4': 'mine' }
  const obj2 = players.reduce((acc, cur, index) => {
    acc[index] = cur;
    return acc;
  }, {});

  callings.forEach((currentCall) => {
    const currentCallIndex = obj1[currentCall];
    const prevCallIndex = currentCallIndex - 1;
    const prevCall = obj2[prevCallIndex];

    // obj1 현재변경
    obj1[currentCall] = prevCallIndex;

    // obj1 앞에변경
    obj1[prevCall] = currentCallIndex;

    // obj2 현재변경
    obj2[currentCallIndex] = prevCall;

    // obj2 앞에변경
    obj2[prevCallIndex] = currentCall;
  });
  return Object.values(obj2);
}

/**
 * @Date 2023.11.28
 */

// 시간복잡도 초과
{
  function solution(players, callings) {
    const result = players.slice();
    callings.forEach((calling, index) => {
      const callerIndex = result.findIndex((v) => v === calling);
      swap(result, callerIndex - 1, callerIndex);
    });
    return result;
  }

  function swap(arr, n1, n2) {
    const temp = arr[n1];
    arr[n1] = arr[n2];
    arr[n2] = temp;
  }
}

// 15분걸림
{
  function solution(players, callings) {
    // { mumu: 0, soe: 1, poe: 2, kai: 3, mine: 4 }
    const obj1 = players.reduce((acc, cur, index) => {
      acc[cur] = index;
      return acc;
    }, {});
    // { '0': 'mumu', '1': 'soe', '2': 'poe', '3': 'kai', '4': 'mine' }
    const obj2 = players.reduce((acc, cur, index) => {
      acc[index] = cur;
      return acc;
    }, {});

    callings.forEach((currentCall) => {
      const currentCallIndex = obj1[currentCall];
      const prevCallIndex = currentCallIndex - 1;
      const prevCall = obj2[prevCallIndex];

      // obj1 현재변경
      obj1[currentCall] = prevCallIndex;

      // obj1 앞에변경
      obj1[prevCall] = currentCallIndex;

      // obj2 현재변경
      obj2[currentCallIndex] = prevCall;

      // obj2 앞에변경
      obj2[prevCallIndex] = currentCall;
    });
    return Object.values(obj2);
  }
}
