/**
 * 선형검색
 * @description 앞에서부터 차례대로 검색합니다.
 * @param {number[]} arr
 * @param {number} n
 * @returns
 *   arr에 n이 포함되지 않다면 false
 *   arr에 n이 포함된다면 index
 */
function linearSearch(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) return i;
  }
  return false;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 6)); // 5
console.log(linearSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // false

/**
 * 이진 검색
 * @description 중간 인덱스 값을 확인해 절반씩 범위를 줄여가며 검색합니다. 단, arr는 정렬되었다고 가정합니다.
 * @param {number[]} arr
 * @param {number} n
 * @returns
 *   arr에 n이 포함되지 않다면 false
 *   arr에 n이 포함된다면 index
 */
function binarySearch(arr, n) {
  let [left, right] = [0, arr.length - 1];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] < n) {
      left = mid + 1;
    } else if (arr[mid] < n) {
      right = mid - 1;
    } else {
      return mid;
    }
  }
  return false;
}
console.log(binarySearch([1, 2, 3, 4], 4)); // 3
console.log(binarySearch([1, 2, 3, 4], 5)); // false
