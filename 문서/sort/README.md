## 정렬헷갈릴때보기

### 설명

compareFunction(a, b)이 0보다 작은 경우: a가 먼저 옴.(a를 b보다 낮은 색인으로 정렬)
compareFunction(a, b)이 0을 반환: 변경안함
compareFunction(a, b)이 0보다 큰 경우: b가 먼저 옴.(b를 a보다 낮은 인덱스로 소트)

- 오름차순

  - [1,3,2].sort((a,b)=>a-b) => [1,2,3]

- 내림차순
  - [1,3,2].sort((a,b)=>b-a) => [1,2,3]
