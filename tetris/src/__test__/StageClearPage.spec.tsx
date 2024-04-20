import { screen } from '@testing-library/react';
import { renderStageClearPage } from './utils/renderPage';
import userEvent from '@testing-library/user-event';

describe('StageClearPage', () => {
  it('StageClearPage가 렌더링된다.', async () => {
    await renderStageClearPage();
    await screen.findByText(/StageClearPage/);
  });

  it('현재 stage가 렌더링된다.', async () => {
    await renderStageClearPage(3);
    await screen.findByText(/3 Stage Clear/);
  });

  describe('페이지 변경', () => {
    it('Go Stage Intro Page 버튼을 누르면 StageIntroPage로 이동한다.', async () => {
      await renderStageClearPage(3);
      const button = await screen.findByRole('button', { name: /Go Stage Intro Page/ });
      await userEvent.click(button);
      await screen.findByText(/StageIntroPage/);
      await screen.findByText(/Current Stage: 3/);
    });
  });
});
