// https://school.programmers.co.kr/learn/courses/30/lessons/42584

// ★ 스택, 구현

// 정답
function solution(prices) {
  const answer = Array(prices.length).fill(0);
  const stack = [];
  prices.forEach((price, i) => {
    while (stack.length && price < prices[stack.at(-1)]) {
      const index = stack.pop();
      answer[index] = i - index;
    }
    stack.push(i);
  });
  while (stack.length) {
    const index = stack.pop();
    answer[index] = prices.length - 1 - index;
  }
  return answer;
}

/**
 * @Date 2023.07.29
 */
{
  function solution(prices) {
    const answer = Array(prices.length).fill(0);
    const stack = [];
    prices.forEach((price, i) => {
      while (stack.length && price < prices[stack.at(-1)]) {
        const index = stack.pop();
        answer[index] = i - index;
      }
      stack.push(i);
    });
    while (stack.length) {
      const index = stack.pop();
      answer[index] = prices.length - 1 - index;
    }
    return answer;
  }
}

// 잘 생각이 안나서 가장 직관적인 이중 루프로 품. prices길이는 10^5이라서 n^2이면 10^10이고 100초 걸림. 문제 잘못만든듯. 이건 시간복잡도 초과 떠야됌. 스택으로 풀어야 시간복잡도 충족함
/**
 * @Date 2025.01.09
 */
{
  function solution(prices) {
    const result = [];
    for (let i = 0; i < prices.length; i++) {
      const currentPrice = prices[i];
      const initialJ = i + 1;
      let j = initialJ;
      for (j; j < prices.length; j++) {
        if (currentPrice > prices[j]) {
          j += 1;
          break;
        }
      }
      result.push(j - initialJ);
    }
    return result;
  }
}

/**
 * @Date 2026.01.10
 * 못품.. claude에게 도움을 받아서 이해함
 */
{
  function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    const stack = []; // 인덱스를 저장할 스택

    for (let i = 0; i < n; i++) {
      // 현재 가격이 스택에 있는 인덱스의 가격보다 작으면
      // 그 시점의 가격이 떨어진 것
      while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
        const idx = stack.pop();
        answer[idx] = i - idx;
      }
      stack.push(i);
    }

    // 스택에 남아있는 인덱스들은 끝까지 가격이 안 떨어진 경우
    while (stack.length > 0) {
      const idx = stack.pop();
      answer[idx] = n - 1 - idx;
    }

    return answer;
  }

  // 테스트
  console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]

  /** 
## 자세한 풀이 설명

### 핵심 아이디어
**스택에 "아직 가격이 떨어지지 않은 시점의 인덱스"를 저장**합니다.

### 단계별 동작 (예시: [1, 2, 3, 2, 3])

**초기 상태:**
- prices = [1, 2, 3, 2, 3]
- answer = [0, 0, 0, 0, 0]
- stack = []

---

**i = 0 (가격: 1)**
```
- 스택이 비어있음
- stack에 0 push
- stack = [0]
- answer = [0, 0, 0, 0, 0]
```

---

**i = 1 (가격: 2)**
```
- prices[0]=1 < prices[1]=2 → 가격 안 떨어짐
- stack에 1 push
- stack = [0, 1]
- answer = [0, 0, 0, 0, 0]
```

---

**i = 2 (가격: 3)**
```
- prices[1]=2 < prices[2]=3 → 가격 안 떨어짐
- stack에 2 push
- stack = [0, 1, 2]
- answer = [0, 0, 0, 0, 0]
```

---

**i = 3 (가격: 2) ⭐ 여기서 가격 하락!**
```
- prices[2]=3 > prices[3]=2 → 가격 떨어짐!
  - idx = 2를 pop
  - answer[2] = 3 - 2 = 1 (1초 후 떨어짐)
  
- prices[1]=2 = prices[3]=2 → 가격 안 떨어짐 (같음)
- stack에 3 push
- stack = [0, 1, 3]
- answer = [0, 0, 1, 0, 0]
```

---

**i = 4 (가격: 3)**
```
- prices[3]=2 < prices[4]=3 → 가격 안 떨어짐
- stack에 4 push
- stack = [0, 1, 3, 4]
- answer = [0, 0, 1, 0, 0]
```

---

**반복문 종료 후 - 스택에 남은 인덱스 처리:**
```
stack = [0, 1, 3, 4] → 이들은 끝까지 가격이 안 떨어진 경우

- idx = 4 pop: answer[4] = 4 - 4 = 0
- idx = 3 pop: answer[3] = 4 - 3 = 1
- idx = 1 pop: answer[1] = 4 - 1 = 3
- idx = 0 pop: answer[0] = 4 - 0 = 4

최종 answer = [4, 3, 1, 1, 0]
 */
}
