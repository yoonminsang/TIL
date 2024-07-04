import App from '@/App';
import * as helperModule from '@/pages/play/helper';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

export function renderApp() {
  render(<App />);
}

export async function renderStageIntroPage() {
  renderApp();
  const button = await screen.findByRole('button', { name: /Game Start/ });
  await userEvent.click(button);
}

export async function renderRankingPage() {
  renderApp();
  const button = await screen.findByRole('button', { name: /Go Ranking Page/ });
  await userEvent.click(button);
}

export async function renderPlayPage() {
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
}

/**
 * 함수 모킹이 포함되어 있습니다. 하나의 파일에서 여러 테스트 코드를 작성한다면 아래 주석을 추가해주세요
 * ```
   afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
   });
 * ```
 */
export async function renderStageClearPage() {
  function getMockTable() {
    const result = helperModule.getEmptyTable();
    for (let row = 0; row < result[0].length - 4; row++) {
      result[helperModule.SETTINGS.col - 1][row].type = 'i';
    }
    return result;
  }
  jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
  jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
    Array(helperModule.BLOCK_MAX_SIZE)
      .fill(null)
      .map(() => helperModule.BLOCK_MAP['i'])
  );
  jest.spyOn(helperModule, 'getGoalClearLine').mockReturnValue(1);

  await renderPlayPage();

  for (let i = 0; i < helperModule.SETTINGS.row; i++) {
    act(() => {
      fireEvent.keyDown(document, { key: 'ArrowRight' });
    });
  }

  act(() => {
    fireEvent.keyDown(document, { key: ' ' });
  });
}

/**
 * 함수 모킹이 포함되어 있습니다. 하나의 파일에서 여러 테스트 코드를 작성한다면 아래 주석을 추가해주세요
 * ```
   afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
   });
 * ```
 */
export async function renderDeadPage() {
  function getMockTable() {
    const result = helperModule.getEmptyTable();
    for (let col = 1; col < result.length; col++) {
      for (let row = result[0].length / 2 - 2; row < result[0].length / 2 + 2; row++) {
        result[col][row].type = 'i';
      }
    }
    return result;
  }
  jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
  jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
    Array(helperModule.BLOCK_MAX_SIZE)
      .fill(null)
      .map(() => helperModule.BLOCK_MAP['i'])
  );

  await renderPlayPage();

  act(() => {
    fireEvent.keyDown(document, { key: ' ' });
  });
}
