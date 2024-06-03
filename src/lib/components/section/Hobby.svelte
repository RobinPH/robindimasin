<script lang="ts">
	import { marked } from '$lib/common/marked';
	import type { Hobby as HobbyType } from '$lib/types';
	import Icon from '@iconify/svelte';

	export let hobby: HobbyType;
</script>

<div
	class="flex flex-col gap-2 p-4 border-2 border-transparent rounded-md hover:border-secondary hover:cursor-pointer hover:bg-neutral"
>
	<h2 class="text-lg font-bold job-title">
		{hobby.title}
	</h2>
	<div class="flex flex-col gap-4">
		<span class="text-xs text-gray-400">
			{@html marked(hobby.description)}
		</span>
		{#if hobby.links.length > 0}
			<ul class="flex flex-wrap gap-2">
				{#each hobby.links as link}
					<li>
						<a class="btn btn-ghost btn-xs" href={link.url} target="_blank"
							>{link.label} <span><Icon icon="mingcute:external-link-line" /></span></a
						>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
