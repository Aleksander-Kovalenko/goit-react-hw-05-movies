const ItemMovie = ({ moviesList }) => {
  function onHandleClickImg(e) {
    console.log(e.target);
  }

  return (
    <li onClick={onHandleClickImg}>
      <img
        src={`https://www.themoviedb.org/t/p/w500${moviesList.backdrop_path}`}
        alt={moviesList.original_title}
      />
      <p>{moviesList.original_title}</p>
    </li>
  );
};

export default ItemMovie;
