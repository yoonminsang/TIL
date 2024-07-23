import { Logger, Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { getAppConfigModule } from './configs/app.config';
import { getTypeORMConfigModule } from './configs/typeorm.config';
import { AuthModule } from './modules/auth/auth.module';
import { BoardsModule } from './modules/boards/boards.module';

@Module({
  imports: [getAppConfigModule(), getTypeORMConfigModule(), BoardsModule, AuthModule],
  providers: [
    Logger,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
