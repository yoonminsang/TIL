import { TodoCard, TodoLayout } from '@/domain/todos';
import { useGetTodos } from '@/hooks/queries/todo-queries';
import { TodoStatus, TodoSummaryDto } from '@/mocks/types';
import { Suspense } from 'react';

export default function Recoil() {
  const { isLoading, isError, data } = useGetTodos();
  console.log(isLoading, isError, data);
  if (!data || isLoading) return null;
  const { todo, ing, done } = data.reduce(
    (acc, cur) => {
      if (cur.status === TodoStatus.todo) {
        acc.todo.push(cur);
      } else if (cur.status === TodoStatus.ing) {
        acc.ing.push(cur);
      } else if (cur.status === TodoStatus.done) {
        acc.done.push(cur);
      }
      return acc;
    },
    {
      todo: [] as TodoSummaryDto[],
      ing: [] as TodoSummaryDto[],
      done: [] as TodoSummaryDto[],
    }
  );
  const lists = [
    { title: '할 일', data: todo },
    { title: '진행중', data: ing },
    { title: '완료', data: done },
  ];
  return (
    <Suspense fallback={<div>recoil loading...</div>}>
      <header>
        <h1>Recoil</h1>
      </header>
      <TodoLayout>
        <TodoCard.listContainer>
          {lists.map(({ title, data }) => (
            <TodoCard.list key={title} title={title}>
              {data.map(({ id, title, priority }) => (
                <TodoCard key={id} title={title} priority={priority} />
              ))}
            </TodoCard.list>
          ))}
        </TodoCard.listContainer>
      </TodoLayout>
    </Suspense>
  );
}
