import { Todo, TodoCreateDto, TodoSummaryDto } from '@/mocks/types';

export type UseTodos = () => {
  filteredTodos: { title: string; data?: TodoSummaryDto[] }[];
};
export type UseTodosMutation = () => {
  handleCreateTodo: (todo: TodoCreateDto) => void;
  handleUpdateTodo: (todo: Todo) => void;
  handleDeleteTodo: (id: Todo['id']) => void;
};
