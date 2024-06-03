<script lang="ts">
	import { marked } from '$lib/common/marked';
	import type { OpenSourceContribution as OpenSourceContributionType } from '$lib/types';
	import Icon from '@iconify/svelte';
	import nf from '@tuplo/numberfmt';
	import { onMount } from 'svelte';

	export let openSourceContribution: OpenSourceContributionType;

	const { github, contributions } = openSourceContribution;

	let stars = 0;
	let description = github.description;

	onMount(async () => {
		const response = await fetch(`https://api.github.com/repos/${github.owner}/${github.repo}`);
		if (response.status === 200) {
			const data = await response.json();

			stars = data.stargazers_count;
			description = data.description;
		}
	});
</script>

<div class="flex flex-col gap-2">
	<div>
		<div class="flex flex-col">
			<div class="flex items-center justify-between">
				<div class="flex items-baseline gap-2">
					<h2 class="text-lg font-bold job-title">
						<a
							class="link link-hover"
							href={`https://github.com/${github.owner}/${github.repo}`}
							target="_blank">{github.name}</a
						>
					</h2>
					<div class="w-full text-xs text-gray-300">
						by <a
							class="link link-hover"
							href={`https://github.com/${github.owner}`}
							target="_blank">{github.owner}</a
						>
					</div>
				</div>
				{#if stars > 0}
					<div class="flex items-center gap-0.5 text-xs text-info">
						<span class="tooltip" data-tip={stars}>{nf(stars, '0a')}</span>
						<Icon icon="ph:star-fill" />
					</div>
				{/if}
			</div>
		</div>
		<div class="flex flex-col w-full gap-4">
			<p class="text-xs text-gray-400">
				{description}
			</p>
		</div>
	</div>

	<div class="flex gap-2 pl-4">
		<div class="border-r-2 border-secondary"></div>
		<div class="">
			{#each contributions as contribution}
				<div
					class="px-2 py-2 text-xs border-2 border-transparent rounded-md hover:border-secondary hover:cursor-pointer hover:bg-neutral"
				>
					<a
						class="flex flex-col gap-2 sm:flex-row"
						href={`https://github.com/${github.owner}/${github.repo}/pull/${contribution.id}`}
						target="_blank"
					>
						<span class="badge badge-primary badge-sm">#{contribution.id}</span>
						<span class="text-gray-400">
							{@html marked(contribution.title)}
						</span>
					</a>
				</div>
			{/each}
		</div>
	</div>
</div>
