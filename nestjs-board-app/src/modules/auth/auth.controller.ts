import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from './auth.service';

import { IAuth } from '@/api-interfaces/structures/auth.structure';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: IAuth.SignUpBodyDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: IAuth.SignInBodyDto): Promise<IAuth.SignInResDto> {
    return this.authService.signIn(authCredentialsDto);
  }
}
