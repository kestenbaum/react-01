import type { IUser } from '../../entities/user/model';
import { api } from './instance';

export async function fetchUsers() {
  const { data } = await api.get<IUser[]>('/users');
  return data;
}
