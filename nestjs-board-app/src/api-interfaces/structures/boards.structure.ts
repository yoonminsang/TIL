import { IsNotEmpty } from 'class-validator';
import { BoardStatus } from '../enums';

export namespace IBoards {
  export class CreateBoardBodyDto {
    @IsNotEmpty()
    title!: string;
    @IsNotEmpty()
    description!: string;
  }

  export class UpdateBoardStatusBodyDto {
    // TODO: board-status-validation.pipe제거하고 아래 코드로 대체할 수 있는지 확인하기
    // @IsEnum(BoardStatus)
    status!: BoardStatus;
  }
}
