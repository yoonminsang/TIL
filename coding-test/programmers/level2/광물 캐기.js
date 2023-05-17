// https://school.programmers.co.kr/learn/courses/30/lessons/172927

/**
 * @Date 2023.05.17
 */

// 완전탐색으로 풀었는데 런타임에러뜸. 다시 생각해봐야될듯.
// 중간에 시간복잡도 문제 생길것같다고 생각은 들었는데 일단 함수형프로그래밍 관점에서 생각을 해보면서 풀어봄.
/*
function getPermutations(arr, selectNumber) {
  if (selectNumber === 1) return arr.map((v) => [v]);
  const result = [];
  arr.forEach((fixed, index) => {
    const rest = arr.slice(0, index).concat(arr.slice(index + 1));
    const permutations = getPermutations(rest, selectNumber - 1);
    const attachments = permutations.map((permutation) => [fixed, ...permutation]);
    result.push(...attachments);
  });
  return result;
}

function duplicateStr(str, n) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(str);
  }
  return result;
}

function sumArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

function removeDuplicates(arr) {
  const uniqueArrays = [];
  const set = new Set();

  for (const array of arr) {
    const stringifiedArray = JSON.stringify(array);

    if (!set.has(stringifiedArray)) {
      uniqueArrays.push(array);
      set.add(stringifiedArray);
    }
  }

  return uniqueArrays;
}

function solution(picks, minerals) {
  const permutations = removeDuplicates(getPermutations(getForPermutationsArr(picks), sumArr(picks)));
  let min = Infinity;
  permutations.forEach((permutation) => {
    for (let i = 0; i < permutation.length; i++) {
      min = Math.min(min, getFatigue(minerals, permutation));
    }
  });
  return min;

  function getForPermutationsArr(picks) {
    const result = [];
    picks.forEach((v, i) => {
      const str = (() => {
        if (i === 0) return DIAMOND;
        if (i === 1) return IRON;
        if (i === 2) return STONE;
        throw new Error('wrong picks length');
      })();
      const arr = duplicateStr(str, v);
      if (arr.length > 0) result.push(...arr);
    });
    return result;
  }

  function getFatigue(minerals, permutation) {
    let result = 0;
    minerals.forEach((mineral, mineralIndex) => {
      const pick = permutation[Math.floor(mineralIndex / 5)];
      switch (mineral) {
        case DIAMOND:
          switch (pick) {
            case DIAMOND:
              result += 1;
              break;
            case IRON:
              result += 5;
              break;
            case STONE:
              result += 25;
              break;
          }
          break;
        case IRON:
          switch (pick) {
            case DIAMOND:
              result += 1;
              break;
            case IRON:
              result += 1;
              break;
            case STONE:
              result += 5;
              break;
          }
          break;
        case STONE:
          switch (pick) {
            case DIAMOND:
              result += 1;
              break;
            case IRON:
              result += 1;
              break;
            case STONE:
              result += 1;
              break;
          }
          break;
        default:
          throw new Error('wrong mineral');
      }
    });
    return result;
  }
}

const DIAMOND = 'diamond';
const IRON = 'iron';
const STONE = 'stone';
*/

// 다른사람 얘기를 참고해서 풀어봄. => 실패
// 찾아보니까 weight로 한번에 계산을 하려던게 문제였음. 5=> 무조건 iron을으로 판단했는데 1,1,1,1이 모이면 iron이 됨. 즉 이경우에 에러가남.
/*
function solution(_picks, minerals) {
  const picks = [..._picks];
  const mineralWeights = (() => {
    const result = [];
    let acc = 0;
    minerals.slice(0, sumArr(picks) * 5).forEach((mineral, i) => {
      if (i !== 0 && i % 5 === 0) {
        result.push(acc);
        acc = 0;
      }
      acc += mineralToWeight(mineral);
    });
    if (acc !== 0) {
      result.push(acc);
    }
    return result;
  })();
  mineralWeights.sort((a, b) => b - a);
  return mineralWeights.reduce((acc, mineralWeight) => {
    const result = acc + calculate(picks, mineralWeight);
    return result;
  }, 0);
}

function sumArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

function calculate(picks, mineralWeight) {
  if (picks[0] > 0) {
    picks[0] -= 1;
    return 5;
  }
  if (picks[1] > 0) {
    picks[1] -= 1;
    const diamondCount = Math.floor(mineralWeight / 25);
    mineralWeight %= 25;
    const ironCount = Math.floor(mineralWeight / 5);
    mineralWeight %= 5;
    return diamondCount * 5 + ironCount * 1 + mineralWeight * 1;
  }
  if (picks[2] > 0) {
    picks[2] -= 1;
    const diamondCount = Math.floor(mineralWeight / 25);
    mineralWeight %= 25;
    const ironCount = Math.floor(mineralWeight / 5);
    mineralWeight %= 5;
    return diamondCount * 25 + ironCount * 5 + mineralWeight * 1;
  }
  return 0;
}

function mineralToWeight(mineral) {
  if (mineral === DIAMOND) return 25;
  if (mineral === IRON) return 5;
  if (mineral === STONE) return 1;
  throw new Error('mineralToWeight err');
}

const DIAMOND = 'diamond';
const IRON = 'iron';
const STONE = 'stone';
*/

// 세번째 시도 성공
// 사실 두번째 시도가 실패한건 간단하게 풀려다가 실패한거라서 추가적인 설명은 필요없을듯
function solution(_picks, minerals) {
  const picks = [..._picks];
  const sortedIndex = getSortedIndex(picks, minerals);
  return sortedIndex.reduce((acc, index) => {
    return acc + calculate(picks, minerals.slice(index, index + 5));
  }, 0);

  function getSortedIndex(picks, minerals) {
    const result = [];
    let acc = 0;
    minerals.slice(0, sumArr(picks) * 5).forEach((mineral, i) => {
      if (i !== 0 && i % 5 === 0) {
        result.push(acc);
        acc = 0;
      }
      acc += mineralToWeight(mineral);
    });
    if (acc !== 0) {
      result.push(acc);
    }
    return result
      .map((acc, index) => ({ index, acc }))
      .sort((a, b) => b.acc - a.acc)
      .map(({ index }) => index * 5);
  }

  function calculate(picks, minerals) {
    if (picks[0] > 0) {
      picks[0] -= 1;
      return minerals.reduce((acc, mineral) => {
        return acc + 1;
      }, 0);
    }
    if (picks[1] > 0) {
      picks[1] -= 1;
      return minerals.reduce((acc, mineral) => {
        if (mineral === DIAMOND) return acc + 5;
        return acc + 1;
      }, 0);
    }
    if (picks[2] > 0) {
      picks[2] -= 1;
      return minerals.reduce((acc, mineral) => {
        if (mineral === DIAMOND) return acc + 25;
        if (mineral === IRON) return acc + 5;
        return acc + 1;
      }, 0);
    }
    return 0;
  }
}

function sumArr(arr) {
  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
}

function mineralToWeight(mineral) {
  if (mineral === DIAMOND) return 25;
  if (mineral === IRON) return 5;
  if (mineral === STONE) return 1;
  throw new Error('mineralToWeight err');
}

const DIAMOND = 'diamond';
const IRON = 'iron';
const STONE = 'stone';
