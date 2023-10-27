export const CastInfo = ({ info }) => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  return (
    <ul>
      {info.map(({ id, character, name, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `${defaultImg}`
              }
              alt=""
            />
            <h2>{name}</h2>
            <h3>Character:</h3>
            <p>{character}</p>
          </li>
        );
      })}
    </ul>
  );
};
