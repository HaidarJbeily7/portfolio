// src/comic.ts
import {ComicResponse, ComicIDResponse} from './interfaces';
import {formatDistanceToNow} from 'date-fns';

document.addEventListener('DOMContentLoaded', () => startFetching());

function startFetching(): void {
    let email: string = "h.jbeily@innopolis.university";
    let url = new URL("https://fwd.innopolis.university/api/hw2");
    let params = {email: email};
    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then((data: ComicIDResponse) => getComic(data))
        .catch(err => console.error('Error:', err));
}

function getComic(id: ComicIDResponse): void {
    let url = new URL("https://fwd.innopolis.university/api/comic");
    let params = {id: Number(id).toString()};
    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then((data: ComicResponse) => displayComic(data))
        .catch(err => console.error('Error:', err));
}

function displayComic(comic: ComicResponse): void {
    let comicContainer: HTMLElement = document.getElementById('comicContainer')!;
    if (!comicContainer) {
        throw new Error("Comic container not found");
    }
    comicContainer.innerHTML = '';

    let title = document.createElement('h1');
    title.textContent = comic.safe_title;

    let img = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;

    let date = new Date(Number(comic.year), Number(comic.month), Number(comic.day));
    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = `Published on: ${date.toLocaleDateString()} (${formatDistanceToNow(date)} ago)`;

    let getAnotherComicButton = document.createElement('button')
    getAnotherComicButton.id = 'get-another-comic';
    getAnotherComicButton.textContent = 'Get Another Comic!';
    getAnotherComicButton.addEventListener('click', () => startFetching());

    comicContainer.appendChild(title);
    comicContainer.appendChild(img);
    comicContainer.appendChild(dateParagraph);
    comicContainer.appendChild(getAnotherComicButton);
}
