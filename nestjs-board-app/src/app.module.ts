import { Logger, MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { getAppConfigModule } from './configs/app.config';
import { getTypeORMConfigModule } from './configs/typeorm.config';
import { LoggerContextMiddleware } from './middlewares/LoggerContext.middleware';
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
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerContextMiddleware).forRoutes('*');
  }
}
