import todoSlice from './slice/todoSlice.ts';
import userSlice from './slice/userSlice.ts';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    todo: todoSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
