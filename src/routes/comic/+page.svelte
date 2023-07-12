<script lang="ts">
	import { formatDistanceToNow } from 'date-fns';
	import type { ComicResponse, ComicIDResponse } from '$lib/interfaces';
	import { fetchComicID, fetchComic } from '$lib/comicFetcher';

	export let data: ComicResponse;
	let comic: ComicResponse = { ...data };

	const handleGetAnotherComic = async () => {
		try {
			const comicID: ComicIDResponse = await fetchComicID();
			comic = await fetchComic(comicID);
		} catch (err: unknown) {
			if (err instanceof Error) {
				console.error('Error:', err.message);
			} else {
				console.error('An unexpected error occurred:', err);
			}
		}
	};
</script>

<div id="comicContainer">
	{#if comic}
		<h1>{comic.safe_title}</h1>
		<img src={comic.img} alt={comic.alt} />
		<p>
			Published on:
			{new Date(
				Number(comic.year),
				Number(comic.month) - 1,
				Number(comic.day)
			).toLocaleDateString()}
			({formatDistanceToNow(
				new Date(Number(comic.year), Number(comic.month) - 1, Number(comic.day))
			)} ago)
		</p>
		<button id="get-another-comic" on:click={handleGetAnotherComic}> Get Another Comic! </button>
	{/if}
</div>

<style>
	#comicContainer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 16px;
		padding: 1rem;
	}

	#comicContainer img {
		aspect-ratio: 1 / 1;
		max-width: 500px;
		box-shadow: 1px 1px 1px 1px #777;
	}

	#comicContainer button {
		background-color: var(--bg-color-primary);
		border: none;
		color: white;
		border-radius: 16px;
		padding: 15px 32px;
		text-align: center;
		text-decoration: none;
		display: inline-block;
		font-size: 16px;
	}
</style>
