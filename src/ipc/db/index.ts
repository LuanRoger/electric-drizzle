import { createTodo, deleteTodoById, getTodos, updateTodoCheck } from "@/db/handler";

export const database = {
  getTodos,
  updateTodoCheck,
  createTodo,
  deleteTodoById,
};
