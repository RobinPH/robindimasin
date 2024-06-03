<script lang="ts">
	import Animated from '$lib/components/Animated.svelte';
	import type { Project as ProjectType } from '$lib/types';
	import cx from 'classnames';
	import Project from './Project.svelte';

	export let projects: ProjectType[];
	export let show = 1;
	export let increment = 3;

	let showing = show;
</script>

<div class="flex flex-col items-center gap-4">
	<div class="flex flex-col gap-4">
		{#each projects.slice(0, showing) as project, i (i)}
			<Animated animations={[{ type: 'fade-in' }, { type: 'fly-right' }]} delay={125}>
				<Project {project} />
			</Animated>
		{/each}
	</div>
	<Animated animations={[{ type: 'fade-in' }, { type: 'fly-right' }]} delay={125}>
		<button
			class={cx('w-full btn btn-info btn-outline btn-sm', showing >= projects.length && 'hidden')}
			on:click={() => {
				showing += increment;
			}}
		>
			Show More Projects
		</button>
	</Animated>
</div>
