import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import envConfig from '@/configs/env.config';
import { getTypeORMConfig } from '@/configs/typeorm.config';

/**
 * 테스트코드에서 typeorm을 연결해주는 모듈입니다.
 * @example
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

    it('should be defined', () => {
      expect(repository).toBeDefined();
    });
  });
 */
export const getTypeORMModuleForTest = () => [
  ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [envConfig],
  }),
  TypeOrmModule.forRoot(getTypeORMConfig()),
];
