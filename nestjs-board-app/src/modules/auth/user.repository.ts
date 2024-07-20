import { Injectable } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';

import { IAuth } from '@/api-interfaces/structures/auth.structure';
import { User } from '@/entities/user.entity';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser({ username, password }: IAuth.AuthCredentialsDto) {
    const user = this.create({ username, password });
    await this.save(user);
  }
}
