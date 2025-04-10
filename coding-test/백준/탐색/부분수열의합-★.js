// https://www.acmicpc.net/problem/1182

/**
 * @Date 2024.03.21
 */
// combinations 함수 쓰면 O(20!*20)이므로 시간복잡도 초과
{
  // let answer = 0;
  // for (let i = 1; i < N; i++) {
  //   const combinations = getCombinations(integerList, i);
  //   combinations.map((combinaion) => {
  //     const sum = combinaion.reduce((acc, cur) => {
  //       return acc + cur;
  //     });
  //     if (sum === S) {
  //       answer += 1;
  //     }
  //   });
  // }
  // console.log(answer);
  // function getCombinations(arr, selectNumber) {
  //   if (selectNumber === 1) return arr.map((i) => [i]); // 1개씩 선택한다면 모든 배열의 원소를 return한다.
  //   const result = [];
  //   arr.forEach((fixed, index) => {
  //     const rest = arr.slice(index + 1); // fixed의 다음 index 부터 끝까지의 배열(조합)
  //     const combinations = getCombinations(rest, selectNumber - 1); // rest에 대한 조합을 구한다.
  //     const attached = combinations.map((combination) => [fixed, ...combination]); // fixed와 rest에 대한 조합을 붙인다.
  //     result.push(...attached); // result 배열에 push
  //   });
  //   return result;
  // }
}

/**
 * @Date 2024.03.21
 */
// 답지보고 생각함. O(2^n)
{
  let answer = 0;
  const recursive = (index, sum) => {
    if (index === N) return;
    if (sum + integerList[index] === S) answer += 1;
    recursive(index + 1, sum);
    recursive(index + 1, sum + integerList[index]);
  };
  recursive(0, 0);
  console.log(answer);
}

/**
 * @Date 2024.06.26
 */
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  const [oneLine, twoLine] = input.split('\n');
  const [N, S] = oneLine.split(' ').map(Number);
  const integerList = twoLine.split(' ').map(Number);

  let answer = 0;

  // 모든 배열의 각각의 원소는 추가할수도잇고 추가하지 않을 수도 잇다.
  function recursive(index, sum) {
    if (index === N) {
      return;
    }
    // sum === S를 넣으면 안됌. 왜냐하면 추가하지 않는 경우가 있기 때문에 중복이 생김
    if (sum + integerList[index] === S) {
      answer += 1;
    }
    // 추가하는 경우
    recursive(index + 1, sum);
    // 추가하지 않는 경우
    recursive(index + 1, sum + integerList[index]);
  }
  recursive(0, 0);
  console.log(answer);
}

/**
 * @Date 2025.01.04
 */
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString();
  // const input = `5 0
  // -7 -3 -2 5 8`;
  const [oneLine, twoLine] = input.split('\n');
  const [N, S] = oneLine.split(' ').map(Number);
  const list = twoLine.split(' ').map(Number);

  function solution(N, S, list) {
    let answer = 0;
    fn(0, 0);
    return answer;
    function fn(index, sum) {
      if (index === N) {
        return;
      }
      if (sum + list[index] === S) {
        answer += 1;
      }
      // 추가하는 경우
      fn(index + 1, sum);
      // 추가하지 않는 경우
      fn(index + 1, sum + list[index]);
    }
  }

  console.log(solution(N, S, list));
}
