import { ipc } from "@/ipc/manager";
import type { Todo } from "@/types/todos";

export async function getTodos(): Promise<Todo[]> {
  return await ipc.client.database.getTodos();
}

export function createTodo(title: string) {
  return ipc.client.database.createTodo({ title });
}
