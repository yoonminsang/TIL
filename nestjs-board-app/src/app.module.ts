import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { BoardsModule } from './boards/boards.module';
import envConfig from './configs/env.config';
import { getTypeORMConfig } from './configs/typeorm.config';
import { TypeOrmModule } from '@nestjs/typeorm';

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
