import { renderHook } from '@testing-library/react';

import { useInterval } from './useInterval.ts';

let callback = jest.fn();

beforeAll(() => {
  jest.useFakeTimers();
});

beforeEach(() => {
  callback = jest.fn();
  jest.spyOn(window, 'setInterval');
  jest.spyOn(window, 'clearInterval');
});

afterEach(() => {
  callback.mockRestore();
  jest.clearAllTimers();
  jest.clearAllMocks();
});

afterAll(() => {
  jest.useRealTimers();
});

describe('useInterval', () => {
  it('delay가 존재할 때 setInterval을 실행한다.', () => {
    const delay = 5000;
    renderHook(() => useInterval(callback, delay));
    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenCalledWith(expect.any(Function), delay);
  });

  it('delay가 null일 때 setINterval을 호출하지 않는다.', () => {
    expect(setInterval).not.toHaveBeenCalled();
    renderHook(() => useInterval(callback, null));
    expect(setInterval).not.toHaveBeenCalled();
  });

  it('delay 시간마다 callback이 실행된다.', () => {
    const delay = 3000;
    renderHook(() => useInterval(callback, delay));
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(delay - 1);
    expect(callback).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(callback).toHaveBeenCalledTimes(1);

    jest.advanceTimersToNextTimer();
    expect(callback).toHaveBeenCalledTimes(2);
  });

  it('unmount될 때 clearInterval이 실행된다.', () => {
    const { unmount } = renderHook(() => useInterval(callback, 200));
    const initialTimerCount = jest.getTimerCount();
    expect(clearInterval).not.toHaveBeenCalled();

    unmount();

    expect(clearInterval).toHaveBeenCalledTimes(1);
    // 컴포넌트가 언마운트되면서 하나의 타이머가 해제
    expect(jest.getTimerCount()).toBe(initialTimerCount - 1);
  });

  describe('delay가 변경될 때', () => {
    it('delay가 200에서 500으로 변경되었을 때 변경된 시간후에 setInterval이 실행된다.', () => {
      let delay = 200;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(callback).not.toHaveBeenCalled();

      jest.advanceTimersByTime(delay);
      expect(callback).toHaveBeenCalledTimes(1);

      delay = 500;
      rerender();

      jest.advanceTimersByTime(200);
      expect(callback).toHaveBeenCalledTimes(1);

      jest.advanceTimersByTime(300);
      expect(callback).toHaveBeenCalledTimes(2);
    });

    it('delay가 200에서 null로 변경되었을 때 clearInterval이 실행된다.', () => {
      let delay: number | null = 200;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(callback).not.toHaveBeenCalled();
      const initialTimerCount = jest.getTimerCount();

      jest.advanceTimersByTime(delay);
      expect(callback).toHaveBeenCalledTimes(1);

      delay = null;
      rerender();

      jest.advanceTimersToNextTimer();
      expect(callback).toHaveBeenCalledTimes(1);
      expect(jest.getTimerCount()).toBe(initialTimerCount - 1);
    });

    it('delay가 null에서 500으로 변경되었을 때 변경된 시간후에 setInterval이 실행된다.', () => {
      let delay: number | null = null;
      const { rerender } = renderHook(() => useInterval(callback, delay));
      expect(callback).not.toHaveBeenCalled();
      const initialTimerCount = jest.getTimerCount();

      expect(callback).not.toHaveBeenCalled();

      delay = 500;
      rerender();

      jest.advanceTimersByTime(delay);
      expect(callback).toHaveBeenCalledTimes(1);
      expect(jest.getTimerCount()).toBe(initialTimerCount + 1);
    });
  });
});
