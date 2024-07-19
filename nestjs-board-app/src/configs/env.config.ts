import { ConfigModule, registerAs } from '@nestjs/config';

const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }
  return value;
};

export const envConfig = registerAs('app', () => ({
  port: Number(assertString(process.env.PORT, 'port')),
  ['node_env']: assertString(process.env.NODE_ENV, 'node_env'),
}));

export const getEnvConfigModule = () =>
  ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [envConfig],
  });
