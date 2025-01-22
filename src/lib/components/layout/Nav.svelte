<script lang="ts">
	import { signOut, useSession } from '$lib/auth/client';

	const session = useSession();

	const handleSignOut = async () => {
		await signOut();
	};
</script>

<nav class="bg-white shadow-md">
	<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
		<div class="flex h-16 justify-between">
			<div class="flex items-center">
				<span class="text-lg font-semibold text-gray-800">My App</span>
			</div>
			<div class="flex items-center space-x-4">
				{#if $session.data?.user}
					<div class="text-right">
						<h3 class="text-sm text-gray-800">{$session.data.user.name}</h3>
					</div>
					<button
						onclick={handleSignOut}
						class="rounded-md bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
					>
						Sign Out
					</button>
				{:else}
					<a href="/sign-in" class="text-gray-800">Sign in</a>
				{/if}
			</div>
		</div>
	</div>
</nav>
