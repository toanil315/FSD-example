import { BaseBlog } from '@/entities/blog/types';
import { ACTION_ENUM } from '@/shared/constants';
import { Form, Button } from '@/shared/ui';
import { UseFormReturn } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
interface Props {
  form: UseFormReturn<BaseBlog>;
  type: ACTION_ENUM;
  onSubmit: (data: BaseBlog) => void;
  isSubmitting: boolean;
}

const BlogForm = ({ form, type, onSubmit, isSubmitting }: Props) => {
  const { t } = useTranslation();

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className='max-w-3xl bg-white p-4 border border-gray-300 rounded-lg flex flex-col gap-4 my-4 mx-2 md:!mx-auto shadow-md'
    >
      <h1 className='text-3xl text-center mb-3  font-semibold'>
        {type === ACTION_ENUM.CREATE ? t('createBlog') : t('editBlog')}
      </h1>
      <Form.Input
        label={t('form.blog.title')}
        name='title'
        placeholder={t('form.blog.titlePlaceholder')}
        required
      />
      <Form.Input
        label={t('form.blog.content')}
        name='content'
        placeholder={t('form.blog.contentPlaceholder')}
        required
      />
      <Form.Input
        label={t('form.blog.image')}
        name='image'
        placeholder={t('form.blog.imagePlaceholder')}
        required
      />
      <Form.Editor
        label={t('form.blog.body')}
        name='body'
        placeholder={t('form.blog.bodyPlaceholder')}
        required
      />
      <div className={`user-ctrl flex justify-center mt-4 ${isSubmitting ? 'cursor-wait' : ''}`}>
        <Button className={`px-5 py-2 ${isSubmitting ? 'pointer-events-none opacity-60' : ''}`}>
          {t('form.blog.publish')}
        </Button>
      </div>
    </form>
  );
};

export default BlogForm;
