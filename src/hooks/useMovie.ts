import { useRequest } from './useRequests';

import { fetchMovie } from '../api/fetchMovie';

export function useMovie({ id }: { id: string }) {
  const requestMovie = () => fetchMovie(id);

  const dependenciesArray = Object.values(id);

  return useRequest(requestMovie, dependenciesArray);
}
