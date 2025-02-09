import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

import { UserRepository } from './user.repository';

import { appConfig } from '@/configs/app.config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(appConfig.KEY)
    private readonly env: ConfigType<typeof appConfig>,

    private userRepository: UserRepository
  ) {
    super({
      secretOrKey: env.jwtSecret,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
  }

  async validate(payload) {
    const username = payload?.username;
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException();
    }

    return user;
  }
}
