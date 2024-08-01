import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';

import { FirebaseAuthGuard } from '../firebase/firebase.guard';

import { GetUser } from './user.decorator';
import { UsersService } from './users.service';

import { IUser } from '@/api-interfaces/structures/user.structure';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/signup')
  signup(@Body() signupBodyDto: IUser.SignUpBodyDto): Promise<IUser.SignUpResDto> {
    return this.usersService.createUser(signupBodyDto);
  }

  // NOTE: 테스트용 api
  @Get('/:uid/me')
  meByUid(@Param('uid') uid: string) {
    return this.usersService.meByUid(uid);
  }

  // 올바른 토큰이 있어야 성공하고 req.user에 user를 넣어주는 케이스
  @UseGuards(FirebaseAuthGuard)
  @Get('/token-test')
  tokenTest(@GetUser() user: IUser.User) {
    return { user };
  }

  // TODO: SetMetadata 공식문서 읽고 가드와 데코레이터 구현하기

  // TODO: 토큰이 없거나 올바르지 않은 토큰이 있어야 성공하는 케이스
  @Get('/token-test-2')
  tokenTest2(@GetUser() user: IUser.User) {
    return { user };
  }

  // TODO: 토큰이 있던 없던 req.user에 user를 넣어주는 케이스
  @Get('/token-test-3')
  tokenTest3(@GetUser() user: IUser.User) {
    return { user };
  }
}
