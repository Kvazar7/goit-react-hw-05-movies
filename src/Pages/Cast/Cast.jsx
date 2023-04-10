import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSerchingFilmByCredits } from '../../services/services'
import css from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { movieId } = useParams();

    useEffect(() => {
      getSerchingFilmByCredits(movieId)
        .then(response => {
        return response.json();
        })
        .then(data => {
          console.log(data);
          setCast(data.cast);
        });
    }, [movieId]);
 
    return (
      <>
        <ul className={css.castList}>
          {cast?.map(actor => (
            <li key={actor.id} className={css.castList_actor}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`}
                alt={actor.name}
                className={css.castList_actor_photo}
              />
              <h4>{actor.name}</h4>
              <p>Character: {actor.character}</p>
            </li>
          ))}
        </ul>
      </>
    );
};

export default Cast;