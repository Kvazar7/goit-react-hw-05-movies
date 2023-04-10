import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSerchingFilmByCredits } from '../services/services'
// import css from './Cast.module.css';

const Cast = () => {
    const [cast, setCast] = useState([]);
    const { id } = useParams();

    useEffect(() => {
      getSerchingFilmByCredits(id)
        .then(data => {
          console.log(data);
          setCast(data.cast);
        });
    }, [id]);
 
    return (
      <div
        // className={css.cast}
      >
        <ul
          // className={css.castList}
        >
          {cast?.map(artist => (
            <li key={artist.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${artist.profile_path}`}
                alt={artist.name}
              />
              <p>{artist.name}</p>
              <p>Character: {artist.character}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};


export default Cast;
