import type { Todo } from '../../types/todos';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, userId, completed, title }: Todo) => {
  return (
    <div className={styles.wrapper}>
      <div>{id}</div>
      <div>{userId}</div>
      <div>{title}</div>
      <div>{completed}</div>
    </div>
  );
};

export default TodoItem;
