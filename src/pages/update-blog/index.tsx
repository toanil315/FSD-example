import { ACTION_ENUM } from '@/shared/constants';
import { useRouter } from '@/shared/hooks';
import { UpsertBlog } from '@/widgets/blog';

const UpdateBlogPage = () => {
  const { query } = useRouter();
  return (
    <UpsertBlog
      type={ACTION_ENUM.UPDATE}
      blogId={query.id as string}
    />
  );
};

export default UpdateBlogPage;
