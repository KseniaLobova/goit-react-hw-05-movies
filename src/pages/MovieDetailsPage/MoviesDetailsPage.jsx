import { Loader } from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { useState, useEffect, useRef, Suspense } from 'react';

import { fetchMovieById } from 'server';
import { MovieDetails } from 'components/MovieDetails/MovieDetails';
import {
  Button,
  Items,
  LinkItem,
  List,
  Subtitle,
} from './MoviesDetailsPage.styled';

export default function MoviesDetailsPage() {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const location = useLocation();

  const backLinkRef = useRef(location.state?.from ?? '/');
  useEffect(() => {
    try {
      setLoader(true);
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
      <Link to={backLinkRef.current}>
        <Button> Go back</Button>
      </Link>

      <MovieDetails details={movieDetails} />

      <div>
        <Subtitle>Additional information</Subtitle>
        <List>
          <Items>
            <LinkItem to="cast">Cast</LinkItem>
          </Items>
          <Items>
            <LinkItem to="reviews">Review</LinkItem>
          </Items>
        </List>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      {error === true && <Toaster />}
      {loader === true && <Loader />}
    </div>
  );
}
