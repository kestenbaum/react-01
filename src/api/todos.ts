import { api } from "./instance";
import type { Todo } from "../types/todos";

export async function fetchTodos() {
    const { data } = await api.get<Todo[]>('/todos');
    return data
}