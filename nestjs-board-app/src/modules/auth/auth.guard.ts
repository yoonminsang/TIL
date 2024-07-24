import { AuthGuard } from '@nestjs/passport';

export class OptionalAuthGuard extends AuthGuard() {
  handleRequest(_err, user, _info, _context, _status) {
    return user;
  }
}
