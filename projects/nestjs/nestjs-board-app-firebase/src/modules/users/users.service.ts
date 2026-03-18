import { Injectable } from '@nestjs/common';

import { IUser } from '@/api-interfaces/structures/user.structure';
import { FirebaseService } from '@/modules/firebase/firebase.service';

@Injectable()
export class UsersService {
  constructor(private readonly firebaseService: FirebaseService) {}

  async createUser(authCredentialsDto: IUser.SignUpBodyDto) {
    const user = await this.firebaseService.createUser(authCredentialsDto);
    const customToken = await this.firebaseService.createCustomToken(user.uid);
    return { user, customToken };
    // NOTE: firebase이외의 데이터가 필요하게 되면 db에 저장하기
  }

  async updateUser(user: IUser.User, nextUserData: any) {
    await this.firebaseService.updateUser(user.uid, nextUserData);
  }

  async deleteUser(user: IUser.User) {
    await this.firebaseService.deleteUser(user.uid);
  }

  // NOTE: 테스트용 api
  async meByUid(uid: string) {
    const [user, customToken] = await Promise.all([
      this.firebaseService.getUser(uid),
      this.firebaseService.createCustomToken(uid),
    ]);
    return { user, customToken };
  }
}
