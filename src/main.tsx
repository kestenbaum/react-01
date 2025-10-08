import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import App from './App.tsx';
import './index.css';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store/index.ts';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
    ,
  </BrowserRouter>,
  </Provider>
  
);
