import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCast } from '../service/ServiceAPI';
import { CastList, CastItem, Img } from './Card.styled';

const Cast = () => {
  const { id } = useParams();

  const [athirst, setAthirst] = useState([]);

  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  useEffect(() => {
    getCast(id).then(response => setAthirst(response.cast));
  }, [id]);

  return (
    <>
      <CastList>
        {athirst.map(item => {
          return (
            <CastItem key={item.cast_id}>
              <Img src={`${BASE_IMG_URL}${item.profile_path}`} alt={item.name} />
              <h3>In movie: {item.character}</h3>
              <p>{item.name}</p>
            </CastItem>
          );
        })}
      </CastList>
    </>
  );
};

export default Cast;
