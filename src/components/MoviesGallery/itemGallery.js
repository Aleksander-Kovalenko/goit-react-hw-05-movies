import CardMovie from './CardMovie';
import { Link, useParams } from 'react-router-dom';

const ItemGallery = ({ moviesList }) => {
  function onHandleClickImg(e) {
    console.log(e.target);
  }
  let params = useParams();
  console.log(params);
  return (
    <li onClick={onHandleClickImg}>
      <img
        src={`https://www.themoviedb.org/t/p/w500${moviesList.backdrop_path}`}
        alt={moviesList.original_title}
      />
      <Link to={`/movies/${moviesList.id}`}>{moviesList.original_title}</Link>
    </li>
  );
};

export default ItemGallery;
