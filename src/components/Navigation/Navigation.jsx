import { NavLink, Outlet } from 'react-router-dom';
import stye from './Navigation.styled.css';

const Navigation = () => {
  return (
    <>
      <nav className="navigation-list">
        <NavLink to="/" className="link">
          Home
        </NavLink>
        <NavLink to="/movies" className="link">
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
