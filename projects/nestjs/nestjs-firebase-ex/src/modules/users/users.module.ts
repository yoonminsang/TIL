import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

import { User } from '@/entities/user.entity';
import { FirebaseModule } from '@/modules/firebase/firebase.module';

@Module({
  imports: [FirebaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [Logger, UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
