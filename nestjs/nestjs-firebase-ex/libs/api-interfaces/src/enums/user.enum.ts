import type { ExtractValue } from 'src/types';

export const USER_PROVIDER = {
  google: 'google.com' as const,
  email: 'password' as const,
};
export type USER_PROVIDER = ExtractValue<typeof USER_PROVIDER>;
