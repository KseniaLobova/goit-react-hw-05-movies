import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { searchMovie } from 'server';
import { useEffect, useState } from 'react';

import { useSearchParams } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

export default function Movies() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [fetchResults, setFetchResults] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    if (query === '') {
      return setSearchParams({});
    }
    // const nextParams = query !== '' ? { query } : {};
    // console.log(nextParams);
    setSearchParams({ query: query });
  };

  useEffect(() => {
    try {
      setLoader(true);
      const getMovie = async () => {
        const data = await searchMovie(query);
        setFetchResults(data);
      };
      getMovie();
    } catch (error) {
      setError(true);
      toast.error('Whoops! Error! Please reload this page!');
    } finally {
      setLoader(false);
    }
  }, [query]);

  return (
    <div>
      <SearchForm onChange={updateQueryString} />

      {fetchResults.length > 0 && <MovieList movie={fetchResults} />}
      {error === true && <Toaster />}
      {loader === true && <Loader />}
    </div>
  );
}
