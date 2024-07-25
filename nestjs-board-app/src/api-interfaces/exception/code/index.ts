import { BaseExceptionCode } from './base.exception.code';

import type { ExtractValue } from '@/types';

export const RestExceptionCode = {
  BaseExceptionCode,
} as const;

export type RestExceptionCode = ExtractValue<typeof BaseExceptionCode>;
