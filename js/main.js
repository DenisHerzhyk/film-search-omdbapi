const API_URL = 'https://www.omdbapi.com/?apikey=d1d0e59f&s='; // i=tt3896198&
const movieList = document.querySelector("#movies-list");
const search = document.querySelector("#search__input");

const getMovieList = ({Poster: poster, Title: title, Year: year, Type: type}) => {
    const movie = document.createElement("div");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");

    movie.classList.add("movie__item");
    img.classList.add("movie__img");
    h2.classList.add("movie__title");
    p1.classList.add("movie__year");
    p2.classList.add("movie__type");


    img.title = title;
    img.alt = title;
    img.src = poster ? poster : "../images/no-image.jpg";

    a.innerText = title;
    a.title = title;
    h2.append(a);

    p1.innerText = year;
    p2.innerText = type;

    movie.append(img);
    movie.append(h2);
    movie.append(p2);
    movie.append(p1);

    movieList.append(movie);
}

const getData = (url) =>
    fetch(url)
        .then(res => res.json())
        .then(res => res.Search)

const debounce = (func, delay) => {
    let timeoutID;
    return (...args) => {
        clearTimeout(timeoutID);
        timeoutID = setTimeout(() => func.apply(this, args),delay);
    }
}

const searchRequest = (e) => {
    const request = (e.target.value).trim();
    movieList.innerHTML = "";

    if (request) {
        getData(API_URL+request)
            .then((data) => data.length > 0 ? data.forEach(getMovieList) : movieList.innerHTML = "<p>No result found</p>")
            .catch((error) => console.log(error));
    }
}

search.addEventListener('input', debounce(searchRequest, 300));