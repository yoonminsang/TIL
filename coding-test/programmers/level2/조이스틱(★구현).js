// https://school.programmers.co.kr/learn/courses/30/lessons/42860#

// ★ 구현

// 정답
function solution(name) {
  const allJoiStickyOperationCount = getAllJoiStickyOperationCount(name);

  // default: 한 방향으로 갔을 때 개수
  let moveCount = name.length - 1;

  for (let index = 0; index < name.length; index++) {
    // A가 아닌 다음 index
    let nextIndex = index + 1;
    while (nextIndex < name.length && name.charAt(nextIndex) === 'A') {
      nextIndex++;
    }

    moveCount = Math.min(moveCount, index * 2 + name.length - nextIndex, (name.length - nextIndex) * 2 + index);
  }
  return allJoiStickyOperationCount + moveCount;
}

function getAllJoiStickyOperationCount(name) {
  return name.split('').reduce((acc, cur) => {
    return acc + Math.min(cur.charCodeAt(0) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - cur.charCodeAt(0) + 1);
  }, 0);
}

/**
 * @Date 2023.07.29
 */

// 첫번째 시도 실패
{
  // aski
  // 65 A
  // 90 Z
  // charCodeAt
  // fromCharCode

  function solution(name) {
    let completeHeadCount = 0,
      completeTailCount = 0;
    let isRightDirection = true;
    let count = 0;

    // 현재 index에서 조이스틱 조정하고 방향결정
    while (name.length !== getCompleteCount()) {
      const index = isRightDirection ? completeHeadCount : name.length - 1 - completeTailCount;
      const aski = name.charCodeAt(index);
      count += getJoiStickyOperationCount(aski);
      isRightDirection ? (completeHeadCount += 1) : (completeTailCount += 1);

      const nextACount = (() => {
        let result = 0;
        // 방향에 따라 다른 값 연산
        const plusOrMinus = isRightDirection ? 1 : -1;
        let tempIndex = index + plusOrMinus;
        while (name[tempIndex] === 'A') {
          result += 1;
          tempIndex += plusOrMinus;
        }
        return result;
      })();

      // A만 남은경우 return
      if (nextACount + getCompleteCount() === name.length) {
        return count;
      }

      // 다음 A가 몇개인지 여부로 direction 방향 결정
      if (nextACount >= getCompleteCount()) {
        isRightDirection = !isRightDirection;
        count += getCompleteCount();
      } else {
        count += 1;
      }
    }
    return count;
    function getCompleteCount() {
      return completeHeadCount + completeTailCount;
    }
  }

  // A 65 65-65=0
  // N 78 78-65=13 91-78=13
  // Z 90 91-90=1
  function getJoiStickyOperationCount(askiNumber) {
    if (askiNumber <= 78) return askiNumber - 65;
    return 91 - askiNumber;
  }
}

/**
 * @Date 2023.09.24
 */

// 두번째 시도... 실패
{
  // aski
  // 65 A
  // 90 Z
  // charCodeAt
  // fromCharCode

  function solution(name) {
    const allJoiStickyOperationCount = getAllJoiStickyOperationCount(name);

    const completeArr = Array(name.length)
      .fill(null)
      .map((_, index) => (name[index] === 'A' ? true : false));
    completeArr[0] = true;

    // 처음 direction을 결정해야함
    let direction = 'right';
    let directionCursorCount = 0;
    while (!completeArr.every(Boolean)) {
      if (directionCursorCount === 10) break;
      const tempCompleteArr = [...completeArr];
      const nextLeftIndex = [...tempCompleteArr].indexOf(false);
      const nextRightIndex = name.length - [...tempCompleteArr].reverse().indexOf(false);
      if (direction === 'right') {
        const currentIndex = nextLeftIndex;
        if (currentIndex === 'A') {
          let j = currentIndex;
          for (j; j < name.length - 1; j++) {
            if (name[j] !== 'A') break;
          }
          const nextACount = j - currentIndex;
          const changeDirectionCount = currentIndex + nextRightIndex + 1;
          if (nextACount > changeDirectionCount) {
            direction === 'left';
            directionCursorCount += changeDirectionCount;
            completeArr[nextRightIndex - 1] = true;
          }
        } else {
          directionCursorCount += 1;
          completeArr[nextLeftIndex] = true;
        }
      } else {
        const currentIndex = nextRightIndex;
        if (currentIndex === 'A') {
          let j = currentIndex;
          for (j; j >= 0; j--) {
            if (name[j] !== 'A') break;
          }
          const nextACount = currentIndex - j;
          const changeDirectionCount = name.length - currentIndex + nextRightIndex + 1;
          if (nextACount > changeDirectionCount) {
            direction === 'right';
            directionCursorCount += changeDirectionCount;
            completeArr[nextLeftIndex + 1] = true;
          }
        } else {
          directionCursorCount += 1;
          completeArr[nextRightIndex] = true;
        }
      }
    }
    return allJoiStickyOperationCount + directionCursorCount;
  }

  function getAllJoiStickyOperationCount(name) {
    return name.split('').reduce((acc, cur) => {
      return acc + getJoiStickyOperationCount(cur.charCodeAt(0));
    }, 0);

    // A 65 65-65=0
    // N 78 78-65=13 91-78=13
    // Z 90 91-90=1
    function getJoiStickyOperationCount(askiNumber) {
      if (askiNumber <= 78) return askiNumber - 65;
      return 91 - askiNumber;
    }
  }
}

