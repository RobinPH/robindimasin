<script lang="ts">
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	type Animation = {
		type: 'fly-left' | 'fly-right' | 'fly-up' | 'fly-down' | 'fade-in';
		duration?: number;
	};

	export let animations: Animation[];
	export let duration: number | null = null;
	export let delay = 0;

	let viewed = false;
	let mounted = false;

	onMount(() => {
		setTimeout(() => {
			mounted = true;
		}, 0);
	});
</script>

<div
	use:inview
	class:invisible={!mounted}
	class="animated"
	style={viewed
		? `
    animation: ${animations.map(({ type, duration: _duration = 400 }) => `${type} ${duration ?? _duration}ms`).join(', ')};
    animation-delay: ${delay}ms;
    animation-timing-function: ease-out;
		animation-fill-mode: backwards;
  `
		: null}
	on:inview_enter={() => {
		viewed = true;
	}}
>
	<slot />
</div>

<style>
	@media (max-width: 640px) {
		.animated {
			animation: none !important;
		}
	}
</style>
