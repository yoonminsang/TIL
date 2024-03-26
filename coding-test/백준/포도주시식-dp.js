// https://www.acmicpc.net/problem/2156

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
const N = Number(input[0]);
const arr = [0, ...input.slice(1).map(Number)];
// const N = 6;
// const arr = [0, 6, 10, 13, 9, 8, 1];

// DP(1) = Arr(1)
// DP(2) = Arr(1)+Arr(2)
// DP(3) = Max(DP(2), DP(1)+Arr(3), DP(0)+Arr(2)+Arr(3))
// DP(4) = MAX(DP(3), DP(2)+Arr(4), DP(1)+Arr(3)+Arr(4))
// DP(n) = MAX(DP(N-1), DP(N-2)+Arr(n), DP(N-3)+Arr(n-1)+Arr(n))

const dp = Array(N + 1).fill(0);
dp[1] = arr[1];
dp[2] = arr[1] + arr[2];

for (let n = 3; n <= N; n++) {
  dp[n] = Math.max(dp[n - 1], dp[n - 2] + arr[n], dp[n - 3] + arr[n - 1] + arr[n]);
}
console.log(dp[N]);

/**
 * @Date 2024.03.25
 */
// 접근은 잘 했는데 틀렸음
// DP(3)일 때 Arr(2)+Arr(3)을 고려하지 못함
// 또한 재귀함수와 hash table은 불필요한 코드임
{
  () => {
    // const fs = require('fs');
    // const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
    // const N = Number(input[0]);
    // const arr = input.slice(1).map(Number);
    const N = 6;
    const arr = [6, 10, 13, 9, 8, 1];

    // DP(1) = Arr(1)
    // DP(2) = Arr(1)+Arr(2)
    // DP(3) = Max(DP(2), DP(1)+Arr(3))
    // DP(4) = MAX(DP(3), DP(2)+Arr(4), DP(1)+Arr(3)+Arr(4))
    // DP(n) = MAX(DP(N-1), DP(N-2)+Arr(n), DP(N-3)+Arr(n-1)+Arr(n))

    // Arr은 편의상 만든 배열임. 실제로는 index-1을 해줘야함
    // DP(1) = arr[0];
    // DP(2) = arr[0] + arr[1];
    // DP(3) = Max(DP(2), DP(1)+arr[2])
    // DP(n) = MAX(DP(N-1), DP(N-2)+arr[n-1], DP(N-3)+arr[n-2]+arr[n-1])

    const dpHashTable = {};

    function dp(n) {
      console.log(n);
      if (dpHashTable[n]) {
        return dpHashTable[n];
      }
      if (n === 1) {
        return arr[0];
      }
      if (n === 2) {
        return arr[0] + arr[1];
      }
      if (n === 3) {
        return Math.max(dp(2), dp(1) + arr[2]);
      }
      const result = Math.max(dp(n - 1), dp(n - 2) + arr[n - 1], dp(n - 3) + arr[n - 2] + arr[n - 1]);
      dpHashTable[n] = result;
      return result;
    }
    console.log(dp(N));
  };
}

/**
 * @Date 2024.03.25
 */
// 위에서 잘못된 로직 수정, for문으로 개선
{
  const fs = require('fs');
  const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
  const N = Number(input[0]);
  const arr = [0, ...input.slice(1).map(Number)];
  // const N = 6;
  // const arr = [0, 6, 10, 13, 9, 8, 1];

  // DP(1) = Arr(1)
  // DP(2) = Arr(1)+Arr(2)
  // DP(3) = Max(DP(2), DP(1)+Arr(3), DP(0)+Arr(2)+Arr(3))
  // DP(4) = MAX(DP(3), DP(2)+Arr(4), DP(1)+Arr(3)+Arr(4))
  // DP(n) = MAX(DP(N-1), DP(N-2)+Arr(n), DP(N-3)+Arr(n-1)+Arr(n))

  const dp = Array(N + 1).fill(0);
  dp[1] = arr[1];
  dp[2] = arr[1] + arr[2];

  for (let n = 3; n <= N; n++) {
    dp[n] = Math.max(dp[n - 1], dp[n - 2] + arr[n], dp[n - 3] + arr[n - 1] + arr[n]);
  }
  console.log(dp[N]);
}
