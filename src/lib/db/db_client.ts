import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from "better-sqlite3";
import * as schemas from "./schemas/clients_schema";

const database = new Database("database.db")
export const db = drizzle(database, { schema: schemas })