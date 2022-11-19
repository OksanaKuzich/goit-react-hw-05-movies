import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const API_KEY = '0214e4f6556edfc65f2eadfc23b43510';

export const fetchTrendingMovies = async (page) => {    
    try {
      const responce = await axios('/trending/movie/day', {
        params: {
          api_key: API_KEY,
          page,
        },
      });
      return responce.data;
    } catch (error) {
      console.log(error.message);
    }
};

export const searchMovies = page => {
  return axios('/search/search-movies', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const fetchMoviesDetails = page => {
  return axios('/movies/get-movie-details', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const fetchMoviesActors = page => {
  return axios('/movies/get-movie-credits', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};

export const fetchReviewsMovie = page => {
  return axios('/movies/get-movie-reviews ', {
    params: {
      api_key: API_KEY,
      page,
    },
  });
};