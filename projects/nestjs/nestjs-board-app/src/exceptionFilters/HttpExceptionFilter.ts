import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { Request, Response } from 'express';

import { CustomError } from '@/api-interfaces';
import { AccessTokenPayload } from '@/modules/auth/auth.dto';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger: Logger = new Logger();

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();
    const { body, user, originalUrl, method, ip } = req;
    const userAgent = req.get('user-agent');
    const userId = (user as AccessTokenPayload)?.id;
    if (exception instanceof HttpException) {
      const statusCode = exception.getStatus();

      const message = `USER-${userId} ${method} ${originalUrl} ${JSON.stringify(body)} ${statusCode} ${ip} ${userAgent}`;
      if (statusCode >= HttpStatus.INTERNAL_SERVER_ERROR) {
        this.logger.error(message, { exception: this.formatError(exception) });
      } else {
        this.logger.warn(message, { exception: this.formatError(exception) });
      }

      res.status(statusCode).json(exception.getResponse());
    } else {
      const message = `로직 에러. USER-${userId} ${method} ${originalUrl} ${JSON.stringify(body)} ${HttpStatus.INTERNAL_SERVER_ERROR} ${ip} ${userAgent}`;
      this.logger.error(message, { exception: this.formatError(exception) });

      res
        .status(500)
        .json(new CustomError.InternalServerErrorException({ message: 'Internal server logic error ' }).getResponse());
    }
  }

  private formatError(exception: unknown): object {
    if (exception instanceof Error) {
      return {
        message: exception.message,
        stack: exception.stack,
      };
    }
    return { exception };
  }
}
