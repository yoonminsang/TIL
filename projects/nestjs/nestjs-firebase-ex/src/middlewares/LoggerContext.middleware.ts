import { Inject, Injectable, Logger, LoggerService, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { IUser } from 'syms-api-interfaces';

/** morgan과 유사하게 기본적인 api 정보를 로그로 남깁니다. */
@Injectable()
export class LoggerContextMiddleware implements NestMiddleware {
  constructor(@Inject(Logger) private readonly logger: LoggerService) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl, body } = req;
    const user = req.user as IUser.User | undefined;
    const userAgent = req.get('user-agent');
    const maskedBody = maskSensitiveInfo(body);

    const startTime = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      const endTime = Date.now();
      const duration = endTime - startTime;
      this.logger.log(
        `USER-${user?.id} ${method} ${originalUrl} ${JSON.stringify(maskedBody)} ${statusCode} ${ip} ${userAgent} - ${duration}ms`
      );
    });

    next();
  }
}

const maskSensitiveInfo = (body: any) => {
  const clonedBody = { ...body };
  if (clonedBody.password) {
    clonedBody.password = '******';
  }
  return clonedBody;
};
