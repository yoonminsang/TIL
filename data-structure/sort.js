/**
 * 버블정렬 O(n^2)
 * @description 가장 간단한 정렬 알고리즘. 인접한 두 개의 값을 비교하며 정렬
 * @param {number[]} arr
 * @returns arr
 */
function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, i, j);
    }
  }
  return arr;
}
console.log(bubbleSort([6, 5, 4, 3, 2, 1])); // [1,2,3,4,5,6]

/**
 * 선택 정렬 O(n^2)
 * @description 가장 작은 항목을 찾아서 해당 항목을 배열의 현 위치에 삽입하는 방식으로 동작하는 정렬
 * @param {number[]} arr
 * @returns arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    if (i !== minIndex) swap(arr, i, minIndex);
  }
  return arr;
}
console.log(selectionSort([6, 5, 4, 3, 2, 1])); // [1,2,3,4,5,6]

/**
 * 삽입 정렬 O(n^2)
 * @description 배열을 순차적으로 검색하면서 정렬되지 않은 항목들을 배열의 왼쪽의 정렬된 부분으로 이동시키며 정렬
 * @param {number[]} arr
 * @returns arr
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    const temp = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = temp;
  }
  return arr;
}
console.log(insertionSort([6, 5, 4, 3, 2, 1])); // [1,2,3,4,5,6]

/**
 * 병합 정렬 O(nlog(2)n)
 * @description 분할 정복이라는 알고리즘에 근거하여 만들어진 정렬
    분할 : 해결이 용이한 단계까지 문제를 분할
    정복 : 해결이 용이한 수준까지 분할된 문제를 해결
    결합 : 분할해서 해결한 결과를 결합하여 마무리한다.
 * @param {number[]} arr
 * @returns arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const [leftArr, rightArr] = [arr.slice(0, mid), arr.slice(mid)];
  return merge(mergeSort(leftArr), mergeSort(rightArr));

  function merge(leftArr, rightArr) {
    const result = [];
    let [leftIndx, rightIndex] = [0, 0];
    while (leftIndx < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndx] < rightArr[rightIndex]) result.push(leftArr[leftIndx++]);
      else result.push(rightArr[rightIndex++]);
    }
    return result.concat(leftArr.slice(leftIndx), rightArr.slice(rightIndex));
  }
}
console.log(mergeSort([6, 5, 4, 3, 2, 1])); // [1,2,3,4,5,6]

/**
 * 빠른 정렬 O(nlog(2)n)
 * @description 기준점을 획득한 다음 해당 기준점을 기준으로 배열을 나눈다.
    1. 배열의 중간 지점에 위치한 원소(피봇)을 선택
    2. 2개의 포인터를 생성. 
      2-1. 피봇보다 더 작은 원소가 나올 때까지 좌측 포인터를 움직임
      2-2. 피봇보다 더 큰 원소가 나올 때까지 우측 포인터를 움직인 다음,
      2-3. 두 포인터에 해당하는 원소를 서로 교환한다.
      2-4. 이 과정을 좌측 포인터가 우측 포인터보다 더 커질 때까지 반복
      이로써 피봇보다 작은 원소는 좌측에, 큰 원소는 우측에 나열
      이걸 파티션이라 한다.
    3. 피봇을 중심으로 나뉜 두 서브배열에 대해 정렬이 끝날 때까지 위 과정을 재귀적으로 반복
 * @param {number[]} arr
 * @returns arr
 */
function quickSort(arr) {
  return quickSortHelper(arr, 0, arr.length - 1);
  function quickSortHelper(arr, leftIndex, rightIndex) {
    if (arr.length <= 1) return arr;

    const index = partition(arr, leftIndex, rightIndex);
    // 왼쪽 부분 배열에 대한 정렬을 수행하기 때문에 index-1을 해줌
    if (leftIndex < index - 1) quickSortHelper(arr, leftIndex, index - 1);
    if (index < rightIndex) quickSortHelper(arr, index, rightIndex);
    return arr;
  }
  function partition(arr, _leftIndex, _rightIndex) {
    let [leftIndex, rightIndex] = [_leftIndex, _rightIndex];
    const pivotIndex = Math.floor((leftIndex + rightIndex) / 2);
    const pivot = arr[pivotIndex];

    // 2-4. 이 과정을 좌측 포인터가 우측 포인터보다 더 커질 때까지 반복
    while (leftIndex <= rightIndex) {
      // 2-1. 피봇보다 더 작은 원소가 나올 때까지 좌측 포인터를 움직임
      while (pivot > arr[leftIndex]) leftIndex += 1;
      // 2-2. 피봇보다 더 큰 원소가 나올 때까지 우측 포인터를 움직인 다음,
      while (pivot < arr[rightIndex]) rightIndex -= 1;

      if (leftIndex <= rightIndex) {
        // 2-3. 두 포인터에 해당하는 원소를 서로 교환한다.
        swap(arr, leftIndex, rightIndex);
        leftIndex += 1;
        rightIndex -= 1;
      }
    }
    return leftIndex;
  }
}
console.log(quickSort([6, 5, 4, 3, 2, 1])); // [1,2,3,4,5,6]

function countSort() {}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
