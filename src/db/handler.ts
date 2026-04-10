import { os } from "@orpc/server";
import { eq } from "drizzle-orm";
import { todoCreate, todoDelete, todoUpdateCheck } from "@/utils/schemas";
import { db } from ".";
import { todoSchema } from "./schemas/todo";

export const getTodos = os.handler(async () => {
  return await db.query.todoSchema.findMany();
});

export const createTodo = os.input(todoCreate).handler(async ({ input }) => {
  await db.insert(todoSchema).values(input);
});

export const updateTodoCheck = os
  .input(todoUpdateCheck)
  .handler(async ({ input }) => {
    const { id, done } = input;

    await db.update(todoSchema).set({ done }).where(eq(todoSchema.id, id));
  });

export const deleteTodoById = os
  .input(todoDelete)
  .handler(async ({ input }) => {
    const { id } = input;

    await db.delete(todoSchema).where(eq(todoSchema.id, id));
  });
