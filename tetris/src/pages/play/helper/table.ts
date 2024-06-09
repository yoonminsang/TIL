import { produce } from 'immer';
import { combineBlockWithPosition, getBlockBottomPosition } from './block';
import { SETTINGS } from './constants';
import { Block, Cell, Position, Table } from './types';

export const getEmptyTable = (col = SETTINGS.col, row = SETTINGS.row) => {
  return [...Array(col)].map(() => Array(row).fill(null)) as Table;
};

export const combineBlockWithTable = (table: Table, block: Block, blockPosition: Position) => {
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

export const getTableForRenderer = (table: Table, block: Block, blockPosition: Position) => {
  let nextCol = blockPosition.col;
  while (getIsPossibleRender(table, block, { col: nextCol, row: blockPosition.row })) {
    nextCol += 1;
  }
  nextCol = Math.max(nextCol - 1, 0);

  const blockWithTable = combineBlockWithTable(table, block, blockPosition);
  const shadowTable = combineBlockWithPosition(block, { col: nextCol, row: blockPosition.row });

  const tableForRender = produce(blockWithTable, (draft) => {
    shadowTable.forEach((blockShapeCol, col) => {
      blockShapeCol.forEach((blockShape, row) => {
        if (draft[col]?.[row] === null && blockShape) {
          draft[col][row] = 'shadow';
        }
      });
    });
  });
  return { tableForRender, nextCol };
};

export const findCompletedLines = (table: Table) => {
  return table.reduce<number[]>((acc, cur, index) => {
    if (cur.every((v) => v !== null)) {
      acc.push(index);
    }
    return acc;
  }, []);
};

function getCellLength<T>(table: T[][]) {
  return table.reduce(
    (acc, cur) =>
      acc +
      cur.reduce((ac, cu) => {
        if (cu !== null) {
          return ac + 1;
        }
        return ac;
      }, 0),
    0
  );
}

function getBlockLength<T>(table: T[][]) {
  return table.reduce(
    (acc, cur) =>
      acc +
      cur.reduce((ac, cu) => {
        if (cu) {
          return ac + 1;
        }
        return ac;
      }, 0),
    0
  );
}

export const getIsPossibleRender = (table: Table, block: Block, blockPosition: Position) => {
  const blockWithPosition = combineBlockWithPosition(block, blockPosition);
  const cellLength = getCellLength(blockWithPosition);
  const blockLength = getBlockLength(block.shape);

  const invalidBlockPosition =
    blockPosition.col < 0 ||
    cellLength !== blockLength ||
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

  for (let col = 0; col < blockWithPosition.length; col++) {
    for (let row = 0; row < blockWithPosition[0].length; row++) {
      if (blockWithPosition[col][row] !== null && table[col][row] !== null) {
        return false;
      }
    }
  }
  return true;
};

export const getUpdateTableByCompletedLines = (table: Table, completedLines: number[]) => {
  const result = initTable(table, completedLines);
  shiftRowsDown(result, completedLines);
  return result;

  function initTable(table: Table, completedLines: number[]) {
    return table.map((cellList, cellListIndex) => {
      if (completedLines.includes(cellListIndex)) {
        return Array(cellList.length).fill(null) as Cell[];
      } else {
        return [...cellList];
      }
    });
  }

  function shiftRowsDown(result: Table, completedLines: number[]) {
    completedLines.forEach((completedLine) => {
      for (let col = completedLine - 1; col >= 0; col--) {
        result[col + 1] = [...result[col]];
      }
    });
  }
};
