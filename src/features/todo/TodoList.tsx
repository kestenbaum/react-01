import { useEffect } from 'react';

import type { AppDispatch } from '../../app/store/index';
import {
  getTodos,
  selectedFiltersTodos,
  selectedTodosError,
  selectedTodosPage,
  selectedTodosStatus,
  selectedTodosTotal,
  setFilter,
} from '../../app/store/slice/todoSlice';
import { shouldShowPagination } from '../../shared/lib/shouldShowPagination';
import Input from '../../widgets/Input';
import Pagination from '../../widgets/Pagination';
import ToolsBar from '../../widgets/ToolsBar';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const limit = 10;
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectedFiltersTodos);
  const status = useSelector(selectedTodosStatus);
  const errors = useSelector(selectedTodosError);
  const page = useSelector(selectedTodosPage);
  const total = useSelector(selectedTodosTotal);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(setFilter(event.target.value));
  };

  useEffect(() => {
    dispatch(getTodos({ page, limit }));
  }, [dispatch, page]);

  if (status == 'loading') return <div>Loading...</div>;
  if (errors) return <div>${'Error: ' + errors}</div>;

  return (
    <section>
      <ToolsBar
        children={
          <Input
            type="text"
            placeholder="Search Todo..."
            onChange={handleSearch}
          />
        }
      />
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

      {shouldShowPagination(total, limit, todos.length) && <Pagination />}
    </section>
  );
};

export default TodoList;
