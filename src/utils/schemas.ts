import z from "zod";

export const todoCreate = z.object({
  title: z.string().min(3, "Title is required"),
});

export type TodoCreate = z.infer<typeof todoCreate>;
