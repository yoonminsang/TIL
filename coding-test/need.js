function getPermutations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((i) => [i]); // 1개씩 선택한다면 모든 배열의 원소를 return한다.
  const results = [];
  arr.forEach((fixed, index) => {
    const rest = arr.slice(0, index).concat(arr.slice(index + 1)); // fixed를 제외한 나머지 배열(순열)
    const permutations = getPermutations(rest, selectNumber - 1); // rest에 대한 순열을 구한다.
    const attached = permutations.map((permutation) => [fixed, ...permutation]); // fixed와 rest에 대한 조합을 붙인다.
    results.push(...attached); // result 배열에 push
  });
  return results;
}

function getCombinations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((i) => [i]); // 1개씩 선택한다면 모든 배열의 원소를 return한다.
  const result = [];
  arr.forEach((fixed, index) => {
    const rest = arr.slice(index + 1); // fixed의 다음 index 부터 끝까지의 배열(조합)
    const combinations = getCombinations(rest, selectNumber - 1); // rest에 대한 조합을 구한다.
    const attached = combinations.map((combination) => [fixed, ...combination]); // fixed와 rest에 대한 조합을 붙인다.
    result.push(...attached); // result 배열에 push
  });
  return result;
}

var example = ['a', 'b', 'c'];
var result = getPermutations(example, 2);
console.log(result);
// [
//   ['a', 'b'],
//   ['a', 'c'],
//   ['b', 'a'],
//   ['b', 'c'],
//   ['c', 'a'],
//   ['c', 'b'],
// ];

var example = [1, 2, 3, 4];
var result = getPermutations(example, 3);
console.log(result);
// [
//   [1, 2, 3],
//   [1, 2, 4],
//   [1, 3, 2],
//   [1, 3, 4],
//   [1, 4, 2],
//   [1, 4, 3],
//   [2, 1, 3],
//   [2, 1, 4],
//   [2, 3, 1],
//   [2, 3, 4],
//   [2, 4, 1],
//   [2, 4, 3],
//   [3, 1, 2],
//   [3, 1, 4],
//   [3, 2, 1],
//   [3, 2, 4],
//   [3, 4, 1],
//   [3, 4, 2],
//   [4, 1, 2],
//   [4, 1, 3],
//   [4, 2, 1],
//   [4, 2, 3],
//   [4, 3, 1],
//   [4, 3, 2],
// ];

var example = ['a', 'b', 'c'];
var result = getCombinations(example, 2);
console.log(result);

var example = [1, 2, 3, 4];
var result = getCombinations(example, 2);
console.log(result);

// 2차원 배열 깊은복사
a = [
  [1, 0, 0, 3],
  [2, 0, 0, 0],
  [0, 0, 0, 2],
  [3, 0, 1, 0],
];
b = Array.from({ length: a.length }, (v, i) => a[i]);

// 2차원 배열 만드는 방법 두가지
a = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => false));
b = Array(4)
  .fill()
  .map(() => Array(4).fill(false));
