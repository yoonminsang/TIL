import { Injectable } from '@nestjs/common';
import { omit } from '@toss/utils';
import { DataSource, Repository } from 'typeorm';

import { BoardStatus, CustomError, IBoards } from '@/api-interfaces';
import { Board } from '@/entities/board.entity';
import { User } from '@/entities/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private readonly dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async createBoard({ title, description }: IBoards.CreateBoardBodyDto, user: User) {
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
      user,
    });
    await this.save(board);
    return omit(board, ['user']);
  }

  async findById(id: number) {
    const board = await this.findOne({ where: { id } });
    if (!board) {
      throw new CustomError.NotFoundException({ message: `Can't find Board with id ${id}` });
    }
    return board;
  }

  async updateStatusById(id: number, status: BoardStatus) {
    const board = await this.findById(id);
    board.status = status;
    await this.save(board);
    return omit(board, ['user']);
  }
}
