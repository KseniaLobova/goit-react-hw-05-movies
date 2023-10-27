import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { MovieList } from 'components/MovieList/MovieList';

import { useEffect, useState } from 'react';

import { fetchTrendingMovie } from 'server';

export default function Home() {
  const [trendMovies, setTrendMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    const trendList = async () => {
      try {
        setLoader(true);
        const response = await fetchTrendingMovie();
        const movies = response.results;
        setTrendMovies(movies);
      } catch (error) {
        setError(true);
        toast.error('Whoops! Error! Please reload this page!');
      } finally {
        setLoader(false);
      }
    };
    trendList();
  }, []);

  return (
    <div>
      {trendMovies.length > 0 ? (
        <MovieList movie={trendMovies} />
      ) : (
        'Sorry, something wrong. Please reload page'
      )}

      {error === true && <Toaster />}
      {loader === true && <Loader />}
    </div>
  );
}
