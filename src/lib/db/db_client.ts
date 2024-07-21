import { drizzle } from 'drizzle-orm/postgres-js';
import { schema } from "./schemas";
import { dbUrl } from './db_consts';
import postgres from 'postgres';

const queryClient = postgres(dbUrl);
export const db = drizzle(queryClient, { schema: schema })