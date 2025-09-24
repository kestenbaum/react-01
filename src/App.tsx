import Header from './components/Header';
import Wrapper from './components/Wrapper';
import TodoList from './features/todos/TodoList';

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
