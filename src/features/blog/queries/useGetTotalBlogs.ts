import { BlogApi } from '@/entities/blog/apis';
import { useQuery } from '@tanstack/react-query';
import { BLOG_QUERY_KEYS } from './queryKey';

export const useGetTotalBlogs = (search: string) => {
  const query = useQuery({
    queryKey: BLOG_QUERY_KEYS.total(search),
    queryFn: () => BlogApi.totalBlog(search || ''),
  });

  return query;
};
