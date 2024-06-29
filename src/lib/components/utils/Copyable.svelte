<script lang="ts">
	import { copyToClipboard } from '$lib/utils';

	export let text: string;

	let showCopiedTooltip = false;

	let showCopiedTooltipTimeout: ReturnType<typeof setTimeout>;
</script>

<div
	class="w-fit tooltip-right"
	on:click={() => {
		setTimeout(showCopiedTooltipTimeout);
		showCopiedTooltip = true;
		copyToClipboard(text);

		showCopiedTooltipTimeout = setTimeout(() => {
			showCopiedTooltip = false;
		}, 1000);
	}}
	class:tooltip={showCopiedTooltip}
	data-tip="Copied!"
>
	<slot />
</div>
