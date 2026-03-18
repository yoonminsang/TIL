import type { ColumnOptions } from 'typeorm';
import { Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';

const DefaultDateTimeOptions: ColumnOptions = {
  type: 'datetime',
  precision: 3,
};

export const DateTimeColumn = (options?: Omit<ColumnOptions, 'type' | 'precision'>) =>
  Column({
    ...DefaultDateTimeOptions,
    ...options,
  });

export const CreateDateTimeColumn = () =>
  CreateDateColumn({
    ...DefaultDateTimeOptions,
    default: () => 'CURRENT_TIMESTAMP(3)',
  });

export const UpdateDateTimeColumn = () =>
  UpdateDateColumn({
    ...DefaultDateTimeOptions,
    onUpdate: 'CURRENT_TIMESTAMP(3)',
  });

export const DeleteDateTimeColumn = () =>
  DeleteDateColumn({
    ...DefaultDateTimeOptions,
    nullable: true,
  });
