import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { GalleryItem } from '../GalleryList/GalleryItem';
import { GalleryList } from '../GalleryList/GalleryList';
import { getSearchMovies } from '../service/ServiceAPI';

const MoviesView = () => {
  const [changeMovies, useChangeMovies] = useState([]);

  const location = useLocation();
  const searchElement = location.state;

  useEffect(() => {
    getSearchMovies(searchElement).then(response => useChangeMovies(response.results));
  }, [searchElement]);

  return (
    <>
      <GalleryList>
        {changeMovies.map(item => (
          <GalleryItem key={item.id} items={item} />
        ))}
      </GalleryList>
    </>
  );
};

export default MoviesView;
