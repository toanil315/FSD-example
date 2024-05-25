import { useGetBlogById } from '@/features/blog';
import { useRouter } from '@/shared/hooks';
import { BlogDetailView } from './BlogDetailView';

export const BlogDetail = () => {
  const { query } = useRouter();
  const { data } = useGetBlogById(query.id as string);

  console.log(query);

  if (!data) return null;

  return <BlogDetailView blog={data} />;
};
