export { BLOCK_MAP, getRandomBlock, getBlockMaxSize } from './block';
export { getGoalClearLine } from './clearLine';
export { SETTINGS } from './constants';
export { getGameSpeed } from './speed';
export {
  combineBlockWithTable,
  getTableForRenderer,
  getEmptyTable,
  findCompletedLines,
  getIsPossibleRender,
  getUpdateTableByCompletedLines,
} from './table';
export * from './types';
export { getRandom, rotateClockWiseIn2DArr } from './utils';
