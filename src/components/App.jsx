import { Routes, Route } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Movies } from '../pages/Movies/Movies';
import { Home } from '../pages/Home/Home';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';
import { GlobalStyle } from './utiles/GlobalStyles';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:id" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

// '/' - +компонент Home, домашняя страница со списком популярных кинофильмов.
// '/movies' - +компонент Movies, страница поиска фильмов по ключевому слову.
// '/movies/:movieId' - компонент MovieDetails, страница с детальной информацией о кинофильме.
// /movies/:movieId/cast - компонент Cast, информация о актерском составе. Рендерится на странице MovieDetails.
// /movies/:movieId/reviews - компонент Reviews, информация об обзорах. Рендерится на странице MovieDetails.

// - / Loyaut (Home)
// - /movies
//   - :movieId
//     - /cast
//     - /reviews
