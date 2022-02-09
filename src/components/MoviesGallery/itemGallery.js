import CardMovie from './CardMovie';

const ItemGallery = ({ movieList }) => {
  function onHandleClickImg(e) {
    console.log(e.target);
  }
  console.log(movieList);
  return (
    <li onClick={onHandleClickImg}>
      <CardMovie url={movieList.backdrop_path} title={movieList.original_title} id={movieList.id} />
    </li>
  );
};

export default ItemGallery;
