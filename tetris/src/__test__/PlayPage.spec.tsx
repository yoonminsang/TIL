import { screen } from '@testing-library/react';
import { renderDeadPage, renderPlayPage, renderStageClearPage } from './utils/renderPage';

// NOTE: 일단은 가벼운 테스트만 진행합니다. 전체 플로우를 작성한 이후 세부적인 테스트 코드를 작성합니다.
describe('PlayPage', () => {
  it('PlayPage가 렌더링된다.', async () => {
    await renderPlayPage();
    await screen.findByText(/PlayPage/);
  });

  describe('페이지 변경', () => {
    it('Go Stage Clear Page 버튼을 누르면 StageClearPage로 이동한다.', async () => {
      await renderStageClearPage();
      await screen.findByText(/StageClearPage/);
    });
    it('Go Stage Dead Page 버튼을 누르면 DeadPage로 이동한다.', async () => {
      await renderDeadPage();
      await screen.findByText(/DeadPage/);
    });
  });
});
