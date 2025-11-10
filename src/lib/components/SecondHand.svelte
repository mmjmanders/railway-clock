<script lang="ts">
	const { seconds, milliseconds }: { seconds: number; milliseconds: number } = $props();
	const rotation = $derived((seconds * 1000 + milliseconds) * (360 / (60 * 1000)));
</script>

<use href="#second-hand" transform="rotate({rotation})" />
