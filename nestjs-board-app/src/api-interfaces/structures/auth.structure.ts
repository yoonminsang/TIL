import { IsNotEmpty, IsString, Matches, MaxLength, MinLength } from 'class-validator';

import { AuthPolicyValue } from '../constants';

export namespace IAuth {
  export class AuthCredentialsDto {
    @IsString()
    @MinLength(AuthPolicyValue.MIN_USER_LENGTH)
    @MaxLength(AuthPolicyValue.MAX_USER_LENGTH)
    @IsNotEmpty()
    username!: string;

    @IsString()
    @MinLength(AuthPolicyValue.MIN_PASSWORD_LENGTH)
    @MaxLength(AuthPolicyValue.MAX_PASSWORD_LENGTH)
    @Matches(AuthPolicyValue.PASSWORD_REGEX, {
      message: 'password only accepts english and number',
    })
    @IsNotEmpty()
    password!: string;
  }

  export class SignUpBodyDto extends AuthCredentialsDto {}

  export class SignInBodyDto extends AuthCredentialsDto {}
  export class SignInResDto {
    accessToken!: string;
  }
}
