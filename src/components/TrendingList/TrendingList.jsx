import { fetchTrendingMovies } from 'service/api';
import { useState, useEffect, useRef } from 'react';

export const TrendingList = () => {
  const [gallery, setGallery] = useState([]);
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    fetchTrendingMovies(1)
      .then(resp => {
        setGallery(prevState => {
          return [...prevState, ...resp.results];
        });
      })
      .catch(error => console.log(error.message));
  }, []);

  return (
    <>
      <h1>Trending Today</h1>
      <ul>
        {gallery.map(({ id, title, name }) => {
          return <li key={id}>{title || name}</li>;
        })}
      </ul>
    </>
  );
};
