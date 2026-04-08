import { os } from "@orpc/server";
import { db } from ".";

export const getTodos = os.handler(async () => {
  return await db.query.todoSchema.findMany();
});
