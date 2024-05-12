import { Block, BlockType, Position, Table } from './types';
import { getRandom } from './utils';

export const BLOCK_MAP: Record<BlockType, Block> = {
  i: {
    type: 'i',
    shape: [
      [true, true, true, true],
      [false, false, false, false],
      [false, false, false, false],
      [false, false, false, false],
    ],
  },
  o: {
    type: 'o',
    shape: [
      [true, true],
      [true, true],
    ],
  },
  l: {
    type: 'l',
    shape: [
      [false, false, true],
      [true, true, true],
    ],
  },
  j: {
    type: 'j',
    shape: [
      [true, false, false],
      [true, true, true],
    ],
  },
  t: {
    type: 't',
    shape: [
      [false, true, false],
      [true, true, true],
    ],
  },
  s: {
    type: 's',
    shape: [
      [false, true, true],
      [true, true, false],
    ],
  },
  z: {
    type: 'z',
    shape: [
      [true, true, false],
      [false, true, true],
    ],
  },
};

const blockList = Object.values(BLOCK_MAP);

export const getBlockMaxSize = () => {
  return blockList.reduce((acc, cur) => {
    return Math.max(acc, cur.shape.length, cur.shape[0].length);
  }, 0);
};

export const getRandomBlock = (random = Math.random()) => {
  return blockList[getRandom(blockList.length, random)];
};

export const getBlockBottomPosition = (block: Block, blockPosition: Position) => {
  const blockTable = combineBlockWithPosition(block, blockPosition);
  let max = -Infinity;
  blockTable.forEach((col, colIndex) => {
    col.forEach((row) => {
      if (row !== null) {
        max = Math.max(max, colIndex);
      }
    });
  });
  return max;
};

export const combineBlockWithPosition = (block: Block, blockPosition: Position) => {
  const blockColLength = block.shape.length;
  const blockRowLength = block.shape[0].length;
  const table = [...Array(blockPosition.col + blockColLength)].map(() =>
    Array(blockPosition.row + blockRowLength).fill(null),
  ) as Table;
  const addCol = blockPosition.col;
  const addRow = blockPosition.row;
  block.shape.forEach((blockShapeCol, col) => {
    blockShapeCol.forEach((isExistBlock, row) => {
      if (isExistBlock) {
        table[col + addCol][row + addRow] = block.type;
      }
    });
  });
  return table;
};
