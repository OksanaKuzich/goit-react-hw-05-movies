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

export const fetchMoviesDetails = async (id) => {
  try {
    const responce = await axios(`/movie/${id}`, { params });
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchMoviesActors = async () => {
  try {
    const responce = await axios('/movies/get-movie-credits', { params });
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};

export const fetchReviewsMovie = async () => {
  try {
    const responce = await axios('/movies/get-movie-reviews', { params });
    return responce.data.results;
  } catch (error) {
    console.log(error.message);
  }
};
