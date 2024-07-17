import { ExtractValue } from '@/types';

export const BoardStatus = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
} as const;
export type BoardStatus = ExtractValue<typeof BoardStatus>;
