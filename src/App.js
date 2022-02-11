import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.styled.jsx';
import { HeaderWrapper } from './App.styled.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage.js';
import { Form } from './components/Form/Form.jsx';
import NotFoundPage from './components/views/NotFoundePage.js';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage.js';
import MovieCast from './components/MovieDetailsPage/MovieCast.js';

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
        <Route path="movies" element={<MoviesPage searchMovie={query} />}>
          {/* <Route path="movies/:movieId" element={<MovieDetailsPage />} /> */}
          <Route path="movies/cast" element={<MovieCast movies={query} />} />
        </Route>
        <Route path="/movies/:movieId" element={<MovieDetailsPage />} />
        {/* <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage searchMovie={query} />} />
         */}
        {/* <Route path="/movie/:movieId/cast" /> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
