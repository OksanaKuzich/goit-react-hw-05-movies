import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'service/api';

export const useFetchGallery = () => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchMoviesDetails(id).then(setMovie);
  }, [id]);

  console.log(movie);
  return movie;
};
