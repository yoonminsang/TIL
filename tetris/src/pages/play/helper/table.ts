import { SETTINGS } from './constants';
export const getEmptyTable = (col = SETTINGS.col, row = SETTINGS.row) => {
  return [...Array(col)].map(() => Array(row).fill(null)) as Table;
};
