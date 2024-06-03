<script lang="ts">
	import { marked } from '$lib/common/marked';
	import type { Experience as ExperienceType } from '$lib/types';
	import { dateFormatter, listFormatter } from '$lib/utils';
	import Icon from '@iconify/svelte';

	export let experience: ExperienceType;
</script>

<div
	class="flex gap-4 p-4 border-2 border-transparent rounded-md hover:border-secondary hover:cursor-pointer hover:bg-neutral"
>
	<div class="hidden mt-2 text-xs font-normal text-right w-52 md:block">
		<div class="w-full">
			<time>{dateFormatter.format(experience.duration.start)}</time>
			<span> — </span>
			{#if experience.duration.end}
				<time>{dateFormatter.format(experience.duration.end)}</time>
			{:else}
				<span>Present</span>
			{/if}
		</div>
		<!-- <div>2 months</div> -->
	</div>
	<div class="flex flex-col w-full gap-2">
		<div class="flex flex-col">
			<div class="flex items-baseline gap-2">
				<h2 class="text-lg font-bold job-title">
					{experience.title}
				</h2>
				{#if experience.roles.length > 0}
					<div class="items-baseline hidden gap-1 sm:flex">
						<span> | </span>
						<div class="flex text-xs text-gray-300">
							<h3>
								{listFormatter.format(experience.roles)}
							</h3>
						</div>
					</div>
				{/if}
			</div>
			<div class="flex text-xs text-gray-300 sm:hidden">
				<h3>
					{listFormatter.format(experience.roles)}
				</h3>
			</div>
			{#if experience.company}
				<a class="text-xs link" href={experience.company.url} target="_blank">
					{experience.company.name}
				</a>
			{/if}
			<div class="block w-full text-xs md:hidden">
				<time>{dateFormatter.format(experience.duration.start)}</time>
				<span> — </span>
				{#if experience.duration.end}
					<time>{dateFormatter.format(experience.duration.end)}</time>
				{:else}
					<span>Present</span>
				{/if}
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<span class="text-xs text-gray-400">
				{@html marked(experience.description)}
			</span>
			{#if experience.links.length > 0}
				<ul class="flex flex-wrap gap-2">
					{#each experience.links as link}
						<li>
							<a class="btn btn-ghost btn-xs" href={link.url} target="_blank"
								>{link.label} <span><Icon icon="mingcute:external-link-line" /></span></a
							>
						</li>
					{/each}
				</ul>
			{/if}
			{#if experience.technologies.length > 0}
				<ul class="flex flex-wrap gap-2">
					{#each experience.technologies as technology}
						<li class="badge badge-primary badge-sm">{technology}</li>
					{/each}
				</ul>
			{/if}
		</div>
	</div>
</div>
