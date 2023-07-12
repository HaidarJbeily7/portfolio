import { fetchComic, fetchComicID } from '$lib/comicFetcher';
import type { ComicIDResponse, ComicResponse } from '$lib/interfaces';

export const prerender = true;

export async function load(): Promise<ComicResponse> {
	const comicID: ComicIDResponse = await fetchComicID();
	const comicResponse: ComicResponse = await fetchComic(comicID);
	return comicResponse;
}
