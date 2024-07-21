import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const clients = sqliteTable("clients", {
    id: text("id").primaryKey(),
    name: text("name", { length: 100 }).notNull(),
    email: text("email", { length: 60 }).notNull(),
})