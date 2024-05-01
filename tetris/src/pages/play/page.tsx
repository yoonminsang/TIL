import { Button } from '@/components/ui/button';
import { useInterval } from '@/hooks/useInterval';
import { produce } from 'immer';
import { useState } from 'react';
import { Renderer, Timer } from './_components';
import {
  Block,
  Position,
  SETTINGS,
  Table,
  combineBlockToTable,
  findCompletedLines,
  getBlockMaxSize,
  getEmptyTable,
  getGameSpeed,
  getGoalClearLine,
  getIsPossibleRender,
  getRandomBlock,
} from './helper';

interface PlayPageProps {
  stage: number;
  onChangeStageClearPage: VoidFunction;
  onChangeStageDeadPage: VoidFunction;
}

const blockMaxSize = getBlockMaxSize();
const blockEmptyTable = getEmptyTable(blockMaxSize, blockMaxSize);

const getInitialPosition = () => {
  return {
    col: 0,
    row: Math.floor(SETTINGS.row / 2),
  };
};

// TODO: 추상화
export default function PlayPage({ stage, onChangeStageClearPage, onChangeStageDeadPage }: PlayPageProps) {
  const [currentBlockPosition, setCurrentBlockPosition] = useState<Position>(getInitialPosition());
  const [currentBlock, setCurrentBlock] = useState<Block>(getRandomBlock());
  const [nextBlock, setNextBlock] = useState<Block>(getRandomBlock());
  const [clearLine, setClearLine] = useState<number>(0);
  const [table, setTable] = useState<Table>(getEmptyTable(SETTINGS.col, SETTINGS.row));

  const goalClearLine = getGoalClearLine(stage);
  const blockForRender = combineBlockToTable(blockEmptyTable, nextBlock, { col: 0, row: 0 });
  const tableForRender = combineBlockToTable(table, currentBlock, currentBlockPosition);

  const gameSpeed = getGameSpeed({
    currentStage: stage,
    maxSpeedTime: SETTINGS.maxSpeedTime,
    minSpeedTime: SETTINGS.minSpeedTime,
    maxStage: SETTINGS.maxStage,
  });

  useInterval(() => {
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
  }, gameSpeed);

  // TODO: 키보드이벤트로 블록 조작

  return (
    <div>
      <h1 className="text-xl">PlayPage</h1>
      <Button onClick={onChangeStageClearPage}>Go Stage Clear Page</Button>
      <Button onClick={onChangeStageDeadPage}>Go Stage Dead Page</Button>
      <div>
        <div>
          time: <Timer />
        </div>
        <div>clear lines: {clearLine}</div>
        <div>
          <Renderer cellList={tableForRender} />
        </div>
        <div>
          <Renderer cellList={blockForRender} />
        </div>
      </div>
    </div>
  );
}
