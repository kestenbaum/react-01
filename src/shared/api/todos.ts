import type { Todo } from '../../entities/todo/model';
import { api } from './instance';

export const fetchTodos = async (
  page: number,
  limit: number,
  sort?: string,
  filter?: string,
): Promise<{ data: Todo[]; total: number }> => {
  const params = new URLSearchParams({
    _page: String(page),
    _limit: String(limit),
    ...(sort ? { _sort: sort } : {}),
    ...(filter ? { _filter: filter } : {}),
  });

  const res = await api.get(`/todos?${params}`);

  if (res.status !== 200) throw new Error(`Error status: ${res.status}`);

  const total = Number(res.headers['x-total-count']) || 0;
  const data = res.data;

  return { data, total };
};
