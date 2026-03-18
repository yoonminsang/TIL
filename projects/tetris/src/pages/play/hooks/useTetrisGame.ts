import { usePreservedCallback } from '@toss/react';
import { useEffect, useState } from 'react';
import {
  BLOCK_MAP,
  Block,
  Position,
  SETTINGS,
  Table,
  findCompletedLines,
  getEmptyTable,
  getIsPossibleRender,
  getRandomBlockList,
  getTableForRenderer,
  getUpdateTableByCompletedLines,
  rotateClockWiseIn2DArr,
  rotateCounterClockWiseIn2DArr,
} from '../helper';

const getInitialPosition = (block: Block) => {
  return {
    col: 0,
    row: Math.floor((SETTINGS.row - block.shape[0].length) / 2),
  };
};

const markTableAsCrashed = (table: Table) => {
  return table.map((col) =>
    col.map((row) => {
      if (row.type) {
        return { ...row, isCrashed: true };
      }
      return row;
    })
  );
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

  const [isChangedHoldBlock, setIsChangedHoldBlock] = useState<boolean>(false);

  const [initialRandomBlockList] = useState<Block[]>(getRandomBlockList);

  const [blockList, setBlockList] = useState<Block[]>(initialRandomBlockList.slice(1));
  const [currentBlock, setCurrentBlock] = useState<Block>(initialRandomBlockList[0]);
  const [currentBlockPosition, setCurrentBlockPosition] = useState<Position>(getInitialPosition(currentBlock));
  const nextBlockUI = blockList[0];
  const [holdBlock, setHoldBlock] = useState<Block | null>(null);
  const [clearLine, setClearLine] = useState<number>(0);
  /** clearLine에 대해 애니메이션을 보여주기 위해 사용합니다. */
  const [clearLineArr, setClearLineArr] = useState<number[]>([]);
  const [table, _setTable] = useState<Table>(getEmptyTable(SETTINGS.col, SETTINGS.row));
  const setTable = (nextTable: Table) => _setTable(markTableAsCrashed(nextTable));

  const setNextBlock = () => {
    const nextBlockList = blockList.length === 1 ? getRandomBlockList() : blockList.slice(1);
    setBlockList(nextBlockList);
    return nextBlockList;
  };

  const { tableForRender, nextCol } = getTableForRenderer(table, currentBlock, currentBlockPosition);

  const intervalCallback = usePreservedCallback(() => {
    const nextPosition = { col: currentBlockPosition.col + 1, row: currentBlockPosition.row };
    const isPossibleDownRender = getIsPossibleRender(table, currentBlock, nextPosition);

    if (isPossibleDownRender) {
      setCurrentBlockPosition(nextPosition);
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

  const changeRotateBlock = (nextBlock: Block) => {
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
  };

  const handleChangeClockWiseRotateBlock = usePreservedCallback(() => {
    changeRotateBlock({ ...currentBlock, shape: rotateClockWiseIn2DArr(currentBlock.shape) });
  });

  const handleChangeCounterClockWiseRotateBlock = usePreservedCallback(() => {
    changeRotateBlock({ ...currentBlock, shape: rotateCounterClockWiseIn2DArr(currentBlock.shape) });
  });

  const handleChangeLastBottomPosition = usePreservedCallback(() => {
    setCurrentBlockPosition((position) => ({ col: nextCol, row: position.row }));
    handleCrash();
  });

  // TODO: hold를 변경해서 겹치는 케이스 생각하기
  const handleChangeHoldBlock = () => {
    if (isChangedHoldBlock) {
      return;
    }

    if (holdBlock) {
      setHoldBlock(BLOCK_MAP[currentBlock.type]);
      setCurrentBlock(holdBlock);
      setCurrentBlockPosition(getInitialPosition(nextBlockUI));
    } else {
      setHoldBlock(BLOCK_MAP[currentBlock.type]);
      setCurrentBlock(nextBlockUI);
      setNextBlock();
      setCurrentBlockPosition(getInitialPosition(nextBlockUI));
    }
    setIsChangedHoldBlock(true);
  };

  useEffect(() => {
    if (isCrashed) {
      const nextCurrentBlockPosition = getInitialPosition(nextBlockUI);
      const [nextBlock] = setNextBlock();
      setCurrentBlock(nextBlockUI);
      setCurrentBlockPosition({ ...nextCurrentBlockPosition });
      setTable(tableForRender);
      setIsChangedHoldBlock(false);
      handleRecoverCrash();

      const completedLines = findCompletedLines(tableForRender);
      if (completedLines.length > 0) {
        const nextClearLine = clearLine + completedLines.length;
        setClearLine(nextClearLine);
        setTable(getUpdateTableByCompletedLines(tableForRender, completedLines));
        if (nextClearLine >= goalClearLine) {
          onChangeStageClearPage();
        }

        setClearLineArr(completedLines);
        const prevClearLine = clearLine;
        setTimeout(() => {
          if (clearLine === prevClearLine) {
            setClearLineArr([]);
          }
        }, 300);
      }

      const isDead = !getIsPossibleRender(tableForRender, nextBlock, getInitialPosition(nextBlock));
      if (isDead) {
        onChangeStageDeadPage();
        return;
      }
    }
  }, [isCrashed]);

  return {
    gameSpeed,
    nextBlock: nextBlockUI,
    holdBlock,
    isChangedHoldBlock,
    tableForRender,
    clearLine,
    clearLineArr,
    intervalCallback,
    handleChangeLeftPosition,
    handleChangeRightPosition,
    handleChangeDownPosition,
    handleChangeClockWiseRotateBlock,
    handleChangeCounterClockWiseRotateBlock,
    handleChangeLastBottomPosition,
    handleChangeHoldBlock,
  };
};
