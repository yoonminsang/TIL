import { delayFn } from './delayFn';

describe('delayFetch', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('delay 시간 이후에 API가 성공한다.', async () => {
    const mockApi = jest.fn().mockResolvedValue('Api success');

    const delay = 1000;
    const promise = delayFn(mockApi, delay);

    jest.advanceTimersByTime(delay);

    const result = await promise;

    expect(result).toBe('Api success');
  });

  it('delay 시간 이후에 API가 에러를 뱉는다.', async () => {
    const mockApi = jest.fn().mockRejectedValue(new Error('API failed'));

    const delay = 1000;
    const promise = delayFn(mockApi, delay);

    jest.advanceTimersByTime(delay);

    await expect(promise).rejects.toThrow('API failed');
  });
});
