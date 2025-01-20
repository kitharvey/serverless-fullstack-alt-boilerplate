import { drizzle, type DrizzleD1Database } from 'drizzle-orm/d1';

export let db: DrizzleD1Database;

export function setdb(DB: DrizzleD1Database) {
	db ??= drizzle(DB);
}
