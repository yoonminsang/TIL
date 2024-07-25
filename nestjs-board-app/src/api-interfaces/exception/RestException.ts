import { HttpException, HttpStatus } from '@nestjs/common';

import { RestExceptionCode } from '@/api-interfaces/exception';

export class ApiError<T> {
  code?: RestExceptionCode;
  data?: T;
  message?: string | string[];
}

class RestException<T = undefined> extends HttpException {
  constructor(httpStatus: HttpStatus, error?: ApiError<T>) {
    super(error ?? {}, httpStatus);
  }
}

class BadRequestException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.BAD_REQUEST, {
      code: RestExceptionCode.BaseExceptionCode.BadRequest,
      data,
      message,
    });
  }
}

class UnauthorizedException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.UNAUTHORIZED, {
      code: RestExceptionCode.BaseExceptionCode.Unauthorized,
      data,
      message,
    });
  }
}

class NotFoundException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.NOT_FOUND, {
      code: RestExceptionCode.BaseExceptionCode.NotFound,
      data,
      message,
    });
  }
}

class ForbiddenException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.FORBIDDEN, {
      code: RestExceptionCode.BaseExceptionCode.Forbidden,
      data,
      message,
    });
  }
}

class NotAcceptableException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.NOT_ACCEPTABLE, {
      code: RestExceptionCode.BaseExceptionCode.NotAcceptable,
      data,
      message,
    });
  }
}

class TimeoutException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.REQUEST_TIMEOUT, {
      code: RestExceptionCode.BaseExceptionCode.Timeout,
      data,
      message,
    });
  }
}

class ConflictException<T = undefined> extends RestException<T> {
  constructor({ data, message }: { data?: T; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.CONFLICT, {
      code: RestExceptionCode.BaseExceptionCode.Conflict,
      data,
      message,
    });
  }
}

export const CustomError = {
  RestException,
  BadRequestException,
  UnauthorizedException,
  NotFoundException,
  ForbiddenException,
  NotAcceptableException,
  TimeoutException,
  ConflictException,
} as const;
