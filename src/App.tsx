import TodoPage from './pages/TodoPage';
import Header from './widgets/Header';
import Wrapper from './widgets/Wrapper';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <TodoPage />
      </Wrapper>
    </>
  );
}

export default App;
