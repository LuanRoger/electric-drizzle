import { createClient } from "@libsql/client";
import { drizzle } from "drizzle-orm/libsql";
import { todoSchema } from "./schemas/todo";

const client = createClient({ url: "file:local.db" });
export const db = drizzle({ client, schema: { todoSchema } });
