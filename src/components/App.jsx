import { Routes, Route } from "react-router-dom";
import { lazy } from "react";
import {SharedLayout} from '../components/SharedLayout/SharedLayout';
import css from './App.module.css'

const Home = lazy(() => import('../Pages/Home/Home'));
const Movies = lazy(() => import ('../Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../Pages/Cast/Cast'));
const Reviews = lazy(() => import('../Pages/Reviews/Reviews'));
const NotFound = lazy(() => import ('../Pages/NotFound/NotFound'));

export const App = () => {
  return (
    <div className={css.Container}>
      <Routes>
        <Route path="/" element={<SharedLayout />} >
            <Route index element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />} >
              <Route path="/movies/:movieId/cast" element={<Cast />} />
              <Route path="/movies/:movieId/reviews" element={<Reviews />} />
            </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </div>
  );
};