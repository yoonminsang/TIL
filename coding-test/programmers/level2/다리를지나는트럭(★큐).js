// https://school.programmers.co.kr/learn/courses/30/lessons/42583

// ★ 큐 문제 감잡기 좋음

// 정답
function solution(bridge_length, weight, truck_weights) {
  const queue = [{ weight: 0, time: 0 }];
  let bridgeWeight = 0;
  let time = 0;
  while (queue.length) {
    if (queue[0].time === time) {
      bridgeWeight -= queue.shift().weight;
    }
    if (bridgeWeight + truck_weights[0] <= weight) {
      const firstTruckWeight = truck_weights.shift();
      bridgeWeight += firstTruckWeight;
      queue.push({ weight: firstTruckWeight, time: time + bridge_length });
    } else if (queue[0]) {
      time = queue[0].time - 1;
    }
    time++;
  }
  return time;
}

/**
 * @Date 2023.07.29
 */
{
  function solution(bridge_length, weight, truck_weights) {
    const queue = [{ weight: 0, time: 0 }];
    let bridgeWeight = 0;
    let time = 0;
    while (queue.length) {
      if (queue[0].time === time) {
        bridgeWeight -= queue.shift().weight;
      }
      if (bridgeWeight + truck_weights[0] <= weight) {
        const firstTruckWeight = truck_weights.shift();
        bridgeWeight += firstTruckWeight;
        queue.push({ weight: firstTruckWeight, time: time + bridge_length });
      } else if (queue[0]) {
        time = queue[0].time - 1;
      }
      time++;
    }
    return time;
  }
}

// 다른 방법
{
  function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    const queue = Array(bridge_length).fill(0);
    while (truck_weights.length > 0) {
      queue.shift();
      const sum = queue.reduce((acc, cur) => acc + cur, 0);
      if (truck_weights[0] + sum <= weight) queue.push(truck_weights.shift());
      else queue.push(0);
      time++;
    }
    return time + bridge_length;
  }
}

/**
 * @Date 2025.01.09
 */
{
  function solution(bridge_length, weight, truck_weights) {
    const bridge = Array(bridge_length).fill(null);
    let time = 0;
    while (truck_weights.length > 0) {
      bridge.shift();
      const bridgeWeight = sumArray(bridge);
      if (bridgeWeight + truck_weights[0] <= weight) {
        const newWeight = truck_weights.shift();
        bridge.push(newWeight);
      } else {
        bridge.push(null);
      }
      time += 1;
    }
    return time + bridge_length;
  }

  function sumArray(arr) {
    return arr.reduce((acc, cur) => {
      if (cur === null) return acc;
      return acc + cur;
    }, 0);
  }
}

/**
 * @Date 2026.01.10
 * @time 1시간
 * 문제를 잘못봤다... 트럭이 순서로 올라와야하는데 나는 최소 시간으로 올라오게 만들었다.
 * 틀린게 없는것같은데 틀리니까 멘탈이 흔들렸다. 사실 내가 푼게 이거 한단계 더 어려운 버전이기는 하다.
 * 마음을 가라앉히고 천천히 차분하게 마음먹자. 처음부터 다시 봐도 10분도 안걸려서 풀 문제다.
 */
{
  function solution(bridge_length, weight, truck_weights) {
    const pendingTruckWeights = truck_weights.slice();
    const bridgeArr = Array(bridge_length).fill(null);

    let time = 0;
    while (pendingTruckWeights.length > 0) {
      bridgeArr.pop();
      const currentBridgeWeight = bridgeArr.reduce((acc, cur) => acc + (cur ?? 0), 0);
      if (weight >= currentBridgeWeight + pendingTruckWeights[0]) {
        bridgeArr.unshift(pendingTruckWeights.shift());
      } else {
        bridgeArr.unshift(null);
      }
      time += 1;
    }
    return time + bridge_length;
  }
}
