import { useEffect, useState } from 'react';
import MovieGallery from '../MoviesGallery/MoviesGallery';
import ItemGallery from '../MoviesGallery/ItemGallery';
import * as apiFilms from '../service/moviesApi';

function MoviesPage({ searchMovie }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!searchMovie.length) return;
    apiFilms.searchMovies(searchMovie).then(resp => setMovie(resp.results));
  }, [searchMovie]);

  return (
    <MovieGallery>
      {movie && movie.map(item => <ItemGallery moviesList={item} key={item.id} />)}
    </MovieGallery>
  );
}

export default MoviesPage;
