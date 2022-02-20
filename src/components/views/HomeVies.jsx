import { useState, useEffect } from 'react';
import { GalleryItem } from '../GalleryList/GalleryItem';
import { GalleryList } from '../GalleryList/GalleryList';
import { getTrendingMoviesDay } from '../service/ServiceAPI';

const HomeView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesDay().then(response => setMovies(response.results));
  }, []);

  return (
    <>
      <GalleryList>
        {movies.map(item => (
          <GalleryItem key={item.id} items={item} />
        ))}
      </GalleryList>
    </>
  );
};

export default HomeView;
