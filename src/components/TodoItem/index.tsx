import { useState } from 'react';

import { deleteTodo } from '../../api/todos';
import type { Todo } from '../../types/todos';
import styles from './TodoItem.module.css';

const TodoItem = ({ id, completed, title }: Todo) => {
  const [checked, setChecked] = useState<boolean>(completed);

  return (
    <div className={styles.wrapper}>
      <h2>{title}</h2>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      <button onClick={() => deleteTodo(id)} className={styles.deleteBtn}>
        X
      </button>
    </div>
  );
};

export default TodoItem;
