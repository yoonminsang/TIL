import { Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

import { UserRepository } from './user.repository';

import { IAuth } from '@/api-interfaces/structures/auth.structure';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: IAuth.AuthCredentialsDto) {
    return this.userRepository.createUser(authCredentialsDto);
  }

  async signIn({ username, password }: IAuth.AuthCredentialsDto) {
    const user = await this.userRepository.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      return 'login success';
    } else {
      throw new UnauthorizedException('login fail');
    }
  }
}
