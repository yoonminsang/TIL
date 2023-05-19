import { useGetAllTodos } from '@/hooks/queries/todo-queries';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { useEffect } from 'react';
import { filteredTodosState, todosSummaryState } from './atom';
import { UseTodos, UseTodosMutation } from './types';
import { Todo, TodoCreateDto, TodoUpdateDto } from '@/mocks/types';
import { errorMessage, getCreateId } from '@/utils';
import { produce } from 'immer';

export const useTodos: UseTodos = () => {
  const { data } = useGetAllTodos();
  const [todoSummary, setTodosSummary] = useRecoilState(todosSummaryState);
  const filteredTodos = useRecoilValue(filteredTodosState);

  useEffect(() => {
    if (data) setTodosSummary(data);
  }, [data, setTodosSummary]);

  return { todoSummary, filteredTodos };
};

export const useTodosMutation: UseTodosMutation = () => {
  const [todosSummary, setTodosSummary] = useRecoilState(todosSummaryState);

  const handleCreateTodo = (todo: TodoCreateDto) => {
    const id = getCreateId(todosSummary);
    const createdAt = new Date().toISOString();
    setTodosSummary((todosSummary) => {
      const newTodo: Todo = {
        ...todo,
        id,
        createdAt,
      };
      return todosSummary ? [...todosSummary, newTodo] : [newTodo];
    });
  };

  const handleUpdateTodo = (id: number, todo: TodoUpdateDto) => {
    setTodosSummary((todosSummary) => {
      if (!todosSummary) {
        errorMessage({
          message: 'todos가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleUpdateTodo',
        });
        return todosSummary;
      }
      const index = todosSummary.findIndex(
        (todoSummary) => todoSummary.id === id
      );
      if (index === -1) {
        errorMessage({
          message: '찾는 todo가 없습니다',
          context: 'domain/todos/use-todos useTodosMutation-handleUpdateTodo',
        });
        return todosSummary;
      }
      return produce(todosSummary, (draft) => {
        draft.splice(index, 1, { ...draft[index], ...todo, id: id });
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
  };

  return { handleCreateTodo, handleDeleteTodo, handleUpdateTodo };
};
