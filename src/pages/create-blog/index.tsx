import { ACTION_ENUM } from '@/shared/constants';
import { UpsertBlog } from '@/widgets/blog';

const CreateBlogPage = () => {
  return <UpsertBlog type={ACTION_ENUM.CREATE} />;
};

export default CreateBlogPage;
