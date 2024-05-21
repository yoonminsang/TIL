import { act, screen, waitFor } from '@testing-library/react';
import { renderStageIntroPage } from './utils/renderPage';
import { useStage } from '@/stores/stage';

describe('StageIntroPage', () => {
  afterEach(() => {
    useStage.setState({ stage: 1 });
  });

  it('StageIntroPage가 렌더링 된다.', async () => {
    await renderStageIntroPage();
    await screen.findByText(/StageIntroPage/);
  });

  it('4초뒤에 자동으로 PlayPage로 이동한다.', async () => {
    await renderStageIntroPage();

    await waitFor(
      async () => {
        await new Promise((_) => setTimeout(_, 4000));
        const messageAfter = screen.queryByText(/StageIntroPage/);
        expect(messageAfter).toBeNull();
        await screen.findByText(/PlayPage/);
      },
      { timeout: 5000 }
    );
  });

  it('1초마다 count가 변경된다.', async () => {
    await renderStageIntroPage();

    await waitFor(() => expect(screen.getByText(/3/)).toBeInTheDocument(), { timeout: 1000 });
    await waitFor(() => expect(screen.getByText(/2/)).toBeInTheDocument(), { timeout: 2000 });
    await waitFor(() => expect(screen.getByText(/1/)).toBeInTheDocument(), { timeout: 3000 });
  });

  describe('현재 stage가 렌더링된다.', () => {
    it('1 stage가 렌더링된다.', async () => {
      await renderStageIntroPage();
      await screen.findByText(/Current Stage: 1/);
    });
    it('5 stage가 렌더링된다.', async () => {
      act(() => {
        useStage.setState({
          stage: 5,
        });
      });
      await renderStageIntroPage();
      await screen.findByText(/Current Stage: 5/);
    });
  });
});
