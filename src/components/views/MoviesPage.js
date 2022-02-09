import { useEffect, useState } from 'react';
import MovieGallery from '../MoviesGallery/MoviesGallery';
import ItemGallery from '../MoviesGallery/ItemGallery';
import * as apiFilms from '../service/moviesApi';

function MoviesPage() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    apiFilms.fetchTrending('week').then(resp => setMoviesList(resp.results));
  }, []);

  return (
    <MovieGallery>
      {moviesList.map(item =>
        console.log(item),
        // <ItemGallery movieList={item} key={item.id} />
      )}
    </MovieGallery>
  );
}

export default MoviesPage;
