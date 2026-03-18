import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { USER_PROVIDER } from '../enums';

export namespace IUser {
  export class CheckUserExistBodyDto {
    @IsString()
    email!: string;
  }

  export class CheckUserExistResDto {
    exist!: boolean;
  }

  export class SignUpBodyDto {
    @IsString()
    firebaseId!: string;

    @IsEmail()
    @IsNotEmpty()
    email!: string;
  }

  export class SignUpResDto {
    user!: Pick<User, 'id' | 'firebaseId' | 'email'>;
  }

  // NOTE: firebase에 있는 일부 정도만 인터페이스로 정의
  export type User = {
    id: string;
    firebaseId: string;
    email: string;
    emailVerified: boolean;
    providerData: {
      email: string;
      providerId: USER_PROVIDER;
      uid: string;
    }[];
  };

  export class MeResponseDto {
    user!: User;
  }
}
