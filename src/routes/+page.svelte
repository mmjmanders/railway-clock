<script lang="ts">
	import Clock from '$lib';

	let date = $state(new Date());
	const hours = $derived(date.getHours() % 12);
	const minutes = $derived(date.getMinutes());
	const seconds = $derived(date.getSeconds());

	$effect(() => {
		const interval = setInterval(() => {
			date = new Date();
		}, 1000);

		return () => clearInterval(interval);
	});
</script>

<div class="mx-auto h-[100vmin] w-[100vmin] p-4">
	<Clock {hours} {minutes} {seconds} {date} />
</div>
