import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout/Layout';
import { HomeView } from './components/views/HomeVies';
import { MoviesView } from './components/views/MoviesView';
import { NotFound } from './components/views/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="movies" element={<MoviesView />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
export default App;
