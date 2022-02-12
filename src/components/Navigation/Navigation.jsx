import { Link, Outlet } from 'react-router-dom';
import stye from './Navigation.styled.css';

const Navigation = () => {
  return (
    <>
      <nav className="navigation-list">
        <Link to="/" className="link">
          Home
        </Link>
        <Link to="/movies" className="link">
          Movies
        </Link>
      </nav>
    </>
  );
};

export default Navigation;
