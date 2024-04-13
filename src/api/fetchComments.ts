import type { CommentsResponse } from '../types/comments';

const apiToken = process.env.REACT_APP_API_TOKEN;

export async function fetchComments({
  id,
  page,
}: {
  id: string;
  page: string;
}) {
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
    `https://api.kinopoisk.dev/v1.4/review?page=${page}&limit=3&selectFields=id&selectFields=author&selectFields=review&notNullFields=id&notNullFields=author&notNullFields=review&movieId=${id}`,
    options,
  );
  return (await response.json()) as CommentsResponse;
}
