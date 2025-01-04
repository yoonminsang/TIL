// https://www.acmicpc.net/problem/2755

/**
 * @Date 2024.02.22
 */

// 부동소수점 문제

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();
// const input = `7
// General_Physics_1 3 A+
// Introduction_to_Computer_Science_and_Eng 3 B0
// Reading_And_Writing 2 C0
// English_1 3 C+
// Analytic_Geometry_and_Calculus_1 3 B+
// Fortran_Programming 3 B+
// C_Language_Programming 3 A+
// `;
// const input = `7
// General_Physics_1 3 A+
// Introduction_to_Computer_Science_and_Eng 3 A+
// Reading_And_Writing 2 A+
// English_1 3 A+
// Analytic_Geometry_and_Calculus_1 3 A+
// Fortran_Programming 3 A+
// C_Language_Programming 3 A+
// `;
const inputArr = input.trim().split('\n').slice(1);

function get성적toNumber(성적) {
  return {
    'A+': 4.3,
    A0: 4.0,
    'A-': 3.7,
    'B+': 3.3,
    B0: 3.0,
    'B-': 2.7,
    'C+': 2.3,
    C0: 2.0,
    'C-': 1.7,
    'D+': 1.3,
    D0: 1.0,
    'D-': 0.7,
    F: 0.0,
  }[성적];
}

const arr = inputArr.map((v) => {
  const [과목, 학점, 성적] = v.split(' ');
  return { 학점: Number(학점), 성적: get성적toNumber(성적) };
});

const 전체평점 = arr.reduce((acc, { 학점, 성적 }) => {
  return acc + 학점 * 성적;
}, 0);
const 전체학점 = arr.reduce((acc, { 학점 }) => {
  return acc + 학점;
}, 0);
const 평균평점 = 전체평점 / 전체학점;

console.log(정수반올림(평균평점, 2));

function 정수반올림(n, 자리수) {
  return (Math.round(n * 10 ** 자리수) / 10 ** 자리수).toFixed(자리수);
}
