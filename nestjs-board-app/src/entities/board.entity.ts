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

  @ManyToOne(() => User, (user) => user.boards, { eager: false })
  user!: User;
}
