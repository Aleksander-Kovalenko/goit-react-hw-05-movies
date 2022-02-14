import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FaUserNinja } from 'react-icons/fa';
import { IconContext } from 'react-icons';

import * as apiMovies from '../service/moviesApi.js';

const Cast = () => {
  let { movieId } = useParams();

  const [cast, setCast] = useState([]);

  useEffect(() => {
    apiMovies.movieCastAndCrew(movieId).then(response => setCast(response.cast));
  }, [movieId]);

  return (
    <>
      <ul>
        {cast.map(item => (
          <li key={item.id}>
            {item.profile_path ? (
              <img src={`https://www.themoviedb.org/t/p/w500${item.profile_path}`} width="130" />
            ) : (
              <IconContext.Provider value={{ size: '130px' }}>
                <FaUserNinja />
              </IconContext.Provider>
            )}

            <p>{item.character}</p>
            <p>{item.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cast;
