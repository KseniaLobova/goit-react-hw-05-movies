import { Link } from 'react-router-dom';

export const ResultsMovies = ({ fetchQuery }) => {
  return (
    <ul>
      {fetchQuery.map(({ original_title, id }) => {
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}>{original_title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
