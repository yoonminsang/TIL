import { useGetTodos } from '@/hooks/queries/todo-queries';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filteredTodosState, todosSummaryState } from './atom';
import { UseTodos, UseTodosHeader } from './types';
import { TodoCreateDto } from '@/mocks/types';
import { TodoSummaryDto } from '@/mocks/types';
import { getCreateId } from '@/utils';

export const useTodos: UseTodos = () => {
  const { data } = useGetTodos();
  const setTodosSummaryState = useSetRecoilState(todosSummaryState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  useEffect(() => {
    if (data) setTodosSummaryState(data);
  }, [data, setTodosSummaryState]);

  return { filteredTodos };
};

export const useTodosHeader: UseTodosHeader = () => {
  const setTodosSummaryState = useSetRecoilState(todosSummaryState);

  const handleCreateTodo = (todo: TodoCreateDto) => {
    setTodosSummaryState((todos) => {
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
