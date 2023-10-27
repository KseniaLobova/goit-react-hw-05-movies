import { Link } from 'react-router-dom';
import { List } from './TrendList.styled';

export const TrendList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.original_title}</Link>
          </li>
        );
      })}
    </List>
  );
};
