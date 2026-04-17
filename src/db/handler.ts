import { os } from "@orpc/server";
import { eq } from "drizzle-orm";
import { todoCreate, todoDelete, todoUpdateCheck } from "@/utils/schemas";
import { db } from ".";
import { todoSchema } from "./schemas/todo";

export const getTodos = os.handler(async () => {
  return await db.query.todoSchema.findMany();
});

export const createTodo = os.input(todoCreate).handler(async ({ input }) => {
  const [createdTodo] = await db.insert(todoSchema).values(input).returning();

  if (!createdTodo) {
    throw new Error("Failed to create todo.");
  }

  return createdTodo;
});

export const updateTodoCheck = os
  .input(todoUpdateCheck)
  .handler(async ({ input }) => {
    const { id, done } = input;

    const [updatedTodo] = await db
      .update(todoSchema)
      .set({ done })
      .where(eq(todoSchema.id, id))
      .returning();

    if (!updatedTodo) {
      throw new Error(`Todo with id ${id} was not found.`);
    }

    return updatedTodo;
  });

export const deleteTodoById = os
  .input(todoDelete)
  .handler(async ({ input }) => {
    const { id } = input;

    const [deletedTodo] = await db
      .delete(todoSchema)
      .where(eq(todoSchema.id, id))
      .returning();

    if (!deletedTodo) {
      throw new Error(`Todo with id ${id} was not found.`);
    }

    return deletedTodo;
  });
