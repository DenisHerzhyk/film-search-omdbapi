const API_URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=d1d0e59f';

const getMovieList = (movie) => {
    console.log(movie);
}

const getData = (url) => {
    fetch(url)
        .then(res => res.json())
        .then(res => res.Search);
}

getData(API_URL)
.then((data) => console.log(data.forEach(getMovieList)))
.catch((error) => console.log(error));