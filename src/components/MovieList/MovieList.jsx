import { useLocation } from 'react-router-dom';

import { BiMoviePlay } from 'react-icons/bi';
import { Container, Items, LinkItem, Title } from './MovieList.styled';

export const MovieList = ({ movie }) => {
  const location = useLocation();
  return (
    <Container>
      <Title>Trending today:</Title>
      <ul>
        {movie.map(({ original_title, id }) => {
          return (
            <Items key={id}>
              <BiMoviePlay />
              <LinkItem to={`/movies/${id}`} state={{ from: location }}>
                {original_title}
              </LinkItem>
            </Items>
          );
        })}
      </ul>
    </Container>
  );
};
