import axios from 'axios';

const movieInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0b81ec7b97ebe28b2ec2748d1e4054f2',
    language: `en-US`,
  },
});

export const getMovies = () => movieInstance.get('/trending/movie/day');

export const getMovieByID = id => movieInstance.get(`/movie/${id}`);

export const getCastByID = id => movieInstance.get(`/movie/${id}/credits`);

export const getReviewsByID = id => movieInstance.get(`/movie/${id}/reviews`);

export const getMovieBySearch = query =>
  movieInstance.get(`/search/movie?query=${query}`);

//   https://api.themoviedb.org/3/search/movie?api_key=0b81ec7b97ebe28b2ec2748d1e4054f2&query=batman
