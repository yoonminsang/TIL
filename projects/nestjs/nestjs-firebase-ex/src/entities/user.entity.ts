import { BaseEntity, Column, Entity, Index, PrimaryColumn } from 'typeorm';

import { CreateDateTimeColumn, DeleteDateTimeColumn } from '@/utils/typeorm.utils';

@Entity()
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'char', length: 32, unique: true })
  id!: string;

  /** firebase에 저장되는 UUID */
  @PrimaryColumn({ type: 'char', length: 28, unique: true })
  firebaseId!: string;

  @Column()
  @Index('IDX_email', { unique: true })
  email!: string;

  @CreateDateTimeColumn()
  createdAt!: Date;

  @DeleteDateTimeColumn()
  deletedAt!: Date | null;
}
