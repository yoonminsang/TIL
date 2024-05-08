import { rotateClockWiseIn2DArr } from './utils';
import { BLOCK_MAP, getBlockBottomPosition } from './block';
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
