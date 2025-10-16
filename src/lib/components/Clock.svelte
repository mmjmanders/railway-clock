<script lang="ts">
	import { default as HourHand } from './HourHand.svelte';
	import { default as MinuteHand } from './MinuteHand.svelte';
	import { default as SecondHand } from './SecondHand.svelte';
	import { PUBLIC_BUILD_SHA as buildSha } from '$env/static/public';

	const {
		hours,
		minutes,
		seconds,
		date
	}: { hours: number; minutes: number; seconds: number; date: Date } = $props();
	const day = $derived(date.getDate());
	const dayOfWeek = $derived(date.toLocaleDateString(undefined, { weekday: 'short' }));
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
		<filter id="shadow" x="-200%" y="-200%" width="400%" height="400%">
			<feDropShadow dx="3" dy="3" stdDeviation="10" flood-color="var(--color-neutral-950)" />
		</filter>
		<path id="hour-marker" class="fill-current" d="M -15,-500 l 30,0 l 0,100 l -30,0 z" />
		<path id="minute-marker" class="fill-current" d="M -7.5,-500 l 15,0 l 0,40 l -15,0 z" />
		<path
			id="hour-hand"
			class="fill-current"
			filter="url(#shadow)"
			d="M -15,-350 l 30,0 L 20,130 l -40,0 z"
		/>
		<path
			id="minute-hand"
			class="fill-current"
			filter="url(#shadow)"
			d="M -15,-475 l 30,0 L 20,130 l -40,0 z"
		/>
		<g id="second-hand" class="text-red-600 dark:text-red-800" filter="url(#shadow)">
			<path class="fill-current" d="M -5,-385 l 10,0 L 5,180 l -10,0 z" />
			<circle class="fill-current" cx="0" cy="-320" r="25" />
			<circle class="fill-current" cx="0" cy="0" r="10" />
		</g>
	</defs>
	<g id="date">
		<rect
			x="-100"
			y="240"
			rx="15"
			ry="15"
			width="200"
			height="70"
			fill="transparent"
			stroke-width="2"
			class="stroke-neutral-950 dark:stroke-neutral-50"
		/>
		<text
			x="0"
			y="280"
			dominant-baseline="middle"
			text-anchor="middle"
			class="font-[DM_Serif_Display] text-5xl"
		>
			<tspan class="fill-neutral-950 dark:fill-neutral-50">{dayOfWeek}</tspan>
			<tspan class="fill-red-600 dark:fill-red-800">{day}</tspan>
		</text>
	</g>
	<g id="hash">
		<text
			x="0"
			y="350"
			dominant-baseline="middle"
			text-anchor="middle"
			class="fill-neutral-950 font-[Roboto_Mono_Variable] text-base dark:fill-neutral-50"
			>{buildSha}</text
		>
	</g>
	<g id="hour-markers" class="text-neutral-950 dark:text-neutral-50">
		{#each hourMarkers as marker (marker)}
			<use href="#hour-marker" transform="rotate({marker * (360 / 12)})" />
		{/each}
	</g>
	<g id="minute-markers" class="text-neutral-950 dark:text-neutral-50">
		{#each minuteMarkers as marker (marker)}
			<use href="#minute-marker" transform="rotate({marker * (360 / 60)})" />
		{/each}
	</g>
	<g id="hands" class="text-neutral-950 dark:text-neutral-50">
		<HourHand {hours} {minutes} />
		<MinuteHand {minutes} />
		<SecondHand {seconds} />
	</g>
</svg>
