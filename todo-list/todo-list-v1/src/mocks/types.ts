export type TodoPriority = 'high' | 'medium' | 'low';

export type TodoStatus = 'todo' | 'ing' | 'done';

export type Todo = {
  id: number;
  title: string;
  description?: string;
  priority: TodoPriority;
  status: TodoStatus;
  createdAt: string;
  updatedAt?: string;
};

export type TodoSummaryDto = Omit<Todo, 'description'>;
export type TodoCreateDto = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
export type TodoUpdateDto = Omit<Todo, 'createdAt' | 'updatedAt'>;
