import type { FC, InputHTMLAttributes } from 'react';

import styles from '../Input/Input.module.css';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<IInput> = ({ ...rest }) => {
  return <input className={styles.inp} {...rest} />;
};

export default Input;
