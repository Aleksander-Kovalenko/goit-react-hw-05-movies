import { useState, useEffect } from 'react';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import ItemGallery from '../MoviesGallery/ItemGallery';
import PageHeading from '../PageHeading/PageHeading';
import * as apiFilms from '../service/moviesApi';

function HomeView() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    apiFilms.fetchTrending('day').then(resp => setTrendingMovies(resp.results));
  }, []);

  return (
    <>
      <PageHeading text="Добро пожаловать" />
      <MoviesGallery>
        {trendingMovies.map(item => (
          <ItemGallery moviesList={item} key={item.id} />
        ))}
      </MoviesGallery>
    </>
  );
}

export default HomeView;
