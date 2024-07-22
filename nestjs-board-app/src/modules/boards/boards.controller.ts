import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { GetUser } from '../auth/user.decorator';

import { BoardsService } from './boards.service';

import { IBoards } from '@/api-interfaces';
import { User } from '@/entities/user.entity';

@Controller('boards')
@UseGuards(AuthGuard())
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoars(): Promise<IBoards.GetAllBoardsBodyDto> {
    return this.boardService.getAllBoards();
  }

  @Post()
  createBoard(@Body() body: IBoards.CreateBoardBodyDto, @GetUser() user: User): Promise<IBoards.CreateBoardResDto> {
    return this.boardService.createBoard(body, user);
  }

  @Get('/:id')
  getBoardById(@Param('id', ParseIntPipe) id: number): Promise<IBoards.GetBoardByIdResDto> {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body() { status }: IBoards.UpdateBoardStatusBodyDto
  ): Promise<IBoards.UpdateBoardResDto> {
    return this.boardService.updateBoardStatus(id, status);
  }
}
