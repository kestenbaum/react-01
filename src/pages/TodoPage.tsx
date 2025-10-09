import TodoList from '../features/todo/TodoList';
import Container from '../widgets/Container';

const TodoPage = () => {
  return (
    <div>
      <Container>
        <TodoList />
      </Container>
    </div>
  );
};

export default TodoPage;
