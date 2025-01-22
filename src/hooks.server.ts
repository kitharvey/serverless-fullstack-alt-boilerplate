import type { Handle } from '@sveltejs/kit';
import { svelteKitHandler } from 'better-auth/svelte-kit';
import { auth } from './lib/auth';
import { db, setdb } from './lib/server/db';

export const handle: Handle = async ({ event, resolve }) => {
	if (!db && event.platform?.env.DB) setdb(event.platform?.env.DB);
	return svelteKitHandler({ event, resolve, auth });
};
