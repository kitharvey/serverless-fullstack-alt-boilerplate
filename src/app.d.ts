// See https://svelte.dev/docs/kit/types#app.d.ts

import type { DrizzleD1Database } from 'drizzle-orm/d1';

// for information about these interfaces
declare global {
	namespace App {
		interface Platform {
			env: {
				DB: DrizzleD1Database;
			};
		}
		interface Locals {
			database: DrizzleD1Database;
		}
	}
}

export {};
