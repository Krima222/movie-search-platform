import type { MovieResponse } from '../types/movie';

const apiToken = process.env.REACT_APP_API_TOKEN;

export async function fetchMovie(id: string) {
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
    `https://api.kinopoisk.dev/v1.4/movie/${id}`,
    options,
  );

  return (await response.json()) as MovieResponse;
}
