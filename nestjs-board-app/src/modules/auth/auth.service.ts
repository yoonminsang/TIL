import { Injectable } from '@nestjs/common';

import { UserRepository } from './user.repository';

import { IAuth } from '@/api-interfaces/structures/auth.structure';

@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository) {}

  async signUp(authCredentialsDto: IAuth.AuthCredentialsDto) {
    return this.userRepository.createUser(authCredentialsDto);
  }
}
