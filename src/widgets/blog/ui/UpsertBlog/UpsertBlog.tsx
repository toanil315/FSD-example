import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ACTION_ENUM, ROUTES } from '@/shared/constants';
import { useCreateBlog, useGetBlogById, useUpdateBlog } from '@/features/blog';
import { BaseBlog, Blog } from '@/entities/blog/types';
import { blogSchema } from '@/entities/blog/validators';
import BlogForm from './BlogForm';
import { useNavigate } from 'react-router-dom';

interface Props {
  type: ACTION_ENUM;
  blogId?: string;
}

export const UpsertBlog = ({ type, blogId }: Props) => {
  const navigate = useNavigate();
  const { data: blog } = useGetBlogById(blogId || '');
  const { mutateAsync: createBlog, isPending: createBlogLoading } = useCreateBlog();
  const { mutateAsync: updateBlog, isPending: updateBlogLoading } = useUpdateBlog();

  const form = useForm<BaseBlog>({
    defaultValues: {
      title: '',
      content: '',
      image: '',
      body: '',
    },
    resolver: yupResolver(blogSchema),
  });

  useEffect(() => {
    if (type === ACTION_ENUM.UPDATE && blog) {
      form.reset({
        ...blog,
        body: typeof blog.body === 'string' ? blog.body : blog.content,
      });
    }
  }, [blog, type]);

  const handleCreateBlog = async (data: BaseBlog) => {
    await createBlog(data);
    navigate(ROUTES.HOME);
  };

  const handleUpdateBlog = async (data: Blog) => {
    await updateBlog(data);
    navigate(ROUTES.HOME);
  };

  const handleSubmitForm = (data: BaseBlog | Blog) => {
    if (type === ACTION_ENUM.CREATE) {
      handleCreateBlog(data);
    } else {
      handleUpdateBlog(data as Blog);
    }
  };

  return (
    <div>
      <FormProvider {...form}>
        <BlogForm
          form={form}
          type={type}
          onSubmit={handleSubmitForm}
          isSubmitting={type === ACTION_ENUM.CREATE ? createBlogLoading : updateBlogLoading}
        />
      </FormProvider>
    </div>
  );
};
