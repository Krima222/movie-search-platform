import { useRequest } from './useRequests';

import { fetchSearchMovie } from '../api/fetchSearchMovie';

export function useSearchMovie({ name }: { name: string }) {
  const requestMovie = () => fetchSearchMovie(name);

  const dependenciesArray = Object.values(name);

  return useRequest(requestMovie, dependenciesArray);
}
