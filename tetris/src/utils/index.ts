export const countForRender = (count: number) => Array(count).fill(null);

const MILLI_SECOND = 1;
const SECOND = 1000 * MILLI_SECOND;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;

export const milliSecondsToTime = (milliSeconds: number) => {
  const hours = Math.floor(milliSeconds / HOUR);
  const remainingMillis = milliSeconds % HOUR;
  const minutes = Math.floor(remainingMillis / MINUTE);
  const remainingMillisAfterMinutes = remainingMillis % MINUTE;
  const seconds = Math.floor(remainingMillisAfterMinutes / SECOND);
  const milliseconds = remainingMillisAfterMinutes % SECOND;

  return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(3, '0')}`;
};
