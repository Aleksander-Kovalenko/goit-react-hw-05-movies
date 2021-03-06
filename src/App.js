import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading/Loading';
// import { Cast } from './components/Card/Cast';
// import { Layout } from './components/Layout/Layout';
// import { HomeView } from './components/views/HomeVies';
// import { MovieDetailsView } from './components/views/MovieDetailsView';
// import { MoviesView } from './components/views/MoviesView';
// import { NotFound } from './components/views/NotFound';

const Layout = lazy(() => import('./components/Layout/Layout'));
const HomeView = lazy(() => import('./components/views/HomeVies'));
const MoviesView = lazy(() => import('./components/views/MoviesView'));
const MovieDetailsView = lazy(() => import('./components/views/MovieDetailsView'));
const Cast = lazy(() => import('./components/Card/Cast.jsx'));
const NotFound = React.lazy(() => import('./components/views/NotFound.jsx'));
const Reviews = React.lazy(() => import('./components/Card/Reviews.jsx'));

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeView />} />
            <Route path="movies" element={<MoviesView />} />
            <Route path="movies/:id" element={<MovieDetailsView />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}
export default App;
