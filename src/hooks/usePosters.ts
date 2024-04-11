import { useRequest } from './useRequests';

import { fetchPosters } from '../api/fetchPosters';

export function usePosters({ id }: { id: string }) {
  const dependenciesArray = Object.values(id);

  const requestMovies = () => fetchPosters(id);

  return useRequest(requestMovies, dependenciesArray);
}
