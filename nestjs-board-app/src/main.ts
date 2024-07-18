import { ConfigType } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import appConfig from './configs/env.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const { port } = app.get<ConfigType<typeof appConfig>>(appConfig.KEY);
  await app.listen(port);
}
bootstrap();
