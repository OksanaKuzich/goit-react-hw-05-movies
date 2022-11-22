import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const useFetchById = (func) => {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    func(id).then(setMovie);
  }, [func, id]);

  return movie;
};

