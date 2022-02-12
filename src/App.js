import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.styled.jsx';
import { HeaderWrapper } from './App.styled.jsx';
import AppBar from './components/AppBar/AppBar.jsx';
import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage.js';

import NotFoundPage from './components/views/NotFoundePage.js';
import MovieDetailsPage from './components/MovieDetailsPage/MovieDetailsPage.js';
import MovieCast from './components/MovieDetailsPage/MovieCast.js';

// _______________________________________________
import AppLayout from './components/AppBar/AppLayout.js';

function App() {
  const [query, setQuery] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout userQuery={setQuery} />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage changeMovies={query} />}>
            <Route path="movies/:movieId" element={<MovieDetailsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* <HeaderWrapper>
        <AppBar />
        <Form userQuery={setQuery} />
      </HeaderWrapper> */}
      {/* <Routes> */}
      {/* <Route path="/" element={<HomePage />} /> */}
      {/* <Route path="movies" element={<MoviesPage searchMovie={query} />}> */}
      {/* <Route path="movies/:movieId" element={<MovieDetailsPage />} /> */}
      {/* <Route path="movies/cast" element={<MovieCast movies={query} />} /> */}
      {/* </Route> */}
      {/* <Route path="/movies/:movieId" element={<MovieDetailsPage />} /> */}
      {/* <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage searchMovie={query} />} />
         */}
      {/* <Route path="/movie/:movieId/cast" /> */}
      {/* <Route path="*" element={<NotFoundPage />} />
      </Routes> */}
    </>
  );
}

export default App;
