import z from "zod";

export const todoCreate = z.object({
  title: z.string().min(3, "Title is required"),
});

export const todoDelete = z.object({
  id: z.number().min(1, "ID is required"),
});

export const todoUpdateCheck = z.object({
  id: z.number().min(1, "ID is required"),
  done: z.boolean(),
});

export type TodoCreate = z.infer<typeof todoCreate>;
export type TodoDelete = z.infer<typeof todoDelete>;
