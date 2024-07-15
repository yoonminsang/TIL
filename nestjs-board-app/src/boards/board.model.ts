import { ExtractValue } from 'src/types';

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export const BoardStatus = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
} as const;
type BoardStatus = ExtractValue<typeof BoardStatus>;
