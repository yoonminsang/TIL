import { useGetTodos } from '@/hooks/queries/todo-queries';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filteredTodosState, todosState } from './atom';
import { UseTodos } from './types';

export const useTodos: UseTodos = () => {
  const { data } = useGetTodos();
  const setTodos = useSetRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  // TODO: 훅 실행될때마다 recoil todosState 실행되는거 비효율
  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);

  return { filteredTodos };
};
