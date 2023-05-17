import { Button } from '@/components';
import { TodoCreateModal } from '@/domain/todos';

import { UseTodosHeader } from '@/domain/todos';

import { useOverlay } from '@/hooks/common';
import { TodoCreateDto } from '@/mocks/types';
import { FC } from 'react';

interface Props {
  useTodosHeader: UseTodosHeader;
  title: string;
}

export const Header: FC<Props> = ({ useTodosHeader, title }) => {
  const overlay = useOverlay();
  const openTodoCreateModal = async () => {
    const result = await new Promise<TodoCreateDto | false>((resolve) => {
      overlay.open(({ isOpen, close }) => (
        <TodoCreateModal visible={isOpen} resolve={resolve} close={close} />
      ));
    });
    console.log(result);
  };
  return (
    <header>
      <h1>{title}</h1>
      <Button onClick={openTodoCreateModal}>모달 만들기</Button>
    </header>
  );
};
