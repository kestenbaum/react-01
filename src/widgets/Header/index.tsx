import Container from '../Container';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.wrapper}>
          <Link className={styles.logo} to="/">
            Logo
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
