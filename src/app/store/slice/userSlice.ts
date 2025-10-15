import type { IUser } from '../../../entities/user/model';
import { fetchUsers } from '../../../shared/api/users';
import type { RootState } from '../index';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUsers = createAsyncThunk('users/fetchUsers', async () => {
  const res = await fetchUsers();
  return res;
});

interface UserState {
  list: IUser[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UserState = {
  list: [],
  status: 'idle',
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export const selectedUsers = (state: RootState) => state.user.list;
export const selectedUsersStatus = (state: RootState) => state.user.status;
export const selectedUsersError = (state: RootState) => state.user.error;

export default userSlice.reducer;
