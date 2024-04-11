import type { MoviesResponse } from '../types/movies';

const apiToken = process.env.REACT_APP_API_TOKEN;

export async function fetchSearchMovie(name: string) {
  if (!apiToken) {
    throw new Error('VITE_API_TOKEN is not specified in the .env file');
  }

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': apiToken,
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${name}`,
    options,
  );

  return (await response.json()) as MoviesResponse;
}
