const API_KEY = '5d058213508c42de1e97cd1ebdbe63f3';
const BASE_MOVIE_URL = 'https://api.themoviedb.org/3';

export const fetchMovieData = async () => {
  const response = await fetch(
    `${BASE_MOVIE_URL}/movie/popular?api_key=${API_KEY}&language=ko&page=1`
  );
  const json = await response.json();
  return json;
};
