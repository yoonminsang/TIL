import { todoApi } from '@/apis';
import { useQuery, useQueryClient } from '@tanstack/react-query';

const TODO_KEY = {
  all: ['todos'] as const,
  detail: (id: number) => [...TODO_KEY.all, id] as const,
};

export const useGetTodos = () =>
  useQuery({
    queryKey: TODO_KEY.all,
    queryFn: () => todoApi.getTodos(),
    suspense: true,
    staleTime: 10000,
  });

export const useGetTodosById = (id: number) =>
  useQuery({
    queryKey: TODO_KEY.detail(id),
    queryFn: () => todoApi.getTodosById({ pathParams: { id } }),
    staleTime: 10000,
  });

export const usePrefetchTodosById = () => {
  const queryClient = useQueryClient();
  const prefetchTodosById = async (id: number) => {
    await queryClient.prefetchQuery({
      queryKey: TODO_KEY.detail(id),
      queryFn: () => todoApi.getTodosById({ pathParams: { id } }),
      staleTime: 10000,
    });
    return queryClient.getQueryData(TODO_KEY.detail(id)) as Awaited<
      ReturnType<typeof todoApi.getTodosById>
    >;
  };

  return { prefetchTodosById };
};
