import { ipc } from "@/ipc/manager";

export function getTodos() {
  return ipc.client.database.getTodos();
}

export function createTodo(title: string) {
  return ipc.client.database.createTodo({ title });  
}
