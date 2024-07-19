import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { getEnvConfigModule } from './configs/env.config';
import { getTypeORMConfigModule } from './configs/typeorm.config';
import { BoardsModule } from './modules/boards/boards.module';

@Module({
  imports: [getEnvConfigModule(), getTypeORMConfigModule(), BoardsModule],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
