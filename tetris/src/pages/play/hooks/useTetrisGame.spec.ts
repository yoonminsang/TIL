import { act, renderHook } from '@testing-library/react';
import * as helperModule from '../helper';
import { useTetrisGame } from './useTetrisGame';

describe('useTetrisGame', () => {
  let onChangeStageClearPage: jest.Mock;
  let onChangeStageDeadPage: jest.Mock;

  beforeEach(() => {
    onChangeStageClearPage = jest.fn();
    onChangeStageDeadPage = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it('정상적으로 초기화된다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    expect(result.current.clearLine).toBe(0);
    expect(isExistCell(result.current.blockForRender)).toBe(true);
    expect(isExistCell(result.current.tableForRender)).toBe(true);
  });

  it('블록을 움직이지 않고 n개 이상 쌓인다면 onChangeStageDeadPage가 실행된다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    for (let i = 0; i < helperModule.SETTINGS.row * helperModule.SETTINGS.col; i++) {
      act(() => {
        result.current.intervalCallback();
      });
      if (onChangeStageDeadPage.mock.calls.length > 0) {
        break;
      }
    }

    expect(onChangeStageDeadPage).toHaveBeenCalled();
  });

  it('블록이 왼쪽으로 이동할 수 있는 경우 왼쪽으로 이동한다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeLeftPosition();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 왼쪽으로 이동할 수 없는 경우 왼쪽으로 이동하지 않는다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    for (let i = 0; i < helperModule.SETTINGS.row; i++) {
      act(() => result.current.handleChangeLeftPosition());
    }

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeLeftPosition();
    });

    expect(beforeTableForRender).toEqual(result.current.tableForRender);
  });

  it('블록이 오른쪽으로 이동할 수 있는 경우 오른쪽으로 이동한다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeRightPosition();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 오른쪽으로 이동할 수 없는 경우 오른쪽으로 이동하지 않는다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    for (let i = 0; i < helperModule.SETTINGS.row; i++) {
      act(() => {
        result.current.handleChangeRightPosition();
      });
    }

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeRightPosition();
    });

    expect(beforeTableForRender).toEqual(result.current.tableForRender);
  });

  it('블록이 아래로 이동할 수 있는 경우 아래로 이동한다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeDownPosition();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 아래로 이동할 수 없는 경우 아래로 이동하지 않는다.', () => {
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    for (let i = 0; i < 1000; i++) {
      act(() => {
        result.current.handleChangeDownPosition();
      });
    }

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeDownPosition();
    });
    expect(beforeTableForRender).toEqual(result.current.tableForRender);
  });

  it('블록이 맨 아래로 이동한다.', () => {
    jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    jest.clearAllMocks();
    jest.restoreAllMocks();
    jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0.5));
    const beforeBlockForRender = result.current.blockForRender;

    act(() => {
      result.current.handleChangeLastBottomPosition();
    });

    expect(beforeBlockForRender).not.toEqual(result.current.blockForRender);
  });

  it('블록이 회전할 수 있는 경우 블록이 정상적으로 회전한다.', () => {
    // NOTE: o블록은 회전해도 변하지 않아서 모킹이 필요함
    jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));
    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeRotateBlock();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 회전할 수 없는 경우 블록이 회전되지 않는다.', () => {
    function getMockTable() {
      const result = helperModule.getEmptyTable();
      for (let col = 0; col < result.length; col++) {
        for (let row = 0; row < result[0].length / 2 - 1; row++) {
          result[col][row] = 'i';
        }
        for (let row = result[0].length / 2 + 1; row < result[0].length; row++) {
          result[col][row] = 'i';
        }
      }
      return result;
    }
    jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
    jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));

    const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeRotateBlock();
    });

    expect(beforeTableForRender).toEqual(result.current.tableForRender);
  });

  describe('interval callback 테스트', () => {
    it('블록 아래 position이 비어있다면 아래로 이동한다.', () => {
      const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

      const beforeTableForRender = result.current.tableForRender;
      act(() => {
        result.current.intervalCallback();
      });

      expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
    });

    it('다음 블록이 렌더링가능하지 않으면 onChangeStageDeadPage가 실행된다.', () => {
      function getMockTable() {
        const result = helperModule.getEmptyTable();
        for (let col = 0; col < result.length; col++) {
          for (let row = 0; row < result[0].length; row++) {
            result[col][row] = 'i';
          }
        }
        return result;
      }
      jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
      jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));

      const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.intervalCallback();
      });

      expect(onChangeStageDeadPage).toHaveBeenCalled();
    });

    it('crash했을 때 새로운 nextBlock이 생성된다.', () => {
      jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));

      const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

      const beforeBlockForRender = result.current.blockForRender;

      jest.clearAllMocks();
      jest.restoreAllMocks();
      jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0.5));

      for (let i = 0; i < helperModule.SETTINGS.col; i++) {
        act(() => {
          result.current.intervalCallback();
        });
      }

      expect(beforeBlockForRender).not.toEqual(result.current.blockForRender);
    });

    it('crash했을 때 clear한 line이 있다면 table과 clearLine이 변경된다.', () => {
      function getMockTable() {
        const result = helperModule.getEmptyTable();
        for (let row = 0; row < result[0].length - 4; row++) {
          result[helperModule.SETTINGS.col - 1][row] = 'i';
        }
        return result;
      }
      jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
      jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));

      const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

      for (let i = 0; i < helperModule.SETTINGS.row; i++) {
        act(() => {
          result.current.handleChangeRightPosition();
        });
      }

      for (let i = 0; i < helperModule.SETTINGS.col; i++) {
        act(() => {
          result.current.intervalCallback();
        });
      }

      expect(result.current.clearLine).toBe(1);
    });

    it('clearLine이 일정 개수를 넘었을 때 onChangeStageClearPage가 실행된다.', () => {
      function getMockTable() {
        const result = helperModule.getEmptyTable();
        for (let row = 0; row < result[0].length - 4; row++) {
          result[helperModule.SETTINGS.col - 1][row] = 'i';
        }
        return result;
      }
      jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
      jest.spyOn(helperModule, 'getRandomBlock').mockReturnValue(helperModule.getRandomBlock(0));
      jest.spyOn(helperModule, 'getGoalClearLine').mockReturnValue(1);

      const { result } = renderHook(() => useTetrisGame(1, onChangeStageClearPage, onChangeStageDeadPage));

      for (let i = 0; i < helperModule.SETTINGS.row; i++) {
        act(() => {
          result.current.handleChangeRightPosition();
        });
      }

      for (let i = 0; i < helperModule.SETTINGS.col; i++) {
        act(() => {
          result.current.intervalCallback();
        });
      }

      expect(result.current.clearLine).toBe(1);
      expect(onChangeStageClearPage).toHaveBeenCalled();
    });
  });
});

function isExistCell(table: helperModule.Table) {
  return table.reduce((acc, cur) => acc || cur.some((cell) => cell !== null), false);
}
