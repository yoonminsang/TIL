/** 배열을 사용하지 않고 객체 리터럴로 구현한 가장 기본적인 스택 */
class Stack {
  constructor() {
    this.clear();
  }

  /**
   * 스택에 새로운 요소를 추가합니다.
   * @param {*} 스택에 추가할 요소
   * @returns {*} 스택에 추가한 요소
   */
  push(value) {
    this.data[this.index] = value;
    this.index += 1;
    return value;
  }

  /**
   * 스택에서 가장 뒤에 있는 요소를 제거하고 반환합니다.
   * @returns {*} 스택에서 제거된 요소 또는 스택가 비어있을 경우 null
   */
  pop() {
    if (this.isEmpty()) {
      return null;
    }
    const result = this.data[this.index - 1];
    delete this.data[this.index - 1];
    this.index -= 1;
    return result;
  }

  /**
   * 스택에서 가장 마지막에 있는 요소를 제거하지 않고 반환합니다.
   * @returns {*} 스택의 맨 마지막 요소 또는 스택가 비어있을 경우 null
   */
  peek() {
    return this.data[this.index - 1] ?? null;
  }

  /**
   * 스택가 비어있는지 확인합니다.
   * @returns {boolean} 스택가 비어있으면 true, 아니면 false
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 스택의 크기를 반환합니다.
   * @returns {number} 스택에 있는 요소의 수
   */
  size() {
    return this.index;
  }

  /**
   * 스택의 모든 요소를 제거합니다.
   * @returns {void}
   */
  clear() {
    this.data = {};
    this.index = 0;
  }

  /**
   * 스택의 모든 요소를 문자열로 반환합니다.
   * @returns {string} 큐의 요소를 포함한 문자열
   */
  toString() {
    if (this.isEmpty()) {
      return 'Stack: []';
    }
    let result = 'Stack: [';
    for (let i = 0; i < this.index; i++) {
      if (i !== 0) {
        result += ', ';
      }
      result += this.data[i];
    }
    return result + ']';
  }
}

it('기본 예제 테스트', () => {
  // 사용 예시
  const stack = new Stack();

  // 요소 추가
  stack.push('A');
  stack.push('B');
  stack.push('C');

  expect(stack.toString()).toBe('Stack: [A, B, C]');
  expect(stack.size()).toBe(3);

  // 맨 앞 요소 확인
  expect(stack.peek()).toBe('C');

  // 요소 제거
  expect(stack.pop()).toBe('C');
  expect(stack.pop()).toBe('B');

  expect(stack.toString()).toBe('Stack: [A]');
  expect(stack.size()).toBe(1);

  // 모든 요소 제거
  stack.clear();
  expect(stack.isEmpty()).toBe(true);
});

function it(description, fn) {
  console.log(`\nTEST: ${description}`);
  try {
    fn();
    console.log(`✓ PASS: ${description}`);
  } catch (error) {
    console.error(`✗ FAIL: ${description}`);
    console.error(`  Error: ${error.message}`);
  }
}

function expect(expectedValue) {
  return {
    toBe(resultValue) {
      const result = expectedValue === resultValue;
      if (!result) {
        throw new Error(`Expected ${expectedValue} to be ${resultValue}`);
      }
      console.log('success');
    },
  };
}
