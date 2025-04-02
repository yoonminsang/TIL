/**
 * @Date 2025.04.03
 */

// 첫번째 시도 실패.
// 성능으로 인한 런타임에러
// 중복순열에서 6**10은 maximum call stack error 발생
// 재귀를 heap's 알고리즘으로 개선해도 불가능함.
{
  /** 주사위의 면 개수 **/
  const NUMBER_OF_DICE_SIDE = 6;

  function solution(dice) {
    // console.log('dice', dice);
    const n = dice.length;
    const allIndiciesByNumberOfDiceSide = Array(NUMBER_OF_DICE_SIDE)
      .fill(null)
      .map((_, i) => i);
    const allPermutations = getPermutationsWithRepetition(allIndiciesByNumberOfDiceSide, n);
    const allIndiciesByN = Array(n)
      .fill(null)
      .map((_, i) => i);
    const aGroupCombinations = getCombinations(allIndiciesByN, n / 2);
    const bGroupCombinations = aGroupCombinations.map((aIndicies) => {
      return allIndiciesByN.filter((index) => !aIndicies.includes(index));
    });
    // console.log('n', n);
    // console.log('allPermutations', allPermutations);
    // console.log('aGroupCombinations', aGroupCombinations);
    // console.log('bGroupCombinations', bGroupCombinations);

    let aWinCountArr = [];
    for (let i = 0; i < aGroupCombinations.length; i++) {
      const aGroupCombination = aGroupCombinations[i];
      const bGroupCombination = bGroupCombinations[i];
      // console.log('i', i, aGroupCombination, bGroupCombination);
      let aWinCount = 0;
      allPermutations.forEach((allPermutation) => {
        let aGroupCount = 0;
        aGroupCombination.forEach((aGroupDice, i) => {
          aGroupCount += dice[aGroupDice][allPermutation[i]];
        });
        let bGroupCount = 0;
        bGroupCombination.forEach((bGroupDice, i) => {
          bGroupCount += dice[bGroupDice][allPermutation[i + n / 2]];
        });
        if (aGroupCount > bGroupCount) {
          aWinCount += 1;
        }
      });
      aWinCountArr.push(aWinCount);
    }
    // console.log('aWinCountArr', aWinCountArr);
    const max = Math.max(...aWinCountArr);
    const index = aWinCountArr.findIndex((v) => v === max);
    return aGroupCombinations[index].map((v) => v + 1);
  }

  function getPermutationsWithRepetition(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((i) => [i]);
    const results = [];
    arr.forEach((fixed) => {
      const permutations = getPermutationsWithRepetition(arr, selectNumber - 1);
      const attached = permutations.map((permutation) => [fixed, ...permutation]);
      results.push(...attached);
    });
    return results;
  }

  function getCombinations(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((i) => [i]);
    const result = [];
    arr.forEach((fixed, index) => {
      const rest = arr.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      result.push(...attached);
    });
    return result;
  }

  console.log(
    solution([
      [1, 2, 3, 4, 5, 6],
      [3, 3, 3, 3, 4, 4],
      [1, 3, 3, 4, 4, 4],
      [1, 1, 4, 4, 5, 5],
    ]),
  );

  // [1, 4]
}

// claude 답지보고 품
{
  function solution(dice) {
    const n = dice.length;
    const allIndiciesByN = Array(n)
      .fill(null)
      .map((_, i) => i);
    const aGroupCombinations = getCombinations(allIndiciesByN, n / 2);

    let maxWinCount = -1;
    let bestCombination = null;

    aGroupCombinations.forEach((aGroup) => {
      const aGroupSet = new Set(aGroup);
      const bGroup = allIndiciesByN.filter((index) => !aGroupSet.has(index));
      // console.log('aGroup', aGroup);
      // console.log('bGroup', bGroup);

      const aWinCount = countWins(dice, aGroup, bGroup);
      // console.log('aWinCount', aWinCount);

      if (aWinCount > maxWinCount) {
        maxWinCount = aWinCount;
        bestCombination = aGroup;
      }
    });

    if (!bestCombination) {
      throw new Error('bestCombination is null');
    }

    return bestCombination.map((v) => v + 1);
  }

  function countWins(dice, aGroup, bGroup) {
    let aWins = 0;

    // 주사위 결과의 가능한 모든 합계 계산 (각 그룹별로)
    const aSums = generatePossibleSums(dice, aGroup);
    const bSums = generatePossibleSums(dice, bGroup);
    // console.log('aSums', aSums);
    // console.log('bSums', bSums);

    // 모든 가능한 a와 b의 합계 조합에 대해 승패 계산
    for (const [aSum, aCount] of Object.entries(aSums)) {
      for (const [bSum, bCount] of Object.entries(bSums)) {
        if (Number(aSum) > Number(bSum)) {
          aWins += aCount * bCount;
        }
      }
    }

    return aWins;
  }

  // 그룹의 가능한 모든 주사위 합계와 각 합계가 나오는 경우의 수 계산
  function generatePossibleSums(dice, group) {
    let sums = {};

    // 첫 번째 주사위의 면 값으로 초기화
    for (let i = 0; i < 6; i++) {
      const v = dice[group[0]][i];
      sums[v] = (sums[v] ?? 0) + 1;
    }

    // 나머지 주사위에 대해 가능한 모든 합계 계산
    for (let groupIndex = 1; groupIndex < group.length; groupIndex++) {
      const newSums = {};
      for (const [prevSum, prevCount] of Object.entries(sums)) {
        for (let i = 0; i < 6; i++) {
          const v = dice[group[groupIndex]][i];
          const newSum = Number(prevSum) + v;
          newSums[newSum] = (newSums[newSum] ?? 0) + prevCount;
        }
      }
      sums = newSums;
    }

    return sums;
  }

  function getCombinations(arr, selectNumber) {
    if (selectNumber === 1) return arr.map((i) => [i]);
    const result = [];
    arr.forEach((fixed, index) => {
      const rest = arr.slice(index + 1);
      const combinations = getCombinations(rest, selectNumber - 1);
      const attached = combinations.map((combination) => [fixed, ...combination]);
      result.push(...attached);
    });
    return result;
  }

  console.log(
    solution([
      [1, 2, 3, 4, 5, 6],
      [3, 3, 3, 3, 4, 4],
      [1, 3, 3, 4, 4, 4],
      [1, 1, 4, 4, 5, 5],
    ]),
  );

  // [1, 4]
}
