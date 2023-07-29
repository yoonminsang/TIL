// https://school.programmers.co.kr/learn/courses/30/lessons/42839

// 정답
function solution(numbers) {
  const numbersArr = numbers.split('').map(Number);
  const set = new Set();
  for (let i = 1; i <= numbersArr.length; i++) {
    const permutations = getPermutations(numbersArr, i);
    permutations.map((permutation) => {
      const number = Number(permutation.join(''));
      set.add(number);
    });
  }
  return [...set].reduce((acc, cur) => {
    if (isPrime(cur)) return acc + 1;
    return acc;
  }, 0);
}

function isPrime(number) {
  if (number < 2) return false;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }
  return true;
}

function getPermutations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((fixed, index) => {
    const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const permutationsWithFixed = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...permutationsWithFixed);
  });
  return result;
}

/**
 * @Date 2023.07.29
 */
{
  function solution(numbers) {
    const numbersArr = numbers.split('').map(Number);
    const set = new Set();
    for (let i = 1; i <= numbersArr.length; i++) {
      const permutations = getPermutations(numbersArr, i);
      permutations.map((permutation) => {
        const number = Number(permutation.join(''));
        set.add(number);
      });
    }
    return [...set].reduce((acc, cur) => {
      if (isPrime(cur)) return acc + 1;
      return acc;
    }, 0);
  }

  function isPrime(number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }

  function getPermutations(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((v) => [v]);
    const result = [];
    arr.forEach((fixed, index) => {
      const rest = [...arr.slice(0, index), ...arr.slice(index + 1)];
      const permutations = getPermutations(rest, selectNumber - 1);
      const permutationsWithFixed = permutations.map((permutation) => [fixed, ...permutation]);
      result.push(...permutationsWithFixed);
    });
    return result;
  }
}
