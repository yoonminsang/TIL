import { Injectable } from '@nestjs/common';
import { IUser, RestExceptionCode } from 'syms-api-interfaces';
import { DataSource, Repository } from 'typeorm';

import { User } from '@/entities/user.entity';
import { CustomError } from '@/exception/RestException';
import { generateReorderUUId } from '@/utils/uuid';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser({ id, firebaseId, email }: IUser.SignUpBodyDto & { id: string }) {
    try {
      const user = this.create({ id, firebaseId, email, createdAt: new Date() });
      await this.save(user);
      return user;
    } catch (err: any) {
      if (err?.code === 'ER_DUP_ENTRY') {
        throw new CustomError.ConflictException({
          message: 'Existing id',
          code: RestExceptionCode.UserExceptionCode.existId,
        });
      }
      throw err;
    }
  }

  async deleteUser(id: string) {
    const user = await this.findOne({ where: { id } });

    if (!user) {
      throw new CustomError.ConflictException({ message: 'User not found' });
    }

    // NOTE: 서비스가 더 커지면 deleteUser 테이블을 따로 분리하기.
    // 스스로 탈퇴말고 관리자가 탈퇴시키는 기능이 들어간다면 필수로 필요할듯
    // email 직접 노출은 보안상 문제가 있을지도?
    user.email = `deleteduser+${generateReorderUUId()}+${user.email}`;
    await this.save(user);
    await this.softRemove(user);
  }
}
