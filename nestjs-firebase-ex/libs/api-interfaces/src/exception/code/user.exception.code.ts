import type { ExtractValue } from '../../types';

// TODO: 고치기
export const UserExceptionCode = {
  existId: 'user/existId',
} as const;
export type UserExceptionCode = ExtractValue<typeof UserExceptionCode>;
