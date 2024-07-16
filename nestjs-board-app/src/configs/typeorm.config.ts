import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }
  return value;
};

export const getTypeORMConfig = (): TypeOrmModuleOptions => ({
  type: 'mysql',

  host: assertString(process.env.RDB_HOST, 'rdb host'),
  port: Number(assertString(process.env.RDB_PORT, 'rdb port')),
  username: assertString(process.env.RDB_USERNAME, 'rdb username'),
  password: assertString(process.env.RDB_PASSWORD, 'rdb password'),
  database: assertString(process.env.RDB_DATABASE, 'rdb database'),

  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: process.env.node_env !== 'production',
});
