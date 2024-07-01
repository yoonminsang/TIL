import { useInterval } from '@/hooks/useInterval';
import { useEffect, useRef } from 'react';
import RootLayout from '../layout';
import { BlockRenderer, TableRenderer, Timer } from './_components';
import {
  SETTINGS,
  Table,
  combineBlockWithTable,
  BLOCK_MAX_SIZE,
  getEmptyTable,
  getGameSpeed,
  getGoalClearLine,
} from './helper';
import { useTetrisGame } from './hooks';

interface PlayPageProps {
  stage: number;
  onChangeStageClearPage: VoidFunction;
  onChangeStageDeadPage: VoidFunction;
}

const holdBlockForRenderWhenBlockEmpty: Table = [
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
  [null, null, null, null, null, null],
];

// TODO:
// 부딪힐 때(crash) 이펙트 주기
// 위에서 2줄 남았을 때 경고 표시하기
// 죽었을 때 이펙트 주기

export default function PlayPage({ stage, onChangeStageClearPage, onChangeStageDeadPage }: PlayPageProps) {
  const isSpacePressed = useRef<boolean>(false);

  const goalClearLine = getGoalClearLine(stage);
  const initGameSpeed = getGameSpeed({
    currentStage: stage,
    maxSpeedTime: SETTINGS.maxSpeedTime,
    minSpeedTime: SETTINGS.minSpeedTime,
    maxStage: SETTINGS.maxStage,
  });

  const {
    gameSpeed,
    nextBlock,
    holdBlock,
    isChangedHoldBlock,
    tableForRender,
    clearLine,
    intervalCallback,
    handleChangeLeftPosition,
    handleChangeRightPosition,
    handleChangeDownPosition,
    handleChangeClockWiseRotateBlock,
    handleChangeCounterClockWiseRotateBlock,
    handleChangeLastBottomPosition,
    handleChangeHoldBlock,
  } = useTetrisGame(initGameSpeed, goalClearLine, onChangeStageClearPage, onChangeStageDeadPage);

  const blockForRender = combineBlockWithTable(getEmptyTable(BLOCK_MAX_SIZE, BLOCK_MAX_SIZE + 2), nextBlock, {
    col: 1,
    row: 1,
  });

  const holdBlockForRender = holdBlock
    ? combineBlockWithTable(
        getEmptyTable(BLOCK_MAX_SIZE, BLOCK_MAX_SIZE + 2),
        holdBlock,
        {
          col: 1,
          row: 1,
        },
        isChangedHoldBlock ? 'disabled' : undefined
      )
    : holdBlockForRenderWhenBlockEmpty;

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
          return handleChangeClockWiseRotateBlock();
        case 'Control':
          return handleChangeCounterClockWiseRotateBlock();
        case 'c':
          return handleChangeHoldBlock();
        case ' ':
          if (isSpacePressed.current) {
            return;
          }
          handleChangeLastBottomPosition();
          isSpacePressed.current = true;
          return;
      }
    };
    const handleKeyup = (e: KeyboardEvent) => {
      if (e.key === ' ') {
        isSpacePressed.current = false;
      }
    };
    document.addEventListener('keydown', handleKeydown);
    document.addEventListener('keyup', handleKeyup);
    return () => {
      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('keyup', handleKeyup);
    };
  }, [
    handleChangeDownPosition,
    handleChangeHoldBlock,
    handleChangeLastBottomPosition,
    handleChangeLeftPosition,
    handleChangeRightPosition,
    handleChangeClockWiseRotateBlock,
  ]);

  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center gap-[16px]">
        <h1 className="text-2xl">PlayPage</h1>
        <div className="flex gap-[16px]">
          <div className="flex w-[150px] flex-col">
            <div className="text-l">Hold Block</div>
            <BlockRenderer cellList={holdBlockForRender} />
            <div className="mt-auto flex flex-col">
              <div>
                time: <Timer />
              </div>
              <div>
                clear lines: {clearLine} / {goalClearLine}
              </div>
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
