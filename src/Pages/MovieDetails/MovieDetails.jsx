import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getSerchingFilmById } from '../../services/services';
import Loader from '../../components/Loader/loader';
import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backBtn = location.state?.from ?? '/movies';

  useEffect(() => {
    
    getSerchingFilmById(movieId)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovie(data);
      });
  }, [movieId]);

  return (
    <>
      <Link to={backBtn} className={css.backBtn}>Go back</Link>
      <div className={css.Movie_details_container}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          className={css.Banner}
        />
        <div>
          <h2>
            {movie.title} ({movie.release_date})
          </h2>
            <p>User score: {movie.vote_average * 10}%</p>
          <h3>Overview</h3>
            <p>{movie.overview}</p>
          <h3>Genres</h3>
            <p>{movie.genres?.map(genre => genre.name).join(' ')}</p>
        </div>
      </div>
      <div className={css.Additional_information}>
        <h4>Additional information</h4>
          <ul>
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}/cast`}>Cast</Link>
            </li>
            <li key={movie.imdb_id}>
              <Link to={`/movies/${movie.imdb_id}/reviews`}>Reviews</Link>
            </li>
          </ul>
      </div>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;