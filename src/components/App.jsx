import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import Loader from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <NavBar />
      <Suspense fallback={Loader}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviespage" element={<MoviesPage />} />
          <Route path="/moviespage/:movieID" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
