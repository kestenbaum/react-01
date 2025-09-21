import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to="/">
            Logo
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
