import { Outlet, Link, useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as apiMovies from '../service/moviesApi';
import MovieCast from '../Cast/Cast.js';

const MovieDetailsPage = () => {
  let { movieId } = useParams();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    apiMovies.movieDetails(movieId).then(response => setMovie(response));
  }, [movieId]);

  return (
    <>
      {movie && (
        <img
          src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`}
          alt={movie.original_title}
        />
      )}
      <p>{movie.original_title}</p>
      <p>{movie.overview}</p>

      <hr />
      <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
      <Outlet />
    </>
  );
};

export default MovieDetailsPage;
