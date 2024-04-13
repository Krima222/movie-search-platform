import { useRequest } from './useRequests';

import { fetchEpisodes } from '../api/fetchEpisodes';

export function useEpisodes({ id }: { id: string }) {
  const requestMovie = () => fetchEpisodes(id);

  return useRequest(requestMovie, [id]);
}
