import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { BoardRepository } from './board.repository';

import { BoardStatus, IBoards } from '@/api-interfaces';
import { appConfig } from '@/configs/app.config';
import { User } from '@/entities/user.entity';

@Injectable()
export class BoardsService {
  // NOTE: env에 접근하는 방법
  constructor(
    @Inject(appConfig.KEY)
    private env: ConfigType<typeof appConfig>,

    private boardRepository: BoardRepository
  ) {}

  // async getAllBoards() {
  //   return await this.boardRepository.find();
  // }
  async getAllBoards(user: User) {
    const query = this.boardRepository.createQueryBuilder('board');
    query.where('board.userId = :userId', { userId: user.id });
    const boards = await query.getMany();
    return boards;
  }

  async createBoard(body: IBoards.CreateBoardBodyDto, user: User) {
    return await this.boardRepository.createBoard(body, user);
  }

  async getBoardById(id: number) {
    const board = await this.boardRepository.findOne({ where: { id } });
    if (!board) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    return board;
  }

  async deleteBoard(id: number) {
    const result = await this.boardRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
  }

  async updateBoardStatus(id: number, status: BoardStatus) {
    const board = await this.getBoardById(id);
    board.status = status;
    await this.boardRepository.save(board);
    return board;
  }
}
