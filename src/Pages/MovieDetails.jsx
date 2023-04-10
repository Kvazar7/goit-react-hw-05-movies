import { useParams, Outlet, useLocation, Link } from 'react-router-dom';
import { useEffect, useState, Suspense } from 'react';
import { getSerchingFilmById } from '../services/services';
import Loader from '../components/Loader/loader';

// import css from './MovieDetails.module.css'

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const location = useLocation();
  const backBtn = location.state?.from ?? '/movies';

  useEffect(() => {
    
    getSerchingFilmById(id)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setMovie(data);
      });
  }, [id]);

  return (
    <div
      // className={css.container}
    >
      <Link to={backBtn}
        // className={css.back}
      >
        Go back
      </Link>
      
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
          // className={css.poster}
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
      
      <div
        // className={css.information}
      >
        <h4> Additional information</h4>
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
    </div>
  );
};

export default MovieDetails;