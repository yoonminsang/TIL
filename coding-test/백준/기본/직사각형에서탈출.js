// https://www.acmicpc.net/problem/1085

/**
 * @Date 2024.02.14
 */

const fs = require('fs');
const [x, y, w, h] = fs.readFileSync('/dev/stdin').toString().split(' ').map(Number);
// const [x, y, w, h] = [6, 2, 10, 3]; // => 1
// const [x, y, w, h] = [1, 1, 5, 5]; // => 1
// const [x, y, w, h] = [653, 375, 1000, 1000]; // => 347
// const [x, y, w, h] = [161, 181, 762, 375]; // => 161

console.log(Math.min(w - x, x, h - y, y));
