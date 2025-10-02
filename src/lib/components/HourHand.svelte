<script lang="ts">
	const { hours, minutes }: { hours: number; minutes: number } = $props();
	const rotation = $derived(hours * (360 / 12) + minutes * (360 / (12 * 60)));
</script>

<use href="#hour-hand" transform="rotate({rotation})" />
