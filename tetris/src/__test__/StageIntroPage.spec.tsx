import { screen, waitFor } from '@testing-library/react';
import { renderPlayPage, renderStageIntroPage } from './utils/renderPage';

describe('StageIntroPage', () => {
  it('StageIntroPage가 렌더링 된다.', async () => {
    await renderStageIntroPage();
    await screen.findByText(/StageIntroPage/);
  });

  describe('페이지 변경', () => {
    it('Go Play Page 버튼을 누르면 PlayPage로 이동한다.', async () => {
      await renderPlayPage();
      await screen.findByText(/PlayPage/);
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
        { timeout: 5000 },
      );
    });

    it('1초마다 count가 변경된다.', async () => {
      await renderStageIntroPage();

      await waitFor(
        async () => {
          await screen.findByText(/3/);
          await new Promise((_) => setTimeout(_, 1000));
          await screen.findByText(/2/);
          await new Promise((_) => setTimeout(_, 1000));
          await screen.findByText(/1/);
          await new Promise((_) => setTimeout(_, 1000));
          const messageAfter = screen.queryByText(/StageIntroPage/);
          expect(messageAfter).toBeNull();
          await screen.findByText(/PlayPage/);
        },
        { timeout: 5000 },
      );
    });
  });
});
