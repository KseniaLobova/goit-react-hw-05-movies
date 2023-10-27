import { Loader } from 'components/Loader/Loader';
import { TrendList } from 'components/TrendList/TrendList';
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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
      <TrendList movies={trendMovies} />
      {error === true && <Toaster />}
      {loader === true && <Loader />}
    </div>
  );
}
