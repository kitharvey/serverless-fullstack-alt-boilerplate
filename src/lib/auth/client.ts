import { createAuthClient } from 'better-auth/svelte';

export const client = createAuthClient({
	baseURL: process.env.PUBLIC_BETTER_AUTH_BASE_URL
});
export const { signIn, signUp, useSession } = client;
