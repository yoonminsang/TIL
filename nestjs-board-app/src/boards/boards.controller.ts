import { Controller, Get, Param } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  // @Get()
  // getAllBoars(): Board[] {
  //   return this.boardService.getAllBoards();
  // }

  // @Post()
  // @UsePipes(ValidationPipe)
  // createBoard(@Body() body: CreateBoardBodyDto): Board {
  //   return this.boardService.createBoard(body);
  // }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  // @Delete('/:id')
  // deleteBoard(@Param('id') id: string): void {
  //   return this.boardService.deleteBoard(id);
  // }

  // @Patch('/:id/status')
  // updateBoardStatus(
  //   @Param('id') id: string,
  //   @Body('status', BoardStatusValidationPipe)
  //   status: UpdateBoardStatusBodyDto['status'],
  // ) {
  //   return this.boardService.updateBoardStatus(id, status);
  // }
}
