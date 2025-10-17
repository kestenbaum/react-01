import { type ButtonHTMLAttributes, type FC } from 'react';

import styles from './Button.module.css';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string | number;
}

const Button: FC<IButton> = ({ children, ...rest }) => {
  return (
    <button className={styles.btn} {...rest}>
      {children}
    </button>
  );
};

export default Button;
