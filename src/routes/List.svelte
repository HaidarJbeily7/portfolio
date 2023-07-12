<script lang="ts">
	export let title: string;
	export let listItems: string[];
</script>

<h2>{title}</h2>
<ul>
	{#each listItems as item}
		<li>{item}</li>
	{/each}
</ul>

<style>
	h2 {
		font-size: 4rem;
		font-weight: bold;
	}
	ul li {
		list-style: none;
		position: relative;
		padding: 3px 0 2px 25px;
		margin: 12px;
		font-size: 1.2rem;
	}

	ul li::before {
		content: '*';
		position: absolute;
		top: 6px;
		left: 0;
	}
</style>
