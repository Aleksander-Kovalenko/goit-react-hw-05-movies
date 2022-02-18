import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { getSearchMovies } from '../service/ServiceAPI';

export const MoviesView = () => {
  const location = useLocation();
  const searchElement = location.state;

  useEffect(() => {
    getSearchMovies(searchElement).then(resp => console.log(resp));
  }, [searchElement]);
  return (
    <>
      <h1>Movie</h1>
    </>
  );
};
