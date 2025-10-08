import { fetchTodos } from '../../api/todos';
import type { Todo, TodosState } from '../../types/todos';
import type { RootState } from '../index';
import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk<Todo[]>(
  'todos/fetchTodos',
  async () => {
    const res = await fetchTodos();
    return res;
  },
);

const initialState: TodosState = {
  list: [],
  status: 'idle',
  error: null,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<Todo>) {
      state.list.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(getTodos.rejected, (state) => {
        state.status = 'failed';
      });
  },
});

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todo.list;
export const selectTodosStatus = (state: RootState) => state.todo.status;
export const selectTodosError = (state: RootState) => state.todo.error;

export default todoSlice.reducer;
