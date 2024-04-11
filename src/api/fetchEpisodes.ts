import type { MovieResponse } from '../types/movie';

const apiToken = process.env.REACT_APP_API_TOKEN;

export async function fetchEpisodes(id: string) {
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
    `https://api.kinopoisk.dev/v1.4/season?page=1&limit=10&selectFields=movieId&selectFields=poster&selectFields=name&notNullFields=movieId&notNullFields=poster.url&notNullFields=name&movieId=${id}`,
    options,
  );

  return (await response.json()) as MovieResponse;
}
