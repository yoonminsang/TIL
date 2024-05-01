import { Button } from '@/components/ui/button';
import { useInterval } from '@/hooks/useInterval';
import { Renderer, Timer } from './_components';
import { SETTINGS, getGameSpeed } from './helper';
import { useTetrisGame } from './hooks';

interface PlayPageProps {
  stage: number;
  onChangeStageClearPage: VoidFunction;
  onChangeStageDeadPage: VoidFunction;
}

export default function PlayPage({ stage, onChangeStageClearPage, onChangeStageDeadPage }: PlayPageProps) {
  const { blockForRender, tableForRender, clearLine, intervalCallback } = useTetrisGame(
    stage,
    onChangeStageClearPage,
    onChangeStageDeadPage,
  );

  const gameSpeed = getGameSpeed({
    currentStage: stage,
    maxSpeedTime: SETTINGS.maxSpeedTime,
    minSpeedTime: SETTINGS.minSpeedTime,
    maxStage: SETTINGS.maxStage,
  });

  useInterval(intervalCallback, gameSpeed);

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
