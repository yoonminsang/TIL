import { useEffect, useState } from 'react';
import {
  Block,
  Position,
  SETTINGS,
  Table,
  combineBlockWithTable,
  findCompletedLines,
  getBlockMaxSize,
  getEmptyTable,
  getGoalClearLine,
  getIsPossibleRender,
  getRandomBlock,
  getUpdateTableByCompletedLines,
  rotateClockWiseIn2DArr,
} from '../helper';
import { usePreservedCallback } from '@toss/react';

const blockMaxSize = getBlockMaxSize();
const blockEmptyTable = getEmptyTable(blockMaxSize, blockMaxSize);

const getInitialPosition = (block: Block) => {
  return {
    col: 0,
    row: Math.floor((SETTINGS.row - block.shape[0].length) / 2),
  };
};

export const useTetrisGame = (
  stage: number,
  onChangeStageClearPage: VoidFunction,
  onChangeStageDeadPage: VoidFunction,
) => {
  const [currentBlock, setCurrentBlock] = useState<Block>(getRandomBlock());
  const [currentBlockPosition, setCurrentBlockPosition] = useState<Position>(getInitialPosition(currentBlock));
  const [nextBlock, setNextBlock] = useState<Block>(getRandomBlock());
  const [clearLine, setClearLine] = useState<number>(0);
  const [table, setTable] = useState<Table>(getEmptyTable(SETTINGS.col, SETTINGS.row));
  const [isCrashed, setIsCrashed] = useState<boolean>(false);

  const goalClearLine = getGoalClearLine(stage);
  const blockForRender = combineBlockWithTable(blockEmptyTable, nextBlock, { col: 0, row: 0 });
  const tableForRender = combineBlockWithTable(table, currentBlock, currentBlockPosition);

  const intervalCallback = () => {
    const isPossibleDownRender = getIsPossibleRender(table, currentBlock, {
      col: currentBlockPosition.col + 1,
      row: currentBlockPosition.row,
    });
    if (isPossibleDownRender) {
      setCurrentBlockPosition((position) => ({ col: position.col + 1, row: position.row }));
      return;
    }

    const isDead = !getIsPossibleRender(tableForRender, nextBlock, getInitialPosition(nextBlock));
    if (isDead) {
      onChangeStageDeadPage();
      return;
    }

    setIsCrashed(true);
  };

    const completedLines = findCompletedLines(table);

  useEffect(() => {
    if (isCrashed) {
      setCurrentBlock(nextBlock);
      setNextBlock(getRandomBlock());
      setCurrentBlockPosition(getInitialPosition(nextBlock));
      setTable(tableForRender);
      setIsCrashed(false);

      const completedLines = findCompletedLines(tableForRender);
      if (completedLines.length > 0) {
        const nextClearLine = clearLine + completedLines.length;
        setClearLine(nextClearLine);
        setTable(getUpdateTableByCompletedLines(tableForRender, completedLines));
        if (nextClearLine >= goalClearLine) {
          onChangeStageClearPage();
        }
      }
    }
  }, [isCrashed]);

    setCurrentBlock(nextBlock);
    setNextBlock(getRandomBlock());
    setCurrentBlockPosition(getInitialPosition(nextBlock));
    setTable(tableForRender);
  };

  return { blockForRender, tableForRender, clearLine, intervalCallback };
};
