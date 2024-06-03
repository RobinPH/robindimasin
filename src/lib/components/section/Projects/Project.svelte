<script lang="ts">
	import { marked } from '$lib/common/marked';
	import type { Project } from '$lib/types';
	import { dateFormatter } from '$lib/utils';
	import Icon from '@iconify/svelte';
	import nf from '@tuplo/numberfmt';
	import { onMount } from 'svelte';

	export let project: Project;

	const start = dateFormatter.format(project.duration.start);
	const end = project.duration.end ? dateFormatter.format(project.duration.end) : null;

	let stars = 0;

	onMount(async () => {
		if (!project.github) {
			return;
		}

		const response = await fetch(
			`https://api.github.com/repos/${project.github.owner}/${project.github.repo}`
		);
		if (response.status === 200) {
			const data = await response.json();

			stars = data.stargazers_count;
		}
	});
</script>

<div
	class="flex flex-col w-full gap-2 p-4 border-2 border-transparent rounded-md hover:border-secondary hover:cursor-pointer hover:bg-neutral"
>
	<div class="flex gap-4">
		<div class="flex flex-col w-full gap-4">
			<div class="flex flex-col">
				{#if project.featured}
					<div class="flex items-center gap-1 text-xs text-info">
						<span><i>Featured</i></span>
					</div>
				{/if}
				<div class="flex items-center justify-between gap-2">
					<h2 class="w-full text-lg font-bold job-title">
						{project.title}
					</h2>

					{#if stars > 0}
						<div class="flex items-center gap-0.5 text-xs text-info">
							<span class="tooltip" data-tip={stars}>{nf(stars, '0a')}</span>
							<Icon icon="ph:star-fill" />
						</div>
					{/if}
				</div>
				{#if project.duration}
					<div class="w-full text-xs text-gray-300">
						<time>{start}</time>
						{#if end}
							{#if end !== start}
								<span> — </span>
								<time>{dateFormatter.format(project.duration.end)}</time>
							{/if}
						{:else}
							<span> — </span>
							<span>Present</span>
						{/if}
					</div>
				{/if}
			</div>
			<div class="flex flex-col gap-4 text-xs text-gray-400">
				{@html marked(project.description)}
			</div>
		</div>
		{#if project.thumbnail}
			<div class="hidden sm:block w-52">
				<img class="w-auto h-auto" src={project.thumbnail} alt="Behind the Words" />
			</div>
		{/if}
	</div>
	<div class="flex flex-col gap-4">
		{#if project.links.length > 0}
			<ul class="flex flex-wrap gap-2">
				{#each project.links as link}
					<li>
						<a class="btn btn-ghost btn-xs" href={link.url} target="_blank"
							>{link.label} <span><Icon icon="mingcute:external-link-line" /></span></a
						>
					</li>
				{/each}
			</ul>
		{/if}
		{#if project.technologies.length > 0}
			<ul class="flex flex-wrap gap-2">
				{#each project.technologies as technology}
					<li class="badge badge-primary badge-sm">{technology}</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
