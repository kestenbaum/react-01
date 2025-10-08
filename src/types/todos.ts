export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodosState {
  list: Todo[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}
