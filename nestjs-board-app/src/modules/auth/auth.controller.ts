import { Body, Controller, Post, UseGuards } from '@nestjs/common';

import { CustomAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { GetUser } from './user.decorator';

import { IAuth } from '@/api-interfaces/structures/auth.structure';
import { User } from '@/entities/user.entity';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authCredentialsDto: IAuth.SignUpBodyDto): Promise<IAuth.SignUpResDto> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: IAuth.SignInBodyDto): Promise<IAuth.SignInResDto> {
    return this.authService.signIn(authCredentialsDto);
  }

  @Post('/test')
  @UseGuards(CustomAuthGuard)
  // test(@Req() req) {
  test(@GetUser() user: User) {
    console.log('req.user', user);
  }
}
