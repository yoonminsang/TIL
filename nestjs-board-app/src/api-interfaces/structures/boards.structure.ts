import { Transform } from 'class-transformer';
import { IsArray, IsEnum, IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

import { BoardStatus } from '../enums';

export namespace IBoards {
  export class IBase {
    id!: number;
    title!: string;
    description!: string;
    status!: BoardStatus;
  }

  export class CreateBoardBodyDto {
    @IsString()
    @IsNotEmpty()
    title!: string;

    @IsString()
    @IsNotEmpty()
    description!: string;
  }
  export class CreateBoardResDto extends IBoards.IBase {}

  export class GetAllBoardsQueryDto {
    @IsArray()
    @Transform(({ value }) => {
      if (!value) {
        return undefined;
      }
      return value?.split(',').map((id: string) => parseInt(id, 10));
    })
    @IsInt({ each: true })
    @IsOptional()
    userId?: number[];
  }
  export class GetAllBoardsResDto extends Array<IBoards.IBase> {}

  export class GetBoardByIdResDto extends IBoards.IBase {}

  export class UpdateBoardResDto extends IBoards.IBase {}

  export class UpdateBoardStatusBodyDto {
    @IsEnum(BoardStatus)
    @IsNotEmpty()
    @Transform(({ value }) => value?.toUpperCase())
    status!: BoardStatus;
  }
}
