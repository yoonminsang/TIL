import { screen } from '@testing-library/react';
import { renderPlayPage } from './utils/renderPage';

describe('PlayPage', () => {
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('PlayPage가 렌더링된다.', async () => {
    await renderPlayPage();
    await screen.findByText(/PlayPage/);
  });
});
