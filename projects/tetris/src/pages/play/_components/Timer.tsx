import { useStopWatch } from '@/hooks/useStopWatch';
import { milliSecondsToTime } from '@/utils';
import { useEffect } from 'react';

function Timer() {
  const { currentTime, handleStart } = useStopWatch();

  useEffect(() => {
    handleStart();
  }, []);

  return milliSecondsToTime(currentTime);
}

export default Timer;
