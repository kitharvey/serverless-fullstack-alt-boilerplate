import { PUBLIC_BETTER_AUTH_BASE_URL } from '$env/static/public';
import { createAuthClient } from 'better-auth/svelte';

export const authClient = createAuthClient({
	baseURL: PUBLIC_BETTER_AUTH_BASE_URL
});
export const { signIn, signUp, signOut, useSession, sendVerificationEmail, verifyEmail } =
	authClient;
