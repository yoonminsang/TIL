import { SwitchCase } from '@toss/react';
import { useState } from 'react';
import DeadPage from './pages/dead/page';
import PlayPage from './pages/play/page';
import RankingPage from './pages/ranking/page';
import StageClearPage from './pages/stage-clear/page';
import StageIntroPage from './pages/stage-intro/page';
import StartPage from './pages/start/page';
import { useStage } from './stores/stage';

type Page = 'start' | 'stage-intro' | 'play' | 'stage-clear' | 'dead' | 'ranking';

function App() {
  const [status, setStatus] = useState<Page>('start');
  const stage = useStage((state) => state.stage);
  return (
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
            onChangeStageClearPage={() => {
              setStatus('stage-clear');
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
  );
}

export default App;
