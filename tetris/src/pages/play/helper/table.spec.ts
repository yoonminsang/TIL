import { getEmptyTable } from './table';

describe('getEmptyTable', () => {
  it('col이 3이고 row가 2인 empty table을 만든다.', () => {
    expect(getEmptyTable(3, 2)).toEqual([
      [null, null],
      [null, null],
      [null, null],
    ]);
  });
});

