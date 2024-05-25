import { useGetListBlogs } from '@/features/blog';
import { DEFAULT_LIMIT } from '@/shared/constants';
import { useRouter } from '@/shared/hooks';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { SortOptions } from './BlogSortOptions';
import { BlogListView } from './BlogListView';

const getInitialListParams = (key: string) => {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const search = urlSearchParams.get('search');
  const order = urlSearchParams.get('order');
  const page = Number(urlSearchParams.get('page'));
  const limit = Number(urlSearchParams.get('limit'));
  const params = {
    search: search || '',
    order: order || 'desc',
    page: page || 1,
    limit: limit || DEFAULT_LIMIT,
  };
  return params[key as keyof typeof params];
};

export const BlogList = () => {
  const { t } = useTranslation();
  const { query } = useRouter();
  const { search = getInitialListParams('search'), order = getInitialListParams('order') } = query;
  const { data: blogs } = useGetListBlogs({
    sortBy: 'createdAt',
    order: order as 'desc' | 'asc',
    search: search as string,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [query.page, query.search]);

  return (
    <div className='p-4 max-w-4xl mx-auto my-0'>
      <div className='flex items-center justify-between'>
        {query.search && (
          <h2 className='font-semibold text-2xl'>
            {t('searchFor')} "{query.search}""
          </h2>
        )}
        <SortOptions />
      </div>
      {blogs && <BlogListView blogs={Array.isArray(blogs) ? blogs : []} />}
    </div>
  );
};
