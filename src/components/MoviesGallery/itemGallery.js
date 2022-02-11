import { Link } from 'react-router-dom';

const ItemGallery = ({ moviesList }) => {
  return (
    <li>
      <img
        src={`https://www.themoviedb.org/t/p/w500${moviesList.backdrop_path}`}
        alt={moviesList.original_title}
      />
      <Link to={`movies/${moviesList.id}`}>{moviesList.original_title}</Link>
    </li>
  );
};

export default ItemGallery;
