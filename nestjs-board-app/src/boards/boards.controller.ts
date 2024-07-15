import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private boardService: BoardsService) {}

  @Get()
  getAllBoars() {
    return this.boardService.getAllBoards();
  }
}
