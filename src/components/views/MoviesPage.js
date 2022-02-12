import { useEffect, useState } from 'react';

import MovieGallery from '../MoviesGallery/MoviesGallery';
import ItemGallery from '../MoviesGallery/ItemGallery';
import * as apiFilms from '../service/moviesApi';

function MoviesPage({ changeMovies }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!changeMovies.length) return;
    apiFilms.searchMovies(changeMovies).then(resp => setMovie(resp.results));
  }, [changeMovies]);

  return (
    <MovieGallery>
      {movie && movie.map(item => <ItemGallery moviesList={item} key={item.id} />)}
    </MovieGallery>
  );
}

export default MoviesPage;
