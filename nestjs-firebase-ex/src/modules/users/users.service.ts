import { Inject, Injectable, Logger, LoggerService } from '@nestjs/common';
import { IUser } from 'syms-api-interfaces';

import { FirebaseService } from '../firebase/firebase.service';

import { UserRepository } from './user.repository';

import { generateReorderUUId } from '@/utils/uuid';

@Injectable()
export class UsersService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly firebaseService: FirebaseService,
    @Inject(Logger) private readonly logger: LoggerService
  ) {}

  async findUserByEmail({ email }: IUser.CheckUserExistBodyDto) {
    return await this.userRepository.findOne({ where: { email } });
  }

  async createUser({ email, firebaseId }: IUser.SignUpBodyDto) {
    return await this.userRepository.createUser({ email, id: generateReorderUUId(), firebaseId });
  }

  async deleteUser(user: IUser.User) {
    try {
      await this.firebaseService.deleteUser(user.firebaseId);
      await this.userRepository.deleteUser(user.id);
    } catch (err) {
      this.logger.error('delete user에서 에러발생.', err);
      throw err;
    }
  }

  async findUserByFirebaseId(firebaseId: string) {
    return await this.userRepository.findOne({ where: { firebaseId } });
  }
}
