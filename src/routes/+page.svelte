<script lang="ts">
	const { data } = $props();
</script>

<main>
	<h1>Users</h1>
	<table>
		<thead>
			<tr>
				{#each Object.keys(data.feed[0]) as key}
					<th>{key}</th>
				{/each}
			</tr>
		</thead>
		<tbody>
			{#each data.feed as user}
				<tr>
					{#each Object.values(user) as value}
						<td>{value}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
</main>

<style>
	table {
		width: 100%;
		border-collapse: collapse;
	}

	th,
	td {
		border: 1px solid #ddd;
		padding: 8px;
	}
</style>
