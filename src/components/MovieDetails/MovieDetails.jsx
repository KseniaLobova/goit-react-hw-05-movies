export const MovieDetails = ({
  details: { original_title, overview, genres, poster_path, vote_average },
}) => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';

  const popularity = Math.round(vote_average * 10);

  return (
    <div>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
            : `${defaultImg}`
        }
        width={250}
        alt="poster"
      />
      <h1>{original_title}</h1>
      <h2>Score:</h2>
      <p>{popularity}%</p>
      <h2>Overview</h2>
      <p> {overview}</p>
      <h2>Genres</h2>
      <ul>
        {genres.map(({ name, id }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
