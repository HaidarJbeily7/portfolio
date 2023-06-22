

document.addEventListener('DOMContentLoaded', () => startFetching());





function startFetching(){
    let email = "h.jbeily@innopolis.university";
    let url = new URL("https://fwd.innopolis.university/api/hw2");
    let params = {email: email};
    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => getComic(data))
        .catch(err => console.error('Error:', err));
}

function getComic(id) {
    let url = new URL("https://fwd.innopolis.university/api/comic");
    let params = {id: id};
    url.search = new URLSearchParams(params).toString();

    fetch(url)
        .then(response => response.json())
        .then(data => displayComic(data))
        .catch(err => console.error('Error:', err));
}


function displayComic(comic) {
    let comicContainer = document.getElementById('comicContainer');

    comicContainer.innerHTML = '';


    let title = document.createElement('h1');
    title.textContent = comic.safe_title;

    let img = document.createElement('img');
    img.src = comic.img;
    img.alt = comic.alt;

    let date = new Date(comic.year, comic.month - 1, comic.day);
    let dateParagraph = document.createElement('p');
    dateParagraph.textContent = `Published on: ${date.toLocaleDateString()}`;


    let getAnotherComicButton = document.createElement('button')
    getAnotherComicButton.id = 'get-another-comic';
    getAnotherComicButton.textContent = 'Get Another Comic!';
    getAnotherComicButton.addEventListener('click', () => startFetching());

    comicContainer.appendChild(title);
    comicContainer.appendChild(img);
    comicContainer.appendChild(dateParagraph);
    comicContainer.appendChild(getAnotherComicButton);
}


