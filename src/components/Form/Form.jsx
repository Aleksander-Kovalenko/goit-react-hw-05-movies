import { BsFilm } from 'react-icons/bs';
import { SearchBar, SearchInput, IconButton } from './Form.styled';

export function Form({ setQuery }) {
  const submitForm = e => {
    e.preventDefault();

    if (!e.target.query.value.trim()) {
      resetForm(e);
      return alert('Пустая строка');
    }

    setQuery(e.target.query.value);
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
