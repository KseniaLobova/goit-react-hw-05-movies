import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from 'server';

export default function Reviews() {
  const { movieId } = useParams();
  const [review, setReview] = useState();

  useEffect(() => {
    try {
      const getReview = async () => {
        const review = await fetchMovieReviews(movieId);
        console.log(review);
      };
      getReview();
    } catch (error) {}
  }, [movieId]);

  return;
}
