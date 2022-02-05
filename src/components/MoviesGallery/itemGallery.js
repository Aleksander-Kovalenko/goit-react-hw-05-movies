const ItemMovie = ({ moviesList }) => {
  console.log(moviesList);
  return (
    <li>
      <img src={moviesList.poster_path} alt={moviesList.original_title} />
    </li>
  );
};

export default ItemMovie;
