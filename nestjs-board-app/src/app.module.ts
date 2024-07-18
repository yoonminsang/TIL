import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import envConfig from './configs/env.config';
import { getTypeORMConfig } from './configs/typeorm.config';
import { BoardsModule } from './modules/boards/boards.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`,
      load: [envConfig],
    }),
    TypeOrmModule.forRoot(getTypeORMConfig()),
    BoardsModule,
  ],
})
export class AppModule {}
