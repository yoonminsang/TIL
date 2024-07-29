import { AuthGuard } from '@nestjs/passport';

import { CustomError } from '@/api-interfaces';

export class CustomAuthGuard extends AuthGuard() {
  handleRequest(err, user, _info, _context, _status) {
    if (err || !user) {
      throw new CustomError.UnauthorizedException({ message: 'CustomAuthGuard' });
    }
    return user;
  }
}

export class OptionalAuthGuard extends AuthGuard() {
  handleRequest(_err, user, _info, _context, _status) {
    return user;
  }
}
