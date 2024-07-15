import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';
import {
  CreateBoardBodyDto,
  UpdateBoardStatusBodyDto,
} from './dto/create-board.dto';

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

  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    return this.boardService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body() { status }: UpdateBoardStatusBodyDto,
  ) {
    return this.boardService.updateBoardStatus(id, status);
  }
}
