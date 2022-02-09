const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '8b5f28a2836b483110232092b0d0adcf';

async function fetchWIthErrorHandling(url = '') {
  const response = await fetch(url);
  return response.ok ? await response.json() : console.log('Not Found');
}

export function fetchTrending(period) {
  return fetchWIthErrorHandling(`${BASE_URL}/trending/movie/${period}?api_key=${API_KEY}`);
}

export function searchMovies(query) {
  return fetchWIthErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1`,
  );
}

export function movieDetails(movieId) {
  return fetchWIthErrorHandling(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
}

export function movieReviews(movieId) {
  return fetchWIthErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US`,
  );
}
