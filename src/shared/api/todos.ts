import type { Todo } from '../../entities/todo/model';
import { api } from './instance';

export async function fetchTodos() {
  const { data } = await api.get<Todo[]>('/todos');
  return data;
}

export async function deleteTodo(id: number) {
  const { data } = await api.delete(`/todos/${id}`);
  return data;
}
