import { useQuery } from '@tanstack/react-query';
import { BLOG_QUERY_KEYS } from './queryKey';
import { BlogApi } from '@/entities/blog/apis';

export const useGetBlogById = (id: string) => {
  const query = useQuery({
    queryKey: BLOG_QUERY_KEYS.detail(id),
    queryFn: () => BlogApi.getById(id),
    enabled: Boolean(id),
  });

  return query;
};
