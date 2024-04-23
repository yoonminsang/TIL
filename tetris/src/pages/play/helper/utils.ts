export const getRandom = (maxNumber: number, random = Math.random()) => {
  return Math.floor(random * maxNumber);
};

export const rotateClockWiseIn2DArr = <T>(arr: T[][]) => {
  const arrColLength = arr.length;
  const arrRowLength = arr[0].length;
  const result = [...Array(arrRowLength)].map(() => Array(arrColLength).fill(undefined));
  arr.forEach((colArr, col) => {
    colArr.forEach((v, row) => {
      result[row][arrColLength - col - 1] = v;
    });
  });
  return result;
};
