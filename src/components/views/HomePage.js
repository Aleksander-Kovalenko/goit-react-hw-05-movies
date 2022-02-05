import { useState, useEffect } from 'react';
import MoviesGallery from '../MoviesGallery/MoviesGallery';
import ItemMovie from '../MoviesGallery/itemGallery';
import PageHeading from '../PageHeading/PageHeading';
import * as apiFilms from '../service/moviesApi';

function HomeView({ moviesList }) {
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    apiFilms.fetchTrending().then(resp => setTrendingMovies(resp.results));
  }, []);

  return (
    <>
      <PageHeading text="Добро пожаловать" />
      <MoviesGallery>
        {trendingMovies.map(item => (
          <ItemMovie moviesList={item} key={item.id} />
        ))}
      </MoviesGallery>
    </>
  );
}

export default HomeView;
