import { Button, ModalV1, Select, Textarea } from '@/components';
import { Input } from '@/components';
import { TodoUpdateDto, TodoPriority, TodoStatus, Todo } from '@/mocks/types';
import { GetProps } from '@/utils';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type Delete = { type: 'delete' };
type Modify = { type: 'modify'; data: TodoUpdateDto };

interface Props {
  visible: GetProps<typeof ModalV1>['visible'];
  resolve: (
    value: Delete | Modify | false | PromiseLike<Delete | Modify | false>
  ) => void;
  close: () => void;
  initialState: Todo;
}

export const TodoUpdateModal: FC<Props> = ({
  visible,
  resolve,
  close,
  initialState,
}) => {
  const { register, handleSubmit } = useForm<TodoUpdateDto>({
    defaultValues: {
      title: initialState.title,
      description: initialState.description,
      priority: initialState.priority,
      status: initialState.status,
    },
  });

  const onSubmit: SubmitHandler<TodoUpdateDto> = (data, err) => {
    resolve({ type: 'modify', data });
    close();
  };

  const onDelete = () => {
    resolve({ type: 'delete' });
    close();
  };

  const onClose = () => {
    resolve(false);
    close();
  };

  return (
    <ModalV1
      title="Update Todo"
      onClose={onClose}
      visible={visible}
      buttons={[
        <Button onClick={handleSubmit(onSubmit)} key={0}>
          저장하기
        </Button>,
        <Button onClick={onDelete} key={1}>
          삭제하기
        </Button>,
        <Button onClick={onClose} key={2}>
          취소하기
        </Button>,
      ]}
    >
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
