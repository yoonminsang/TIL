import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderRankingPage } from './utils/renderPage';

describe('RankingPage', () => {
  it('RankingPage가 렌더링된다.', async () => {
    await renderRankingPage();
    await screen.findByText(/RankingPage/);
  });

  describe('페이지 변경', () => {
    it('Go Start Page 버튼을 누르면 StartPage로 이동한다.', async () => {
      await renderRankingPage();
      const button = await screen.findByRole('button', { name: /Go Start Page/ });
      await userEvent.click(button);
      await screen.findByText(/StartPage/);
    });
  });
});
