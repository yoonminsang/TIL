import { TodoCreateDto, TodoSummaryDto, TodoUpdateDto } from '@/mocks/types';

export type UseTodos = () => {
  filteredTodos: { title: string; data?: TodoSummaryDto[] }[];
};
export type UseTodosMutation = () => {
  handleCreateTodo: (todo: TodoCreateDto) => void;
  handleUpdateTodo: (id: number, todo: TodoUpdateDto) => void;
  handleDeleteTodo: (id: number) => void;
};
