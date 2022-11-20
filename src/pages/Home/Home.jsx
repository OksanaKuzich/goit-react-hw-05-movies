import { fetchTrendingMovies } from 'service/api';
import { useState, useEffect, useRef } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Home = ({ location }) => {
  const [gallery, setGallery] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchTrendingMovies()
      .then(setGallery)
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <TrendingList gallery={gallery} />
    </>
  );
};
