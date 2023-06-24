import { useRecoilState, useRecoilValue } from 'recoil';
import { useEffect } from 'react';
import { produce } from 'immer';
import { useGetAllTodos } from '@/hooks/queries/todo-queries';
import { filteredTodosState, todosState } from './atom';
import { UseTodos, UseTodosMutation } from './types';
import { Todo, TodoCreateDto, TodoUpdateDto } from '@/mocks/types';
import { errorMessage, getCreateId } from '@/utils';

export const useTodos: UseTodos = () => {
  const { data } = useGetAllTodos();
  const [todo, setTodos] = useRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  useEffect(() => {
    if (data) setTodos(data);
  }, [data, setTodos]);

  return { todoSummary: todo, filteredTodos };
};

export const useTodosMutation: UseTodosMutation = () => {
  const [todos, setTodos] = useRecoilState(todosState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  const handleCreateTodo = (todo: TodoCreateDto) => {
    const id = getCreateId(todos);
    const createdAt = new Date().toISOString();
    setTodos((todos) => {
      const newTodo: Todo = {
        ...todo,
        id,
        createdAt,
      };
      return todos ? [...todos, newTodo] : [newTodo];
    });
  };

  const handleUpdateTodo = (id: number, todo: TodoUpdateDto) => {
    setTodos((todos) => {
      if (!todos) {
        errorMessage({
          message: 'todos가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleUpdateTodo',
        });
        return todos;
      }
      const index = todos.findIndex((todoSummary) => todoSummary.id === id);
      if (index === -1) {
        errorMessage({
          message: '찾는 todo가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleUpdateTodo',
        });
        return todos;
      }
      return produce(todos, (draft) => {
        draft.splice(index, 1, { ...draft[index], ...todo, id });
        return draft;
      });
    });
  };

  const handleDeleteTodo = (id: Todo['id']) => {
    setTodos((todos) => {
      if (!todos) {
        errorMessage({
          message: 'todos가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleDeleteTodo',
        });
        return todos;
      }
      return todos.filter((todo) => todo.id !== id);
    });
  };

  return { todoSummary: todos, filteredTodos, handleCreateTodo, handleDeleteTodo, handleUpdateTodo };
};
