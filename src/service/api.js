import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;
const API_KEY = '0214e4f6556edfc65f2eadfc23b43510';
const params = {
  api_key: API_KEY,
  page: 1,
};

export const fetchTrendingMovies = async () => {
  try {
    const responce = await axios('/trending/movie/day', { params });
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const searchMovies = async name => {
  try {
    const responce = await axios(`/search/movie?query=${name}`, { params });
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const responce = await axios(`/movie/${id}`, { params });
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovieCast = async (id) => {
  try {
    const responce = await axios(`/movie/${id}/credits`, { params });
    return responce.data.cast;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMovieReviews = async (id) => {
  try {
    const responce = await axios(`/movie/${id}/reviews`, { params });
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
