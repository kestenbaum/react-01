import TodoList from '../features/todo/TodoList';
import Container from '../widgets/Container';

const TodoPage = () => {
  return (
    <section>
      <Container>
        <TodoList />
      </Container>
    </section>
  );
};

export default TodoPage;
