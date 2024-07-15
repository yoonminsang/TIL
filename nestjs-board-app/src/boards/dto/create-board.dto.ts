import { BoardStatus } from '../board.model';

export class CreateBoardBodyDto {
  title: string;
  description: string;
}

export class UpdateBoardStatusBodyDto {
  status: BoardStatus;
}
