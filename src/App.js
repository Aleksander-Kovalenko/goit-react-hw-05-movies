import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './App.styled.jsx';
import { HeaderWrapper } from './App.styled.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage.js';
import { Form } from './components/Form/Form.jsx';
import NotFoundPage from './components/views/NotFoundePage.js';
import CardMovie from './components/MoviesGallery/CardMovie.js';
// import { Form } from '../';

function App() {
  const [query, setQuery] = useState([]);

  return (
    <BrowserRouter>
      <HeaderWrapper>
        <AppBar />
        <Form userQuery={setQuery} />
      </HeaderWrapper>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<CardMovie />} />
        <Route element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
