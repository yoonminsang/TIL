import { useInterval } from '@/hooks/useInterval';
import { useEffect } from 'react';
import RootLayout from '../layout';
import { BlockRenderer, TableRenderer, Timer } from './_components';
import { SETTINGS, getGameSpeed, getGoalClearLine } from './helper';
import { useTetrisGame } from './hooks';

interface PlayPageProps {
  stage: number;
  onChangeStageClearPage: VoidFunction;
  onChangeStageDeadPage: VoidFunction;
}

export default function PlayPage({ stage, onChangeStageClearPage, onChangeStageDeadPage }: PlayPageProps) {
  const goalClearLine = getGoalClearLine(stage);
  const gameSpeed = getGameSpeed({
    currentStage: stage,
    maxSpeedTime: SETTINGS.maxSpeedTime,
    minSpeedTime: SETTINGS.minSpeedTime,
    maxStage: SETTINGS.maxStage,
  });

  const {
    blockForRender,
    tableForRender,
    clearLine,
    intervalCallback,
    handleChangeLeftPosition,
    handleChangeRightPosition,
    handleChangeDownPosition,
    handleChangeRotateBlock,
    handleChangeLastBottomPosition,
  } = useTetrisGame(goalClearLine, onChangeStageClearPage, onChangeStageDeadPage);

  useInterval(intervalCallback, gameSpeed);

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
          return handleChangeRightPosition();
        case 'ArrowLeft':
          return handleChangeLeftPosition();
        case 'ArrowDown':
          return handleChangeDownPosition();
        case 'ArrowUp':
          return handleChangeRotateBlock();
        case ' ':
          return handleChangeLastBottomPosition();
      }
    };
    document.addEventListener('keydown', handleKeydown);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
    };
  }, [
    handleChangeDownPosition,
    handleChangeLastBottomPosition,
    handleChangeLeftPosition,
    handleChangeRightPosition,
    handleChangeRotateBlock,
  ]);

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">PlayPage</h1>
        <div className="flex gap-[16px]">
          <div className="flex w-[150px] flex-col">
            <div>
              time: <Timer />
            </div>
            <div>
              clear lines: {clearLine} / {goalClearLine}
            </div>
          </div>
          <div className="flex flex-col">
            <TableRenderer cellList={tableForRender} />
          </div>
          <div className="flex w-[150px] flex-col">
            <div className="text-l">Next Block</div>
            <BlockRenderer cellList={blockForRender} />
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
