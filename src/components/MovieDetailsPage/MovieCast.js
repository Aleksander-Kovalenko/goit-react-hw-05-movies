import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FaUserNinja } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const MovieCast = ({ movies }) => {
  let { movieId } = useParams();
  console.log(movies);
  //   const [cast, setCast] = useState([]);
  //   console.log(cast);
  //   useEffect(() => {
  //     apiMovies.movieCastAndCrew(movieId).then(response => setCast(response.cast));
  //   }, [movieId]);

  return (
    <>
      {/* <ul>
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
      </ul> */}
    </>
  );
};

export default MovieCast;
