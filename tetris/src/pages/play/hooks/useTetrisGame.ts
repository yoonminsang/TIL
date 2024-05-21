import { usePreservedCallback } from '@toss/react';
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
  getIsPossibleRender,
  getRandomBlock,
  getTableForRenderer,
  getUpdateTableByCompletedLines,
  rotateClockWiseIn2DArr,
} from '../helper';

const blockMaxSize = getBlockMaxSize();

const getInitialPosition = (block: Block) => {
  return {
    col: 0,
    row: Math.floor((SETTINGS.row - block.shape[0].length) / 2),
  };
};

const useCrash = (initGameSpeed: number) => {
  const [gameSpeed, setGameSpeed] = useState<number | null>(initGameSpeed);
  const [isCrashed, _setIsCrashed] = useState<boolean>(false);

  const handleCrash = () => {
    _setIsCrashed(true);
    setGameSpeed(null);
  };

  const handleRecoverCrash = () => {
    _setIsCrashed(false);
    setGameSpeed(initGameSpeed);
  };

  return { gameSpeed, isCrashed, handleCrash, handleRecoverCrash };
};

export const useTetrisGame = (
  initGameSpeed: number,
  goalClearLine: number,
  onChangeStageClearPage: VoidFunction,
  onChangeStageDeadPage: VoidFunction
) => {
  const { gameSpeed, isCrashed, handleCrash, handleRecoverCrash } = useCrash(initGameSpeed);

  const [currentBlock, setCurrentBlock] = useState<Block>(getRandomBlock());
  const [currentBlockPosition, setCurrentBlockPosition] = useState<Position>(getInitialPosition(currentBlock));
  const [nextBlock, setNextBlock] = useState<Block>(getRandomBlock());
  const [clearLine, setClearLine] = useState<number>(0);
  const [table, setTable] = useState<Table>(getEmptyTable(SETTINGS.col, SETTINGS.row));

  const blockForRender = combineBlockWithTable(getEmptyTable(blockMaxSize, blockMaxSize + 2), nextBlock, {
    col: 1,
    row: 1,
  });
  const { tableForRender, nextCol } = getTableForRenderer(table, currentBlock, currentBlockPosition);

  const intervalCallback = usePreservedCallback(() => {
    const nextPosition = { col: currentBlockPosition.col + 1, row: currentBlockPosition.row };
    const isPossibleDownRender = getIsPossibleRender(table, currentBlock, nextPosition);

    if (isPossibleDownRender) {
      setCurrentBlockPosition(nextPosition);
      return;
    }

    const isDead = !getIsPossibleRender(tableForRender, nextBlock, getInitialPosition(nextBlock));
    if (isDead) {
      onChangeStageDeadPage();
      return;
    }

    handleCrash();
  });

  const handleChangePosition = usePreservedCallback((nextPosition: Position) => {
    if (getIsPossibleRender(table, currentBlock, { ...nextPosition })) {
      setCurrentBlockPosition({ ...nextPosition });
    }
  });

  const handleChangeLeftPosition = usePreservedCallback(() => {
    handleChangePosition({ col: currentBlockPosition.col, row: currentBlockPosition.row - 1 });
  });

  const handleChangeRightPosition = usePreservedCallback(() => {
    handleChangePosition({ col: currentBlockPosition.col, row: currentBlockPosition.row + 1 });
  });

  const handleChangeDownPosition = usePreservedCallback(() => {
    handleChangePosition({ col: currentBlockPosition.col + 1, row: currentBlockPosition.row });
  });

  const handleChangeRotateBlock = usePreservedCallback(() => {
    const nextBlock = { ...currentBlock, shape: rotateClockWiseIn2DArr(currentBlock.shape) };
    if (getIsPossibleRender(table, nextBlock, currentBlockPosition)) {
      setCurrentBlock(nextBlock);
      return;
    }

    const leftEmptyRowCount = currentBlock.shape.reduce((acc, cur) => {
      const currentCount = cur.findIndex((v) => v === true);
      return Math.min(acc, currentCount);
    }, Infinity);
    const leftChangedPosition = { col: currentBlockPosition.col, row: currentBlockPosition.row + leftEmptyRowCount };
    if (getIsPossibleRender(table, nextBlock, leftChangedPosition)) {
      setCurrentBlockPosition(leftChangedPosition);
      setCurrentBlock(nextBlock);
      return;
    }

    const rightEmptyRowCount = currentBlock.shape.reduce((acc, cur) => {
      const currentCount = cur.reverse().findIndex((v) => v === true);
      return Math.min(acc, currentCount);
    }, Infinity);
    const rightChangedPosition = { col: currentBlockPosition.col, row: currentBlockPosition.row - rightEmptyRowCount };
    if (getIsPossibleRender(table, nextBlock, rightChangedPosition)) {
      setCurrentBlockPosition(rightChangedPosition);
      setCurrentBlock(nextBlock);
      return;
    }
  });

  const handleChangeLastBottomPosition = usePreservedCallback(() => {
    setCurrentBlockPosition((position) => ({ col: nextCol, row: position.row }));
    handleCrash();
  });

  useEffect(() => {
    if (isCrashed) {
      setCurrentBlock(nextBlock);
      setNextBlock(getRandomBlock());
      setCurrentBlockPosition(getInitialPosition(nextBlock));
      setTable(tableForRender);
      handleRecoverCrash();

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

  return {
    gameSpeed,
    blockForRender,
    tableForRender,
    clearLine,
    intervalCallback,
    handleChangeLeftPosition,
    handleChangeRightPosition,
    handleChangeDownPosition,
    handleChangeRotateBlock,
    handleChangeLastBottomPosition,
  };
};
