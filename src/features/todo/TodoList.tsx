import { useEffect } from 'react';

import type { AppDispatch } from '../../store';
import {
  getTodos,
  selectedTodos,
  selectedTodosError,
  selectedTodosPage,
  selectedTodosStatus,
  selectedTodosTotal,
} from '../../store/slice/todoSlice';
import { setPage } from '../../store/slice/todoSlice';
import { useDispatch, useSelector } from 'react-redux';

const TodoList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos = useSelector(selectedTodos);
  const status = useSelector(selectedTodosStatus);
  const errors = useSelector(selectedTodosError);
  const page = useSelector(selectedTodosPage);
  const total = useSelector(selectedTodosTotal);
  const pages = total > 0 ? Math.ceil(total / 10) : 1;

  useEffect(() => {
    dispatch(getTodos({ page, limit: 10 }));
  }, [dispatch, page]);

  if (status == 'loading') return <div>Loading...</div>;
  if (errors) return <div>${'Error: ' + errors}</div>;

  const getVisiblePages = (
    currentPage: number,
    totalPages: number,
    windowSize = 5,
  ) => {
    const pages: (number | string)[] = [];
    const half = Math.floor(windowSize / 2);

    let start = Math.max(2, currentPage - half);
    let end = Math.min(totalPages - 1, currentPage + half);

    if (currentPage <= half + 1) {
      start = 2;
      end = Math.min(totalPages - 1, windowSize);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(2, totalPages - windowSize + 1);
      end = totalPages - 1;
    }

    pages.push(1);

    if (start > 2) pages.push('...');

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push('...');

    if (totalPages > 1) pages.push(totalPages);

    return pages;
  };

  return (
    <div>
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

      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginTop: '16px',
          flexWrap: 'wrap',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '16px',
            flexWrap: 'wrap',
          }}
        >
          {getVisiblePages(page, pages).map((num, index) =>
            typeof num === 'number' ? (
              <button
                key={index}
                disabled={page === num}
                onClick={() => dispatch(setPage(num))}
                style={{
                  padding: '6px 12px',
                  cursor: page === num ? 'not-allowed' : 'pointer',
                  backgroundColor: page === num ? '#007acc' : '#f0f0f0',
                  color: page === num ? '#fff' : '#000',
                  border: '1px solid #ccc',
                  borderRadius: '4px',
                }}
              >
                {num}
              </button>
            ) : (
              <span key={index} style={{ padding: '6px 12px' }}>
                {num}
              </span>
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
