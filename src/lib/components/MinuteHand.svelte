<script lang="ts">
	const { minutes }: { minutes: number } = $props();
	const rotation = $derived(minutes * (360 / 60));
</script>

<use href="#minute-hand" transform="rotate({rotation})" />
