import { Loader } from 'components/Loader/Loader';
import { Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { fetchMovieById } from 'server';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
// import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import toast, { Toaster } from 'react-hot-toast';

export default function MoviesDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    try {
      const getMovie = async () => {
        const getMovieById = await fetchMovieById(movieId);
        setMovieDetails(getMovieById);
      };
      getMovie();
    } catch (error) {
      setError(true);
      toast.error('Whoops! Error! Please reload this page!');
    } finally {
      setLoader(false);
    }
  }, [movieId]);

  if (!movieDetails) {
    return;
  }

  return (
    <div>
      <MovieDetails details={movieDetails} />
      {error === true && <Toaster />}
      {loader === true && <Loader />}
      <div>
        <h4>Additional information</h4>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Review</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
