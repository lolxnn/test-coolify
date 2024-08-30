<script lang="ts">
	let count = $state(0);

	function increment() {
		count += 1;
	}
</script>

<main>
	<h1>Test Svelte 5</h1>
	<button type="button" onclick={increment}>
        Clicked {count} times
    </button>
</main>
