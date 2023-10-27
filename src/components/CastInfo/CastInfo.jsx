import { Item, List } from './CastInfo.styled';

export const CastInfo = ({ info }) => {
  const defaultImg =
    '<https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700>';
  return (
    <List>
      {info.map(({ id, character, name, profile_path }) => {
        return (
          <Item key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w200/${profile_path}`
                  : `${defaultImg}`
              }
              alt=""
              width={200}
            />
            <h2>{name}</h2>
            <h3>Character:</h3>
            <p>{character}</p>
          </Item>
        );
      })}
    </List>
  );
};
