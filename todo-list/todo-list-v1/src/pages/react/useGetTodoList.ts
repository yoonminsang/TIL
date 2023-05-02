import { useGetTodos } from '@/hooks/queries/todo-queries';
import { TodoStatus, TodoSummaryDto } from '@/mocks/types';

export const useGetTodoList = () => {
  const { data } = useGetTodos();

  const filteredData = data?.reduce(
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

  const list = [
    { title: '할 일', data: filteredData?.todo },
    { title: '진행중', data: filteredData?.ing },
    { title: '완료', data: filteredData?.done },
  ];
  return { list };
};
