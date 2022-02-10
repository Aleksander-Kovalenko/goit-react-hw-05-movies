import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as apiMovies from '../service/moviesApi';

const CardMovie = () => {
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

      {/* <Link to={`/movies/${id}`}>{title}</Link> */}
    </>
  );
};

export default CardMovie;
