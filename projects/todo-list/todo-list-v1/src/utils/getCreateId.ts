export const getCreateId = <T extends { id: number }>(arr: T[] | null) => {
  if (!arr || arr.length === 0) {
    return -1;
  }
  const sortedIds = arr.map((item) => item.id).sort((a, b) => a - b);
  return Math.min(-1, sortedIds[0] - 1);
};
