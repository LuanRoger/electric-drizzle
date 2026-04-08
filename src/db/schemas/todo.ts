import { boolean, pgTable, serial, text } from "drizzle-orm/pg-core";

export const todoSchema = pgTable("todos", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  done: boolean("done").notNull().default(false),
});
