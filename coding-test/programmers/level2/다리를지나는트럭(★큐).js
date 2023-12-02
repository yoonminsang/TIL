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
