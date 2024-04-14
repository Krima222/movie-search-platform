import type { MovieResponse } from '../types/movie';

import { getApiToken } from '../utils/getApiToken';

export async function fetchEpisodes(id: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/season?page=1&limit=10&selectFields=movieId&selectFields=poster&selectFields=name&notNullFields=movieId&notNullFields=poster.url&notNullFields=name&movieId=${id}`,
    options,
  );

  return (await response.json()) as MovieResponse;
}
