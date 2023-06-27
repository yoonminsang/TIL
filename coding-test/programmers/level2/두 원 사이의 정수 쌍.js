//school.programmers.co.kr/learn/courses/30/lessons/181187

/**
 * @Date 2023.06.27
 */

// 가장 기본적인 풀이방법. 당연히 시간복잡도 초과
function solution(r1, r2) {
  let result = 0;
  for (let x = -r2; x <= r2; x++) {
    for (let y = -r2; y <= r2; y++) {
      const r1좌표상태 = get좌표상태(r1, x, y);
      const r2좌표상태 = get좌표상태(r2, x, y);
      if ((r1좌표상태 === 'out' || r1좌표상태 === 'middle') && r2좌표상태 !== 'out') {
        result += 1;
      }
    }
  }
  return result;
}

function get좌표상태(r, x, y) {
  const a = Math.pow(x, 2) + Math.pow(y, 2);
  const b = Math.pow(r, 2);
  if (a > b) return 'out';
  if (a < b) return 'in';
  return 'middle';
}

// 성공
function solution(r1, r2) {
  const innerCount = (() => {
    let result = 0;
    for (let x = 1; x <= r2; x++) {
      const maxY = Math.floor(Math.sqrt(r2 ** 2 - x ** 2));
      const minY = r1 > x ? Math.ceil(Math.sqrt(r1 ** 2 - x ** 2)) : 0;
      result += maxY - minY + 1;
    }
    return result * 4;
  })();
  return innerCount;
}
