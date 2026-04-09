import { os } from "@orpc/server";
import { todoCreate } from "@/utils/schemas";
import { db } from ".";
import { todoSchema } from "./schemas/todo";

export const getTodos = os.handler(async () => {
  return await db.query.todoSchema.findMany();
});

export const createTodo = os.input(todoCreate).handler(async ({ input }) => {
  await db.insert(todoSchema).values(input);
});
