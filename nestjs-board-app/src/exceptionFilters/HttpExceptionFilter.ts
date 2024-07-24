import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

import { AccessTokenPayload } from '@/modules/auth/auth.dto';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger();

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const { body, user, originalUrl, method, ip } = req;
    const userAgent = req.get('user-agent');
    const userId = (user as AccessTokenPayload)?.id;
    const statusCode = exception.getStatus();

    const message = `USER-${userId} ${method} ${originalUrl} ${JSON.stringify(body)} ${statusCode} ${ip} ${userAgent}`;
    if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
      this.logger.error(message);
    } else {
      this.logger.warn(message);
    }

    res.status(statusCode).json(exception.getResponse());
  }
}
