import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import envConfig from 'src/configs/env.config';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { CreateBoardBodyDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';

@Injectable()
export class BoardsService {
  // NOTE: env에 접근하는 방법
  constructor(
    @Inject(envConfig.KEY)
    private env: ConfigType<typeof envConfig>,

    private boardRepository: BoardRepository,
  ) {}

  // getAllBoards(): Board[] {
  //   console.log(this.env.port);
  //   return this.boards;
  // }

  async createBoard({ title, description }: CreateBoardBodyDto) {
    const board = this.boardRepository.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.boardRepository.save(board);
    return board;
  }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne({ where: { id } });
    if (!board) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return board;
  }

  async deleteBoard(id: number): Promise<void> {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  // // NOTE: 없는 경우 404 에러필요
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
