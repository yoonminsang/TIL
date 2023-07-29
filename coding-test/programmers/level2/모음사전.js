// https://school.programmers.co.kr/learn/courses/30/lessons/84512

// 정답
function solution(word) {
  const dictionary = getDictionary();
  return dictionary.indexOf(word) + 1;
}

function getDictionary(allWords = ['A', 'E', 'I', 'O', 'U'], length = 5) {
  const result = [[...allWords]]; // 배열의 index마다 자리수 중복순열. ex) [[A,E,I,O,U],[AE,AI,AO,AU...]]
  for (let i = 2; i <= length; i++) {
    const sumPairs = getSumPairs(i);
    const temp = [];
    sumPairs.forEach(([a, b]) => {
      const [arr1, arr2] = [result[a - 1], result[b - 1]];
      temp.push(...combineArrays(arr1, arr2));
    });
    result.push(temp);
  }
  return [...new Set(result.flat())].sort();
}

function getSumPairs(n) {
  const result = [];
  for (let a = 1; a < n; a++) {
    const b = n - a;
    result.push([a, b]);
  }
  return result;
}

function combineArrays(arr1, arr2) {
  const combined = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      combined.push(arr1[i] + arr2[j]);
    }
  }
  return combined;
}

/**
 * @Date 2023.07.29
 */

// 콜스택 에러로 실패...
{
  function solution(word) {
    const dictionary = getDictionary();
    console.log(dictionary);
  }

  function getDictionary(allWords = ['A', 'E', 'I', 'O', 'U']) {
    const repeatedAllWords = allWords.flatMap((word) => Array(5).fill(word));
    const set = new Set();
    for (let i = 1; i <= 5; i++) {
      const permutations = getPermutations(repeatedAllWords, i).map((word) => word.join(''));
      permutations.forEach((permutation) => {
        set.add(permutation);
      });
    }
    return [...set].sort();
  }

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
}

// n=a+b를 이용해서 해결
{
  function solution(word) {
    const dictionary = getDictionary();
    return dictionary.indexOf(word) + 1;
  }

  function getDictionary(allWords = ['A', 'E', 'I', 'O', 'U'], length = 5) {
    const result = [[...allWords]]; // 배열의 index마다 자리수 중복순열. ex) [[A,E,I,O,U],[AE,AI,AO,AU...]]
    for (let i = 2; i <= length; i++) {
      const sumPairs = getSumPairs(i);
      const temp = [];
      sumPairs.forEach(([a, b]) => {
        const [arr1, arr2] = [result[a - 1], result[b - 1]];
        temp.push(...combineArrays(arr1, arr2));
      });
      result.push(temp);
    }
    return [...new Set(result.flat())].sort();
  }

  function getSumPairs(n) {
    const result = [];
    for (let a = 1; a < n; a++) {
      const b = n - a;
      result.push([a, b]);
    }
    return result;
  }

  function combineArrays(arr1, arr2) {
    const combined = [];
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        combined.push(arr1[i] + arr2[j]);
      }
    }
    return combined;
  }
}
