import { useEffect } from 'react';
import { useState } from 'react';
import { searchMovies } from '../../service/api';
import { Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { TrendingList } from 'components/TrendingList/TrendingList';

export const Movies = () => {
  const [gallery, setGallery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name');
  const location = useLocation();

  const onFormSubmit = e => {
    e.preventDefault();
    const searchName = e.target.elements.name.value;
    setSearchParams({ name: searchName });
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    if (query.trim() === '') {
      alert('Please enter the name for search!');
      return;
    }
    searchMovies(query).then(setGallery);
  }, [query]);

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <input name="name" type="text" />
        <button>Search</button>
      </form>
      {gallery.length !== 0 && (
        <TrendingList gallery={gallery} location={location} />
      )}
      <Outlet />
    </div>
  );
};
