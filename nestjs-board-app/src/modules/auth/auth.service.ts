import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

import { UserRepository } from './user.repository';

import { IAuth } from '@/api-interfaces/structures/auth.structure';

@Injectable()
export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private jwtService: JwtService
  ) {}

  async signUp(authCredentialsDto: IAuth.AuthCredentialsDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(authCredentialsDto.password, salt);
    const user = await this.userRepository.createUser({
      username: authCredentialsDto.username,
      password: hashedPassword,
    });
    const accessToken = this.jwtService.sign({ username: user.username });
    return { accessToken, id: user.id, username: user.username };
  }

  async signIn({ username, password }: IAuth.AuthCredentialsDto) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      // 유저 토큰 생성 (Secret + Payload)
      const payload = { username: user.username };
      const accessToken = this.jwtService.sign(payload);
      return { accessToken, id: user.id, username: user.username };
    } else {
      throw new UnauthorizedException('login fail');
    }
  }
}
