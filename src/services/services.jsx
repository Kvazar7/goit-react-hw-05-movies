const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'c17d6d199e4f044ab21fca194914f42f';

// https://api.themoviedb.org/3/movie/550?api_key=c17d6d199e4f044ab21fca194914f42f
export const getTrendingFilm = () => {
    return fetch(
        `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
    );
};

export const getSerchingFilm = (searchText) => {
    return fetch(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchText}`
    );
};

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const getSerchingFilmById = (id) => {
    return fetch(
        `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
export const getSerchingFilmByCredits = (id) => {
    return fetch(
        `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}`
    );
};

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
export const getSerchingFilmByReviews = (id) => {
    return fetch(
        `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}`
    );
};