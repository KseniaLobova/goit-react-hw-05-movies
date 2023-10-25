import { List } from './TrendList.styled';

export const TrendList = ({ movies }) => {
  return (
    <List>
      {movies.map(movie => {
        return <li key={movie.id}>{movie.original_title}</li>;
      })}
    </List>
  );
};
