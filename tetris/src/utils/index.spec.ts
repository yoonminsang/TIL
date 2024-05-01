import { milliSecondsToTime } from '.';

describe('milliSecondsToTime', () => {
  it('converts milliseconds to the format hh:mm:ss:ms correctly', () => {
    expect(milliSecondsToTime(0)).toBe('00:00:00:000');
    expect(milliSecondsToTime(1000)).toBe('00:00:01:000');
    expect(milliSecondsToTime(1234)).toBe('00:00:01:234');
    expect(milliSecondsToTime(60000)).toBe('00:01:00:000');
    expect(milliSecondsToTime(61000)).toBe('00:01:01:000');
    expect(milliSecondsToTime(3661000)).toBe('01:01:01:000');
    expect(milliSecondsToTime(3600000)).toBe('01:00:00:000');
  });
});
