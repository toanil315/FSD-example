import { BlogApi } from '@/entities/blog/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BLOG_QUERY_KEYS } from '../queries';

export const useCreateBlog = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: BlogApi.create,
    onSuccess() {
      queryClient.invalidateQueries({
        queryKey: [BLOG_QUERY_KEYS.list(), BLOG_QUERY_KEYS.total()],
      });
    },
  });

  return mutation;
};
