import { NavLink } from 'react-router-dom';
import { Description, GalleryItem, Images } from './Views.styled';

const ItemGallery = ({ moviesList }) => {
  return (
    <GalleryItem>
      <Images
        src={`https://www.themoviedb.org/t/p/w500${moviesList.backdrop_path}`}
        alt={moviesList.original_title}
      />
      <Description>
        <NavLink to={`${moviesList.id}`}>{moviesList.original_title}</NavLink>
      </Description>
    </GalleryItem>
  );
};

export default ItemGallery;
