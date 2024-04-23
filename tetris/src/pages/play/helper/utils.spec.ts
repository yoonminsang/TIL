import { getRandom } from './utils';

describe('getRandom', () => {
  it('0을 return한다', () => {
    expect(getRandom(10, 0.09)).toBe(0);
  });
  it('1을 return한다', () => {
    expect(getRandom(10, 0.19)).toBe(1);
  });
  it('9를 return한다', () => {
    expect(getRandom(10, 0.99)).toBe(9);
  });
});
