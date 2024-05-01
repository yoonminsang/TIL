import { act, renderHook } from '@testing-library/react';

import { useStopWatch } from './useStopWatch.ts';

describe('useStopWatch', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  describe('should change state', () => {
    it('should start and pause the stopwatch', () => {
      const { result } = renderHook(() => useStopWatch());

      expect(result.current.state).toBe('init');

      act(() => {
        result.current.handleStart();
      });

      expect(result.current.state).toBe('progress');

      act(() => {
        result.current.handlePause();
      });

      expect(result.current.state).toBe('pause');
    });

    it('should continue after pause', () => {
      const { result } = renderHook(() => useStopWatch());

      act(() => {
        result.current.handleStart();
      });

      expect(result.current.state).toBe('progress');

      act(() => {
        result.current.handlePause();
      });

      expect(result.current.state).toBe('pause');

      act(() => {
        result.current.handleContinue();
      });

      expect(result.current.state).toBe('progress');
    });

    it('should reset the stopwatch', () => {
      const { result } = renderHook(() => useStopWatch());

      act(() => {
        result.current.handleStart();
      });

      expect(result.current.state).toBe('progress');

      act(() => {
        result.current.handleInit();
      });

      expect(result.current.state).toBe('init');
      expect(result.current.recordData).toEqual([]);
      expect(result.current.currentTime).toEqual(0);
    });

    it('should not change state when execute handleSectionRecord', () => {
      const { result } = renderHook(() => useStopWatch());

      act(() => {
        result.current.handleStart();
      });

      expect(result.current.state).toBe('progress');

      act(() => {
        result.current.handleSectionRecord();
      });

      expect(result.current.state).toBe('progress');
    });
  });

  describe('should update currentTime', () => {
    it('basic', () => {
      const { result } = renderHook(() => useStopWatch());

      act(() => {
        result.current.handleStart();
      });
      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(result.current.currentTime).toBe(1000);

      act(() => {
        jest.advanceTimersByTime(1000);
      });
      expect(result.current.currentTime).toBe(2000);
    });

    it('pause and progress', () => {
      const { result } = renderHook(() => useStopWatch());

      act(() => {
        result.current.handleStart();
      });
      act(() => {
        jest.advanceTimersByTime(1000);
      });

      act(() => {
        result.current.handlePause();
      });

      act(() => {
        result.current.handleContinue();
      });
      act(() => {
        jest.advanceTimersByTime(1000);
      });

      expect(result.current.currentTime).toBe(2000);
    });
  });

  it('should update recordData', () => {
    const { result } = renderHook(() => useStopWatch());

    act(() => {
      result.current.handleStart();
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });
    act(() => {
      result.current.handleSectionRecord();
    });

    act(() => {
      jest.advanceTimersByTime(1000);
    });
    act(() => {
      result.current.handleSectionRecord();
    });

    expect(result.current.recordData).toEqual([
      { fullTime: 500, index: 1, sectionRecord: 500 },
      { fullTime: 1500, index: 2, sectionRecord: 1000 },
    ]);
  });
});
