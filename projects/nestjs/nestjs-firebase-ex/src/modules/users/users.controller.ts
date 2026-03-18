import { Body, Controller, Delete, Get, Post, UseGuards } from '@nestjs/common';
import { IUser } from 'syms-api-interfaces';

import { FirebaseAuthGuard, NoUserFirebaseAuthGuard } from '../firebase/firebase.guard';

import { GetUser } from './user.decorator';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @Post('/pre-signin')
  // preSignin(@Body() signupBodyDto: IUser.SignUpBodyDto): Promise<void> {
  //   return this.usersService.createUser(signupBodyDto);
  // }

  @Post('/check-user-exist')
  async checkUserExistence(@Body() { email }: IUser.CheckUserExistBodyDto): Promise<IUser.CheckUserExistResDto> {
    const user = await this.usersService.findUserByEmail({ email });
    return { exist: !!user };
  }

  @Post('/signup')
  async signup(@Body() signupBodyDto: IUser.SignUpBodyDto): Promise<IUser.SignUpResDto> {
    const user = await this.usersService.createUser(signupBodyDto);
    return {
      user: {
        id: user.id,
        firebaseId: user.firebaseId,
        email: user.email,
      },
    };
  }

  @UseGuards(FirebaseAuthGuard)
  @Get('/me')
  async me(@GetUser() user: IUser.User): Promise<IUser.MeResponseDto> {
    return { user };
  }

  @UseGuards(FirebaseAuthGuard)
  @Delete('/')
  async delete(@GetUser() user: IUser.User): Promise<void> {
    await this.usersService.deleteUser(user);
  }

  // TODO: token-test api 제거하기
  @UseGuards(FirebaseAuthGuard)
  @Get('/token-test')
  tokenTest(@GetUser() user: IUser.User) {
    return { user };
  }

  // 토큰이 없거나 올바르지 않은 토큰이 있어야 성공하는 케이스
  @UseGuards(NoUserFirebaseAuthGuard)
  @Get('/token-test-2')
  tokenTest2(@GetUser() user: IUser.User) {
    return { user };
  }
}
