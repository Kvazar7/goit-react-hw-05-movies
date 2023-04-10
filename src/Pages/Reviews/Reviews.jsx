import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSerchingFilmByReviews } from '../../services/services'
// import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getSerchingFilmByReviews(movieId)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        setReviews(data.results);
      });
  }, [movieId]);
  
  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))
        ) : (
          <p>Sorry, we don't have any reviews </p>
        )}
      </ul>
    </div>
  );
};

export default Reviews;
