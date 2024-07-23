import { IncomingHttpHeaders } from 'http';

import { Inject, Injectable, Logger, LoggerService, NestMiddleware } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

import { appConfig } from '@/configs/app.config';
import { AccessTokenPayload } from '@/modules/auth/auth.dto';

/** morgan과 유사하게 기본적인 api 정보를 로그로 남깁니다. */
@Injectable()
export class LoggerContextMiddleware implements NestMiddleware {
  constructor(
    @Inject(Logger) private readonly logger: LoggerService,

    @Inject(appConfig.KEY)
    private env: ConfigType<typeof appConfig>
  ) {}

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl, headers } = req;
    const userAgent = req.get('user-agent');

    const userId = getUserId(headers, this.env.jwtSecret);

    res.on('finish', () => {
      const { statusCode } = res;
      this.logger.log(`USER-${userId} ${method} ${originalUrl} ${statusCode} ${ip} ${userAgent}`);
    });

    next();
  }
}

const getUserId = (headers: IncomingHttpHeaders, jwtSecret: string) => {
  const authorizationHeader = headers.authorization;
  if (authorizationHeader) {
    const token = authorizationHeader.split(' ')[1];
    try {
      const secret = jwtSecret;
      const decoded = jwt.verify(token, secret);
      if (typeof decoded !== 'string') {
        return (decoded as AccessTokenPayload).id;
      }
    } catch (error) {}
  }
  return null;
};
