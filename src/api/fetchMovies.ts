import type { MoviesResponse } from '../types/movies';
import { getApiToken } from '../utils/getApiToken';

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
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      'X-API-KEY': getApiToken(),
    },
  };
  const response = await fetch(
    `https://api.kinopoisk.dev/v1.4/movie?page=${page}&limit=${limit}&selectFields=id&selectFields=name&selectFields=poster&selectFields=rating&selectFields=description&selectFields=persons&selectFields=poster&notNullFields=poster.url&notNullFields=name&notNullFields=id&notNullFields=description&notNullFields=rating.kp&year=${year}&ageRating=${age}&countries.name=${countrie}`,
    options,
  );
  return (await response.json()) as MoviesResponse;
}
