import type { ExtractValue } from '../../types';

export const BaseExceptionCode = {
  BadRequest: 'BadRequest',
  Unauthorized: 'Unauthorized',
  NotFound: 'NotFound',
  Forbidden: 'Forbidden',
  NotAcceptable: 'NotAcceptable',
  Timeout: 'Timeout',
  Conflict: 'Conflict',
  InternalServerError: 'InternalServerError',
} as const;
export type BaseExceptionCode = ExtractValue<typeof BaseExceptionCode>;
