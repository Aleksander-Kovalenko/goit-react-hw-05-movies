import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.styled.jsx';

import HomePage from './components/views/HomePage';
import MoviesPage from './components/views/MoviesPage.js';

import NotFoundPage from './components/views/NotFoundePage.js';
import MovieDetailsPage from './components/views/MovieDetailsPage.js';

// _______________________________________________
import AppLayout from './components/AppBar/AppLayout.js';
import Cast from './components/Cast/Cast.js';

function App() {
  const [query, setQuery] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<AppLayout userQuery={setQuery} />}>
          <Route index element={<HomePage />} />
          <Route path="movies" element={<MoviesPage changeMovies={query} />}>
            {/* <Route index element/>  При переходе на вкладку movies без ранее созданого запроса создать уведомление которое будет подсвечивать форму поиска фильма */}
          </Route>
          <Route path="movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
