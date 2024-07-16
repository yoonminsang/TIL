import { registerAs } from '@nestjs/config';

const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }
  return value;
};

export default registerAs('app', () => ({
  port: Number(assertString(process.env.PORT, 'port')),
  ['node_env']: assertString(process.env.NODE_ENV, 'node_env'),
}));
