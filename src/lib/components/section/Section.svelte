<script lang="ts">
	export let id: string;
	export let index: number;
	export let label: string;
</script>

<section {id} class="flex flex-col w-full gap-2">
	<h1 class="flex items-center w-full gap-2 font-bold">
		<span class="w-fit text-info">{index.toString().padStart(2, '0')}.</span>
		<span class="text-gray-300 min-w-fit text-nowrap">{label}</span>
		<div class="w-full h-0 divider divider-primary"></div>
	</h1>
	<div class="pl-4">
		<slot />
	</div>
</section>
