import { ConfigModule } from '@nestjs/config';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';

import { BoardRepository } from './board.repository';
import { BoardsService } from './boards.service';

import type { IBoards } from '@/api-interfaces';
import { BoardStatus } from '@/api-interfaces';
import envConfig from '@/configs/env.config';
import { Board } from '@/entities/board.entity';

class StubBoardRepository {
  private boards: Board[] = [];

  async find() {
    return this.boards;
  }

  async create(board: Omit<Board, 'id'>) {
    const created = { ...board, id: this.boards.length + 1 };
    this.boards.push(created);
    return created;
  }

  save() {}
}

describe('BoardsService', () => {
  let service: BoardsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          cache: true,
          isGlobal: true,
          envFilePath: `.env.${process.env.NODE_ENV}`,
          load: [envConfig],
        }),
      ],
      providers: [
        BoardsService,
        {
          provide: BoardRepository,
          useClass: StubBoardRepository,
        },
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

    const result = await service.createBoard(createBoardDto);
    expect(result.title).toBe(board.title);
    expect(result.description).toEqual(board.description);
  });
});
