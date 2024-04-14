import type { MovieResponse } from '../types/movie';

import { getApiToken } from '../utils/getApiToken';

export async function fetchMovie(id: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/${id}`,
    options,
  );

  return (await response.json()) as MovieResponse;
}
