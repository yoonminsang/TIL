import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';

import type { IUser } from '@/api-interfaces/structures/user.structure';

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext): IUser.User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
