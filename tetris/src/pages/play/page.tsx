import { Button } from '@/components/ui/button';
import { useInterval } from '@/hooks/useInterval';
import { useEffect } from 'react';
import { Renderer, Timer } from './_components';
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
    <div>
      <h1 className="text-xl">PlayPage</h1>
      <Button onClick={onChangeStageClearPage}>Go Stage Clear Page</Button>
      <Button onClick={onChangeStageDeadPage}>Go Stage Dead Page</Button>
      <div>
        <div>
          time: <Timer />
        </div>
        <div>
          clear lines: {clearLine} / {goalClearLine}
        </div>
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
