import type { CommentsResponse } from '../types/comments';

import { getApiToken } from '../utils/getApiToken';

export async function fetchComments({
  id,
  page,
}: {
  id: string;
  page: string;
}) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/review?page=${page}&limit=3&selectFields=id&selectFields=author&selectFields=review&notNullFields=id&notNullFields=author&notNullFields=review&movieId=${id}`,
    options,
  );
  return (await response.json()) as CommentsResponse;
}
