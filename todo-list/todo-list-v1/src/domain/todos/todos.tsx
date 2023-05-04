import { FC } from 'react';
import { TodoCard, TodoLayout } from './components';
import { TodoSummaryDto } from '@/mocks/types';
import { UseTodos } from './types';

interface Props {
  useTodos: UseTodos;
}

export const Todos: FC<Props> = ({ useTodos }) => {
  const { filteredTodos } = useTodos();
  return (
    <TodoLayout>
      <TodoCard.listContainer>
        {filteredTodos.map(({ title, data }) => (
          <TodoCard.list key={title} title={title}>
            {data?.map(({ id, title, priority }) => (
              <TodoCard key={id} title={title} priority={priority} />
            ))}
          </TodoCard.list>
        ))}
      </TodoCard.listContainer>
    </TodoLayout>
  );
};
