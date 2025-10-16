import { useEffect } from 'react';

import type { AppDispatch } from '../../app/store/index';
import {
  getTodos,
  selectedTodos,
  selectedTodosError,
  selectedTodosPage,
  selectedTodosStatus,
} from '../../app/store/slice/todoSlice';
import Button from '../../widgets/Button';
import Pagination from '../../widgets/Pagination';
import ToolsBar from '../../widgets/ToolsBar';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectedTodos);
  const status = useSelector(selectedTodosStatus);
  const errors = useSelector(selectedTodosError);
  const page = useSelector(selectedTodosPage);

  useEffect(() => {
    dispatch(getTodos({ page, limit: 10 }));
  }, [dispatch, page]);

  if (status == 'loading') return <div>Loading...</div>;
  if (errors) return <div>${'Error: ' + errors}</div>;

  return (
    <div>
      <ToolsBar children={<Button>Filters</Button>} />
      {todos.map((todo) => (
        <div
          key={todo.id}
          style={{
            padding: '8px',
            borderBottom: '1px solid #ddd',
            marginBottom: '4px',
          }}
        >
          {todo.title}
        </div>
      ))}

      <Pagination />
    </div>
  );
};

export default TodoList;
