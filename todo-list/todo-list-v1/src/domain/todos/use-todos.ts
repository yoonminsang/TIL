import { useGetTodos } from '@/hooks/queries/todo-queries';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filteredTodosState, todosState } from './atom';
import { UseTodos } from './types';

export const useTodos: UseTodos = () => {
  const { data } = useGetTodos();
  const setTodos = useSetRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);

  return { filteredTodos };
};
