import { BaseExceptionCode } from './base.exception.code';
import { FirebaseExceptionCode } from './firebase.exception.code';

export const RestExceptionCode = {
  BaseExceptionCode,
  FirebaseExceptionCode,
} as const;

export type RestExceptionCode = BaseExceptionCode | FirebaseExceptionCode;
export { BaseExceptionCode, FirebaseExceptionCode };
