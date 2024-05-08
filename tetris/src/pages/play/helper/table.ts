import { produce } from 'immer';
import { getBlockBottomPosition } from './block';
import { SETTINGS } from './constants';
import { Block, Position, Table } from './types';

export const getEmptyTable = (col = SETTINGS.col, row = SETTINGS.row) => {
  return [...Array(col)].map(() => Array(row).fill(null)) as Table;
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

export const combineBlockToTable = (table: Table, block: Block, blockPosition: Position) => {
  const blockTable = combineBlockWithPosition(block, blockPosition);
  const nextTable = produce(table, (draft) => {
    blockTable.forEach((blockShapeCol, col) => {
      blockShapeCol.forEach((blockShape, row) => {
        if (blockShape) {
          draft[col][row] = blockShape;
        }
      });
    });
  });
  return nextTable;
};

export const findCompletedLines = (table: Table) => {
  return table.reduce<number[]>((acc, cur, index) => {
    if (cur.every((v) => v !== null)) {
      acc.push(index);
    }
    return acc;
  }, []);
};

export const getIsPossibleRender = (table: Table, block: Block, blockPosition: Position) => {
  try {
    const invalidBlockPosition =
      blockPosition.col < 0 ||
      blockPosition.row < 0 ||
      blockPosition.col > table.length ||
      blockPosition.row > table[0].length;
    if (invalidBlockPosition) {
      return false;
    }
    const bottom = getBlockBottomPosition(block, blockPosition);
    const isOutOfCol = blockPosition.col < 0 || bottom >= table.length;
    if (isOutOfCol) {
      return false;
    }

    const blockWithPosition = combineBlockWithPosition(block, blockPosition);
    for (let col = 0; col < blockWithPosition.length; col++) {
      for (let row = 0; row < blockWithPosition[0].length; row++) {
        if (blockWithPosition[col][row] !== null && table[col][row] !== null) {
          return false;
        }
      }
    }
    return true;
  } catch (err) {
    return false;
  }
};
