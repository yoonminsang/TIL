import {
  Todo,
  TodoCreateDto,
  TodoSummaryDto,
  TodoUpdateDto,
} from '@/mocks/types';
import { Api } from '../api';

class TodoApi extends Api {
  public getTodos() {
    return this.get<TodoSummaryDto[]>('/todos');
  }
  public getTodosById(pathParams: { id: number }) {
    return this.get<Todo>('/todos/:id', { pathParams });
  }
  public postTodos(body: TodoCreateDto) {
    return this.post<Todo, TodoCreateDto>('/todos', { body });
  }
  public patchTodos(pathParams: { id: number }, body: TodoUpdateDto) {
    return this.patch<Todo, TodoUpdateDto>('/todos/:id', { pathParams, body });
  }
}

export const todoApi = new TodoApi();
