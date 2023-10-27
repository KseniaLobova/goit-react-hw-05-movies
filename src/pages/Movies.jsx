import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovie } from 'server';
import { useEffect, useState } from 'react';
import { ResultsMovies } from 'components/ResultsMovies/ResultsMovies';
import { useSearchParams } from 'react-router-dom';

export default function Movies() {
  // const [value, setValue] = useState('value');
  const [fetchResults, setFetchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    // const nextParams = query !== '' ? { query } : {};
    // console.log(nextParams);
    setSearchParams({ query: query });
  };

  // const onChange = evt => {
  //   const query = evt.target.value;
  //   setSearchParams(value: query);
  // };

  useEffect(() => {
    const getMovie = async () => {
      const data = await searchMovie(query);
      setFetchResults(data);
    };
    getMovie();
  }, [query]);

  return (
    <div>
      <SearchForm onChange={updateQueryString} />
      {/* {query !== '' && <ResultsMovies fetchQuery={fetchResults} />} */}
      <ResultsMovies fetchQuery={fetchResults} />
    </div>
  );
}
