import { BsFilm } from 'react-icons/bs';
import { SearchBar, SearchInput, IconButton } from './Form.styled';
import { useNavigate } from 'react-router-dom';

export function Form({ changeMovies }) {
  let navigate = useNavigate();
  const submitForm = e => {
    e.preventDefault();
    navigate('movies');

    if (!e.target.query.value.trim()) {
      resetForm(e);
      return alert('Пустая строка');
    }

    changeMovies(e.target.query.value);
    resetForm(e);
  };

  const resetForm = e => {
    e.target.query.value = '';
  };

  return (
    <>
      <SearchBar onSubmit={submitForm}>
        <SearchInput type="text" placeholder="Search film..." name="query" />
        <IconButton type="submit">
          <BsFilm />
        </IconButton>
      </SearchBar>
    </>
  );
}
