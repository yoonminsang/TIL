import { Logger, ValidationPipe } from '@nestjs/common';
import type { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { appConfig } from './configs/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { port } = app.get<ConfigType<typeof appConfig>>(appConfig.KEY);
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
