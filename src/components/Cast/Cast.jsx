import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CastInfo } from 'components/CastInfo/CastInfo';
import { fetchMovieCredits } from 'server';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    try {
      setLoader(true);
      const getMovieCredits = async () => {
        const cast = await fetchMovieCredits(movieId);
        setCast(cast);
      };
      getMovieCredits();
    } catch (error) {
      setError(true);
      toast.error('Whoops! Error! Please reload this page!');
    } finally {
      setLoader(false);
    }
  }, [movieId]);

  return (
    <div>
      {cast.length > 0 ? (
        <CastInfo info={cast} />
      ) : (
        <div>'Sorry thare are no any info'</div>
      )}
      {error === true && <Toaster />}
      {loader === true && <Loader />}
    </div>
  );
}
