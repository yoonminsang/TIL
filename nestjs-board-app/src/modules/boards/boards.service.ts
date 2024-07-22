import { Inject, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
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
    return await this.boardRepository.findById(id);
  }

  async deleteBoard(id: number, user: User) {
    // NOTE: NotFoundException은 상황에 따라 필요할 수도 필요하지 않을 수도 있다.
    // 왜냐하면 클라이언트의 실수가 아니라면 동시성 이슈로 생긴 문제이고 어차피 삭제되었으니 에러를 내지 않는 것도 방법중의 하나일 것 같다.
    const board = await this.boardRepository.findOne({ where: { id } });

    if (!board) {
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }

    if (board.user.id !== user.id) {
      throw new UnauthorizedException('You are not allowed to delete this board');
    }

    const result = await this.boardRepository.delete({ id });

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
