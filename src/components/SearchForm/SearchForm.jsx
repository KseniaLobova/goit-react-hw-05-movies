import { FiSearch } from 'react-icons/fi';

export const SearchForm = ({ onChange }) => {
  const onSubmit = evt => {
    evt.preventDefault();
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="What movie do you search?"
        name="search"
        required
        autoFocus
        onChange={onChange}
      />
      <FiSearch />
    </form>
  );
};
