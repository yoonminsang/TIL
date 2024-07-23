import { Inject, Injectable, Logger, LoggerService, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

/** morgan과 유사하게 기본적인 api 정보를 로그로 남깁니다. */
@Injectable()
export class LoggerContextMiddleware implements NestMiddleware {
  constructor(@Inject(Logger) private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    // TODO: userId 추가하기
    const { ip, method, originalUrl } = req;
    const userAgent = req.get('user-agent');
    res.on('finish', () => {
      const { statusCode } = res;
      this.logger.log(`${method} ${originalUrl} ${statusCode} ${ip} ${userAgent}`);
    });

    next();
  }
}
