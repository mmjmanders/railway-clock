<script lang="ts">
	import Clock from '$lib';

	let date = $state(new Date());
	let hours = $derived(date.getHours() % 12);
	let minutes = $derived(date.getMinutes());
	let seconds = $derived(date.getSeconds());
	$effect(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div>
	<Clock {hours} {minutes} {seconds} />
</div>
