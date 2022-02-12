import { Link, Outlet } from 'react-router-dom';
import { Form } from '../Form/Form';
import Navigation from '../Navigation/Navigation';
import { Header } from './AppLayout.styled';
import HomePage from '../views/HomePage';
import { useState } from 'react';

const AppLayout = ({ userQuery }) => {
  const [query, setQuery] = useState('');

  return (
    <>
      <Header>
        <Navigation />
        <Form changeMovies={setQuery} />
      </Header>

      <main>
        <Outlet />
      </main>

      <footer>By Alexander Kovalenko</footer>
    </>
  );
};

export default AppLayout;
