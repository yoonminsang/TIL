import { Todo, TodoCreateDto, TodoSummaryDto, TodoUpdateDto } from '@/mocks/types';
import { Api } from '../api';

class TodoApi extends Api {
  public getAllTodos() {
    return this.get<Todo[]>('/todos/all');
  }

  public getSummaryTodos() {
    return this.get<TodoSummaryDto[]>('/todos/summary');
  }

  public getTodosById({ pathParams }: { pathParams: { id: number } }) {
    return this.get<Todo>('/todos/:id', { pathParams });
  }

  public postTodos({ body }: { body: TodoCreateDto }) {
    return this.post<Todo, TodoCreateDto>('/todos', { body });
  }

  public patchTodos({ pathParams, body }: { pathParams: { id: number }; body: TodoUpdateDto }) {
    return this.patch<Todo, TodoUpdateDto>('/todos/:id', { pathParams, body });
  }
}

export const todoApi = new TodoApi();
