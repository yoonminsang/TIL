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
      [
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
      ],
    ]);
  });
});

describe('combineBlockWithTable', () => {
  it('basic', () => {
    expect(combineBlockWithTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 })).toEqual([
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'j',
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'j',
        },
        {
          type: 'j',
        },
        {
          type: 'j',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
    ]);
  });
  it.only('customBlockShape을 넣은 경우 customBlockShape가 들어간다.', () => {
    console.log(
      combineBlockWithTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 }, { type: null, disabled: true })
    );
    expect(
      combineBlockWithTable(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 }, { type: null, disabled: true })
    ).toEqual([
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
          disabled: true,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
          disabled: true,
        },
        {
          type: null,
          disabled: true,
        },
        {
          type: null,
          disabled: true,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
    ]);
  });
});

it('getTableForRenderer', () => {
  expect(getTableForRenderer(getEmptyTable(5, 5), BLOCK_MAP['j'], { col: 0, row: 2 })).toEqual({
    nextCol: 3,
    tableForRender: [
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'j',
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'j',
        },
        {
          type: 'j',
        },
        {
          type: 'j',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
          shadow: true,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
          shadow: true,
        },
        {
          type: null,
          shadow: true,
        },
        {
          type: null,
          shadow: true,
        },
      ],
    ],
  });
});

describe('findCompletedLines', () => {
  it('한줄이 완성됐을 때 해당 line의 index를 return한다.', () => {
    expect(
      findCompletedLines([
        [
          {
            type: null,
          },
          {
            type: 'j',
          },
          {
            type: null,
          },
          {
            type: null,
          },
        ],
        [
          {
            type: 'j',
          },
          {
            type: 'j',
          },
          {
            type: 'j',
          },
          {
            type: 'j',
          },
        ],
        [
          {
            type: null,
          },
          {
            type: 'j',
          },
          {
            type: null,
          },
          {
            type: null,
          },
        ],
      ])
    ).toEqual([1]);
  });
  it('두줄이 완성됐을 때 두 line의 index를 return한다.', () => {
    expect(
      findCompletedLines([
        [
          {
            type: 'i',
          },
          {
            type: 'j',
          },
          {
            type: 'l',
          },
          {
            type: 'z',
          },
        ],
        [
          {
            type: 'j',
          },
          {
            type: 'j',
          },
          {
            type: 'j',
          },
          {
            type: 'j',
          },
        ],
        [
          {
            type: null,
          },
          {
            type: 'j',
          },
          {
            type: null,
          },
          {
            type: null,
          },
        ],
      ])
    ).toEqual([0, 1]);
  });
});

describe('getIsPossibleRender', () => {
  it('한줄이 남아있을 때 o블록은 렌더링이 가능하지 않다.', () => {
    expect(
      getIsPossibleRender(
        [
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
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
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: 'i',
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
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
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
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
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
          [
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
            {
              type: null,
            },
          ],
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
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
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
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
            [
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
              {
                type: null,
              },
            ],
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
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
    ];
    expect(getUpdateTableByCompletedLines(table, [19])).toEqual([
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
    ]);
  });
  it('2줄을 정상적으로 제거한다.', () => {
    const table: Table = [
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
    ];
    expect(getUpdateTableByCompletedLines(table, [18, 19])).toEqual([
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
      [
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: 'i',
        },
        {
          type: 'i',
        },
      ],
    ]);
  });
});
