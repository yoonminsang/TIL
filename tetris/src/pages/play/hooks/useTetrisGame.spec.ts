import { act, renderHook, waitFor } from '@testing-library/react';
import * as helperModule from '../helper';
import { useTetrisGame } from './useTetrisGame';

// NOTE
// 아래와 같은 코드를 썼을 때 훅의 결과값이 null이 되는 버그가 있어서 불필요한 async를 제거함
// act(async () => {
//   result.current.handleChangeLastBottomPosition();
// });

// `handleChangeLastBottomPosition이 실행되면 gameSpeed가 변경된다.` 아래에 있는 테스트 코드는 훅의 결과값이 null이 되는 버그가 존재함.
// act를 사용하게 되면 상태 변경이후가 찍히는데 위 테스트케이스에서는 상태가 변경되는 과정을 테스트해야하기 때문에 act 내부에 await waitFor로직이 들어가있음.
// 임시로 맨 아래로 테스트를 이동해서 해겨함

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
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

    expect(result.current.clearLine).toBe(0);
    expect(!!result.current.nextBlock).toBe(true);
    expect(isExistCell(result.current.tableForRender)).toBe(true);
  });

  it('블록을 움직이지 않고 n개 이상 쌓인다면 onChangeStageDeadPage가 실행된다.', () => {
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeLeftPosition();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 왼쪽으로 이동할 수 없는 경우 왼쪽으로 이동하지 않는다.', () => {
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeRightPosition();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 오른쪽으로 이동할 수 없는 경우 오른쪽으로 이동하지 않는다.', () => {
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

    const beforeTableForRender = result.current.tableForRender;
    act(() => {
      result.current.handleChangeDownPosition();
    });

    expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
  });

  it('블록이 아래로 이동할 수 없는 경우 아래로 이동하지 않는다.', () => {
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

    jest.clearAllMocks();
    jest.restoreAllMocks();
    const nextBlock = result.current.nextBlock;

    act(() => {
      result.current.handleChangeLastBottomPosition();
    });

    expect(nextBlock).not.toEqual(result.current.nextBlock);
  });

  describe('블록 회전', () => {
    it('블록이 정상적으로 회전한다.', () => {
      // NOTE: o블록은 회전해도 변하지 않아서 모킹이 필요함
      jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
        Array(helperModule.BLOCK_MAX_SIZE)
          .fill(null)
          .map(() => helperModule.BLOCK_MAP['i'])
      );
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      const beforeTableForRender = result.current.tableForRender;
      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });

      expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
    });

    it('블록이 시게반대방향으로 정상적으로 회전한다.', () => {
      // NOTE: o블록은 회전해도 변하지 않아서 모킹이 필요함
      jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
        Array(helperModule.BLOCK_MAX_SIZE)
          .fill(null)
          .map(() => helperModule.BLOCK_MAP['i'])
      );
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      const beforeTableForRender = result.current.tableForRender;
      act(() => {
        result.current.handleChangeCounterClockWiseRotateBlock();
      });

      expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
    });

    it('i블록을 회전하고 position을 맨 왼쪽으로 이동했을 때 블록이 정상적으로 회전한다.', () => {
      jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
        Array(helperModule.BLOCK_MAX_SIZE)
          .fill(null)
          .map(() => helperModule.BLOCK_MAP['i'])
      );
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });
      for (let i = 0; i < helperModule.SETTINGS.row / 2; i++) {
        act(() => {
          result.current.handleChangeLeftPosition();
        });
      }

      const beforeTableForRender = result.current.tableForRender;
      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });

      expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
    });

    it('i블록을 회전하고 position을 맨 오른쪽으로 이동했을 때 블록이 정상적으로 회전한다.', () => {
      jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
        Array(helperModule.BLOCK_MAX_SIZE)
          .fill(null)
          .map(() => helperModule.BLOCK_MAP['i'])
      );
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });
      for (let i = 0; i < helperModule.SETTINGS.row / 2; i++) {
        act(() => {
          result.current.handleChangeRightPosition();
        });
      }

      const beforeTableForRender = result.current.tableForRender;
      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });

      expect(beforeTableForRender).not.toEqual(result.current.tableForRender);
    });

    it('블록이 회전할 수 없는 경우 블록이 회전되지 않는다.', () => {
      function getMockTable() {
        const result = helperModule.getEmptyTable();
        for (let col = 3; col < result.length; col++) {
          for (let row = 0; row < result[0].length / 2 - 2; row++) {
            result[col][row].type = 'i';
          }
          for (let row = result[0].length / 2; row < result[0].length; row++) {
            result[col][row].type = 'i';
          }
        }
        return result;
      }
      jest.spyOn(helperModule, 'getEmptyTable').mockReturnValue(getMockTable());
      // NOTE: l 블록 모킹(7개중 3번째)
      jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
        Array(helperModule.BLOCK_MAX_SIZE)
          .fill(null)
          .map(() => helperModule.BLOCK_MAP['l'])
      );
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      // NOTE: setState batching 때문에 여러 act로 처리
      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });
      act(() => {
        result.current.handleChangeDownPosition();
      });
      act(() => {
        result.current.handleChangeDownPosition();
      });
      act(() => {
        result.current.handleChangeDownPosition();
      });
      act(() => {
        result.current.handleChangeDownPosition();
      });

      const beforeTableForRender = result.current.tableForRender;
      act(() => {
        result.current.handleChangeClockWiseRotateBlock();
      });
      expect(beforeTableForRender).toEqual(result.current.tableForRender);
    });
  });

  describe('interval callback', () => {
    it('블록 아래 position이 비어있다면 아래로 이동한다.', () => {
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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

      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.intervalCallback();
      });

      expect(onChangeStageDeadPage).toHaveBeenCalled();
    });

    it('crash했을 때 새로운 nextBlock이 생성된다.', () => {
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      const nextBlock = result.current.nextBlock;

      jest.clearAllMocks();
      jest.restoreAllMocks();

      for (let i = 0; i < helperModule.SETTINGS.col; i++) {
        act(() => {
          result.current.intervalCallback();
        });
      }

      expect(nextBlock).not.toEqual(result.current.nextBlock);
    });

    it('crash했을 때 clear한 line이 있다면 table과 clearLine이 변경된다.', () => {
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

      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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

      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

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

  describe('hold 테스트', () => {
    it('hold가 비어있을 때 hold에 currentBlock을 넣는다.', () => {
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));
      expect(result.current.holdBlock).toBe(null);
      act(() => {
        result.current.handleChangeHoldBlock();
      });
      expect(!!result.current.holdBlock).toBe(true);
    });

    it('hold에 블록을 넣고 바로 시도하면 hold가 변경되지 않는다.', () => {
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.handleChangeHoldBlock();
      });

      const firstHoldBlock = result.current.holdBlock;

      act(() => {
        result.current.handleChangeHoldBlock();
      });

      expect(firstHoldBlock).toEqual(result.current.holdBlock);
    });

    it('hold블록이 정상적으로 교환된다.', () => {
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.handleChangeHoldBlock();
      });

      const firstHoldBlock = result.current.holdBlock;

      act(() => {
        result.current.handleChangeLastBottomPosition();
      });

      act(() => {
        result.current.handleChangeHoldBlock();
      });

      waitFor(() => {
        expect(firstHoldBlock).not.toEqual(result.current.holdBlock);
      });
    });

    it('다음 블록이 바뀌지 않았을때는 hold를 변경할 수 없다.', () => {
      jest.spyOn(helperModule, 'getRandomBlockList').mockReturnValue(
        Array(helperModule.BLOCK_MAX_SIZE)
          .fill(null)
          .map(() => helperModule.BLOCK_MAP['i'])
      );
      const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

      act(() => {
        result.current.handleChangeHoldBlock();
      });

      act(() => {
        result.current.handleChangeDownPosition();
      });

      const firstTableForRender = result.current.tableForRender;

      act(() => {
        result.current.handleChangeHoldBlock();
      });

      expect(result.current.tableForRender).toBe(firstTableForRender);
    });
  });

  // 최상단 주석 참고
  it('handleChangeLastBottomPosition이 실행되면 gameSpeed가 변경된다.', async () => {
    const { result } = renderHook(() => useTetrisGame(1000, 1, onChangeStageClearPage, onChangeStageDeadPage));

    expect(result.current.gameSpeed).toBe(1000);

    act(async () => {
      result.current.handleChangeLastBottomPosition();
      await waitFor(() => {
        expect(result.current.gameSpeed).toBe(null);
      });
    });

    await waitFor(() => {
      expect(result.current.gameSpeed).toBe(1000);
    });
  });
});

function isExistCell(table: helperModule.Table) {
  return table.reduce((acc, cur) => acc || cur.some((cell) => cell !== null), false);
}
