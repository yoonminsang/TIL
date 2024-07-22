import { Injectable } from '@nestjs/common';
import { omit } from '@toss/utils';
import { DataSource, Repository } from 'typeorm';

import { BoardStatus, IBoards } from '@/api-interfaces';
import { Board } from '@/entities/board.entity';
import { User } from '@/entities/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
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
}
