export interface ComicResponse {
    safe_title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
}

export type ComicIDResponse = string;

export interface ListProps {
    title: string,
    listItems: string[],
}
