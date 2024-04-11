import type { MoviesResponse } from '../types/movies';

const apiToken = process.env.REACT_APP_API_TOKEN;

export async function fetchMovies({
  page,
  limit,
  year,
  age,
  countrie,
}: {
  page: string;
  limit: string;
  year: string;
  age: string;
  countrie: string;
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
    `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=poster&selectFields=rating&selectFields=description&selectFields=persons&selectFields=poster&notNullFields=poster.url&notNullFields=name&notNullFields=id&notNullFields=description&notNullFields=rating.kp&year=${year}&ageRating=${age}&countries.name=${countrie}`,
    options,
  );
  return (await response.json()) as MoviesResponse;
}
