import { PostersResponse } from '../types/posters';

import { getApiToken } from '../utils/getApiToken';

export async function fetchPosters(id: string) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/image?page=1&limit=10&selectFields=url&movieId=${id}`,
    options,
  );
  return (await response.json()) as PostersResponse;
}
