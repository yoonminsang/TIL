import { TodoCreateDto, TodoPriority, TodoStatus } from '@/mocks/types';
import { useTodosHeader } from './use-todos';
import { renderHook, act, waitFor } from '@testing-library/react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosState } from './atom';

describe('useTodosHeader', () => {
  it('1', async () => {
    const { result } = renderHook(() => useTodosHeader(), {
      wrapper: RecoilRoot,
    });
    const newTodo: TodoCreateDto = {
      status: TodoStatus.todo,
      title: 'title',
      priority: TodoPriority.high,
    };

    act(() => {
      result.current.handleCreateTodo(newTodo);
    });

    // await waitFor(() => {
    // const { result } = renderHook(() => useRecoilValue(todosState), {
    //   wrapper: RecoilRoot,
    // });
    // console.log(result.current);
    // expect(result.current).toHaveLength(1);
    // });

    // await waitFor(() => {
    //   console.log('waits');
    // });
    // act(() => {
    //   const { result } = renderHook(() => useRecoilValue(todosState), {
    //     wrapper: RecoilRoot,
    //   });
    //   console.log(result.current);
    // });
    // expect(1).toBe(1);
  });
});
// await waitFor(() => {
//   const snapshot = snapshot_UNSTABLE();
//   const todoListLoadable = snapshot.getLoadable(todosState);
//   console.log(todoListLoadable);
// });

// let todos;
// act(() => {
//   const Component = () => {
//     todos = useRecoilValue(todosState);
//     return <div>23</div>;
//   };
//   render(<Component />);
// });

// expect(todos).toHaveLength(1);

// describe('useTodosHeader', () => {
//   it('should create a new todo', () => {
//     const setTodos = jest.fn();
//     const { getByTestId } = render(
//       <RecoilRoot>
//         <TestComponent setTodos={setTodos} />
//       </RecoilRoot>
//     );

//     fireEvent.click(getByTestId('create-todo-btn'));

//     expect(setTodos).toHaveBeenCalledWith(expect.any(Function));
//   });
// });

// const TestComponent = ({ setTodos }) => {
//   const { handleCreateTodo } = useTodosHeader();

//   const handleTestCreateTodo = () => {
//     handleCreateTodo({ description: 'Test todo' });
//   };

//   return (
//     <div>
//       <button onClick={handleTestCreateTodo} data-testid="create-todo-btn">
//         Create Todo
//       </button>
//     </div>
//   );
// };
