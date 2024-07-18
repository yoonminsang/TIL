import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BoardRepository } from './board.repository';

import { BoardStatus } from '@/api-interfaces';
import { Board } from '@/entities/board.entity';
import { getTypeORMModuleForTest } from '@/utils/test.util';

describe('BoardRepository', () => {
  let repository: BoardRepository;
  let moduleRef: TestingModule;

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [...getTypeORMModuleForTest(), TypeOrmModule.forFeature([Board])],
      providers: [BoardRepository],
    }).compile();

    repository = moduleRef.get<BoardRepository>(BoardRepository);
  });

  afterAll(async () => {
    await moduleRef.close();
  });

  beforeEach(async () => {
    await repository.clear();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create a new board', async () => {
    const board = repository.create({
      title: 'Test Board',
      description: 'This is a test board',
      status: BoardStatus.PUBLIC,
    });

    await repository.save(board);

    const savedBoard = await repository.findOne({
      where: { id: board.id },
    });
    expect(savedBoard).toBeDefined();
    expect(savedBoard?.title).toEqual('Test Board');
  });
});
