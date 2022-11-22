import { useFetchById } from 'hooks/useFetchById';
import { fetchMovieCast } from 'service/api';
import { Img, CastList, NoInfo } from './Cast.styles';
import nophoto from '../../data/nophoto.jpg';

export const Cast = () => {
  const cast = useFetchById(fetchMovieCast);
  const URLimg = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {cast && cast.length !== 0 ? (
        <CastList>
          {cast.map(({ name, profile_path }) => (
            <li key={name}>
              <Img
                src={profile_path ? URLimg + profile_path : nophoto}
                alt={name}
              />
              <p>{name}</p>
            </li>
          ))}
        </CastList>
      ) : (
        <NoInfo>~ No results ~</NoInfo>
      )}
    </>
  );
};
