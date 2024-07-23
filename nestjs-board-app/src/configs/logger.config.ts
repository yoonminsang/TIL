import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import * as DailyRotateFile from 'winston-daily-rotate-file';

const dirname = `${process.cwd()}/logs`;

const logFormat = winston.format.printf(({ timestamp, level, message, stack }) => {
  return `${timestamp}, ${level}: ${message}, (stack: ${JSON.stringify(stack)})`;
});

const customFilter = winston.format((info) => {
  // NOTE: 기본적으로 찍히는 로그들을 제거합니다.
  const filterContexts = ['NestFactory', 'InstanceLoader', 'RoutesResolver', 'RouterExplorer', 'NestApplication'];

  if (filterContexts.includes(info.context)) {
    return false;
  }
  return info;
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
    format: winston.format.combine(customFilter(), winston.format.timestamp(), logFormat),
    transports,
  });
};
