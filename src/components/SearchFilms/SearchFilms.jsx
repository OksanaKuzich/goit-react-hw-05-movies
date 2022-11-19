import { useState } from 'react';
import { searchMovies } from '../../service/api';

export const SearchFilms = () => {
  const [searchName, setSearchName] = useState('');

  const handleNameChange = e => {
    setSearchName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (searchName.trim() === '') {
      alert('Please enter the name for search!');
      return;
    }
    searchMovies(searchName);
    setSearchName('');
  };

  console.log(searchName);


  return (
    <div>
      <input onChange={handleNameChange}></input>
      <button type="button" onClick={handleSubmit}>
        Search
      </button>
    </div>
  );
};
