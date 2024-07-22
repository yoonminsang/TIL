import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn, Unique } from 'typeorm';

import { Board } from './board.entity';

@Entity()
@Unique(['username'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  username!: string;

  @Column()
  password!: string;

  // eager true: user정보를 가져올때 board정보도 같이 불러온다.
  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards!: Board[];
}
