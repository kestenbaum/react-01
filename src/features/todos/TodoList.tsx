import { useState, useEffect } from 'react';
import TodoItem from '../../components/TodoItem';
import { fetchTodos } from '../../api/todos';
import type { Todo } from '../../types/todos';
import styles from './TodoList.module.css';

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
    <div className={styles.todoList}>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id}
          id={todo.id} 
          completed={todo.completed} 
          title={todo.title} 
          userId={todo.userId}
        />
      ))}
    </div>
  )
}

export default TodoList;
