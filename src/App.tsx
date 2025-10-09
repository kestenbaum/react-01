import TodoPage from './pages/TodoPage';
import UsersPage from './pages/UsersPage';
import Header from './widgets/Header';
import Wrapper from './widgets/Wrapper';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/users" element={<UsersPage />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
