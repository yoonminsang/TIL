import type { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { envConfig } from './configs/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { port } = app.get<ConfigType<typeof envConfig>>(envConfig.KEY);
  await app.listen(port);
}
bootstrap();
