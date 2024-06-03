<script lang="ts">
	import type { Project as ProjectType } from '$lib/types';
	import Project from './Project.svelte';

	export let projects: ProjectType[];
	export let show = 1;
	export let increment = 3;

	let showing = show;
</script>

<div class="flex flex-col items-center gap-4">
	<div class="flex flex-col gap-4">
		{#each projects.slice(0, showing) as project}
			<Project {project} />
		{/each}
	</div>
	{#if showing < projects.length}
		<button class="w-full btn btn-info btn-outline btn-sm" on:click={() => (showing += increment)}>
			Show More Projects
		</button>
	{/if}
</div>
