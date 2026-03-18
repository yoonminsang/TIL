import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { CustomError } from '@/api-interfaces';
import { IAuth } from '@/api-interfaces/structures/auth.structure';
import { User } from '@/entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser({ username, password }: IAuth.AuthCredentialsDto) {
    try {
      const user = this.create({ username, password });
      await this.save(user);
      return user;
    } catch (err: any) {
      if (err?.code === 'ER_DUP_ENTRY') {
        throw new CustomError.ConflictException({ message: 'Existing username' });
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
