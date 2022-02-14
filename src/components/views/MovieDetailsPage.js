import { Outlet, Link, useParams, useNavigate, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as apiMovies from '../service/moviesApi';
import MovieCast from '../MovieDetailsPage/MovieCast.js';

const MovieDetailsPage = () => {
  let { movieId } = useParams();

  let navigation = useNavigate();

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    apiMovies.movieDetails(movieId).then(response => setMovie(response));
  }, [movieId]);
  console.log(movieId);

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
      <Link to={`/movies/${movie.id}/cast`}>Show</Link>
      <Outlet />

      {/* <Routes>
        <Route path="/movie" element={<MovieDetailsPage />}>
          <Route path=":movieId/cast" element={<MovieCast movies={movie} />} />
        </Route>
      </Routes> */}
    </>
  );
};

export default MovieDetailsPage;
