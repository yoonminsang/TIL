import { Button } from '@/components';
import { TodoCreateModal } from '@/domain/todos';

import { UseTodosMutation } from '@/domain/todos';

import { useOverlay } from '@/hooks/common';
import { TodoCreateDto } from '@/mocks/types';
import { FC } from 'react';

interface Props {
  useTodosMutation: UseTodosMutation;
}

export const Header: FC<Props> = ({ useTodosMutation }) => {
  const { handleCreateTodo } = useTodosMutation();
  const overlay = useOverlay();
  const openTodoCreateModal = async () => {
    const result = await new Promise<TodoCreateDto | false>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <TodoCreateModal visible={isOpen} resolve={resolve} close={close} />
      ));
    });
    if (result) {
      handleCreateTodo(result);
    }
  };
  return (
    <header>
      <h1>Recoil</h1>
      <Button onClick={openTodoCreateModal}>모달 만들기</Button>
    </header>
  );
};
