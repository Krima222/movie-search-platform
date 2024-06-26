import type { ActorsResponse } from '../types/actors';

import { getApiToken } from '../utils/getApiToken';

export async function fetchActors({ id, page }: { page: string; id: string }) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/person?page=${page}&limit=9&selectFields=id&selectFields=name&selectFields=photo&notNullFields=id&notNullFields=name&notNullFields=photo&movies.id=${id}&profession.value=%D0%90%D0%BA%D1%82%D0%B5%D1%80&profession.value=%D0%90%D0%BA%D1%82%D1%80%D0%B8%D1%81%D0%B0`,
    options,
  );

  return (await response.json()) as ActorsResponse;
}
