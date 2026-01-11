// https://www.acmicpc.net/problem/2805

/**
 * @Date 2024.03.25
 */
// 시간복잡도 초과
// 시간복잡도를 줄일려고 이것저것 생각했지만 while문이 최대 크기에 의존적이라는 것을 파악하지 못함
// 처음부터 이진탐색인가? 했는데 생각이 꼬인듯...
// ps. (
// for문돌거면 이진탐색도 고려
// M이 2*10^9인데 시간제한이 1초인걸보니 이진탐색?
// 1부터 M가지 이진탐색으로 돌면 성공할듯
// )
// 시간복잡도를 줄이기위해서 incrementList를 했기 때문에 지금 코드에 이진 탐색을 적용한다면
// O(nlogn)+O(n)+O(1) => O(nlogn)이 되기 때문에 시간복잡도 상 이점이 있음.
// 근데 지금 주어진 문제의 N,M을 살펴보면 logn과 logm의 차이가 크지 않기 때문에 굳이 그럴필요는 없어보임.
// log2(10^30)이 겨우 10^2임.
// log2(1024=10^3)는 10임.
// 즉 이진탐색할때는 숫자의 크기가 엄~~~청 차이가 나지 않는다면 별 상관없음.
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  // const [oneLine, twoLine] = input.split('\n');
  // const [N, M] = oneLine.split(' ').map(Number);
  // const treeList = twoLine.split(' ').map(Number);
  // const [N, M] = [4, 7];
  // const treeList = [20, 15, 10, 17];
  // treeList.sort((a, b) => b - a);
  // const incrementList = Array(treeList.length)
  //   .fill(null)
  //   .map((_, index) => index + 1);
  // let index = 0;
  // let height = treeList[0] - 1;
  // let sum = 0;
  // while (height >= 0) {
  //   if (height < treeList[index + 1]) {
  //     index += 1;
  //   }
  //   sum += incrementList[index];
  //   if (sum >= M) {
  //     console.log(height);
  //     break;
  //   }
  //   height -= 1;
  // }
}

/**
 * @Date 2024.03.25
 */
// 단순한 이진탐색
// O(nlogm)
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  const [oneLine, twoLine] = input.split('\n');
  const [N, M] = oneLine.split(' ').map(Number);
  const treeList = twoLine.split(' ').map(Number);
  // const [N, M] = [4, 7];
  // const treeList = [20, 15, 10, 17];

  let low = 0;
  let high = Math.max(...treeList);
  let result = 0;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const sum = treeList.reduce((acc, cur) => {
      return acc + (cur - mid > 0 ? cur - mid : 0);
    }, 0);

    if (sum >= M) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(result);
}

/**
 * @Date 2024.07.03
 */
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  const input = `4 7
20 15 10 17`;

  const [oneline, twoline] = input.trim().split('\n');
  const [N, M] = oneline.split(' ');
  const treeList = twoline.split(' ').map(Number);

  function solution(N, M, treeList) {
    let left = 0;
    let right = Math.max(...treeList);
    let result = right;

    while (left <= right) {
      const center = Math.floor((left + right) / 2);
      const cuttingTree = getCuttingTree(treeList, center);
      if (cuttingTree >= M) {
        left = center + 1;
        result = center;
      } else {
        right = center - 1;
      }
    }
    return result;
  }
  console.log(solution(N, M, treeList));

  function getCuttingTree(treeList, height) {
    return treeList.reduce((acc, cur) => {
      const diff = cur - height;
      if (diff > 0) {
        return acc + diff;
      }
      return acc;
    }, 0);
  }

  // Math.max(...treeList): 10^6
  // 이진탐색: log(2)10^9
}

/**
 * @Date 2025.01.04
 */
{
  // const fs = require('fs');
  // const input = fs.readFileSync('/dev/stdin').toString();
  // const input = `4 7
  // 20 15 10 17`;
  const input = `5 20
4 42 40 26 46`;
  const [oneLine, twoLine] = input.split('\n');
  const [N, M] = oneLine.split(' ').map(Number);
  const list = twoLine.split(' ').map(Number);

  function solution(N, M, list) {
    let min = 0;
    let max = Math.max(...list);
    let result = max;
    while (min <= max) {
      const mid = Math.floor((min + max) / 2);
      const cuttingTreeHeight = list.reduce((acc, cur) => {
        return acc + Math.max(cur - mid, 0);
      }, 0);
      if (cuttingTreeHeight >= M) {
        min = mid + 1;
        result = mid;
      } else {
        max = mid - 1;
      }
    }
    return result;
  }

  console.log(solution(N, M, list));
}

/**
 * @Date 2026.01.11
 * @time 16분 44초
 * 처음에 아래와 같이 풀었다가 틀림. 지금처럼 정확한 결과값이 center에 나오지 않는 경우는 center 값을 명확하게 바꿔줘야함.
```
   if (cutTreeLength > M) {
      left = center + 1;
    } else if (cutTreeLength < M) {
      right = center - 1;
    } else {
      return center;
    }
  }
  return left;
```
 */
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  // const input = `4 7
  // 20 15 10 17`;
  // 15
  // const input = `5 20
  // 4 42 40 26 46`;
  // // 36
  // const input = `4 6
  // 20 15 10 17`;
  const [oneLine, twoLine] = input.split('\n');
  const [N, M] = oneLine.split(' ').map(Number);
  const treeList = twoLine.split(' ').map(Number);

  // N: 나무의수, M: 집으로 가져가야하는 나무의 길이, treeList: 나무 목록
  function solution(N, M, treeList) {
    let left = 0;
    let right = Math.max(...treeList);
    let result = 0;
    while (left <= right) {
      const center = Math.floor((left + right) / 2);
      const cutTreeLength = treeList.reduce((acc, cur) => {
        return acc + Math.max(cur - center, 0);
      }, 0);
      // console.log(left, center, right, cutTreeLength);
      if (cutTreeLength >= M) {
        left = center + 1;
        result = center;
      } else {
        right = center - 1;
      }
    }
    return result;
  }
  console.log(solution(N, M, treeList));
}
