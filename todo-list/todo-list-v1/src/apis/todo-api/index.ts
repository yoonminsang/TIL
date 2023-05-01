import {
  Todo,
  TodoCreateDto,
  TodoSummaryDto,
  TodoUpdateDto,
} from '@/mocks/types';
import { Api } from '../api';

class TodoApi extends Api {
  private getTodos() {
    return this.get<TodoSummaryDto[]>('/todos');
  }
  private getTodosById(pathParams: { id: number }) {
    return this.get<Todo>('/todos/:id', { pathParams });
  }
  private postTodos(body: TodoCreateDto) {
    return this.post<Todo, TodoCreateDto>('/todos', { body });
  }
  private patchTodos(pathParams: { id: number }, body: TodoUpdateDto) {
    return this.patch<Todo, TodoUpdateDto>('/todos/:id', { pathParams, body });
  }
}

export const todoApi = new TodoApi();
