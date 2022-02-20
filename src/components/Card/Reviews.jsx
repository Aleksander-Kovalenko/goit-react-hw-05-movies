import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getReviews } from '../service/ServiceAPI';

const Reviews = () => {
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews(id).then(response => setReviews(response.results));
  }, [id]);

  return (
    <>
      <div>
        {reviews.map(item => (
          <p key={item.id}>{item.content}</p>
        ))}
      </div>
    </>
  );
};

export default Reviews;
