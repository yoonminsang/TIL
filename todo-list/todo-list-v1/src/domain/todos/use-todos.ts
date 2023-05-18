import { useGetTodos } from '@/hooks/queries/todo-queries';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filteredTodosState, todosSummaryState, todosState } from './atom';
import { UseTodos, UseTodosMutation } from './types';
import { Todo, TodoCreateDto } from '@/mocks/types';
import { TodoSummaryDto } from '@/mocks/types';
import { errorMessage, getCreateId } from '@/utils';
import { produce } from 'immer';

export const useTodos: UseTodos = () => {
  const { data } = useGetTodos();
  const setTodosSummary = useSetRecoilState(todosSummaryState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  useEffect(() => {
    if (data) setTodosSummary(data);
  }, [data, setTodosSummary]);

  return { filteredTodos };
};

export const useTodosMutation: UseTodosMutation = () => {
  const [todosSummary, setTodosSummary] = useRecoilState(todosSummaryState);
  const setTodos = useSetRecoilState(todosState);

  const handleCreateTodo = (todo: TodoCreateDto) => {
    const id = getCreateId(todosSummary);
    const createdAt = new Date().toISOString();
    setTodosSummary((todosSummary) => {
      const { description, ...todoWithoutDescription } = todo;
      const newTodo: TodoSummaryDto = {
        ...todoWithoutDescription,
        id,
        createdAt,
      };
      return todosSummary ? [...todosSummary, newTodo] : [newTodo];
    });
    setTodos((todos) => {
      return produce(todos, (draft) => {
        draft[id] = {
          ...todo,
          id,
          createdAt,
        };
      });
    });
  };

  const handleUpdateTodo = (todo: Todo) => {
    setTodosSummary((todosSummary) => {
      if (!todosSummary) {
        errorMessage({
          message: 'todos가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleUpdateTodo',
        });
        return todosSummary;
      }
      const index = todosSummary.findIndex(({ id }) => id === todo.id);
      if (index === -1) {
        errorMessage({
          message: '찾는 todo가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleUpdateTodo',
        });
        return todosSummary;
      }
      return produce(todosSummary, (draft) => {
        draft.splice(index, 1, todo);
        return draft;
      });
    });
  };

  const handleDeleteTodo = (id: Todo['id']) => {
    setTodosSummary((todosSummary) => {
      if (!todosSummary) {
        errorMessage({
          message: 'todos가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleDeleteTodo',
        });
        return todosSummary;
      }
      return todosSummary.filter((todo) => todo.id !== id);
    });
    setTodos((todos) => {
      return produce(todos, (draft) => {
        delete draft[id];
        return draft;
      });
    });
  };

  return { handleCreateTodo, handleDeleteTodo, handleUpdateTodo };
};
