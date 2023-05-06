import { useGetTodos } from '@/hooks/queries/todo-queries';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filteredTodosState, todosState } from './atom';
import { UseTodos, UseTodosHeader } from './types';
import { TodoCreateDto } from '@/mocks/types';
import { TodoSummaryDto } from '@/mocks/types';
import { getCreateId } from '@/utils';

export const useTodos: UseTodos = () => {
  const { data } = useGetTodos();
  const setTodos = useSetRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);

  return { filteredTodos };
};

export const useTodosHeader: UseTodosHeader = () => {
  const setTodos = useSetRecoilState(todosState);

  const handleCreateTodo = (todo: TodoCreateDto) => {
    setTodos((todos) => {
      const { description, ...todoWithoutDescription } = todo;
      const newTodo: TodoSummaryDto = {
        ...todoWithoutDescription,
        id: getCreateId(todos),
        createdAt: new Date().toISOString(),
      };
      return todos ? [...todos, newTodo] : [newTodo];
    });
  };

  return { handleCreateTodo };
};
