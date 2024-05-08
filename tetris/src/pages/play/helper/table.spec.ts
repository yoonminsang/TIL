import { BLOCK_MAP } from './block';
import { combineBlockWithTable, findCompletedLines, getEmptyTable, getIsPossibleRender } from './table';

describe('getEmptyTable', () => {
  it('col이 3이고 row가 2인 empty table을 만든다.', () => {
    expect(getEmptyTable(3, 2)).toEqual([
      [null, null],
      [null, null],
      [null, null],
    ]);
  });
});

it('combineBlockWithTable', () => {
  expect(combineBlockWithTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 })).toEqual([
    [null, null, 'j', null, null],
    [null, null, 'j', 'j', 'j'],
    [null, null, null, null, null],
    [null, null, null, null, null],
    [null, null, null, null, null],
  ]);
});

describe('findCompletedLines', () => {
  it('한줄이 완성됐을 때 해당 line의 index를 return한다.', () => {
    expect(
      findCompletedLines([
        [null, 'j', null, null],
        ['j', 'j', 'j', 'j'],
        [null, 'j', null, null],
      ]),
    ).toEqual([1]);
  });
  it('두줄이 완성됐을 때 두 line의 index를 return한다.', () => {
    expect(
      findCompletedLines([
        ['i', 'j', 'l', 'z'],
        ['j', 'j', 'j', 'j'],
        [null, 'j', null, null],
      ]),
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
        { col: 0, row: 2 },
      ),
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
        { col: 0, row: 2 },
      ),
    ).toBe(true);
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
          { col: 4, row: 2 },
        ),
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
          { col: 0, row: 5 },
        ),
      ).toBe(false);
    });
  });
});
