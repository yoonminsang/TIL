// https://www.acmicpc.net/problem/2439

/**
 * @Date 2024.02.14
 */

const fs = require('fs');
const n = Number(fs.readFileSync('/dev/stdin').toString());
// const n = 5;

// 직관적
for (let i = 0; i < n; i++) {
  const row = ' '.repeat(n).split('');
  for (let j = 0; j <= i; j++) {
    row[j] = '*';
  }
  console.log(row.reverse().join(''));
}

// 간단
for (let i = 1; i <= n; i++) {
  console.log(' '.repeat(n - i) + '*'.repeat(i));
}
