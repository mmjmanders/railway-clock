<script lang="ts">
	const { seconds }: { seconds: number } = $props();
	const rotation = $derived(seconds * (360 / 60));
</script>

<use href="#second-hand" transform="rotate({rotation})" />
