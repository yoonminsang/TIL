// https://www.acmicpc.net/problem/8741

/**
 * @Date 2024.02.21
 */

// 왜 안되는지 모르겠음..

const fs = require('fs');
const k = Number(fs.readFileSync('/dev/stdin'));
// const k = 3;

const n = 2 ** k - 1;
const sum = (n * (n + 1)) / 2;
console.log(sum.toString(2));
