import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { AccessTokenPayload } from './auth.dto';
import { UserRepository } from './user.repository';

import { CustomError } from '@/api-interfaces';
import { IAuth } from '@/api-interfaces/structures/auth.structure';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: IAuth.AuthCredentialsDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(authCredentialsDto.password, salt);
    const user = await this.userRepository.createUser({
      username: authCredentialsDto.username,
      password: hashedPassword,
    });
    const payload: AccessTokenPayload = { username: user.username, id: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { accessToken, id: user.id, username: user.username };
  }

  async signIn({ username, password }: IAuth.AuthCredentialsDto) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret + Payload)
      const payload: AccessTokenPayload = { username: user.username, id: user.id };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken, id: user.id, username: user.username };
    } else {
      throw new CustomError.UnauthorizedException({ message: 'login fail' });
    }
  }
}
