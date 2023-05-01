import { todoApi } from '@/apis';
import { useQuery } from '@tanstack/react-query';

export const TODO_KEY = {
  all: ['todos'] as const,
  list: () => [...TODO_KEY.all, 'list'] as const,
  detail: (id: number) => [...TODO_KEY.all, id] as const,
};

export const useGetTodos = () =>
  useQuery({
    queryKey: TODO_KEY.all,
    queryFn: () => todoApi.getTodos(),
    suspense: !(process.env.NODE_ENV === 'development'),
  });
export const useGetTodosById = (id: number) =>
  useQuery({
    queryKey: TODO_KEY.all,
    queryFn: () => todoApi.getTodosById({ pathParams: { id } }),
  });
