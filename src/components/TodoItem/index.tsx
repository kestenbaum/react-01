import type { Todo } from '../../types/todos';
import styles from './TodoItem.module.css';
import { useState } from 'react';

const TodoItem = ({ completed, title }: Todo) => {

  const [checked, setChecked] = useState<boolean>(completed);

  return (
    <div className={styles.wrapper}>
    <h2>{title}</h2>
     <input type='checkbox' checked={checked} onChange={() => setChecked(!checked)} />
     <button className={styles.deleteBtn}>X</button>
    </div>
  );
};

export default TodoItem;
