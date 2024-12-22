// 쉽다고 생각했는데 (실제로 쉬움) 테스트케이스를 몇번씩이나 틀리면서 풀었다..
// 1. 2~9진법이라고 문제에 적혀있는데 10진법도 가능하다고 코드를 작성했다.
// => 꼼꼼히..
// 2. n이라는 숫자가 있으면 n+1진법으로 유추해야되는데 놓쳤다... 테스트케이스에 주어지지 않고 그냥 제출하는 경우였다면 틀렸을 것이다.

// 자잘한 성능 개선 포인트가 있기는 한데 코테풀때는 가독성이 더 중요해서 일부러 최적화하지 않는다.(시간복잡도에 영향주는 부분이 아닌 경우)

/**
 * @Date 2024.12.21
 */
{
  const X = 'X';
  const PLUS = '+';
  const MINUS = '-';
  function solution(expressions) {
    const formattedExpressions = expressions.map((expression) => expression.split(' '));
    // console.log('formattedExpressions',formattedExpressions)

    const minRadix =
      formattedExpressions.reduce((acc, [a, sign, b, equal, c]) => {
        const temp = [acc, ...a.split(''), ...b.split('')];
        if (c !== X) temp.push(...c.split(''));
        return Math.max(...temp);
      }, 0) + 1;
    // console.log('minRadix',minRadix)

    const correctExpressions = formattedExpressions.filter(([a, sign, b, equal, c]) => c !== X);
    const uncorrectExpressions = formattedExpressions.filter(([a, sign, b, equal, c]) => c === X);
    // console.log('correctExpressions',correctExpressions);
    // console.log('uncorrectExpressions',uncorrectExpressions);

    const availableRadix = [];
    for (let i = minRadix; i <= 9; i++) {
      const flag = correctExpressions.every(([a, sign, b, equal, c]) => {
        return radixExpression(a, b, sign, i) === c;
      });
      if (flag) {
        availableRadix.push(i);
      }
    }
    // console.log('availableRadix',availableRadix)

    const result = [];
    uncorrectExpressions.forEach(([a, sign, b, equal]) => {
      const temp = availableRadix.map((radix) => {
        return radixExpression(a, b, sign, radix);
      });
      const allAvailable = temp.every((v) => v === temp[0]);
      if (allAvailable) {
        result.push([a, sign, b, equal, radixExpression(a, b, sign, availableRadix[0])].join(' '));
      } else {
        result.push([a, sign, b, equal, '?'].join(' '));
      }
    });
    return result;
  }

  function radixExpression(a, b, sign, radix) {
    if (sign === PLUS) {
      return radixPlus(a, b, radix);
    } else if (sign === MINUS) {
      return radixMinus(a, b, radix);
    }
    throw new Error('unexpected sign');
  }
  function radixPlus(a, b, radix) {
    return (parseInt(a, radix) + parseInt(b, radix)).toString(radix);
  }
  function radixMinus(a, b, radix) {
    return (parseInt(a, radix) - parseInt(b, radix)).toString(radix);
  }
}
