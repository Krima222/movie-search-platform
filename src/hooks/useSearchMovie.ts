import { useRequest } from './useRequests';

import { fetchSearchMovie } from '../api/fetchSearchMovie';

export function useSearchMovie({ name }: { name: string }) {
  const requestMovie = () => fetchSearchMovie(name);

  return useRequest(requestMovie, [name]);
}
