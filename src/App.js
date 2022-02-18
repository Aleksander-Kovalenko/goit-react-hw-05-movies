import { Route, Routes } from 'react-router';
import { Cast } from './components/Card/Cast';
import { Layout } from './components/Layout/Layout';
import { HomeView } from './components/views/HomeVies';
import { MovieDetailsView } from './components/views/MovieDetailsView';
import { MoviesView } from './components/views/MoviesView';
import { NotFound } from './components/views/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="movies/:id" element={<MovieDetailsView />}>
            <Route path="cast" element={<Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
