<script lang="ts">
	import '@fontsource/dm-serif-display';
	import '@fontsource/roboto-mono';

	import dmSerifDisplayWoff2 from '@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2?url';
	import robotoMonoWoff2 from '@fontsource/roboto-mono/files/roboto-mono-latin-400-normal.woff2?url';

	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link
		rel="preload"
		as="font"
		type="font/woff2"
		href={dmSerifDisplayWoff2}
		crossorigin="anonymous"
	/>
	<link rel="preload" as="font" type="font/woff2" href={robotoMonoWoff2} crossorigin="anonymous" />
</svelte:head>

{@render children()}
