import { Module } from '@nestjs/common';

import { getEnvConfigModule } from './configs/env.config';
import { getTypeORMConfigModule } from './configs/typeorm.config';
import { BoardsModule } from './modules/boards/boards.module';

@Module({
  imports: [getEnvConfigModule(), getTypeORMConfigModule(), BoardsModule],
})
export class AppModule {}
