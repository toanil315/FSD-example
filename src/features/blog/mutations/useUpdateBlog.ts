import { BlogApi } from '@/entities/blog/apis';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { BLOG_QUERY_KEYS } from '../queries';

export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: BlogApi.update,
    onSuccess(_, variables) {
      queryClient.invalidateQueries({
        queryKey: BLOG_QUERY_KEYS.list(),
      });
      queryClient.invalidateQueries({
        queryKey: BLOG_QUERY_KEYS.detail(variables.id),
      });
    },
  });

  return mutation;
};
