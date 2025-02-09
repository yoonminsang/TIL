import { Logger, Module } from '@nestjs/common';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { FirebaseModule } from '@/modules/firebase/firebase.module'; // FirebaseModule 경로를 적절히 수정하세요

@Module({
  imports: [FirebaseModule],
  controllers: [UsersController],
  providers: [Logger, UsersService],
})
export class UsersModule {}
