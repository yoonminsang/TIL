import { CanActivate, ExecutionContext, Injectable, Logger } from '@nestjs/common';

import { FirebaseService } from './firebase.service';
import { extractToken } from './firebase.util';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly logger: Logger
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractToken(request);

    if (!token) {
      return false;
    }

    try {
      const user = await this.firebaseService.getUserByToken(token);
      request.user = user;
      return true;
    } catch (error) {
      this.logger.warn('FirebaseAuthGuard에서 getUserByToken 에러 발생', { error });
      return false;
    }
  }
}

@Injectable()
export class OptionalFirebaseAuthGuard implements CanActivate {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly logger: Logger
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractToken(request);

    if (!token) {
      return true;
    }

    try {
      const user = await this.firebaseService.getUserByToken(token);
      request.user = user;
    } catch (error) {
      this.logger.warn('OptionalFirebaseAuthGuard에서 getUserByToken 에러 발생', { error });
      return true;
    }

    return true;
  }
}

@Injectable()
export class NoUserFirebaseAuthGuard implements CanActivate {
  constructor(
    private readonly firebaseService: FirebaseService,
    private readonly logger: Logger
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = extractToken(request);

    if (!token) {
      return true;
    }

    try {
      const user = await this.firebaseService.getUserByToken(token);
      if (user) {
        return false;
      }
    } catch (error) {
      this.logger.warn('NoUserFirebaseAuthGuard에서 getUserByToken 에러 발생', { error });
      return true;
    }

    return true;
  }
}
