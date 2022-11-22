import { useEffect, useState } from 'react';
import { searchMovies } from '../../service/api';
import { Outlet, useSearchParams } from 'react-router-dom';
import { TrendingList } from 'components/TrendingList/TrendingList';
import { Input, Form, ButtonSearch } from './Movies.styles';

const Movies = () => {
  const [gallery, setGallery] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('name');
  const pathLocation = '';

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
      <Form onSubmit={onFormSubmit}>
        <Input name="name" type="text" />
        <ButtonSearch>Search</ButtonSearch>
      </Form>
      {gallery.length !== 0 && (
        <TrendingList gallery={gallery} pathLocation={pathLocation} />
      )}
      <Outlet />
    </div>
  );
};

export default Movies;
