import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import { db } from '../server/db';
import { BETTER_AUTH_SECRET, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '$env/static/private';
import { account, session, user, verification } from '$lib/server/db/schema';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'sqlite',
		schema: {
			user,
			session,
			account,
			verification
		}
	}),
	socialProviders: {
		github: {
			clientId: GITHUB_CLIENT_ID as string,
			clientSecret: GITHUB_CLIENT_SECRET as string
		}
	},
	secret: BETTER_AUTH_SECRET
});
