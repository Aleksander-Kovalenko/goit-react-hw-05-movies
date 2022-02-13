import { NavLink } from 'react-router-dom';

const ItemGallery = ({ moviesList }) => {
  return (
    <li>
      <img
        src={`https://www.themoviedb.org/t/p/w500${moviesList.backdrop_path}`}
        alt={moviesList.original_title}
      />
      <NavLink to={`${moviesList.id}`}>{moviesList.original_title}</NavLink>
    </li>
  );
};

export default ItemGallery;
