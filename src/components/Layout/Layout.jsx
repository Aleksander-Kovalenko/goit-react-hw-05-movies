import { Outlet, Link } from 'react-router-dom';
import { Form } from '../Form/Form';

export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="movies">Movies</Link>
          <Form />
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Alexander Kovalenko</footer>
    </>
  );
};
