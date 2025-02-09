import { BaseExceptionCode } from './base.exception.code';
import { FirebaseExceptionCode } from './firebase.exception.code';
import { UserExceptionCode } from './user.exception.code';

export const RestExceptionCode = {
  BaseExceptionCode,
  FirebaseExceptionCode,
  UserExceptionCode,
} as const;

export type RestExceptionCode = BaseExceptionCode | FirebaseExceptionCode | UserExceptionCode;
export { BaseExceptionCode, FirebaseExceptionCode };
