import { PGlite } from "@electric-sql/pglite";
import { drizzle } from "drizzle-orm/pglite";
import { todoSchema } from "./schemas/todo";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const pgLite = new PGlite(process.env.DATABASE_URL);
export const db = drizzle({ client: pgLite, schema: { todoSchema } });
