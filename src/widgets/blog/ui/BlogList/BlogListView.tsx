import { Blog } from '@/entities/blog/types';
import { BlogItem } from './BlogItem';

interface Props {
  blogs: Blog[];
}

export const BlogListView = ({ blogs }: Props) => {
  const renderBlogList = () => {
    return blogs.map((blog) => {
      return (
        <div
          className='w-full'
          key={blog.id}
        >
          <BlogItem blog={blog} />
        </div>
      );
    });
  };

  return <div className='py-8 flex flex-col items-center gap-6'>{renderBlogList()}</div>;
};
