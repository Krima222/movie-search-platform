import { useRequest } from './useRequests';

import { fetchPosters } from '../api/fetchPosters';

export function usePosters({ id }: { id: string }) {
  const requestMovies = () => fetchPosters(id);

  return useRequest(requestMovies, [id]);
}
