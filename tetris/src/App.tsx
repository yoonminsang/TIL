import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import DeadPage from './pages/dead/page';
import PlayPage from './pages/play/page';
import RankingPage from './pages/ranking/page';
import StageClearPage from './pages/stage-clear/page';
import StageIntroPage from './pages/stage-intro/page';
import StartPage from './pages/start/page';
import { useStage } from './stores/stage';
import { useShallow } from 'zustand/react/shallow';
import { ErrorBoundary } from 'react-error-boundary';
import { Button } from './components/ui/button';

type Page = 'start' | 'stage-intro' | 'play' | 'stage-clear' | 'dead' | 'ranking';

function App() {
  const [status, setStatus] = useState<Page>('start');
  const { stage, increase: increaseStage } = useStage(
    useShallow(({ stage, increase }) => {
      return { stage, increase };
    })
  );

  return (
    <ErrorBoundary
      FallbackComponent={({ resetErrorBoundary, error }) => {
        console.error(error);
        return (
          <div>
            <div>예상치 못한 에러가 발생햇습니다.</div>
            <Button onClick={resetErrorBoundary}>초기화하기</Button>
          </div>
        );
      }}
    >
      <SwitchCase
        value={status}
        caseBy={{
          start: (
            <StartPage
              onChangeStageIntroPage={() => {
                setStatus('stage-intro');
              }}
              onChangeRankingPage={() => {
                setStatus('ranking');
              }}
            />
          ),
          'stage-intro': (
            <StageIntroPage
              stage={stage}
              onChangePlayPage={() => {
                setStatus('play');
              }}
            />
          ),
          play: (
            <PlayPage
              stage={stage}
              onChangeStageClearPage={() => {
                increaseStage();
                setStatus('stage-clear');
              }}
              onChangeStageDeadPage={() => {
                setStatus('dead');
              }}
            />
          ),
          'stage-clear': (
            <StageClearPage
              stage={stage}
              onChangeStageIntroPage={() => {
                setStatus('stage-intro');
              }}
            />
          ),
          dead: (
            <DeadPage
              stage={stage}
              onChangeStartPage={() => {
                setStatus('start');
              }}
              onChangeRankingPage={() => {
                setStatus('ranking');
              }}
            />
          ),
          ranking: (
            <RankingPage
              onChangeStartPage={() => {
                setStatus('start');
              }}
            />
          ),
        }}
      />
    </ErrorBoundary>
  );
}

export default App;
