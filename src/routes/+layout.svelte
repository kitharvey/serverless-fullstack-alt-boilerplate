<script lang="ts">
	import Nav from '$lib/components/layout/Nav.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<Nav />
{@render children()}
