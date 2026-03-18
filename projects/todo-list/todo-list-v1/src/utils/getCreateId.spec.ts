import { getCreateId } from './getCreateId';

const context = describe;
describe('getCreateId', () => {
  it('should return -1 when created arr is not exist', () => {
    const arr = [{ id: 1 }, { id: 2 }];
    const createId = getCreateId(arr);
    expect(createId).toBe(-1);
  });
  it('should return -1 when arr is null', () => {
    const arr: { id: number }[] = [];
    const createId = getCreateId(arr);
    expect(createId).toBe(-1);
  });
  it("should return -1 when arr's length is 0", () => {
    const arr: any[] = [];
    const createId = getCreateId(arr);
    expect(createId).toBe(-1);
  });
  context('should return min-1 when created arr is exist', () => {
    it('case 1', () => {
      const arr = [{ id: 1 }, { id: 2 }, { id: -1 }, { id: -2 }];
      const createId = getCreateId(arr);
      expect(createId).toBe(-3);
    });
    it('case 2', () => {
      const arr = [{ id: 1 }, { id: 2 }, { id: -1 }, { id: -3 }];
      const createId = getCreateId(arr);
      expect(createId).toBe(-4);
    });
  });
});
