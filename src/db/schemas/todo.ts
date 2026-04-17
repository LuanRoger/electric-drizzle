import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const todoSchema = sqliteTable("todos", {
  id: integer("id", { mode: "number" }).primaryKey({ autoIncrement: true }),
  title: text("title").notNull(),
  done: integer("done", { mode: "boolean" }).notNull().default(false),
});
