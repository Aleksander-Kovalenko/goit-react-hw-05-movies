import { useNavigate } from 'react-router';

export const Form = () => {
  const navigate = useNavigate();

  const submitForm = e => {
    e.preventDefault();
    const query = e.target.search.value;

    navigate('movies', { state: query });
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" name="search" placeholder="Search..." />
      </form>
    </>
  );
};
