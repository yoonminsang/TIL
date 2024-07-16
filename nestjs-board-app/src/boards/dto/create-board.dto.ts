import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../board-status.enum';

export class CreateBoardBodyDto {
  @IsNotEmpty()
  title!: string;
  @IsNotEmpty()
  description!: string;
}

export class UpdateBoardStatusBodyDto {
  status!: BoardStatus;
}
