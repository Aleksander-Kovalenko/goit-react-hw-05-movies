import { Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import Navigation from '../Navigation/Navigation';
import { Header, Wrapper, Footer } from './AppLayout.styled';

const AppLayout = ({ userQuery }) => {
  return (
    <>
      <Header>
        <Navigation />
        <Form changeMovies={userQuery} />
      </Header>

      <main>
        <Wrapper>
          <Outlet />
        </Wrapper>
      </main>

      <Footer>By Alexander Kovalenko</Footer>
    </>
  );
};

export default AppLayout;
