import PropTypes from 'prop-types';
import {
  MoviesList,
  MoviesItem,
  MoviesLink,
  MoviesWrapper,
  Img,
  TitleMovies,
  Loading,
} from './TrendingList.styles';

export const TrendingList = ({ gallery, pathLocation }) => {
  const URLimg = 'https://image.tmdb.org/t/p/w500';

  return (
    <>
      {gallery && gallery.length !== 0 ? (
        <MoviesWrapper>
          <MoviesList>
            {gallery.map(({ id, title, release_date, poster_path }) => {
              return (
                <MoviesItem key={id}>
                  <MoviesLink to={pathLocation + id.toString()}>
                    <TitleMovies>
                      {title} ({release_date.slice(0, 4)})
                    </TitleMovies>
                    <Img src={URLimg + poster_path} alt={title} />
                  </MoviesLink>
                </MoviesItem>
              );
            })}
          </MoviesList>
        </MoviesWrapper>
      ) : (
        <Loading>Loading...</Loading>
      )}
    </>
  );
};

TrendingList.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
      poster_path: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  pathLocation: PropTypes.string.isRequired,
};

