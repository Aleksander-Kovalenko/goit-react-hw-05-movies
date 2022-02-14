import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import * as apiMovies from '../service/moviesApi.js';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReview] = useState([]);
  useEffect(() => {
    apiMovies.movieReviews(movieId).then(response => setReview(response.results));
  });

  return (
    <>
      <ul>
        {reviews.map(item => (
          <li>{item.content}</li>
        ))}
      </ul>
    </>
  );
};

export default Reviews;
