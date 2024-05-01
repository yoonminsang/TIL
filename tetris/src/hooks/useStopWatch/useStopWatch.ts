import { useState } from 'react';
import { useInterval } from '../useInterval';

export type State = 'init' | 'progress' | 'pause';

/**
 * @description
 * 스톱워치 훅을 생성합니다.
 *
 * @param {number} delay - 스톱워치 업데이트 간격(ms)입니다. default는 1입니다.
 */
export const useStopWatch = (delay = 1) => {
  const [state, setState] = useState<State>('init');
  const [initTime, setInitTime] = useState<number | null>(null);
  const [time, setTime] = useState<number | null>(null);
  const [fullTimeList, setFullTimeList] = useState<number[]>([]);

  const currentTime = initTime && time ? time - initTime : 0;
  const recordData = fullTimeList.map((fullTime, index) => ({
    index: index + 1,
    sectionRecord: fullTime - (fullTimeList[index - 1] ?? 0),
    fullTime: fullTime,
  }));

  useInterval(
    () => {
      setTime(new Date().getTime());
    },
    state === 'progress' ? delay : null,
  );

  const handleSectionRecord = () => {
    setFullTimeList((fullTimeList) => [...fullTimeList, currentTime]);
  };

  const handleStart = () => {
    setState('progress');
    setInitTime(new Date().getTime());
  };

  const handleContinue = () => {
    setState('progress');
  };

  const handlePause = () => {
    setState('pause');
  };

  const handleInit = () => {
    setState('init');
    setTime(0);
    setInitTime(null);
    setFullTimeList([]);
  };

  return {
    state,
    recordData,
    currentTime,
    handleSectionRecord,
    handleStart,
    handleContinue,
    handlePause,
    handleInit,
  };
};
