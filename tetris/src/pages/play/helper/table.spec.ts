import { BLOCK_MAP } from './block';
import {
  combineBlockWithTable,
  findCompletedLines,
  getEmptyTable,
  getIsPossibleRender,
  getTableForRenderer,
  getUpdateTableByCompletedLines,
} from './table';
import { Block, Table } from './types';
import { rotateClockWiseIn2DArr } from './utils';

describe('getEmptyTable', () => {
  it('col이 3이고 row가 2인 empty table을 만든다.', () => {
    expect(getEmptyTable(3, 2)).toEqual([
      [null, null],
      [null, null],
      [null, null],
    ]);
  });
});

describe('combineBlockWithTable', () => {
  it('basic', () => {
    expect(combineBlockWithTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 })).toEqual([
      [null, null, 'j', null, null],
      [null, null, 'j', 'j', 'j'],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]);
  });
  it('customBlockShape을 넣은 경우 customBlockShape가 들어간다.', () => {
    expect(combineBlockWithTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 }, 'disabled')).toEqual([
      [null, null, 'disabled', null, null],
      [null, null, 'disabled', 'disabled', 'disabled'],
      [null, null, null, null, null],
      [null, null, null, null, null],
      [null, null, null, null, null],
    ]);
  });
});

it('getTableForRenderer', () => {
  expect(getTableForRenderer(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 })).toEqual({
    nextCol: 3,
    tableForRender: [
      [null, null, 'j', null, null],
      [null, null, 'j', 'j', 'j'],
      [null, null, null, null, null],
      [null, null, 'shadow', null, null],
      [null, null, 'shadow', 'shadow', 'shadow'],
    ],
  });
});

describe('findCompletedLines', () => {
  it('한줄이 완성됐을 때 해당 line의 index를 return한다.', () => {
    expect(
      findCompletedLines([
        [null, 'j', null, null],
        ['j', 'j', 'j', 'j'],
        [null, 'j', null, null],
      ])
    ).toEqual([1]);
  });
  it('두줄이 완성됐을 때 두 line의 index를 return한다.', () => {
    expect(
      findCompletedLines([
        ['i', 'j', 'l', 'z'],
        ['j', 'j', 'j', 'j'],
        [null, 'j', null, null],
      ])
    ).toEqual([0, 1]);
  });
});

describe('getIsPossibleRender', () => {
  it('한줄이 남아있을 때 o블록은 렌더링이 가능하지 않다.', () => {
    expect(
      getIsPossibleRender(
        [
          [null, null, null, null, null, null],
          [null, 'i', 'i', 'i', null, null],
          [null, 'i', 'i', 'i', null, null],
          [null, 'i', 'i', 'i', null, null],
        ],
        BLOCK_MAP['o'],
        { col: 0, row: 2 }
      )
    ).toBe(false);
  });
  it('한줄이 남아있을 때 i블록은 렌더링이 가능하다. ', () => {
    expect(
      getIsPossibleRender(
        [
          [null, null, null, null, null, null],
          [null, 'i', 'i', 'i', null, null],
          [null, 'i', 'i', 'i', null, null],
          [null, 'i', 'i', 'i', null, null],
        ],
        BLOCK_MAP['i'],
        { col: 0, row: 2 }
      )
    ).toBe(true);
  });
  it('row가 -1인 경우 i블록은 렌더링이 가능하다.', () => {
    const block: Block = { type: 'i', shape: rotateClockWiseIn2DArr(BLOCK_MAP['i'].shape) };
    expect(
      getIsPossibleRender(
        [
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ],
        block,
        { col: 0, row: -1 }
      )
    ).toBe(true);
  });
  it('row가 -4인 경우 i블록은 렌더링이 가능하지 않다.', () => {
    const block: Block = { type: 'i', shape: rotateClockWiseIn2DArr(BLOCK_MAP['i'].shape) };
    expect(
      getIsPossibleRender(
        [
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
          [null, null, null, null, null, null],
        ],
        block,
        { col: 0, row: -4 }
      )
    ).toBe(false);
  });
  describe('position을 벗어나는 경우', () => {
    it('column이 넘친다면 렌더링이 가능하지 않다.', () => {
      expect(
        getIsPossibleRender(
          [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
          ],
          BLOCK_MAP['i'],
          { col: 4, row: 2 }
        )
      ).toBe(false);
    });
    it('row가 넘친다면 렌더링이 가능하지 않다.', () => {
      expect(
        getIsPossibleRender(
          [
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
          ],
          BLOCK_MAP['o'],
          { col: 0, row: 5 }
        )
      ).toBe(false);
    });
  });
});

describe('getUpdateTableByCompletedLines', () => {
  it('1줄을 정상적으로 제거한다.', () => {
    const table: Table = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i'],
    ];
    expect(getUpdateTableByCompletedLines(table, [19])).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
    ]);
  });
  it('2줄을 정상적으로 제거한다.', () => {
    const table: Table = [
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i'],
      ['i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i', 'i'],
    ];
    expect(getUpdateTableByCompletedLines(table, [18, 19])).toEqual([
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, null, null],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
      [null, null, null, null, null, null, null, null, 'i', 'i'],
    ]);
  });
});
