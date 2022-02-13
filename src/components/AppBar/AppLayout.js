import { Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import Navigation from '../Navigation/Navigation';
import { Header } from './AppLayout.styled';

const AppLayout = ({ userQuery }) => {
  return (
    <>
      <Header>
        <Navigation />
        <Form changeMovies={userQuery} />
      </Header>

      <main>
        <Outlet />
      </main>

      <footer>By Alexander Kovalenko</footer>
    </>
  );
};

export default AppLayout;
