import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { Board } from './entities';
import { BoardsService } from './boards.service';
import { CreateBoardBodyDto, UpdateBoardStatusBodyDto } from './dto';
import { BoardStatusValidationPipe } from './pipes';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoars(): Promise<Board[]> {
    return this.boardService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() body: CreateBoardBodyDto): Promise<Board> {
    return this.boardService.createBoard(body);
  }

  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id: number,
    @Body('status', BoardStatusValidationPipe)
    status: UpdateBoardStatusBodyDto['status'],
  ): Promise<Board> {
    return this.boardService.updateBoardStatus(id, status);
  }
}
