const axios = require('axios').default;

const API_KEY = '8b5f28a2836b483110232092b0d0adcf';
const BASE_URL = 'https://api.themoviedb.org/3';

async function getFetchMovies(url = '') {
  try {
    const fetchCollection = await axios.get(url);
    return fetchCollection.data;
  } catch (error) {
    console.log(error);
  }
}

export const getTrendingMoviesDay = () => {
  return getFetchMovies(`${BASE_URL}/trending/all/day?api_key=${API_KEY}`);
};

export const getSearchMovies = (query = '') => {
  return getFetchMovies(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${query}`);
};

export const getMovieById = movie_id => {
  return getFetchMovies(`${BASE_URL}/movie/${movie_id}?api_key=${API_KEY}`);
};

export const getCast = movie_id => {
  return getFetchMovies(`${BASE_URL}/movie/${movie_id}/credits?api_key=${API_KEY}`);
};
