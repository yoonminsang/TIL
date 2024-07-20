import { ConflictException, Injectable, InternalServerErrorException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { DataSource, Repository } from 'typeorm';

import { IAuth } from '@/api-interfaces/structures/auth.structure';
import { User } from '@/entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser({ username, password }: IAuth.AuthCredentialsDto) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
      const user = this.create({ username, password: hashedPassword });
      await this.save(user);
    } catch (err: any) {
      if (err?.code === 'ER_DUP_ENTRY') {
        throw new ConflictException('Existing username');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
