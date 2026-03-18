import { Button } from '@/components';
import { TodoCreateModal } from '@/domain/todos';

import { useOverlay } from '@/hooks/common';
import { TodoCreateDto } from '@/mocks/types';

export const Header = () => {
  const overlay = useOverlay();
  const openTodoCreateModal = async () => {
    await new Promise<TodoCreateDto | false>((resolve) => {
      overlay.open(({ isOpen, close }) => <TodoCreateModal visible={isOpen} resolve={resolve} close={close} />);
    });
  };
  return (
    <header>
      <h1>React</h1>
      <Button onClick={openTodoCreateModal}>모달 만들기</Button>
    </header>
  );
};
