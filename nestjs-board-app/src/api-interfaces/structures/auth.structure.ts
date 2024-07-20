import { IsNotEmpty, IsString } from 'class-validator';

export namespace IAuth {
  export class AuthCredentialsDto {
    @IsString()
    @IsNotEmpty()
    username!: string;

    @IsString()
    @IsNotEmpty()
    password!: string;
  }

  export class SignupBodyDto extends AuthCredentialsDto {}
}
