import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from '../TodoButton/TodoButton.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | number;
  active: boolean;
}
const Button: FC<IButton> = ({ children, active, ...rest }) => {
  return (
    <button className={!active ? styles.btn : styles.active} {...rest}>
      {children}
    </button>
  );
};

export default Button;
