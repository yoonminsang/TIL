import { Body, Controller, Get, Post } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import { CreateBoardBodyDto } from './dto/create-board.dto';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoars(): Board[] {
    return this.boardService.getAllBoards();
  }

  @Post()
  createBoard(@Body() body: CreateBoardBodyDto): Board {
    return this.boardService.createBoard(body);
  }
}
