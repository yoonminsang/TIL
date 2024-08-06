import { getAppConfigModule } from '@/configs/app.config';
import { getTypeORMConfigModule, getTypeORMSettingConfigModule } from '@/configs/typeorm.config';

/**
 * 테스트코드에서 기본 app config module을 return하는 함수입니다.
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
export const getAppConfigModuleForTest = () => [
  getAppConfigModule(),
  getTypeORMConfigModule(),
  getTypeORMSettingConfigModule(),
];
