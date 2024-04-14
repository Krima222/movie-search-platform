import type { MoviesResponse } from '../types/movies';

import { getApiToken } from '../utils/getApiToken';

export async function fetchSearchMovie(name: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${name}`,
    options,
  );

  return (await response.json()) as MoviesResponse;
}
