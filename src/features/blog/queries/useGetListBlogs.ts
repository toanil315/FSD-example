import { useQuery } from '@tanstack/react-query';
import { BLOG_QUERY_KEYS } from './queryKey';
import { BlogApi } from '@/entities/blog/apis';
import { GetListParams } from '@/shared/types';

export const useGetListBlogs = (params: GetListParams) => {
  const query = useQuery({
    queryKey: BLOG_QUERY_KEYS.list(params),
    queryFn: () => BlogApi.list(params),
  });

  return query;
};
