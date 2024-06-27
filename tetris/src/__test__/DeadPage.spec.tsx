import { useStage } from '@/stores/stage';
import { act, screen } from '@testing-library/react';
import { renderDeadPage } from './utils/renderPage';
import userEvent from '@testing-library/user-event';

describe('DeadPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();

    act(() => {
      useStage.setState({
        stage: 1,
      });
    });
  });

  it('DeadPage가 렌더링된다.', async () => {
    await renderDeadPage();
    await screen.findByText(/DeadPage/);
  });

  describe('현재 stage가 렌더링된다.', () => {
    it('1 stage가 렌더링된다.', async () => {
      await renderDeadPage();
      await screen.findByText(/You are dead in 1 stage/);
    });
    it('3 stage가 렌더링된다.', async () => {
      useStage.setState({
        stage: 3,
      });
      await renderDeadPage();
      await screen.findByText(/You are dead in 3 stage/);
    });
  });

  describe('페이지 변경', () => {
    it('Go Start Page 버튼을 누르면 StartPage로 이동한다.', async () => {
      await renderDeadPage();
      const button = await screen.findByRole('button', { name: /Go Start Page/ });
      await userEvent.click(button);
      await screen.findByText(/StartPage/);
    });

    it('Go Ranking Page 버튼을 누르면 RankingPage로 이동한다.', async () => {
      await renderDeadPage();
      const button = await screen.findByRole('button', { name: /Go Ranking Page/ });
      await userEvent.click(button);
      await screen.findByText(/RankingPage/);
    });
  });
});
