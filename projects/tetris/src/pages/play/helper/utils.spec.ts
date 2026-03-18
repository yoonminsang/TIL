import { getRandom, rotateClockWiseIn2DArr, rotateCounterClockWiseIn2DArr } from './utils';

describe('getRandom', () => {
  it('0을 return한다', () => {
    expect(getRandom(10, 0.09)).toBe(0);
  });
  it('1을 return한다', () => {
    expect(getRandom(10, 0.19)).toBe(1);
  });
  it('9를 return한다', () => {
    expect(getRandom(10, 0.99)).toBe(9);
  });
});

describe('rotateClockWiseIn2DArr', () => {
  // 3*3
  // 0,0 => 0,2
  // 0,1 => 1,2
  // 0,2 => 2,2

  // 1,0 => 0,1
  // 1,1 => 1,1
  // 1,2 => 2,1

  // 2,0 => 0,0
  // 2,1 => 0,1
  // 2,2 => 0,2
  it('3*3 행렬이 성공적으로 변환된다.', () => {
    expect(
      rotateClockWiseIn2DArr([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]);
  });

  // 2*2
  // 0,0 => 0,1
  // 0,1 => 1,1
  // 0,2 => 2,1

  // 1,0 => 0,0
  // 1,1 => 1,0
  // 1,2 => 2,0
  it('2*3 행렬이 성공적으로 변환된다.', () => {
    expect(
      rotateClockWiseIn2DArr([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([
      [4, 1],
      [5, 2],
      [6, 3],
    ]);
  });
});

describe('rotateCounterClockWiseIn2DArr', () => {
  // 3*3
  // 0,0 => 2,0
  // 0,1 => 1,0
  // 0,2 => 0,0

  // 1,0 => 2,1
  // 1,1 => 1,1
  // 1,2 => 0,1

  // 2,0 => 2,2
  // 2,1 => 1,2
  // 2,2 => 0,2
  it('3*3 행렬이 성공적으로 변환된다.', () => {
    expect(
      rotateCounterClockWiseIn2DArr([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ])
    ).toEqual([
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]);
  });

  // 2*3
  // 0,0 => 1,0
  // 0,1 => 0,0
  // 0,2 => -1,0

  // 1,0 => 1,1
  // 1,1 => 0,1
  // 1,2 => -1,1
  it('2*3 행렬이 성공적으로 변환된다.', () => {
    expect(
      rotateCounterClockWiseIn2DArr([
        [1, 2, 3],
        [4, 5, 6],
      ])
    ).toEqual([
      [3, 6],
      [2, 5],
      [1, 4],
    ]);
  });
});
