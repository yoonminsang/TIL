import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import envConfig from 'src/configs/env.config';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Injectable()
export class BoardsService {
  // NOTE: env에 접근하는 방법
  constructor(
    @Inject(envConfig.KEY)
    private env: ConfigType<typeof envConfig>,

    @InjectRepository(BoardRepository)
    private boardRepository: BoardRepository,
  ) {}

  // getAllBoards(): Board[] {
  //   console.log(this.env.port);
  //   return this.boards;
  // }

  // createBoard({ title, description }: CreateBoardBodyDto) {
  //   const board: Board = {
  //     id: uuid(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };

  //   this.boards.push(board);

  //   return board;
  // }

  async getBoardById(id: number): Promise<Board> {
    const board = await this.boardRepository.findOne({ where: { id } });
    if (!board) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return board;
  }

  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }

  // // NOTE: 없는 경우 404 에러필요
  // updateBoardStatus(id: string, status: BoardStatus): Board {
  //   const board = this.getBoardById(id);
  //   board.status = status;
  //   return board;
  // }
}
