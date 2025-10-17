import type { Todo } from '../../../entities/todo/model';
import { fetchTodos } from '../../../shared/api/todos';
import type { RootState } from '../index';
import {
  type PayloadAction,
  createAsyncThunk,
  createSlice,
} from '@reduxjs/toolkit';

export const getTodos = createAsyncThunk(
  'fetch/getTodos',
  async (
    {
      page,
      limit,
      sort,
      filter,
    }: { page: number; limit: number; sort?: string; filter?: string },
    { rejectWithValue },
  ) => {
    try {
      const res = await fetchTodos(page, limit, sort, filter);
      return res;
    } catch (error) {
      return rejectWithValue((error as Error).message);
    }
  },
);

interface IState {
  data: Todo[];
  filterData: Todo[];
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  page: number;
  limit: number;
  sort?: string;
  filter?: string;
}

const initialState: IState = {
  data: [],
  filterData: [],
  status: 'idle',
  total: 0,
  error: null,
  page: 1,
  limit: 10,
  sort: '',
  filter: '',
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setLimit(state, payload: PayloadAction<number>) {
      state.limit = payload.payload;
    },
    setSort(state, action: PayloadAction<string | undefined>) {
      state.sort = action.payload;
    },
    setFilter(state, action: PayloadAction<string>) {
      state.filter = action.payload;
      state.filterData = state.data.filter((todo) =>
        todo.title.toLowerCase().includes(action.payload.toLowerCase()),
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(
        getTodos.fulfilled,
        (state, action: PayloadAction<{ data: Todo[]; total: number }>) => {
          state.data = action.payload.data;
          state.filterData = action.payload.data;
          state.status = 'succeeded';
          state.total = action.payload.total;
        },
      )
      .addCase(getTodos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const selectedTodos = (state: RootState) => state.todo.data;
export const selectedTodosStatus = (state: RootState) => state.todo.status;
export const selectedTodosError = (state: RootState) => state.todo.error;
export const selectedTodosPage = (state: RootState) => state.todo.page;
export const selectedTodosTotal = (state: RootState) => state.todo.total;
export const selectedFiltersTodos = (state: RootState) => state.todo.filterData;

export const { setFilter, setLimit, setPage, setSort } = todoSlice.actions;
export default todoSlice.reducer;
