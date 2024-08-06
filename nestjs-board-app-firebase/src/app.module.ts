import { Logger, MiddlewareConsumer, Module, NestModule, ValidationPipe } from '@nestjs/common';
import { ConfigModule, ConfigService, ConfigType } from '@nestjs/config';
import { APP_FILTER, APP_GUARD, APP_PIPE } from '@nestjs/core';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';

import { appConfig, getAppConfigModule } from './configs/app.config';
import { getFirebaseConfigModule } from './configs/firebase.config';
import { getTypeORMConfigModule, getTypeORMSettingConfigModule } from './configs/typeorm.config';
import { HttpExceptionFilter } from './exceptionFilters/HttpExceptionFilter';
import { LoggerContextMiddleware } from './middlewares/LoggerContext.middleware';
import { AuthModule } from './modules/auth/auth.module';
import { BoardsModule } from './modules/boards/boards.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    getAppConfigModule(),
    getFirebaseConfigModule(),
    getTypeORMConfigModule(),
    getTypeORMSettingConfigModule(),
    // NOTE: 실제 프로덕트에서는 적절히 조절하기(유저수가 일정 이상되 다른 방법으로 Rate Limiting 걸어야할지도)
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const env: ConfigType<typeof appConfig> = configService.get('app')!;
        return [
          {
            ttl: 1000,
            limit: env.throttleLimit,
          },
        ];
      },
    }),
    BoardsModule,
    AuthModule,
    UsersModule,
  ],
  providers: [
    Logger,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerContextMiddleware).forRoutes('*');
  }
}
