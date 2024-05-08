import { rotateClockWiseIn2DArr } from './utils';
import { BLOCK_MAP, combineBlockWithPosition, getBlockBottomPosition } from './block';
import { Block } from './types';

describe('getBlockBottomPosition', () => {
  it('가로 i블록의 position이 정상적으로 렌더링된다.', () => {
    const block = BLOCK_MAP['i'];
    const position = { col: 1, row: 1 };
    expect(getBlockBottomPosition(block, position)).toBe(1);
  });
  it('세로 i블록의 position이 정상적으로 렌더링된다.', () => {
    const block: Block = { type: 'i', shape: rotateClockWiseIn2DArr(BLOCK_MAP['i'].shape) };
    const position = { col: 1, row: 2 };
    expect(getBlockBottomPosition(block, position)).toBe(4);
  });
});

describe('combineBlockWithPosition', () => {
  describe('col이 0이고 row가 2일 때', () => {
    it('i블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 2 })).toEqual([
        [null, null, 'i', 'i', 'i', 'i'],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
        [null, null, null, null, null, null],
      ]);
    });
    it('o블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.o, { col: 0, row: 2 })).toEqual([
        [null, null, 'o', 'o'],
        [null, null, 'o', 'o'],
      ]);
    });
    it('l블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.l, { col: 0, row: 2 })).toEqual([
        [null, null, null, null, 'l'],
        [null, null, 'l', 'l', 'l'],
      ]);
    });
    it('t블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.t, { col: 0, row: 2 })).toEqual([
        [null, null, null, 't', null],
        [null, null, 't', 't', 't'],
      ]);
    });
    it('s블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.s, { col: 0, row: 2 })).toEqual([
        [null, null, null, 's', 's'],
        [null, null, 's', 's', null],
      ]);
    });
  });
  it('col이 0이고 row가 0일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 0 })).toEqual([
      ['i', 'i', 'i', 'i'],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
  });
  it('col이 0이고 row가 10일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 10 })).toEqual([
      [null, null, null, null, null, null, null, null, null, null, 'i', 'i', 'i', 'i'],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ]);
  });
  it('col이 10이고 row가 0일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 10, row: 0 })).toEqual([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      ['i', 'i', 'i', 'i'],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
  });
  it('col이 10이고 row가 10일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 10, row: 10 })).toEqual([
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, 'i', 'i', 'i', 'i'],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ]);
  });
});
