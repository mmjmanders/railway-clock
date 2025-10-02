<script lang="ts">
	const { hours, minutes, seconds }: { hours: number; minutes: number; seconds: number } = $props();
	const hourMarkers = Array(12)
		.fill(0)
		.map((_, i) => i);
	const minuteMarkers = Array(60)
		.fill(0)
		.map((_, i) => i)
		.filter((i) => i % 5 !== 0);
</script>

<svg viewBox="-500 -500 1000 1000">
	<defs>
		<path id="hour-marker" class="fill-current" d="M -15,-500 l 30,0 l 0,100 l -30,0 z" />
		<path id="minute-marker" class="fill-current" d="M -7.5,-500 l 15,0 l 0,40 l -15,0 z" />
	</defs>
	<g id="hour-markers" class="text-neutral-950 dark:text-neutral-50">
		{#each hourMarkers as marker}
			<use href="#hour-marker" transform="rotate({marker * (360 / 12)})" />
		{/each}
	</g>
	<g id="minute-markers" class="text-neutral-950 dark:text-neutral-50">
		{#each minuteMarkers as marker}
			<use href="#minute-marker" transform="rotate({marker * (360 / 60)})" />
		{/each}
	</g>
</svg>
