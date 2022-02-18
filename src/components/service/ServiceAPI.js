const axios = require('axios').default;

const BASE_KEY = '8b5f28a2836b483110232092b0d0adcf';

async function getFetchMovies(url = '') {
  const response = await axios(url);
  return response.status ? await response : console.log(response);
}

export const getTrendingMoviesDay = () => {
  getFetchMovies(`https://api.themoviedb.org/3/trending/all/day?api_key=${BASE_KEY}`);
};
