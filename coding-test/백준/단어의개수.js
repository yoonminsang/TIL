// https://www.acmicpc.net/problem/1152

/**
 * @Date 2024.02.14
 */

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
// const input = 'The Curious Case of Benjamin Button';
// const input = '  ';

const trimInput = input.trim();
console.log(trimInput ? trimInput.split(' ').length : 0);
