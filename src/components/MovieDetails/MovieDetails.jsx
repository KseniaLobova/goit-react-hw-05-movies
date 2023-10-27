import { Container, Items, List, Subtitle, Title } from './MovieDetails.styled';

export const MovieDetails = ({
  details: { original_title, overview, genres, poster_path, vote_average },
}) => {
  const defaultImg = `http://www.suryalaya.org/images/no_image.jpg`;

  const popularity = Math.round(vote_average * 10);

  return (
    <Container>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${defaultImg}`
        }
        width={250}
        alt="poster"
      />
      <div>
        <Title>{original_title}</Title>
        <Subtitle>Score:</Subtitle>
        <p>{popularity}%</p>
        <Subtitle>Overview</Subtitle>
        <p> {overview}</p>
        <Subtitle>Genres</Subtitle>
        <List>
          {genres.map(({ name, id }) => {
            return <Items key={id}>{name}</Items>;
          })}
        </List>
      </div>
    </Container>
  );
};
