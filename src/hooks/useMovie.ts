import { useRequest } from './useRequests';

import { fetchMovie } from '../api/fetchMovie';

export function useMovie({ id }: { id: string }) {
  const requestMovie = () => fetchMovie(id);

  return useRequest(requestMovie, [id]);
}
