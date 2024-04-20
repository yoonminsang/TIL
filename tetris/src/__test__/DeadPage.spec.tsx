import { screen } from '@testing-library/react';
import { renderDeadPage } from './utils/renderPage';
import userEvent from '@testing-library/user-event';

describe('DeadPage', () => {
  it('DeadPage가 렌더링된다.', async () => {
    await renderDeadPage();
    await screen.findByText(/DeadPage/);
  });

  it('현재 stage가 렌더링된다.', async () => {
    await renderDeadPage(3);
    await screen.findByText(/You are dead in 3 stage/);
  });

  describe('페이지 변경', () => {
    it('Go Start Page 버튼을 누르면 StartPage로 이동한다.', async () => {
      await renderDeadPage(3);
      const button = await screen.findByRole('button', { name: /Go Start Page/ });
      await userEvent.click(button);
      await screen.findByText(/StartPage/);
    });

    it('Go Ranking Page 버튼을 누르면 StartPage로 이동한다.', async () => {
      await renderDeadPage(3);
      const button = await screen.findByRole('button', { name: /Go Ranking Page/ });
      await userEvent.click(button);
      await screen.findByText(/RankingPage/);
    });
  });
});
