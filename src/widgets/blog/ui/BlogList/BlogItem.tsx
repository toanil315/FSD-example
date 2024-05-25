import { Blog } from '@/entities/blog/types';
import { ROUTES } from '@/shared/constants';
import { PencilIcon } from '@/shared/ui';
import { Link } from 'react-router-dom';

interface Props {
  blog: Blog;
}

export const BlogItem = ({ blog }: Props) => {
  return (
    <div className='cursor-pointer overflow-hidden rounded-lg w-full flex flex-col md:flex-row gap-4 p-4 shadow-green-100 shadow-md bg-white border border-gray-200 relative'>
      <Link to={`/blogs/${blog.id}`}>
        <div className='h-[200px] md:h-56 md:w-60 overflow-hidden rounded-lg flex-shrink-0 bg-gray-400'>
          <img
            loading='lazy'
            className='w-full h-full object-cover transition duration-200 ease-in-out hover:scale-105 rounded-lg'
            src={blog.image}
            alt={blog.image}
          />
        </div>
      </Link>
      <div className='px-2 py-4 md:!py-0 flex flex-col justify-between gap-4'>
        <div className='blog-overview'>
          <Link to={`/blogs/${blog.id}`}>
            <h3 className='text-2xl font-semibold hover:text-green-500 transition-all duration-200 ease-in-out '>
              {blog.title}
            </h3>
          </Link>
          <div className='flex items-center justify-between'>
            <p className='line-clamp-3 lg:w-[90%]'>{blog.content}</p>
          </div>
        </div>
        <p className='flex items-center gap-2'>
          <img
            loading='lazy'
            className='h-9 w-9 rounded-full '
            src='https://cdn.sanity.io/images/m6ybrjur/production/4ffad9fa4faec1815c5cca013e432768f82119a8-540x960.jpg?rect=0,184,540,776'
            alt='author image'
            title='Dang Cong Toan'
          />
          <a
            className='font-semibold hover:text-green-500 transition-all duration-200 ease-in-out'
            href='https://github.com/toanil315'
          >
            Dang Cong Toan
          </a>
        </p>
      </div>
      <Link to={ROUTES.EDIT_BLOG(blog.id)}>
        <div className='absolute top-2 right-1 md:right-2 bg-white p-2 rounded-full shadow-lg border border-gray-200'>
          <PencilIcon
            width={30}
            height={30}
          />
        </div>
      </Link>
    </div>
  );
};
