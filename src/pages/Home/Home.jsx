import { fetchTrendingMovies } from 'service/api';
import { useState, useEffect, useRef } from 'react';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Section } from './Home.styles';

export const Home = () => {
  const [gallery, setGallery] = useState([]);
  const isFirstRender = useRef(true);
  const pathLocation = '/movies/';

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
    <Section>
      <h1>Trending Today</h1>
      {gallery && (
        <TrendingList gallery={gallery} pathLocation={pathLocation} />
      )}
    </Section>
  );
};
