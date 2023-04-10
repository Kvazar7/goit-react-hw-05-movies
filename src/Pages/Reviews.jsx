import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getSerchingFilmByReviews } from '../services/services'

// import css from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getSerchingFilmByReviews(id)
      .then(response => {
        return response.json();
      })
        .then(data => {
          console.log(data);
        setReviews(data.results);
      });
  }, [id]);
  console.log(reviews);

  return (
    <div
      // className={css.reviews}
    >
      <h2>Reviews</h2>
      <ul
        // className={css.reviewsList}
      >
        {reviews.length !== 0 ? (
          reviews.map(review => (
            <li key={review.id}>
              <p>Author: {review.author}</p>
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
