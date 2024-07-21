import { pgTable, text } from "drizzle-orm/pg-core";

export const clients = pgTable("clients", {
    id: text("id").primaryKey(),
    name: text("name").notNull(),
    email: text("email").notNull(),
})