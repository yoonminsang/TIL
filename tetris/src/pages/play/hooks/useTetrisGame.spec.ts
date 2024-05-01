import { act, renderHook } from '@testing-library/react';
import { useTetrisGame } from './useTetrisGame';

describe('useTetrisGame', () => {
  it('정상적으로 onChangeStageDeadPage가 실행된다.', () => {
    const mockOnChangeStageClearPage = jest.fn();
    const mockOnChangeStageDeadPage = jest.fn();

    const { result } = renderHook(() => useTetrisGame(1, mockOnChangeStageClearPage, mockOnChangeStageDeadPage));

    for (let i = 0; i < 10000; i++) {
      act(() => {
        result.current.intervalCallback();
      });
      if (mockOnChangeStageDeadPage.mock.calls.length > 0) {
        break;
      }
    }

    expect(mockOnChangeStageDeadPage).toHaveBeenCalled();
  });
});
