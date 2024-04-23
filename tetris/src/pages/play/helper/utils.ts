export const getRandom = (maxNumber: number, random = Math.random()) => {
  return Math.floor(random * maxNumber);
};

