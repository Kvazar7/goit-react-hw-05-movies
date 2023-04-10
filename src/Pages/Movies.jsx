import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getSerchingFilm } from '../services/services'
import Search from '../components/serchbar';

const Movies = () => {
	const [searchText, setSerchText] = useState('');
	const [filmsArray, setFilmsArray] = useState([]);
	const location = useLocation();

  	const handleSerch = (searchText) => {
		setSerchText(searchText);
		console.log('Looking for an films');
	}

  	useEffect(() => {
		if (!searchText) {
			return
		}
			// setLoadingInProgress(true);
			getSerchingFilm(searchText)
				.then(response => response.json())
				.then(data => {
					console.log(data)
					if (data.results.length === 0) {
						console.log('Sorry, nothing found')
						// Notiflix.Notify.warning('Sorry, nothing found')
					}
					setFilmsArray(data.results);
				})
				.catch(error => {
					// Notiflix.Notify.failure(`${error}`)
					console.log(error)
				})
				.finally(() => {
					// setLoadingInProgress(false)
					console.log('Search complete')
				})
	}, [searchText])


  	return (
	<div>
	<Search handleSerch={handleSerch} />
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

export default Movies;