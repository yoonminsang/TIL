import { rest } from 'msw';
import { Todo, TodoCreateDto, TodoSummaryDto, TodoUpdateDto } from './types';

const todos: Todo[] = [
  {
    id: 1,
    title: '코딩공부하기',
    description: 'nextjs 공부하기',
    priority: 'high',
    status: 'ing',
    createdAt: new Date('2023-05-01').toISOString(),
  },
  {
    id: 2,
    title: '운동하기',
    description: '등운동',
    priority: 'medium',
    status: 'done',
    createdAt: new Date('2023-05-01').toISOString(),
  },
  {
    id: 3,
    title: '영양제먹기',
    description: '비타민',
    priority: 'low',
    status: 'todo',
    createdAt: new Date('2023-05-01').toISOString(),
  },
];
let todoId = Math.max(...todos.map(({ id }) => id)) + 1;

export const handlers = [
  rest.get('/todos', (_req, res, ctx) => {
    return res(ctx.json<TodoSummaryDto[]>(getTodoSummary()));
  }),

  rest.get('/todos/:id', (req, res, ctx) => {
    const { id } = req.params;
    const todo = getTodoById(Number(id));

    if (!todo) {
      return res(
        ctx.status(404),
        ctx.json({ message: `${id}에 해당하는 todo가 없습니다` })
      );
    }

    return res(ctx.json<Todo>(todo));
  }),

  rest.post('/todos', async (req, res, ctx) => {
    const { title, description, priority, status } =
      await req.json<TodoCreateDto>();

    if (!title || !priority || !status) {
      return res(
        ctx.status(400),
        ctx.json({ message: `title, priority, status 중 하나가 없습니다` })
      );
    }

    const newTodo: Todo = {
      id: todoId,
      title,
      description,
      priority,
      status,
      createdAt: new Date().toISOString(),
    };
    todos.push(newTodo);
    todoId += 1;
    return res(ctx.status(201), ctx.json<Todo>(newTodo));
  }),

  rest.patch(`/todos/:id`, async (req, res, ctx) => {
    const body = await req.json<TodoUpdateDto>();
    const { id } = req.params;
    const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

    if (todoIndex === -1) {
      return res(
        ctx.status(404),
        ctx.json({ message: `${id}에 해당하는 todo가 없습니다` })
      );
    }

    const updatedTodo = {
      ...todos[todoIndex],
      ...body,
      updatedAt: new Date().toISOString(),
    };

    todos[todoIndex] = updatedTodo;

    return res(ctx.json<Todo>(updatedTodo));
  }),

  rest.delete('/todos/:id', (req, res, ctx) => {
    const { id } = req.params;
    const todoIndex = todos.findIndex((todo) => todo.id === Number(id));

    if (todoIndex === -1) {
      return res(
        ctx.status(404),
        ctx.json({ message: `${id}에 해당하는 todo가 없습니다` })
      );
    }

    todos.splice(todoIndex, 1);

    return res(ctx.json({ message: `${id}에 해당하는 todo가 삭제되었습니다` }));
  }),
];

const getTodoSummary = () =>
  todos.map((todo) => {
    const { description, ...summary } = todo;
    return summary;
  });

const getTodoById = (id: number) => {
  return todos.find((todo) => todo.id === id);
};
