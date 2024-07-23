import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const dirname = `${process.cwd()}/logs`;

const logFormat = winston.format.printf(({ timestamp, level, message, stack }) => {
  return `${timestamp}, ${level}: ${message}, (stack: ${JSON.stringify(stack)})`;
});

export const getWinstonModule = () => {
  const transports: winston.transport[] = [];

  transports.push(
    new DailyRotateFile({
      level: 'info',
      datePattern: 'YYYY-MM-DD',
      dirname: dirname + '/info',
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new DailyRotateFile({
      level: 'warn',
      datePattern: 'YYYY-MM-DD',
      dirname: dirname + '/warn',
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    }),
    new DailyRotateFile({
      level: 'error',
      datePattern: 'YYYY-MM-DD',
      dirname: dirname + '/error',
      filename: `%DATE%.log`,
      maxFiles: 30,
      zippedArchive: true,
    })
  );

  if (process.env.NODE_ENV === 'local') {
    transports.push(
      new winston.transports.Console({
        format: winston.format.combine(winston.format.colorize(), winston.format.simple()),
      })
    );
  }

  return WinstonModule.createLogger({
    level: 'info',
    format: winston.format.combine(winston.format.timestamp(), logFormat),
    transports,
  });
};
