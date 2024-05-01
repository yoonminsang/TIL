import { produce } from 'immer';
import { useState } from 'react';
import {
  Block,
  Position,
  SETTINGS,
  Table,
  combineBlockToTable,
  findCompletedLines,
  getBlockMaxSize,
  getEmptyTable,
  getGoalClearLine,
  getIsPossibleRender,
  getRandomBlock,
} from '../helper';

const blockMaxSize = getBlockMaxSize();
const blockEmptyTable = getEmptyTable(blockMaxSize, blockMaxSize);

const getInitialPosition = () => {
  return {
    col: 0,
    row: Math.floor(SETTINGS.row / 2),
  };
};

export const useTetrisGame = (
  stage: number,
  onChangeStageClearPage: VoidFunction,
  onChangeStageDeadPage: VoidFunction,
) => {
  const [currentBlockPosition, setCurrentBlockPosition] = useState<Position>(getInitialPosition());
  const [currentBlock, setCurrentBlock] = useState<Block>(getRandomBlock());
  const [nextBlock, setNextBlock] = useState<Block>(getRandomBlock());
  const [clearLine, setClearLine] = useState<number>(0);
  const [table, setTable] = useState<Table>(getEmptyTable(SETTINGS.col, SETTINGS.row));

  const goalClearLine = getGoalClearLine(stage);
  const blockForRender = combineBlockToTable(blockEmptyTable, nextBlock, { col: 0, row: 0 });
  const tableForRender = combineBlockToTable(table, currentBlock, currentBlockPosition);

  const intervalCallback = () => {
    const isPossibleRender = getIsPossibleRender(table, currentBlock, {
      col: currentBlockPosition.col + 1,
      row: currentBlockPosition.row,
    });
    if (isPossibleRender) {
      setCurrentBlockPosition((position) => ({ col: position.col + 1, row: position.row }));
      return;
    }

    const isDead = !getIsPossibleRender(tableForRender, nextBlock, getInitialPosition());
    if (isDead) {
      onChangeStageDeadPage();
      return;
    }

    const completedLines = findCompletedLines(table);
    if (completedLines.length > 0) {
      const nextClearLine = clearLine + completedLines.length;
      setClearLine(nextClearLine);
      setTable(
        produce((table) =>
          table.map((cellList, cellListIndex) => {
            if (completedLines.includes(cellListIndex)) {
              return Array(cellList.length).fill(null);
            } else {
              return cellList;
            }
          }),
        ),
      );
      if (nextClearLine >= goalClearLine) {
        onChangeStageClearPage();
      }
    }

    setCurrentBlock(nextBlock);
    setNextBlock(getRandomBlock());
    setCurrentBlockPosition({
      col: 0,
      row: Math.floor(SETTINGS.row / 2),
    });
    setTable(tableForRender);
  };

  return { blockForRender, tableForRender, clearLine, intervalCallback };
};
