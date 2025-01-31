// 성능 테스트.
/**
console.time('check')
const n =10
getPermutations(Array(n).fill(null).map((_,index)=>index+1),n)
console.timeEnd('check')
*/

// 3946.15478515625 ms
// 순열 개선 스택
{
  function getPermutations(arr, selectNumber) {
    const results = [];
    const stack = [{ selected: [], remaining: arr }];

    while (stack.length > 0) {
      const { selected, remaining } = stack.pop();

      if (selected.length === selectNumber) {
        results.push(selected);
        continue;
      }

      for (let i = 0; i < remaining.length; i++) {
        stack.push({
          selected: [...selected, remaining[i]],
          remaining: [...remaining.slice(0, i), ...remaining.slice(i + 1)],
        });
      }
    }

    return results;
  }
}

// 3853.98388671875 ms
// 순열 개선. 꼬리물기 최적화
{
  function getPermutations(arr, selectNumber) {
    const results = [];

    function permute(selected, remaining) {
      if (selected.length === selectNumber) {
        results.push(selected);
        return;
      }

      for (let i = 0; i < remaining.length; i++) {
        permute([...selected, remaining[i]], [...remaining.slice(0, i), ...remaining.slice(i + 1)]);
      }
    }

    permute([], arr);
    return results;
  }
}

// 355.59814453125 ms
// 순열 개선 Heap’s Algorithm.
{
  function getPermutations(arr, selectNumber) {
    const storeIfValid = () => {
      result.push(arr.slice(0, selectNumber));
    };

    const result = [];
    const c = Array(arr.length).fill(0); // Heap’s Algorithm에서 사용하는 스왑 인덱스 기록 배열 (카운터 역할)
    let index = 1, // 현재 처리중인 index
      k, // 스왑을 위한 임시 변수
      p; // 스왑을 위한 임시 변수

    storeIfValid();

    while (index < arr.length) {
      if (c[index] < index) {
        k = index % 2 && c[index]; // 홀수 인덱스는 c[i], 짝수 인덱스는 0
        [arr[index], arr[k]] = [arr[k], arr[index]]; // Swap
        storeIfValid();
        ++c[index];
        index = 1;
      } else {
        c[index] = 0;
        ++index;
      }
    }

    return result;
  }
}

// 조합개선 Heap’s Algorithm
{
  function getCombinations(arr, selectNumber) {
    const result = [];
    const n = arr.length;

    const backtrack = (start, path) => {
      if (path.length === selectNumber) {
        result.push([...path]);
        return;
      }

      for (let i = start; i < n; i++) {
        path.push(arr[i]);
        backtrack(i + 1, path);
        path.pop(); // 백트래킹 (원상복구)
      }
    };

    backtrack(0, []);
    return result;
  }
}
