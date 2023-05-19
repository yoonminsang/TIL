import { Button, ModalV1, Select, Textarea } from '@/components';
import { Input } from '@/components';
import { TodoCreateDto, TodoPriority, TodoStatus } from '@/mocks/types';
import { GetProps } from '@/utils';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface Props {
  visible: GetProps<typeof ModalV1>['visible'];
  resolve: (value: false | TodoCreateDto | PromiseLike<TodoCreateDto | false>) => void;
  close: () => void;
}

export const TodoCreateModal: FC<Props> = ({ visible, resolve, close }) => {
  const { register, handleSubmit } = useForm<TodoCreateDto>();

  const onSubmit: SubmitHandler<TodoCreateDto> = (data, err) => {
    resolve(data);
    close();
  };

  const onClose = () => {
    resolve(false);
    close();
  };

  return (
    <ModalV1
      title="Make Todo"
      onClose={onClose}
      visible={visible}
      buttons={[
        <Button onClick={handleSubmit(onSubmit)} key={0}>
          저장하기
        </Button>,
        <Button onClick={onClose} key={1}>
          취소하기
        </Button>,
      ]}>
      <label htmlFor="title">제목</label>
      <Input
        {...register('title', {
          required: '제목은 필수입력입니다',
        })}
        id="title"
        type="text"
        required
      />
      <label htmlFor="description">설명</label>
      <Textarea {...register('description')} id="description" />
      <label htmlFor="priority">우선순위</label>
      <Select {...register('priority')} id="priority">
        {Object.values(TodoPriority).map((status) => {
          return (
            <option value={status} key={status}>
              {status}
            </option>
          );
        })}
      </Select>
      <label htmlFor="status">상태</label>
      <Select {...register('status')} id="status">
        {Object.values(TodoStatus).map((status) => {
          return (
            <option value={status} key={status}>
              {status}
            </option>
          );
        })}
      </Select>
    </ModalV1>
  );
};
