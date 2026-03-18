import { screen } from '@testing-library/react';
import { renderApp, renderRankingPage, renderStageIntroPage } from './utils/renderPage';

describe('StartPage', () => {
  it('처음에 게임 시작 페이지가 렌더링된다.', async () => {
    renderApp();
    await screen.findByText(/StartPage/);
  });

  describe('페이지 변경', () => {
    it('Game Start 버튼을 누르면 StageIntroPage로 이동한다.', async () => {
      await renderStageIntroPage();
      await screen.findByText(/StageIntroPage/);
    });

    it('Go Ranking Page 버튼을 누르면 RankingPage로 이동한다.', async () => {
      await renderRankingPage();
      await screen.findByText(/RankingPage/);
    });
  });
});
