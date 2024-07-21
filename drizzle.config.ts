import { defineConfig } from "drizzle-kit";
import { dbUrl } from "./src/lib/db/db_consts";

export default defineConfig({
    schema: "./src/lib/db/schemas/*.ts",
    out: "./drizzle",
    dialect: "postgresql",
    dbCredentials: {
        url: dbUrl,
    },
});
