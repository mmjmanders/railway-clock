<script lang="ts">
	let { hours, minutes, seconds }: { hours: number; minutes: number; seconds: number } = $props();
</script>

<div>
	{hours}:{minutes}:{seconds}
</div>
