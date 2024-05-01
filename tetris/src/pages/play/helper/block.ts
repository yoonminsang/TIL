import { Block, BlockType } from './types';
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
