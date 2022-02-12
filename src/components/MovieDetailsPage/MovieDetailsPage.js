import { Link, useParams, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as apiMovies from '../service/moviesApi';
import MovieCast from './MovieCast';

const MovieDetailsPage = () => {
  let { movieId } = useParams();
  console.log(movieId);
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
      {/* <Link to={`/movie/${movie.id}/cast`}>Show</Link> */}
      {/* <Outlet /> */}
      {/* <button type="button" onClick={() => setCastShow(!castShow)}>
        Show Cast
      </button> */}
      {/* <Routes>
        <Route path={`/movie/${movie.id}`} element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast movies={movie} />} />
        </Route>
      </Routes> */}
    </>
  );
};

export default MovieDetailsPage;
