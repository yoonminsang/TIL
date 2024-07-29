import { Logger } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';

import type { IBoards } from '@/api-interfaces';
import { BoardStatus } from '@/api-interfaces';
import { Board } from '@/entities/board.entity';
import { User } from '@/entities/user.entity';
import { getAppConfigModuleForTest } from '@/utils/test.util';

class StubBoardRepository {
  private boards: Board[] = [];

  async find() {
    return this.boards;
  }

  async createBoard(board: IBoards.CreateBoardBodyDto) {
    const created = new Board();
    created.id = this.boards.length + 1;
    created.title = board.title;
    created.description = board.description;
    this.boards.push(created);
    return created;
  }

  save() {}
}

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [...getAppConfigModuleForTest()],
      providers: [
        BoardsService,
        {
          provide: BoardRepository,
          useClass: StubBoardRepository,
        },
        Logger,
      ],
    }).compile();

    service = module.get<BoardsService>(BoardsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a board', async () => {
    const createBoardDto: IBoards.CreateBoardBodyDto = { title: 'Test', description: 'Test desc' };
    const board = new Board();
    board.title = createBoardDto.title;
    board.description = createBoardDto.description;
    board.status = BoardStatus.PUBLIC;

    const user = new User();
    user.username = 'username';
    user.password = '1234';

    const result = await service.createBoard(createBoardDto, user);
    expect(result.title).toBe(board.title);
    expect(result.description).toEqual(board.description);
  });
});
