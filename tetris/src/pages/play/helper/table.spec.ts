import { BLOCK_MAP } from './block';
import { combineBlockToTable, combineBlockWithPosition, getEmptyTable } from './table';

describe('getEmptyTable', () => {
  it('col이 3이고 row가 2인 empty table을 만든다.', () => {
    expect(getEmptyTable(3, 2)).toEqual([
      [null, null],
      [null, null],
      [null, null],
    ]);
  });
});

describe('combineBlockWithPosition', () => {
  describe('col이 0이고 row가 2일 때', () => {
    it('i블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 2 })).toEqual([
        [null, null, 'i', null, null, null],
        [null, null, 'i', null, null, null],
        [null, null, 'i', null, null, null],
        [null, null, 'i', null, null, null],
      ]);
    });
    it('o블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.o, { col: 0, row: 2 })).toEqual([
        [null, 'o', 'o', null],
        [null, 'o', 'o', null],
      ]);
    });
    it('l블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.l, { col: 0, row: 2 })).toEqual([
        [null, null, null, 'l', null],
        [null, 'l', 'l', 'l', null],
      ]);
    });
    it('t블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.t, { col: 0, row: 2 })).toEqual([
        [null, null, 't', null, null],
        [null, 't', 't', 't', null],
      ]);
    });
    it('s블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.s, { col: 0, row: 2 })).toEqual([
        [null, null, 's', 's', null],
        [null, 's', 's', null, null],
      ]);
    });
  });
  it('col이 0이고 row가 0일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 0 })).toEqual([
      [null, 'i', null, null],
      [null, 'i', null, null],
      [null, 'i', null, null],
      [null, 'i', null, null],
    ]);
  });
  it('col이 0이고 row가 10일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 10 })).toEqual([
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
    ]);
  });
  it('col이 10이고 row가 0일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 10, row: 0 })).toEqual([
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
      [null, 'i', null, null],
      [null, 'i', null, null],
      [null, 'i', null, null],
      [null, 'i', null, null],
      [null, null, null, null],
      [null, null, null, null],
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
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, 'i', null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    ]);
  });
});

it('combineBlockToTable', () => {
  expect(combineBlockToTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 })).toEqual([
    [null, 'j', null, null, null],
    [null, 'j', 'j', 'j', null],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ]);
});
