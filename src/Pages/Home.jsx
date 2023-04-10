import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getTrendingFilm } from '../services/services'

const Home = () => {
  const [filmsArray, setFilmsArray] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingFilm()
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setFilmsArray(data.results)
        })
      }, [])

  return (
    <div>
      <h1>Trending today</h1>
        <ul>
        {filmsArray.map(({ id, title }) => (
            <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
              <li>
                {title}
              </li>
            </Link>
          ))}
        </ul>
    </div>
  );
};

export default Home;