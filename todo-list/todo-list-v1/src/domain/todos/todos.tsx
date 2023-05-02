import { FC } from 'react';
import { TodoCard, TodoLayout } from './components';
import { TodoSummaryDto } from '@/mocks/types';

interface Props {
  list: {
    title: string;
    data?: TodoSummaryDto[];
  }[];
}

export const Todos: FC<Props> = ({ list }) => {
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
