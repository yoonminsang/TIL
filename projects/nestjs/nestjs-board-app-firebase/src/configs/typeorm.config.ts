import type { ConfigType } from '@nestjs/config';
import { ConfigModule, ConfigService, registerAs } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import type { TypeOrmModuleOptions } from '@nestjs/typeorm';

const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }
  return value;
};

export const typeORMConfig = registerAs(
  'typeORM',
  (): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: assertString(process.env.RDB_HOST, 'RDB_HOST'),
    port: Number(assertString(process.env.RDB_PORT, 'RDB_PORT')),
    username: assertString(process.env.RDB_USERNAME, 'RDB_USERNAME'),
    password: assertString(process.env.RDB_PASSWORD, 'RDB_PASSWORD'),
    database: assertString(process.env.RDB_DATABASE, 'RDB_DATABASE'),
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: process.env.node_env !== 'production',
  })
);

export const getTypeORMConfigModule = () =>
  ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [typeORMConfig],
  });

export const getTypeORMSettingConfigModule = () =>
  TypeOrmModule.forRootAsync({
    imports: [getTypeORMConfigModule()],
    inject: [ConfigService],
    useFactory: async (configService: ConfigService) => {
      const env: ConfigType<typeof typeORMConfig> = configService.get('typeORM')!;
      return env;
    },
  });
