import { ConfigModule, registerAs } from '@nestjs/config';

const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }
  return value;
};

export const appConfig = registerAs('app', () => ({
  port: Number(assertString(process.env.PORT, 'port')),
  ['node_env']: assertString(process.env.NODE_ENV, 'node_env'),
  throttleLimit: Number(assertString(process.env.THROTTLE_LIMIT, 'throttleLimit')),
}));

export const getAppConfigModule = () =>
  ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
    envFilePath: `.env.${process.env.NODE_ENV}`,
    load: [appConfig],
  });
