import { fetchComic, fetchComicID } from '$lib/comicFetcher';
import type { ComicIDResponse, ComicResponse } from '$lib/interfaces';

export const prerender = true;

export async function load(): Promise<ComicResponse> {
	try {
		const comicID: ComicIDResponse = await fetchComicID();
		const comicResponse: ComicResponse = await fetchComic(comicID);
		return comicResponse;
	} catch (err: unknown) {
		if (err instanceof Error) {
			console.error('Error:', err.message);
		} else {
			console.error('An unexpected error occurred:', err);
		}
	}
}
