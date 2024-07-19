import { Transform } from 'class-transformer';
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';

import { BoardStatus } from '../enums';

export namespace IBoards {
  export class CreateBoardBodyDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;
  }

  export class UpdateBoardStatusBodyDto {
    @IsEnum(BoardStatus)
    @IsNotEmpty()
    @Transform(({ value }) => value?.toUpperCase())
    status!: BoardStatus;
  }
}
