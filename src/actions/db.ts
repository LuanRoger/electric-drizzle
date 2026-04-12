import { ipc } from "@/ipc/manager";
import type { Todo } from "@/types/todos";

export async function getTodos(): Promise<Todo[]> {
  return await ipc.client.database.getTodos();
}

export function createTodo(title: string): Promise<Todo> {
  return ipc.client.database.createTodo({ title });
}

export function updateTodoCheck(id: number, done: boolean): Promise<Todo> {
  return ipc.client.database.updateTodoCheck({ id, done });
}

export function deleteTodoById(id: number): Promise<Todo> {
  return ipc.client.database.deleteTodoById({ id });
}
