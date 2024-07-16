const assertString = (value: string | undefined, env: string): string => {
  if (typeof value === 'undefined') {
    throw new Error(`${env} is not defined`);
  }

  return value;
};

export const ENV = {
  rdb: {
    host: assertString(process.env.RDB_HOSTNAME, 'host'),
    port: Number(assertString(process.env.RDB_HOSTNAME, 'port')),
    username: assertString(process.env.RDB_USERNAME, 'username'),
    password: assertString(process.env.RDB_PASSWORD, 'password'),
    database: assertString(process.env.RDB_DATABASE, 'database'),
  },
  ['node_env']: assertString(process.env.NODE_ENV, 'node_env'),
};
