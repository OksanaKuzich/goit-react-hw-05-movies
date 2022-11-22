import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './utiles/GlobalStyles';
import { lazy, Suspense } from 'react';

const MyCompHome = lazy(() => import('../pages/Home/Home'));
const MyCompCast = lazy(() => import('./Cast/Cast'));
const MyCompLayout = lazy(() => import('./Layout/Layout'));
const MyCompDetails = lazy(() => import('./MovieDetails/MovieDetails'));
const MyCompReviews = lazy(() => import('./Reviews/Reviews'));
const MyCompMovies = lazy(() => import('../pages/Movies/Movies'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MyCompLayout />}>
            <Route index element={<MyCompHome />} />
            <Route path="movies" element={<MyCompMovies />} />
            <Route path="movies/:id" element={<MyCompDetails />}>
              <Route path="cast" element={<MyCompCast />} />
              <Route path="reviews" element={<MyCompReviews />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
      <GlobalStyle />
    </>
  );
};
