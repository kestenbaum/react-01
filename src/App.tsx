import TodoList from './features/todo/TodoList';
import Header from './widgets/Header';
import Wrapper from './widgets/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <TodoList />
      </Wrapper>
    </>
  );
}

export default App;
