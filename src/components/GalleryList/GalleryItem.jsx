import { Link } from 'react-router-dom';

export const GalleryItem = ({ items }) => {
  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';
  return (
    <>
      <li style={{ width: '33,33333%', margin: '15px' }}>
        <article>
          <div style={{ borderRadius: '10px', overflow: 'hidden', width: '300px' }}>
            <img
              src={`${BASE_IMG_URL}${items.poster_path}`}
              alt={items.original_title}
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div>
            <Link to={`/movies/${items.id}`}>{items.original_title}</Link>
            <p>Average: {items.vote_average}</p>
          </div>
        </article>
      </li>
    </>
  );
};
