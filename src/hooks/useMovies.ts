import { useSearchParams } from 'react-router-dom';

import { useRequest } from './useRequests';

import { fetchMovies } from '../api/fetchMovies';

type Params = {
  page: string;
  limit: string;
  year: string;
  age: string;
  countrie: string;
};

export function useMovies() {
  const [searchParams] = useSearchParams();

  const obj: Params = {
    page: searchParams.get('page') ?? '1',
    limit: searchParams.get('limit') ?? '10',
    year: searchParams.get('year') ?? '2010',
    age: searchParams.get('ageRating') ?? '18',
    countrie: searchParams.get('countries.name') ?? 'США',
  };

  const dependenciesArray = Object.values(obj);

  const requestMovies = () => fetchMovies(obj);

  return useRequest(requestMovies, dependenciesArray);
}
