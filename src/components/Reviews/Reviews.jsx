import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'server';
import { List } from './Review.styled';

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    try {
      const getReview = async () => {
        const review = await fetchMovieReviews(movieId);
        setReview(review.results);
      };
      getReview();
    } catch (error) {
      setError(true);
      toast.error('Whoops! Error! Please reload this page!');
    } finally {
      setLoader(false);
    }
  }, [movieId]);

  return (
    <div>
      <ul>
        {review.length > 0 ? (
          review.map(({ author, content, id }) => {
            return (
              <List key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </List>
            );
          })
        ) : (
          <div>"Sorry we dont have any review"</div>
        )}
      </ul>
      {error === true && <Toaster />}
      {loader === true && <Loader />}
    </div>
  );
}
