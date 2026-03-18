import { Inject, Injectable, Logger, LoggerService, NestMiddleware } from '@nestjs/common';
import { NextFunction } from 'express';
import { IUser, USER_PROVIDER } from 'syms-api-interfaces';

import { FirebaseService } from '@/modules/firebase/firebase.service';
import { extractToken } from '@/modules/firebase/firebase.util';
import { UsersService } from '@/modules/users/users.service';

@Injectable()
export class UserMiddleware implements NestMiddleware {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly userService: UsersService,
    @Inject(Logger) private readonly logger: LoggerService
  ) {}

  async use(req: Request, res: Response, next: NextFunction) {
    const token = extractToken(req);

    if (!token) {
      return next();
    }

    try {
      const firebaseUser = await this.firebaseService.getUserByToken(token);
      const dbUser = await this.userService.findUserByFirebaseId(firebaseUser.uid);
      if (!dbUser) {
        return next();
      }

      const user: IUser.User = {
        id: dbUser.id,
        email: dbUser.email,
        emailVerified: firebaseUser.emailVerified,
        firebaseId: firebaseUser.uid,
        providerData: firebaseUser.providerData.map((v) => {
          return { email: v.email, providerId: v.providerId as USER_PROVIDER, uid: v.uid };
        }),
      };
      (req as any).user = user;
    } catch (error) {
      this.logger.warn('UserMiddleware에서 에러 발생', { error });
    }

    next();
  }
}
