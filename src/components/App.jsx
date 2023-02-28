import { HomePage } from 'pages/HomePage/HomePage';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { MoviesPage } from 'pages/MoviesPage/MoviesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavBar } from './NavBar/NavBar';
import { Cast } from '../pages/Cast/Cast';
import { Reviews } from 'pages/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter basename="/goit-react-hw-05-movies">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/moviespage" element={<MoviesPage />} />
        <Route path="/moviespage/:movieID" element={<MovieDetails />}>
          <Route path="/moviespage/:movieID/cast" element={<Cast />} />
          <Route path="/moviespage/:movieID/reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
