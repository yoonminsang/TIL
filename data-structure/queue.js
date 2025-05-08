/** 배열을 사용하지 않고 객체 리터럴로 구현한 가장 기본적인 큐 */
class Queue {
  constructor() {
    this.clear();
  }

  /**
   * 큐에 새로운 요소를 추가합니다.
   * @param {*} 큐에 추가할 요소
   * @returns {*} 큐에 추가한 요소
   */
  enqueue(value) {
    this.data[this.backIndex] = value;
    this.backIndex += 1;
    return value;
  }

  /**
   * 큐에서 가장 앞에 있는 요소를 제거하고 반환합니다.
   * @returns {*} 큐에서 제거된 요소 또는 큐가 비어있을 경우 null
   */
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const result = this.data[this.frontIndex];
    delete this.data[this.frontIndex];
    this.frontIndex += 1;
    return result;
  }

  /**
   * 큐에서 가장 앞에 있는 요소를 제거하지 않고 반환합니다.
   * @returns {*} 큐의 맨 앞 요소 또는 큐가 비어있을 경우 null
   */
  peek() {
    return this.data[this.frontIndex] ?? null;
  }

  /**
   * 큐가 비어있는지 확인합니다.
   * @returns {boolean} 큐가 비어있으면 true, 아니면 false
   */
  isEmpty() {
    return this.size() === 0;
  }

  /**
   * 큐의 크기를 반환합니다.
   * @returns {number} 큐에 있는 요소의 수
   */
  size() {
    return this.backIndex - this.frontIndex;
  }

  /**
   * 큐의 모든 요소를 제거합니다.
   * @returns {void}
   */
  clear() {
    this.data = {};
    this.frontIndex = 0;
    this.backIndex = 0;
  }

  /**
   * 큐의 모든 요소를 문자열로 반환합니다.
   * @returns {string} 큐의 요소를 포함한 문자열
   */
  toString() {
    if (this.isEmpty()) {
      return 'Queue: []';
    }
    let result = 'Queue: [';
    for (let i = this.frontIndex; i < this.backIndex; i++) {
      if (i !== this.frontIndex) {
        result += ', ';
      }
      result += this.data[i];
    }
    return result + ']';
  }
}

it('기본 예제 테스트', () => {
  // 사용 예시
  const queue = new Queue();

  // 요소 추가
  queue.enqueue('A');
  queue.enqueue('B');
  queue.enqueue('C');

  expect(queue.toString()).toBe('Queue: [A, B, C]');
  expect(queue.size()).toBe(3);

  // 맨 앞 요소 확인
  expect(queue.peek()).toBe('A');

  // 요소 제거
  expect(queue.dequeue()).toBe('A');
  expect(queue.dequeue()).toBe('B');

  expect(queue.toString()).toBe('Queue: [C]');
  expect(queue.size()).toBe(1);

  // 모든 요소 제거
  queue.clear();
  expect(queue.isEmpty()).toBe(true);
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
