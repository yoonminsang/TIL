import { HttpException, HttpStatus } from '@nestjs/common';
import { RestExceptionCode } from 'syms-api-interfaces';

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
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.BAD_REQUEST, {
      code: code ?? RestExceptionCode.BaseExceptionCode.BadRequest,
      data,
      message,
    });
  }
}

class UnauthorizedException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.UNAUTHORIZED, {
      code: code ?? RestExceptionCode.BaseExceptionCode.Unauthorized,
      data,
      message,
    });
  }
}

class NotFoundException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.NOT_FOUND, {
      code: code ?? RestExceptionCode.BaseExceptionCode.NotFound,
      data,
      message,
    });
  }
}

class ForbiddenException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.FORBIDDEN, {
      code: code ?? RestExceptionCode.BaseExceptionCode.Forbidden,
      data,
      message,
    });
  }
}

class NotAcceptableException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.NOT_ACCEPTABLE, {
      code: code ?? RestExceptionCode.BaseExceptionCode.NotAcceptable,
      data,
      message,
    });
  }
}

class TimeoutException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.REQUEST_TIMEOUT, {
      code: code ?? RestExceptionCode.BaseExceptionCode.Timeout,
      data,
      message,
    });
  }
}

class ConflictException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.CONFLICT, {
      code: code ?? RestExceptionCode.BaseExceptionCode.Conflict,
      data,
      message,
    });
  }
}

class InternalServerErrorException<T = undefined> extends RestException<T> {
  constructor({ data, code, message }: { data?: T; code?: RestExceptionCode; message?: ApiError<T>['message'] } = {}) {
    super(HttpStatus.INTERNAL_SERVER_ERROR, {
      code: code ?? RestExceptionCode.BaseExceptionCode.InternalServerError,
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
  InternalServerErrorException,
} as const;
