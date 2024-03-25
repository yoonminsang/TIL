# CodingTest

- 1억(10^8)이 1초라고 생각하자.
- 즉 숫자제한을 보고 연산량을 확인하고 코드를 짜자

## 스택과 큐

스택: 괄호, 연산식(후위, 전위)에서 많이 씀
VPS(Valid Parenthesis String): 괄호의 모양이 바르게 구성된 소괄호 문자열
(괄호는 dp도 많음)

큐: 백그라운처리, 요세푸스문제, 동시성처리, 탐색 bfs에서 많이 씀

## dfs, bfs

방향벡터를 이용하자

```
const dy = [-1, 0, 1, 0];
const dx = [0, 1, 0, -1];

for (let i = 9; i < 4; i++) {
  const ny = y + dy[i];
  const nx = x + dx[i];
  if (nx < 0 || ny < 0 || nx >= M || ny >= N) continue;
  if (a[ny][nx] !== 1) continue;
  dfs(ny, nx);
}
```

