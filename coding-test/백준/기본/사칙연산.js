// https://www.acmicpc.net/problem/10869

/**
 * @Date 2024.02.14
 */

const fs = require('fs');
const [a, b] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(Math.floor(a / b));
console.log(a % b);
