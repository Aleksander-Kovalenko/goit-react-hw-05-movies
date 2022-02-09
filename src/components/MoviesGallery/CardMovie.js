import { Link, NavLink } from 'react-router-dom';

const CardMovie = ({ url, title, id }) => {
  return (
    <>
      <img src={`https://www.themoviedb.org/t/p/w500${url}`} alt={title} />
      <Link to={`/movies/${id}`}>{title}</Link>
    </>
  );
};

export default CardMovie;
