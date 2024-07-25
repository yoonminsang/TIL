import { Logger, ValidationPipe } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app.module';
import { appConfig } from './configs/app.config';
import { getWinstonModule } from './configs/logger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: getWinstonModule(),
    // NOTE: 실제 프로덕트에서는 cors에 옵션 키기
    cors: true,
  });
  const { port } = app.get<ConfigType<typeof appConfig>>(appConfig.KEY);
  app.use(helmet());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    })
  );
  await app.listen(port);
  Logger.log(`Application running on port ${port}`);
}
bootstrap();
