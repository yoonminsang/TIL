import { useQuery, useQueryClient } from '@tanstack/react-query';
import { todoApi } from '@/apis';

const TODO_KEY = {
  all: ['todos'] as const,
  detail: (id: number) => [...TODO_KEY.all, id] as const,
};

/** @deprecated useGetAllTodos를 사용해주세요 */
export const useGetTodos = () =>
  useQuery({
    queryKey: TODO_KEY.all,
    queryFn: () => todoApi.getTodos(),
    suspense: true,
    staleTime: 10000,
  });

export const useGetAllTodos = () =>
  useQuery({
    queryKey: TODO_KEY.all,
    queryFn: () => todoApi.getAllTodos(),
    suspense: true,
    staleTime: 10000,
  });

export const useGetSummaryTodos = () =>
  useQuery({
    queryKey: TODO_KEY.all,
    queryFn: () => todoApi.getSummaryTodos(),
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
    return queryClient.getQueryData(TODO_KEY.detail(id)) as Awaited<ReturnType<typeof todoApi.getTodosById>>;
  };

  return { prefetchTodosById };
};
