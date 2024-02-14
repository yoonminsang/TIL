// https://www.acmicpc.net/problem/2480

/**
 * @Date 2024.02.14
 */

const fs = require('fs');
const [a, b, c] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
// const [a, b, c] = [3, 3, 6];
// const [a, b, c] = [2, 2, 2];
// const [a, b, c] = [6, 2, 5];

if (a === b && b === c) {
  console.log(10000 + a * 1000);
  return;
}
if (a === b) {
  console.log(1000 + a * 100);
  return;
}
if (b === c) {
  console.log(1000 + b * 100);
  return;
}
if (a === c) {
  console.log(1000 + a * 100);
  return;
}
console.log(Math.max(a, b, c) * 100);
