import { BLOCK_MAP, combineBlockWithPosition, getBlockBottomPosition, getRandomBlockList } from './block';
import { Block } from './types';
import { rotateClockWiseIn2DArr } from './utils';
import * as utilsModule from './utils';

describe('getRandomBlockList', () => {
  it('모든 블록을 return한다.', () => {
    expect(Object.keys(BLOCK_MAP).sort()).toEqual(
      getRandomBlockList()
        .map(({ type }) => type)
        .sort()
    );
  });

  it('random 값에 따라 다른 블록을 return한다.', () => {
    jest.spyOn(utilsModule, 'getRandom').mockReturnValue(utilsModule.getRandom(0));
    const a = getRandomBlockList().map(({ type }) => type);
    jest.spyOn(utilsModule, 'getRandom').mockReturnValue(utilsModule.getRandom(0.5));
    const b = getRandomBlockList().map(({ type }) => type);
    expect(a).toEqual(b);
  });
});

describe('combineBlockWithPosition', () => {
  describe('col이 0이고 row가 2일 때', () => {
    it('i블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 2 })).toEqual([
        [
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
      ]);
    });
    it('o블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.o, { col: 0, row: 2 })).toEqual([
        [
          {
            type: null,
          },
          {
            type: null,
          },
          {
            type: 'o',
          },
          {
            type: 'o',
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
            type: 'o',
          },
          {
            type: 'o',
          },
        ],
      ]);
    });
    it('l블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.l, { col: 0, row: 2 })).toEqual([
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
            type: 'l',
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
            type: 'l',
          },
          {
            type: 'l',
          },
          {
            type: 'l',
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
    it('t블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.t, { col: 0, row: 2 })).toEqual([
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
            type: 't',
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
            type: 't',
          },
          {
            type: 't',
          },
          {
            type: 't',
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
    it('s블록이 성공적으로 변환된다.', () => {
      expect(combineBlockWithPosition(BLOCK_MAP.s, { col: 0, row: 2 })).toEqual([
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
            type: 's',
          },
          {
            type: 's',
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
            type: 's',
          },
          {
            type: 's',
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
  it('col이 0이고 row가 0일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 0 })).toEqual([
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
      ],
    ]);
  });
  it('col이 0이고 row가 10일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 0, row: 10 })).toEqual([
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
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
  it('col이 10이고 row가 0일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 10, row: 0 })).toEqual([
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
      ],
    ]);
  });
  it('col이 10이고 row가 10일 때 i블록이 성공적으로 변환된다.', () => {
    expect(combineBlockWithPosition(BLOCK_MAP.i, { col: 10, row: 10 })).toEqual([
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
        {
          type: null,
        },
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
        {
          type: null,
        },
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
        {
          type: null,
        },
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
  it('col이 0이고 row가 -1일 때 i 블록이 성공적으로 변환된다.', () => {
    const block: Block = { type: 'i', shape: rotateClockWiseIn2DArr(BLOCK_MAP['i'].shape) };
    expect(combineBlockWithPosition(block, { col: 0, row: -1 })).toEqual([
      [
        {
          type: null,
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
          type: null,
        },
        {
          type: null,
        },
      ],
    ]);
  });
  it('col이 0이고 row가 -2일 때 i 블록이 성공적으로 변환된다.', () => {
    const block: Block = { type: 'i', shape: rotateClockWiseIn2DArr(BLOCK_MAP['i'].shape) };
    expect(combineBlockWithPosition(block, { col: 0, row: -2 })).toEqual([
      [{ type: 'i' }, { type: null }, { type: null }, { type: null }],
      [{ type: 'i' }, { type: null }, { type: null }, { type: null }],
      [{ type: 'i' }, { type: null }, { type: null }, { type: null }],
      [{ type: 'i' }, { type: null }, { type: null }, { type: null }],
    ]);
  });
});

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
