import { useSearchParams } from 'react-router-dom';

import { useRequest } from './useRequests';

import { fetchComments } from '../api/fetchComments';

type Params = {
  page: string;
  id: string;
};

export function useComments({ id }: { id: string }) {
  const [searchParams] = useSearchParams();

  const obj: Params = {
    page: searchParams.get('page') ?? '1',
    id: id ?? '5173',
  };

  const dependenciesArray = Object.values(obj);

  const requestMovies = () => fetchComments(obj);

  return useRequest(requestMovies, dependenciesArray);
}
