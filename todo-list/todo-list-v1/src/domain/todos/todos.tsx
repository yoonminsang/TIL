import { FC } from 'react';
import { useGetList } from './useTodos';
import { TodoCard, TodoLayout } from './components';

export const Todos: FC = () => {
  const { list } = useGetList();

  return (
    <TodoLayout>
      <TodoCard.listContainer>
        {list.map(({ title, data }) => (
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
