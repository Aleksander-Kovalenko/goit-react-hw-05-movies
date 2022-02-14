import { Description, GalleryItem, Images, TopImg, TopWrap } from './Views.styled';
import { NavLink } from 'react-router-dom';

export const TopMovies = ({ movie }) => {
  console.log(movie);
  return (
    <>
      {movie && (
        <TopWrap>
          <TopImg
            src={`https://www.themoviedb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.original_title}
          />
          <div>
            <NavLink to={`${movie.id}`}>{movie.original_title}</NavLink>
          </div>
        </TopWrap>
      )}
    </>
  );
};
