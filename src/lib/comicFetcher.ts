import type { ComicResponse, ComicIDResponse } from '$lib/interfaces';

export const fetchComicID = async (): Promise<ComicIDResponse> => {
	const email = 'h.jbeily@innopolis.university';
	const url = new URL('https://fwd.innopolis.university/api/hw2');
	url.search = new URLSearchParams({ email }).toString();
	const response = await fetch(url);
	const data: ComicIDResponse = await response.json();
	return data;
};

export const fetchComic = async (id: ComicIDResponse): Promise<ComicResponse> => {
	const url = new URL('https://fwd.innopolis.university/api/comic');
	url.search = new URLSearchParams({ id: Number(id).toString() }).toString();
	const response = await fetch(url);
	const data: ComicResponse = await response.json();
	return data;
};
