import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../board.model';

export class CreateBoardBodyDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
}

export class UpdateBoardStatusBodyDto {
  status: BoardStatus;
}
