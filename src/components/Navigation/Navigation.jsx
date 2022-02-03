import { NavLink, Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
  );
};
