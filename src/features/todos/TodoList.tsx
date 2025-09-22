import { useEffect, useState } from 'react';

import { fetchTodos } from '../../api/todos';
import TodoItem from '../../components/TodoItem';
import type { Todo } from '../../types/todos';


const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    loadTodos();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          completed={todo.completed}
          title={todo.title}
          userId={todo.userId}
        />
      ))}
    </div>
  );
};

export default TodoList;
