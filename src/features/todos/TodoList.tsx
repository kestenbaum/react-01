import { useEffect } from 'react';

import TodoItem from '../../components/TodoItem';
import type { AppDispatch, RootState } from '../../store';
import {
  getTodos,
  selectTodos,
  selectTodosError,
  selectTodosStatus,
} from '../../store/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

export const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector((state: RootState) => selectTodos(state));
  const status = useSelector((state: RootState) => selectTodosStatus(state));
  const error = useSelector((state: RootState) => selectTodosError(state));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getTodos());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <p>Loading...</p>;
  if (status === 'failed') return <p>Error: {error}</p>;

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
          userId={todo.userId}
        />
      ))}
    </div>
  );
};
