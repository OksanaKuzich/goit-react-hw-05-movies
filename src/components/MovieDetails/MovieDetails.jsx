import { useFetchById } from 'hooks/useFetchById';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'service/api';
import {
  ButtonBack,
  SectionDetails,
  MovieCard,
  MovieCardInfo,
  GenresList,
  MovieTitle,
  Link,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const details = useFetchById(fetchMovieDetails);
  const navigate = useNavigate();
  const location = useLocation();
  const URLimg = 'https://image.tmdb.org/t/p/w500';
  const backLink = location.state?.from ?? '/';

  return (
    <>
      <SectionDetails>
        <ButtonBack
          type="button"
          onClick={() => {
            navigate(backLink);
          }}
        >
          Go back
        </ButtonBack>
        {details && (
          <MovieCard>
            <img
              src={URLimg + details.poster_path}
              alt={details.title}
              width="350px"
            />
            <MovieCardInfo>
              <div>
                <MovieTitle>
                  {details.title} ({details.release_date.slice(0, 4)})
                </MovieTitle>
                <p>
                  Vote/Votes: {details.vote_average.toFixed(1)}/
                  {details.vote_count}
                </p>
                <p>Popularity: {details.popularity.toFixed(1)}</p>
                <h3>Overview</h3>
                <p>{details.overview}</p>
                <h3>Genres</h3>
                <GenresList>
                  {details.genres.map(({ name }) => (
                    <li key={name}>{name}</li>
                  ))}
                </GenresList>
              </div>
              <div>
                <Link to="cast" state={{ from: backLink }}>
                  Cast
                </Link>
                <Link to="reviews" state={{ from: backLink }}>
                  Reviews
                </Link>
              </div>
            </MovieCardInfo>
          </MovieCard>
        )}
      </SectionDetails>
      <Outlet />
    </>
  );
};

export default MovieDetails;
