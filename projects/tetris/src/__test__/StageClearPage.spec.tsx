import { act, screen } from '@testing-library/react';
import { renderStageClearPage } from './utils/renderPage';
import userEvent from '@testing-library/user-event';
import { useStage } from '@/stores/stage';

describe('StageClearPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();

    act(() => {
      useStage.setState({
        stage: 1,
      });
    });
  });

  it('StageClearPage가 렌더링된다.', async () => {
    await renderStageClearPage();
    await screen.findByText(/StageClearPage/);
    await screen.findByText(/1 Stage Clear/);
  });

  describe('현재 stage가 렌더링된다.', () => {
    it('1 stage가 렌더링된다.', async () => {
      await renderStageClearPage();
      await screen.findByText(/1 Stage Clear/);
    });

    it('2 stage가 렌더링된다.', async () => {
      act(() => {
        useStage.setState({
          stage: 2,
        });
      });
      await renderStageClearPage();
      await screen.findByText(/2 Stage Clear/);
    });
  });

  it('Go Stage Intro Page 버튼을 누르면 StageIntroPage로 이동한다.', async () => {
    await renderStageClearPage();
    const button = await screen.findByRole('button', { name: /Go Stage Intro Page/ });
    await userEvent.click(button);
    await screen.findByText(/StageIntroPage/);
    await screen.findByText(/Current Stage: 2/);
  });
});
