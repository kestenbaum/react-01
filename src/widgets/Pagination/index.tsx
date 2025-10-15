import type { AppDispatch } from '../../app/store';
import {
  selectedTodosPage,
  selectedTodosTotal,
} from '../../app/store/slice/todoSlice';
import { setPage } from '../../app/store/slice/todoSlice';
import Button from '../../entities/todo/ui/Button';
import { getVisiblePages } from '../../shared/lib/getVisiblePages';
import styles from '../Pagination/Pagination.module.css';
import { useDispatch, useSelector } from 'react-redux';

const Pagination = () => {
  const dispatch = useDispatch<AppDispatch>();
  const page = useSelector(selectedTodosPage);
  const total = useSelector(selectedTodosTotal);
  const pages = total > 0 ? Math.ceil(total / 10) : 1;

  return (
    <div className={styles.wrapper}>
      {getVisiblePages(page, pages).map(
        (num, index) =>
          typeof num === 'number' && (
            <Button
              key={index}
              disabled={page === num}
              onClick={() => dispatch(setPage(num))}
              active={num === page}
            >
              {num}
            </Button>
          ),
      )}
    </div>
  );
};

export default Pagination;
