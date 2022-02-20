import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getCast } from '../service/ServiceAPI';

const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState(null);

  const BASE_IMG_URL = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  useEffect(() => {
    getCast(id).then(setCast);
  }, [id]);

  console.log(cast.cast[0]);

  return <>{/* <ul>{cast.map(item => console.log(item))}</ul> */}</>;
};

export default Cast;
