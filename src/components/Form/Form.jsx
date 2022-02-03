import { BsFilm } from 'react-icons/bs';
import { SearchBar, SearchInput, IconButton } from './Form.styled';

export function Form({ onSubmitForm }) {
  const submitForm = e => {
    e.preventDefault();
    const userInput = e.target.query.value;
    console.log();
    if (!userInput.trim()) return console.log('Пустая строка');

    onSubmitForm(userInput);
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
