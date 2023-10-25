import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovie } from 'server';
import { useEffect, useState } from 'react';

export default function Movies() {
  const [value, setValue] = useState('value');
  const onChange = evt => {
    const query = evt.target.value;
    setValue(query);
  };

  useEffect = () => {
    const getMovie = async () => {
      const data = await searchMovie(value);
      console.log(data);
    };
    getMovie();
  };

  return <SearchForm onChange={onChange} />;
}
