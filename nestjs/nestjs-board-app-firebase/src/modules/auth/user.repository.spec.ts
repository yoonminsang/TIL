import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';

import { Board } from '@/entities/board.entity';
import { getAppConfigModuleForTest } from '@/utils/test.util';

describe('UserRepository', () => {
  let repository: UserRepository;
  let moduleRef: TestingModule;

  const clearDB = async () => {
    const connection = repository.manager.connection;
    await connection.query('SET FOREIGN_KEY_CHECKS = 0');
    await repository.clear();
    await connection.getRepository(Board).clear();
    await connection.query('SET FOREIGN_KEY_CHECKS = 1');
  };

  beforeAll(async () => {
    moduleRef = await Test.createTestingModule({
      imports: [...getAppConfigModuleForTest(), TypeOrmModule.forFeature([Board])],
      providers: [UserRepository],
    }).compile();

    repository = moduleRef.get<UserRepository>(UserRepository);
  });

  afterAll(async () => {
    await clearDB();
    await moduleRef.close();
  });

  beforeEach(async () => {
    await clearDB();
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  it('should create user', async () => {
    const user = repository.create({
      username: 'username',
      password: 'password',
    });

    await repository.save(user);

    const savedUser = await repository.findOne({
      where: { id: user.id },
    });
    expect(savedUser).toBeDefined();
    expect(savedUser?.username).toEqual('username');
  });

  it('should fail create user by username duplicate', async () => {
    try {
      const user = repository.create({
        username: 'username',
        password: 'password',
      });

      await repository.save(user);

      const user2 = repository.create({
        username: 'username',
        password: 'password2',
      });

      await repository.save(user2);
      expect(1).toBe(2);
    } catch (err: any) {
      expect(err.code).toBe('ER_DUP_ENTRY');
    }
  });
});
