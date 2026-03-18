import type { ExecutionContext } from '@nestjs/common';
import { createParamDecorator } from '@nestjs/common';
import type { IUser } from 'syms-api-interfaces';

export const GetUser = createParamDecorator((data: unknown, ctx: ExecutionContext): IUser.User => {
  const req = ctx.switchToHttp().getRequest();
  return req.user;
});
