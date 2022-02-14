import { TopImg, TopWrap, TopDes } from './Views.styled';
import { NavLink } from 'react-router-dom';

export const TopMovies = ({ movie }) => {
  return (
    <>
      {movie && (
        <TopWrap>
          <TopImg
            src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <TopDes>
            <NavLink to={`${movie.id}`}>{movie.original_title}</NavLink>
          </TopDes>
        </TopWrap>
      )}
    </>
  );
};
