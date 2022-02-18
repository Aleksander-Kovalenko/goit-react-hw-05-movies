import { useNavigate } from 'react-router';

export const Form = () => {
  const navigate = useNavigate();
  const submitForm = e => {
    e.preventDefault();
    navigate('movies', { state: e.target.search.value });
  };
  return (
    <>
      <form onSubmit={submitForm}>
        <input type="text" name="search" placeholder="Search..." />
      </form>
    </>
  );
};
