import { IsEmail, IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';
import admin from 'firebase-admin';

import { AuthPolicyValue } from '../constants';

export namespace IUser {
  export class AuthCredentialsDto {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsString()
    @MinLength(AuthPolicyValue.MIN_PASSWORD_LENGTH)
    @MaxLength(AuthPolicyValue.MAX_PASSWORD_LENGTH)
    @Matches(AuthPolicyValue.PASSWORD_REGEX, {
      message: 'password only accepts english and number',
    })
    @IsNotEmpty()
    password!: string;
  }

  // NOTE: 인터페이스 좁히기
  export type User = admin.auth.UserRecord;

  export class IBase {
    user!: User;
    customToken!: string;
  }

  export class MeByUid extends IBase {}

  export class SignUpBodyDto extends AuthCredentialsDto {}
  export class SignUpResDto extends IBase {}

  export class SignInBodyDto extends AuthCredentialsDto {}
  export class SignInResDto extends IBase {}
}
