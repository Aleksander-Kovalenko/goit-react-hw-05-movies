import { useState, useEffect } from 'react';
import { getTrendingMoviesDay } from '../service/ServiceAPI';

export const HomeView = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMoviesDay().then(setMovies);
  }, []);

  return (
    <>
      <h1>Home View</h1>
    </>
  );
};
