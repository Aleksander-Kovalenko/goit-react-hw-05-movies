import { useEffect, useState } from 'react';

import MovieGallery from '../MoviesGallery/MoviesGallery';
import ItemGallery from '../MoviesGallery/ItemGallery';
import * as apiMovies from '../service/moviesApi';
import { TopMovies } from '../MoviesGallery/TopMovie';

function MoviesPage({ changeMovies }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    if (!changeMovies.length) return;
    apiMovies.searchMovies(changeMovies).then(resp => setMovie(resp.results));
  }, [changeMovies]);

  return (
    <>
      <TopMovies movie={movie[0]} />
      {movie && (
        <MovieGallery>
          {movie.map(item => (
            <ItemGallery moviesList={item} key={item.id} />
          ))}
        </MovieGallery>
      )}
    </>
  );
}

export default MoviesPage;
