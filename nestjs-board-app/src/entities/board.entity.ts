import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { User } from './user.entity';

import { BoardStatus } from '@/api-interfaces';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  description!: string;

  @Column()
  status!: BoardStatus;

  // User전체를 넣지 않고 userId만으로 db에 접근하는 방법
  // @Column()
  // userId!: number;

  @ManyToOne(() => User, (user) => user.boards, { eager: true })
  // 외래키 이름 설정하는 방법
  // @JoinColumn({ name: 'userId' }) //
  user!: User;
}
