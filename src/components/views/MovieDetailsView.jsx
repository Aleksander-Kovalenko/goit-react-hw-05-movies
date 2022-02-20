import { useEffect, useState } from 'react';
import { Outlet, useParams } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { getMovieById } from '../service/ServiceAPI';

const MovieDetailsView = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  useEffect(() => {
    getMovieById(id).then(setMovie);
  }, [id]);

  return (
    <>
      {movie && (
        <article style={{}}>
          <div style={{ marginRight: '20px' }}>
            <img
              src={`${BASE_IMG_URL}${movie.poster_path}`}
              alt={movie.original_title}
              style={{ width: '300px' }}
            />
          </div>
          <div>
            <p>{movie.original_title}</p>
            <p>{movie.release_date}</p>
            <p>{movie.vote_average}</p>
          </div>

          <div>
            <NavLink to="cast">Cast</NavLink>
          </div>
        </article>
      )}
      <Outlet />
    </>
  );
};

export default MovieDetailsView;
