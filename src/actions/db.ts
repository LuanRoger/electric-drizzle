import { ipc } from "@/ipc/manager";

export async function getTodos() {
  return await ipc.client.database.getTodos();
}