// 세번째 시도... 실패
// 문제를 너무 복잡하게 풀다보니 코드가 복잡해지고 예외케이스가 계속 발생했다.
{
  // aski
  // 65 A
  // 90 Z
  // charCodeAt
  // fromCharCode

  function solution(name) {
    const allJoiStickyOperationCount = getAllJoiStickyOperationCount(name);

    const completeArr = Array(name.length)
      .fill(null)
      .map((_, index) => (name[index] === 'A' ? true : false));
    completeArr[0] = true;

    let minMove = name.length - 1;

    let cursor = 0;

    while (!completeArr.every(Boolean)) {
      // 가장 가까운 A가 아닌 문자의 인덱스
      let nextLeft = (cursor - 1) % name.length;
      // 연속된 A문자의 개수
      let leftCount = 0;
      while (name[nextLeft] === 'A') {
        nextLeft = (nextLeft - 1 + name.length) % name.length;
        leftCount++;
      }

      let nextRight = (cursor + 1) % name.length;
      let rightCount = 0;
      while (name[nextRight] === 'A') {
        nextRight = (nextRight + 1) % name.length;
        rightCount++;
      }

      if (leftCount < rightCount) {
        cursor = (cursor - 1 + name.length) % name.length;
        minMove += leftCount;
      } else {
        cursor = (cursor + 1) % name.length;
        minMove += rightCount;
      }

      completeArr[cursor] = true;
    }

    return allJoiStickyOperationCount + minMove;
  }

  function getAllJoiStickyOperationCount(name) {
    return name.split('').reduce((acc, cur) => {
      return acc + getJoiStickyOperationCount(cur.charCodeAt(0));
    }, 0);

    // A 65 65-65=0
    // N 78 78-65=13 91-78=13
    // Z 90 91-90=1
    function getJoiStickyOperationCount(askiNumber) {
      if (askiNumber <= 78) return askiNumber - 65;
      return 91 - askiNumber;
    }
  }
}

// 정답지 봄.
// https://velog.io/@jeeseob5761/%ED%94%84%EB%A1%9C%EA%B7%B8%EB%9E%98%EB%A8%B8%EC%8A%A4-%EC%A1%B0%EC%9D%B4%EC%8A%A4%ED%8B%B1
{
  function solution(name) {
    const allJoiStickyOperationCount = getAllJoiStickyOperationCount(name);

    // default: 한 방향으로 갔을 때 개수
    let moveCount = name.length - 1;

    for (let index = 0; index < name.length; index++) {
      // A가 아닌 다음 index
      let nextIndex = index + 1;
      while (nextIndex < name.length && name.charAt(nextIndex) === 'A') {
        nextIndex++;
      }

      moveCount = Math.min(moveCount, index * 2 + name.length - nextIndex, (name.length - nextIndex) * 2 + index);
    }
    return allJoiStickyOperationCount + moveCount;
  }

  function getAllJoiStickyOperationCount(name) {
    return name.split('').reduce((acc, cur) => {
      return acc + Math.min(cur.charCodeAt(0) - 'A'.charCodeAt(0), 'Z'.charCodeAt(0) - cur.charCodeAt(0) + 1);
    }, 0);
  }
}
