export const TodoPriority = {
  high: 'high',
  medium: 'medium',
  low: 'low',
} as const;
export type TodoPriority = (typeof TodoPriority)[keyof typeof TodoPriority];

export const TodoStatus = {
  todo: 'todo',
  ing: 'ing',
  done: 'done',
} as const;
export type TodoStatus = (typeof TodoStatus)[keyof typeof TodoStatus];

export interface Todo {
  id: number;
  title: string;
  description?: string;
  priority: TodoPriority;
  status: TodoStatus;
  createdAt: string;
  updatedAt?: string;
}

export type TodoSummaryDto = Omit<Todo, 'description'>;
export type TodoCreateDto = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;
export type TodoUpdateDto = Partial<Omit<Todo, 'id'>>;
