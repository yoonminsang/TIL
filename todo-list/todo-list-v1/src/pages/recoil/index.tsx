import { TodoCard, TodoLayout } from '@/domain/todos';
import { useGetTodos } from '@/hooks/queries/todo-queries';
import { TodoStatus, TodoSummaryDto } from '@/mocks/types';
import { Suspense } from 'react';
import { useGetList } from './useRecoilPage';

export default function Recoil() {
  const { list } = useGetList();

  return (
    <Suspense fallback={<div>recoil loading...</div>}>
      <header>
        <h1>Recoil</h1>
      </header>
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
    </Suspense>
  );
}
