import type { Todo } from '../types/todos';
import { api } from './instance';

export async function fetchTodos() {
  const { data } = await api.get<Todo[]>('/todos');
  return data;
}
